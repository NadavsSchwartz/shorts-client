import React, { useState } from 'react';

import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';

import {
  Alert,
  Button,
  CircularProgress,
  InputBase,
  Paper,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import {
  guestCreateShortLink,
  userCreateShortLink,
} from 'store/actions/shortLinkAcionts';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';

const ShortLinkForm = ({ isLandingPage }) => {
  const userDetails = useSelector((state) => state.userDetails);
  const { user, authenticated } = userDetails;
  const guestLinks = useSelector((state) => state.guestLinks);
  const { loading } = guestLinks;
  const dispatch = useDispatch();
  const [url, SetUrl] = useState('');

  const [error, SetError] = useState('');

  const handleUrlChange = (textFieldInput) => {
    SetUrl(textFieldInput.target.value);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    //clean error if exists before
    SetError('');

    // clean state if link was created before (for guest link creation)
    dispatch({ type: 'GUEST_LINK_RESET' });

    //run simple regex url validation
    const urlRegex =
      /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;

    //checks if input long url matches the regex validation of url
    const result = url.match(urlRegex);

    if (result === null) {
      SetError(`It looks like an invalid url. Please double check your input
            and try again.`);
      return setTimeout(() => {
        SetError('');
      }, 4000);
    }

    if (user.email && authenticated) return dispatch(userCreateShortLink(url));

    dispatch(guestCreateShortLink(url));

    console.log(error);
    SetUrl('');
  };
  return (
    <Box>
      {error && (
        <Alert
          severity="error"
          sx={{
            width: isLandingPage
              ? { xs: '350px', sm: '400px', md: '450px' }
              : null,
          }}
        >
          {error}
        </Alert>
      )}
      {loading ? (
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
      ) : (
        <Paper
          component="form"
          sx={{
            p: '2px 2px 0 4px',
            display: 'flex',
            alignItems: 'center',
            width: isLandingPage
              ? { xs: '350px', sm: '400px', md: '450px' }
              : null,
          }}
          onSubmit={handleSubmitForm}
        >
          <InputBase
            autoComplete="on"
            sx={{ ml: 1, flex: 1 }}
            placeholder="Long link to shorten..."
            name="url"
            value={url}
            required
            type="text"
            size="large"
            autoFocus={true}
            onChange={handleUrlChange}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <Button color="primary" sx={{ p: '10px' }} type="submit">
            <SendIcon fontSize="large" />
          </Button>
        </Paper>
      )}
    </Box>
  );
};
ShortLinkForm.propTypes = {
  isLandingPage: PropTypes.bool,
};
export default ShortLinkForm;
