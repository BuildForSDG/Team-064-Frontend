/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import React, { Component, Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core';
import Button from '@material-ui/core/Button';
import history from '../../../history';

const styles = (theme) => ({
  ...theme.spreadthis
});

class login extends Component {
  render() {
    return (
      <Fragment>
        <Grid container judtify="center" direction="row" alignitem="center">
          <Grid item xs>
            <TextField id="standard-password-input" label="email" type="text" autoComplete="current-password" />
            <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password" />
            <Button variant="contained" color="primary">
              Sign In
            </Button>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(login);
