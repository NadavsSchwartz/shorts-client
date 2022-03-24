/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch } from 'react-redux';
import { deleteShortLink } from 'store/actions/shortLinkAcionts';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Alert, Button, Grid, Snackbar, Typography } from '@mui/material';
import TrafficByState from '../TrafficByState';
import { EnhancedTableHead, EnhancedTableToolbar } from './components';
import { ReactComponent as IndividualNoLinks } from '../../../../assets/individualNoLinks.svg';
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

//   IE11 support
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const EnhancedTable = ({ AllShortLinks }) => {
  const dispatch = useDispatch();
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('clicks');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [maxSelected, SetMaxSelected] = useState(false);

  const [successCopyUrlMessage, SetSuccessCopyUrlMessage] = useState(false);
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    if (newSelected.length > 1) {
      SetMaxSelected(true);
      return setTimeout(() => {
        SetMaxSelected(false);
      }, 3000);
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const handleDelete = async () => {
    dispatch(deleteShortLink(selected));
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - AllShortLinks.length) : 0;

  const handleCloseCopyMessage = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    SetSuccessCopyUrlMessage(false);
  };
  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      {maxSelected && (
        <Alert severity="warning">Only one link can be selected at once</Alert>
      )}
      <Snackbar
        open={successCopyUrlMessage}
        autoHideDuration={6000}
        onClose={handleCloseCopyMessage}
      >
        <Alert
          onClose={handleCloseCopyMessage}
          severity="success"
          sx={{ width: '100%' }}
        >
          Successfully copied the short url!
        </Alert>
      </Snackbar>
      <Paper sx={{ height: '100%', mb: 2 }}>
        <EnhancedTableToolbar
          numSelected={selected.length}
          handleDelete={handleDelete}
        />
        <TableContainer>
          <Table
            sx={{ minWidth: 750, tableLayout: 'auto' }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={AllShortLinks.length}
            />
            <TableBody>
              {/*for IE11 support  */}
              {stableSort(AllShortLinks, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((Link, index) => {
                  const isItemSelected = isSelected(Link.shortUrl);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={Link.shortUrl}
                      selected={isItemSelected}
                    >
                      <TableCell
                        padding="checkbox"
                        onClick={(event) => handleClick(event, Link.shortUrl)}
                      >
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>

                      <TableCell sx={{ width: '300px' }} align="center">
                        {Link && Link.location.length !== 0 ? (
                          <TrafficByState AllLocations={Link.location} />
                        ) : (
                          <Grid container>
                            <Grid
                              container
                              direction="row"
                              justifyContent="center"
                              alignItems="center"
                            >
                              <IndividualNoLinks />
                            </Grid>
                            <Grid
                              container
                              sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                              }}
                            >
                              <Typography variant="caption">
                                {' '}
                                Analytics appear after links are visited
                              </Typography>
                            </Grid>
                          </Grid>
                        )}
                      </TableCell>
                      <TableCell
                        sx={{ display: { xs: 'none', md: 'table-cell' } }}
                        align="center"
                      >
                        {Link.createdAt.substring(0, 10)}
                      </TableCell>
                      <TableCell align="center">{Link.totalClicks}</TableCell>
                      <TableCell align="center">
                        <Button
                          onClick={() =>
                            navigator.clipboard
                              .writeText(Link.shortUrl)
                              .then(() =>
                                SetSuccessCopyUrlMessage(
                                  !successCopyUrlMessage,
                                ),
                              )
                          }
                        >
                          {Link.shortUrl}
                          <ContentCopyIcon />
                        </Button>
                      </TableCell>
                      <TableCell
                        sx={{ display: { xs: 'none', md: 'table-cell' } }}
                      >
                        {' '}
                        <Typography
                          noWrap
                          sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            maxWidth: '300px',
                          }}
                        >
                          {Link && Link.longUrl}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={AllShortLinks.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};
export default EnhancedTable;
