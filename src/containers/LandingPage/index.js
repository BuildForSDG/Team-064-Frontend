/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import React, { Component, Fragment } from 'react';
// MUI STUFF
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import history from '../../history';
import classes from './styles.css';

const styles = (theme) => ({
  ...theme.spreadthis
});

class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <Grid container direction="row" justify="center" alignItems="center" spacing={2} className={classes.wrapper}>
          <Grid item className={classes.columnWrapper}>
            <Typography className={classes.heading}>
              support the cleaning of a community{' '}
              <Button variant="contained" color="primary">
                donate
              </Button>
            </Typography>
          </Grid>
          <Grid>
            <Grid item xs className={classes.columnWrapper}>
              <Typography>customer | Agent</Typography>
              <TextField id="email" label="email" type="text" className={classes.input} />
              <TextField
                id="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                className={classes.input}
              />
              <Button variant="contained" color="primary" className={classes.button}>
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(LandingPage);
