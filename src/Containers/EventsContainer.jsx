import React, { useEffect } from 'react' 
import { useState } from 'react'
import getEvents from '../NetWorkAPI/getEvents'
import EventsPage from '../pages/events.jsx'

const EventContainer = (props)=>{
    let [events,updateEvents] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            const response = await getEvents()
            updateEvents(response)
          }
        fetchData()
    },[])

    return <>
        <EventsPage events = {events}/>
    </>
}

export default EventContainer