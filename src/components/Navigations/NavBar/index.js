/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React from 'react';

// MUI Stuff
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import withStyles from '@material-ui/core/styles/withStyles';

// import NavigationItem from '../NavigationItem';
import classes from './style.css';

const styles = (theme) => ({
  ...theme.spreadthis,
  root: {
    color: 'green',
    margin: '0 0 300px 0'
  }
});

const Index = (props) => (
  <AppBar position="static" className={classes.root}>
    <Toolbar>
      <Grid container justify="space-between">
        <Grid>
          <Typography variant="h6" className={classes.title}>
            Cleaner City
          </Typography>
        </Grid>
        <Grid>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Index);
