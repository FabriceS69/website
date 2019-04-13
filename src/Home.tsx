import React from 'react';
import TrainingList from './training/list';
import './Home.css';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core';

const styles = {
  heading: {
    margin: 30
  }
}

function Home({ classes }: any) {
  return (
    <main>
      <section className="header">
        <Typography variant="h2" gutterBottom>
          Dapps Nation
        </Typography>
        <Typography variant="h5">
          Blockchain Developers Trainings in Lyon
        </Typography>
        <Button variant="contained" color="primary">Check our trainings</Button>
      </section>
      <section>
        <Typography className={classes.heading} variant="h2" gutterBottom>
          Our Trainings
        </Typography>
        <TrainingList />
      </section>
    </main>
  )
}

export default withStyles(styles)(Home)
