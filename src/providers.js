/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
<<<<<<< HEAD
/* eslint-disable class-methods-use-this */
=======
>>>>>>> ba4f362765dba8c4d40f212c33ce1e67d2549694
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import Routes from './routes';
import store from './store';
<<<<<<< HEAD
// import './theming.css'
=======
>>>>>>> ba4f362765dba8c4d40f212c33ce1e67d2549694

import themeFile from './utils/theme';

const theme = createMuiTheme(themeFile);

// Wrap all your providers should be here

export default () => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Routes />
    </Provider>
  </MuiThemeProvider>
);
