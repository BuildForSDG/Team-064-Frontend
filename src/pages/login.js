import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme) => ({
  ...theme.spreadthis
});

export class login extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return <div>Hello world</div>;
  }
}

export default withStyles(styles)(login);
