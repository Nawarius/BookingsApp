import React, { useContext }  from 'react';
import {Button, IconButton, Box } from '@material-ui/core'
import {Container,Toolbar,AppBar} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {NavLink} from 'react-router-dom'
import CustomMenuButton from '../Containers/MenuButton.jsx'
import AuthContext from '../context/auth-context.jsx'


const useStyles = makeStyles(theme=>({
  root:{
    flexGrow:1
  },
  menuButton:{
    marginRight:theme.spacing(1)
  },
  title:{
    flexGrow:1,
    color:'inherit',
    textDecoration:'none',
    variant:'h6'
  }
}))


const MainContainer = (props) => {
  const classes = useStyles()
  const {token,setToken} = useContext(AuthContext)
  return <>
            <AppBar position = "static">
            <Container fixed>
                <Toolbar>
                  <IconButton edge = "start"  color = "inherit" aria-label = 'menu' className = {classes.menuButton}>
                    <CustomMenuButton />
                  </IconButton>
                  <NavLink className = {classes.title} to = '/' >Booking service</NavLink>
          
                  {!token && 
                    <>
                    <Box mr = {2}>
                      <NavLink to = '/auth'>
                        <Button color = 'secondary' variant = 'outlined'>Log In</Button>
                      </NavLink>
                    </Box>
                      <NavLink to = '/reg'>
                        <Button color = 'secondary' variant = 'outlined'>Sign up</Button>
                        </NavLink>
                    </>}
                  {token && 
                    <>
                      <Button color = 'secondary' variant = 'outlined' onClick = {()=>{setToken(null)}}>Log out</Button>
                    </>}
                </Toolbar>
            </Container>
          </AppBar>
</> 
}

export default MainContainer

