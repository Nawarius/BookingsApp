import React, { useContext, useState } from 'react';
import authContext from '../context/auth-context.jsx';
import AuthComponent from '../pages/auth.jsx'


const AuthContainer = (props)=>{
  let [email,setEmail] = useState('')
  let [password,setPassword] = useState('')
  let {setToken} = useContext(authContext)
  

  const submitHandler = (events)=>{
    events.preventDefault()
  
    if(email.trim().length === 0 || password.trim().length === 0){
      return
    }
    const requestBody = {
      query:`
        query{
          login(email:"${email}", password:"${password}"){
            userId
            token
            tokenExpiration
          }
        }
     `
    }
    fetch('http://localhost:8000/graphql',{
        method:'POST',
        body:JSON.stringify(requestBody),
        headers:{
          'Content-Type':'application/json'
        }
  }).then((res)=>{
    if(res.status !== 200 && res.status !== 201){
      throw new Error("Failed")
    }
    return res.json()
  }).then(resData=>{
    setToken(resData.data.login.token)
  }).catch(err=>{
    console.log(err)
  })
    console.log(email,password)
  }
  const changeHandle = (event) =>{
    switch(event.target.name){
      case 'email':
        setEmail(event.target.value)
        break
      case 'password':
        setPassword(event.target.value)
        break
      default:
        break
    }
  }
  
  
  

  let newProps = {...props, submitHandler, changeHandle}
  return <>
    <AuthComponent {...newProps}/>
  </>
}

export default AuthContainer;

