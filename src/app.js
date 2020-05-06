// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { Provider } from 'react-redux';

// MUI(Material ui) Stuff
// eslint-disable-next-line no-unused-vars
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themeFile from './utils/theme';

import store from './redux/store';
// eslint-disable-next-line import/no-named-as-default
import login from './pages/login';

const theme = createMuiTheme(themeFile);

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={login} />
        </Switch>
      </Router>
    </Provider>
  </MuiThemeProvider>
);

export default App;
