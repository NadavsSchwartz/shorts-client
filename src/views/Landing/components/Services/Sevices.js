/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

const mock = [
  {
    title: 'Anonimity First.',
    subtitle: `On top of making your life easier, We dont collect any data about you, or your activity, and we don't sell or share data any data about you.  `,
    icon: (
      <svg
        version="1.1"
        baseProfile="tiny"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="40px"
        height="40px"
        viewBox="0 0 24 24"
        overflow="visible"
        xmlSpace="preserve"
      >
        <g>
          <g transform="translate(4.000000, 1.000000)">
            <path
              fill="#85A4E6"
              d="M8,0l-9,4v6c0,5.6,3.8,10.7,9,12c5.2-1.3,9-6.4,9-12V4L8,0z M8,11h7c-0.5,4.1-3.3,7.8-7,8.9V11l-7,0V5.3
			l7-3.1V11z"
            />
            <path
              fill="#5C85DE"
              d="M8,0v22c5.2-1.3,9-6.4,9-12V4L8,0z M15,11c-0.5,4.1-3.3,7.8-7,8.9V11L15,11z"
            />
            <path
              fillRule="evenodd"
              fill="#3367D6"
              d="M17,11h-2c0,0,0,0.3-0.1,0.6L17,11z"
            />
            <polygon
              fillRule="evenodd"
              fill="#3367D6"
              points="-1,11 1,11 1,10.4 		"
            />
          </g>
        </g>
      </svg>
    ),
  },
  {
    title: 'Modern Design',
    subtitle:
      'Designed with the latest design trends in mind. Shorts feels modern, minimal, and beautiful.',
    icon: (
      <svg
        height={40}
        width={40}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    title: 'Always free',
    subtitle: `Shorts is and will always be free. you can shorten up to 30 links a day as guest, or up to 100 a day as a registered user.`,
    icon: (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 392.502 392.502"
        style={{ enableBackground: 'new 0 0 392.502 392.502' }}
      >
        <path
          style={{ fill: '#194F82' }}
          d="M381.77,173.883h-24.76c-10.343-30.061-32.905-56.307-63.418-73.697
	c-1.422-44.8-38.141-80.873-83.394-80.873c-44.218,0-80.356,34.586-83.135,78.093c-24.436,12.735-43.895,30.707-56.889,51.717
	c-8.339-4.848-17.842-7.564-27.798-7.564c-14.869,0-28.768,5.818-39.176,16.226c-4.267,4.267-4.267,11.119,0,15.321
	c4.267,4.267,11.119,4.267,15.321,0c6.4-6.4,14.869-9.891,23.855-9.891c6.465,0,12.606,1.939,18.036,5.301
	c-5.43,13.705-8.339,28.251-8.339,43.184c0,40.598,20.687,77.964,57.018,103.499v47.192c0,5.948,4.848,10.796,10.796,10.796h50.23
	c5.947,0,10.796-4.848,10.796-10.796v-18.941c19.329,2.844,39.111,2.651,58.57-0.905v19.846c0,5.948,4.848,10.796,10.796,10.796
	h50.23c5.947,0,10.796-4.848,10.796-10.796v-50.941c21.527-16.614,37.43-38.141,45.576-61.802h24.824
	c5.947,0,10.796-4.848,10.796-10.796v-54.109C392.566,178.796,387.717,173.883,381.77,173.883z M210.263,40.97
	c34.069,0,61.802,27.733,61.802,61.802c0,13.576-4.461,26.764-12.671,37.495h-98.263c-8.21-10.731-12.671-23.855-12.671-37.495
	C148.461,68.639,176.194,40.97,210.263,40.97z M370.844,227.992h-21.85c-4.978,0-9.18,3.297-10.537,8.016
	c-6.271,23.596-21.915,45.253-44.218,61.091c-2.844,2.004-4.59,5.301-4.59,8.792v45.64h-28.574v-22.497
	c-0.453-7.758-6.594-11.895-13.576-10.537c-24.824,6.465-50.683,6.788-75.119,1.228c-6.982-1.293-12.735,3.426-13.188,10.602v21.204
	h-28.574v-42.085c0-3.685-1.875-7.111-4.913-9.115c-36.267-25.6-55.467-58.053-51.394-99.749
	c3.814-31.677,23.725-60.638,54.497-79.451c1.487,6.659,3.879,12.994,6.853,19.006h-3.556c-5.947,0-10.796,4.848-10.796,10.796
	c0,5.947,4.848,10.796,10.796,10.796h156.121c5.947,0,10.796-4.848,10.796-10.796c0-5.947-4.848-10.796-10.796-10.796h-3.62
	c2.651-5.172,4.784-10.537,6.271-16.162c23.855,15.903,40.986,38.4,47.58,63.354c1.228,4.784,5.56,8.016,10.537,8.016h21.85V227.992
	L370.844,227.992z"
        />
        <path
          style={{ fill: '#FFF' }}
          d="M74.44,200.647c-4.073,41.826,15.127,74.214,51.394,99.749c3.103,2.004,4.913,5.43,4.913,9.115
	v42.085h28.574v-21.204c0.453-7.111,6.335-11.895,13.188-10.602c24.372,5.56,50.23,5.236,75.119-1.228
	c7.046-1.487,13.059,2.78,13.576,10.537v22.497h28.574v-45.64c0-3.491,1.681-6.788,4.59-8.792
	c22.238-15.838,37.947-37.56,44.218-61.091c1.228-4.784,5.56-8.016,10.537-8.016h21.85v-32.453h-21.85
	c-4.978,0-9.18-3.297-10.537-8.016c-6.659-25.018-23.725-47.451-47.58-63.354c-1.487,5.56-3.62,10.99-6.271,16.162h3.62
	c5.947,0,10.796,4.848,10.796,10.796c0,5.947-4.848,10.796-10.796,10.796H132.299c-5.947,0-10.796-4.848-10.796-10.796
	c0-5.947,4.848-10.796,10.796-10.796h3.556c-3.038-6.012-5.43-12.412-6.853-19.006C98.166,140.008,78.255,168.97,74.44,200.647z"
        />
        <path
          style={{ fill: '#FFC10D' }}
          d="M148.461,102.707c0,13.576,4.461,26.764,12.671,37.495h98.263
	c8.21-10.731,12.671-23.855,12.671-37.495c0-34.069-27.733-61.802-61.802-61.802C176.194,40.97,148.461,68.639,148.461,102.707z"
        />
        <path
          style={{ fill: '#56ACE0' }}
          d="M317.64,192.889c-3.426-12.929-10.602-25.018-20.493-35.556c-1.939,2.78-5.172,4.59-8.792,4.59
	H132.234c-5.107,0-9.374-3.491-10.537-8.275c-13.77,13.317-22.691,29.543-25.406,46.804h57.018c5.43,0,10.408,3.685,11.313,9.051
	c1.099,6.788-4.073,12.671-10.667,12.671l-57.729,0.129c1.164,7.564,3.491,14.933,6.853,21.915h29.026
	c5.43,0,10.408,3.685,11.313,9.051c1.099,6.788-4.073,12.671-10.667,12.671h-14.545c35.491,38.271,118.238,45.123,163.685,13.382
	c18.166-12.929,30.836-30.319,35.749-49.002l0,0C320.873,218.101,320.873,205.172,317.64,192.889z"
        />
        <circle
          style={{ fill: '#194F82', cx: '282.925', cy: '185.713', r: '15.451' }}
        />
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
    ),
  },
];

const Services = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Box marginBottom={2}>
          <Typography
            variant="h4"
            color="text.primary"
            align={'center'}
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Shorts is here for you, and your audience.
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
            align={'center'}
          >
            With Shorts you can transform long, ugly links into nice, memorable
            and trackable short URLs
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box width={1} height={1}>
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <Box
                  component={Avatar}
                  width={60}
                  height={60}
                  marginBottom={2}
                  bgcolor={alpha(theme.palette.primary.main, 0.1)}
                  color={theme.palette.primary.main}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant={'h6'}
                  gutterBottom
                  sx={{ fontWeight: 500 }}
                  align={'center'}
                >
                  {item.title}
                </Typography>
                <Typography align={'center'} color="text.secondary">
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
