/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme) => ({
  ...theme.spreadthis
});
class SignUp extends Component {
  render() {
    return (
      <Grid container justify="center" direction="row" alignitem="center">
        <Grid item xs>
          <TextField id="standard-password-input" label="email" type="text" />
          <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password" />
          <Button variant="contained" color="primary">
            Login In
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(SignUp);
