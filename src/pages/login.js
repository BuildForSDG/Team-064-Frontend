import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme) => ({
  ...theme.spreadthis
});

export class login extends Component {
  render() {
    return <div>Hello world</div>;
  }
}

export default withStyles(styles)(login);
