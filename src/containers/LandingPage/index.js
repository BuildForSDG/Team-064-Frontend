/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import React, { Component, Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import history from '../../history';

const styles = (theme) => ({
  ...theme.spreadthis
});

export class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <div>This is Landing Page</div>
        <button onClick={() => history.push('/sign-in')}>Sign in</button>
      </Fragment>
    );
  }
}

export default withStyles(styles)(LandingPage);
