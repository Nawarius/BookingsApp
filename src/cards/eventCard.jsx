import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Modal from '../modal/CreateEventModal.jsx'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    border: '1px solid red'
  }
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
       
        <CardContent>
            <Typography >{props.event.title}</Typography>
            <Typography>{props.event.description}</Typography>
            <Typography >{props.event.price}</Typography>
            <Typography></Typography>
        </CardContent>
      
        <CardActions>
            <Modal />
        </CardActions>
    </Card>
  );
}