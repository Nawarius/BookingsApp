const getEvents = () =>{
    const requestBody = {
        query:`
          query{
              events{
                _id
                title
                description
                price
                date
                creator{
                    _id
                }
            }
        }
       `
      }
return fetch('http://localhost:8000/graphql',{
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
    return resData.data.events
}).catch(err=>{
    console.log(err)
})
}

export default getEvents
    
