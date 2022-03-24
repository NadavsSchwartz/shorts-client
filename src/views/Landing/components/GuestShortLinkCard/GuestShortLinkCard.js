import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';
import { SocialShare } from 'views/Home/components/SocialShare';
import PropTypes from 'prop-types';
import { format } from 'timeago.js';

const GuestShortLinkCard = ({ guestLink }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        height: 'auto',
        width: '85%',
        maxWidth: '700px',
      }}
    >
      <CardContent>
        <Grid container sx={{ justifyContent: 'space-between' }}>
          <Grid item>
            <Typography noWrap color="textPrimary" variant="body4">
              {guestLink && guestLink.longUrl}
            </Typography>
            <Grid
              item
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                width: '250px',
              }}
            >
              <a
                href={guestLink && guestLink.shortUrl}
                style={{ textDecoration: 'none' }}
              >
                <Typography color={theme.palette.primary.dark} variant="body4">
                  <Box component="span" fontWeight="800">
                    {guestLink && guestLink.shortUrl
                      ? guestLink.shortUrl.substring(
                        7,
                        guestLink.shortUrl.length,
                      )
                      : ''}
                  </Box>
                </Typography>
              </a>
            </Grid>
          </Grid>

          <Grid item sx={{ display: { xs: 'none', sm: 'block' } }}>
            Created: {format(guestLink && guestLink.createdAt)}
          </Grid>
        </Grid>

        <Grid container sx={{ justifyContent: 'center' }}>
          <Grid item>
            <Grid item sx={{ pt: 3 }}>
              <SocialShare data={guestLink && guestLink} />
            </Grid>

            <Grid item>
              <Typography color="textPrimary" variant="h6" fontWeight={700}>
                Get the most out of your links
              </Typography>
            </Grid>
            <Grid item sx={{ textAlign: 'center' }}>
              <Typography color="textPrimary" variant="subtitle2">
                Track all your links in one place
              </Typography>
            </Grid>
            <Grid item textAlign="center">
              <Button
                sx={{ mt: 2 }}
                component={'a'}
                href={'/signup'}
                variant="contained"
                color="primary"
                size="large"
                fullWidth={false}
              >
                Sign up free
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
GuestShortLinkCard.propTypes = {
  guestLink: PropTypes.object.isRequired,
};
export default GuestShortLinkCard;
