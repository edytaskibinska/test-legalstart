import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import { APP_DOM_CONTAINER } from './config';

import ThemeProvider from './providers';
import MainView from './views/main';

ReactDOM.render(
  <ThemeProvider>
    <MainView />
  </ThemeProvider>,
  document.getElementById( APP_DOM_CONTAINER ),
);
