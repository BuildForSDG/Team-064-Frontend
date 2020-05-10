/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import React, { Component, Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import history from '../../history';

const styles = (theme) => ({
  ...theme.spreadthis
});

export class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <Grid container direction="column">
          <Grid>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt eveniet, magni earum dicta eius fugiat,
            veritatis dolorem eligendi neque debitis repellat ullam. Eum, quos ipsum. Aperiam dicta minima vitae ut!
          </Grid>
          <Grid>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, minus. Tempora, quod quis! Excepturi totam,
            aliquid expedita sint, mollitia nulla corrupti minima, ea harum quasi numquam dignissimos optio voluptas
            sequi!
          </Grid>
          <Grid>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur qui ipsum cupiditate vitae enim earum
            exercitationem, ex totam quibusdam cum sed aspernatur voluptas beatae atque inventore aliquam, explicabo
            porro provident.
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(LandingPage);
