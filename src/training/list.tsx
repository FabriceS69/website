import React from 'react'
import { TRAININGS } from './data'
import TrainingItem from './item'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  cardList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems : 'center',
    flexWrap: 'wrap' as 'wrap',
  }
}

function TrainingList({ classes }: any) {
  const trainings = TRAININGS.map((training, index) => {
    return <TrainingItem key={index} training={training} />
  })
  return <div className={classes.cardList}>{trainings}</div>
}

export default withStyles(styles)(TrainingList);
