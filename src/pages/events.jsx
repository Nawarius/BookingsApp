import { Container, makeStyles, Grid } from '@material-ui/core'
import React from 'react'
import EventCard from '../cards/eventCard.jsx'
import CreateEventModal from '../modal/CreateEventModal'

const useStyles = makeStyles((theme)=>({
    eventModal:{
        border: '2px solid red',
        height:'200px'
    }
}))


const Events = (props)=>{
    const classes = useStyles()
    
    let eventCard = []
    if(props.events){
        eventCard = props.events.map((item,index,array)=>{
            return <EventCard event = {item}/>
        })
    }
    return <>
        <Container>
            
            <Grid className = {classes.eventModal} container direction="column" justify="center" alignItems="center"><CreateEventModal /></Grid>
            {eventCard}
        </Container>
    </>
}

export default Events