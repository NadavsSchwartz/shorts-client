import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'Routes';
import Page from 'components/Page';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-lightbox/style.css';
import 'aos/dist/aos.css';
import { CircularProgress } from '@mui/material';
import { Provider } from 'react-redux';
import store from './store';
import { hydrate, render } from 'react-dom';

const APP = (
  <BrowserRouter>
    <Provider store={store}>
      <Suspense
        fallback={
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
        }
      >
        <Page>
          <Routes />
        </Page>
      </Suspense>
    </Provider>
  </BrowserRouter>
);
const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(APP, rootElement);
} else {
  render(APP, rootElement);
}
