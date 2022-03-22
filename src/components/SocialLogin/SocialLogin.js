/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import PropTypes from 'prop-types';
import { ReactComponent as TwitterLogo } from '../../assets/twitterLogo.svg';
import GitHubIcon from '../../assets/GitHub.png';
import { SocialAuth } from 'store/actions/userActions';
import { connect, useDispatch } from 'react-redux';
const SocialLogin = ({ Header, Subtitle }) => {
  const dispatch = useDispatch();

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
          }}
        >
          {Header}
        </Typography>
      </Box>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'text.secondary'}
        >
          {Subtitle}
        </Typography>
      </div>
      <div
        onClick={() => dispatch(SocialAuth('GoogleAuth'))}
        style={{ margin: '10px 0 20px 0' }}
      >
        <Button
          variant="contained"
          color="primary"
          target="blank"
          size="large"
          fullWidth
        >
          <img
            width={20}
            height={18}
            style={{ marginRight: '10px' }}
            src="//d1ayxb9ooonjts.cloudfront.net/518ec586a1814c0216f44b4844b86f5e.svg"
            alt="Google Logo"
          />
          {'  '}
          <span style={{ marginTop: '1px' }}>Google</span>
        </Button>
      </div>
      <Divider>OR</Divider>
      <div
        onClick={() => dispatch(SocialAuth('TwitterAuth'))}
        style={{ margin: '10px 0 20px 0' }}
      >
        <Button
          variant="contained"
          color="primary"
          target="blank"
          size="large"
          fullWidth
        >
          <TwitterLogo style={{ marginRight: '10px' }} />
          <span style={{ marginTop: '1px' }}>Twitter</span>
        </Button>
      </div>
      <Divider>OR</Divider>
      <div
        onClick={() => dispatch(SocialAuth('GithubAuth'))}
        style={{ margin: '10px 0 20px 0' }}
      >
        <Button
          variant="contained"
          color="primary"
          target="blank"
          size="large"
          fullWidth
        >
          <img
            width={21}
            height={20}
            style={{ marginRight: '10px' }}
            src={GitHubIcon}
            alt="Github Logo"
          />
          {'  '}
          <span style={{ marginTop: '1px' }}>Github</span>
        </Button>
      </div>
    </Box>
  );
};

SocialLogin.propTypes = {
  Header: PropTypes.string.isRequired,
  Subtitle: PropTypes.string.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  SocialAuth: (strategy) => dispatch(SocialAuth(strategy)),
});
export default connect(mapDispatchToProps)(SocialLogin);
