/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme) => ({
  ...theme.spreadthis
});
class SignUp extends Component {
  render() {
    return (
      <Grid container justify="center" direction="row" alignitem="center" className="wrapper">
        <Grid item xs>
          <TextField id="companyname" label="Email" type="text" />
          <TextField id="address" label="Address" type="text" />
          <TextField id="country" label="Country" type="text" />
          <TextField id="phonenumber" label="Phone Number" type="number" />
          <TextField id="email" label="Email" type="email" />
          <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password" />
          <Button variant="contained" color="primary">
            Login In
            <CircularProgress size={20} />
          </Button>
          <Typography>
            forgot password? <Link href="#">click here</Link>
          </Typography>
          <Typography>
            Not a member sign up<Link href="#">here</Link>
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(SignUp);
