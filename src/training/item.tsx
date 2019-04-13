import React from 'react'
import { Training } from './data'
// Card
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
// Color
import Theme from '../theme'


const styles = {
  card: {
    width: 345,
    margin: 20,
  },
  description: {
    height: 100,
    marginTop: 10,
  },
  chip: {
    marginLeft: 10,
    marginBottom: 10
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: Theme.palette.secondary.light

  }
};

function TrainingItem({ training, classes }: { training: Training, classes: any }) {
  const topics = training.topics.map((topic, i) => {
    return <Chip className={classes.chip} key={topic + i} label={topic} />
  })
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { training.name }
          </Typography>
          <Typography variant="subtitle1">Level: {training.level}</Typography>
          <Typography className={classes.description} component="p">
            { training.description }
          </Typography>
        </CardContent>
        { topics }
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Button size="small" color="primary">
          Discover
        </Button>
      </CardActions>
    </Card>
  )
}

export default withStyles(styles)(TrainingItem);
