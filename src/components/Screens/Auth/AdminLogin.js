/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import Grid, { Typography, Link } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme) => ({
  ...theme.spreadthis
});
class AdminLogin extends Component {
  render() {
    return (
      <Grid container justify="center" alignitems="center">
        <Grid item xs>
          <TextField id="standard-password-input" label="email" type="text" />
          <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password" />
          <Button variant="contained" color="primary">
            Sign Up
          </Button>
          <Typography>
            forgot password? <Link href="#">click here</Link>
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(AdminLogin);
