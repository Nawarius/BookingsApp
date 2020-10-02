import React, { useState } from 'react';
import RegComponent from '../pages/registration.jsx'


const AuthContainer = (props)=>{
  let [email,setEmail] = useState('')
  let [password,setPassword] = useState('')
  let [firstName,setfirstName] = useState('')
  let [lastName,setlastName] = useState('')

  

  const submitHandler = (events)=>{
    events.preventDefault()
    if(email.trim().length === 0 || password.trim().length === 0){
      return
    }
    const requestBody = {
      query:`
        mutation{
          createUser(Input:{email:"${email}", password:"${password}", firstName:"${firstName}", lastName:"${lastName}"}){
            _id
            email
            password
            firstName
            lastName
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
    }).then(res=>{
      if(res.status !== 200 && res.status !== 201){
        throw new Error("Failed")
      }
      return res.json()
    }).then(resData=>{
      console.log(resData)
    }).catch(err=>{
      console.log(err)
    })
  }
  const changeHandle = (event) =>{
    
    switch(event.target.name){
      case 'email':
        setEmail(event.target.value)
        break
      case 'password':
        setPassword(event.target.value)
        break
      case 'firstName':
        setfirstName(event.target.value)
        break
      case 'lastName':
        setlastName(event.target.value)
        break
      default:
        break
    }
  }
  
  

  let newProps = {...props, submitHandler, changeHandle}
  return <>
    <RegComponent {...newProps}/>
  </>
}

export default AuthContainer;

