import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Grid, TextareaAutosize, TextField, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  paper: {
    width:'40%',
    height: 'auto',
    backgroundColor: theme.palette.background.paper
  },
  modal:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  },
  inputs:{
    margin: '10px',
    width:'70%'
  },
  area:{
    width:'70%',
    height:'auto'
  },
  btn:{
    margin: '10px'
  }
}));

export default function SimpleModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
  
    <Grid direction="column" justify="center" alignItems="center" item container spacing = {1} className = {classes.paper}  >
        <Typography className = {classes.inputs}>Please, add new event here</Typography>
         <TextField className = {classes.inputs} id="outlined-basic" label="Title" variant="outlined" />
         <TextField className = {classes.inputs} id="outlined-basic" label="Price" variant="outlined" />
         <TextField className = {classes.inputs} id="outlined-basic" label="Date" variant="outlined" />
         <TextareaAutosize rowsMin = {5} className = {classes.area} placeholder="Event description" variant="outlined"></TextareaAutosize>
         <Button className = {classes.btn} variant = 'outlined'>Add Event</Button>
    </Grid>
  );

  return (
    <>
      <Button variant = 'outlined' onClick={handleOpen}>Create New Event</Button>
      <Modal className = {classes.modal} open={open} onClose={handleClose}>{body}</Modal>
    </>
  );
}