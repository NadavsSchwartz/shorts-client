import React, { useEffect, useState } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { GetStarted, Features, Services, Hero, QuickStart } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Alert, CircularProgress, Grid } from '@mui/material';
import GuestShortLinkCard from './components/GuestShortLinkCard/GuestShortLinkCard';

const Landing = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [showAlert, SetShowAlert] = useState(false);
  const userDetails = useSelector((state) => state.userDetails);
  const { loading: userLoading, user, authenticated } = userDetails;
  const guestLinks = useSelector((state) => state.guestLinks);
  const { loading, error, guestLink } = guestLinks;
  const navigate = useNavigate();
  useEffect(() => {
    if (!userLoading && authenticated && user.email) navigate('/home');
    if (error !== null) {
      SetShowAlert(true);
      setTimeout(() => {
        SetShowAlert(false);
        dispatch({ type: 'RESET_ERROR_MESSAGE' });
      }, 5000);
    }
  }, [error]);
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Main>
        {showAlert && (
          <Alert severity="error">
            {error.message ? error.message : error}
          </Alert>
        )}
        {loading && (
          <CircularProgress
            sx={{
              margin: 'auto',
              left: '0',
              right: '0',
              top: '0',
              bottom: '0',
              position: 'fixed',
            }}
          />
        )}

        <Hero />
        {guestLink && Object.keys(guestLink).length !== 0 ? (
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
            sx={{
              position: 'relative',
              mt: -12,
              ml: 0,
              width: '100%',
              zIndex: 1,
            }}
          >
            <GuestShortLinkCard guestLink={guestLink && guestLink} />
          </Grid>
        ) : (
          ''
        )}

        <Container>
          <Services />
        </Container>
        <Box
          sx={{
            backgroundImage: `linear-gradient(to bottom, ${alpha(
              theme.palette.background.paper,
              0,
            )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
            backgroundRepeat: 'repeat-x',
            position: 'relative',
          }}
        >
          <Container>
            <Features />
          </Container>
          <Container>
            <QuickStart />
          </Container>
          <Box
            component={'svg'}
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 1920 100.1"
            sx={{
              width: '100%',
              marginBottom: theme.spacing(-1),
            }}
          >
            <path
              fill={theme.palette.background.paper}
              d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
            ></path>
          </Box>
        </Box>
        <Container>
          <GetStarted />
        </Container>
      </Main>
    </Box>
  );
};

export default Landing;
