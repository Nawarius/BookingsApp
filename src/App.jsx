import React, { useState } from 'react';
import './App.css';
import Navbar from './pages/main.jsx'
import AuthContainer from './Containers/AuthContainer.jsx'
import RegComponent from './Containers/RegistrationContainer.jsx'
import EventsComponent from './Containers/EventsContainer.jsx'
import BookingComponent from './pages/bookings.jsx'
import AuthContext from './context/auth-context.jsx'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import { Typography } from '@material-ui/core'



const App = (props)=>{
  let [token, setToken] = useState(null)
  return <>
    <BrowserRouter>
      <AuthContext.Provider value = {{token, setToken, tokenExpiration:null}}>
          <Navbar />
          <Switch>
            <Route path = '/' exact><Typography>Main mage</Typography></Route>
            <Route path = '/auth' ><AuthContainer /></Route>
            <Route path = '/reg' ><RegComponent /></Route>
            <Route path = '/events' ><EventsComponent /></Route>
            {token?<Route path = '/booking' ><BookingComponent /></Route>:<Redirect to = '/auth' />}
          </Switch>
      </AuthContext.Provider>
    </BrowserRouter>
  </>
}

export default App;

