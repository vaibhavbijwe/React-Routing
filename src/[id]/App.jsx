import React from 'react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { data } from 'autoprefixer';

function page(params) {
    const {id} = params;
    const [users , setusers] = useState([])
    const getusers = async () =>{
      const data = await axios.get("https://jsonplaceholder.typicode.com/users")
    }
  
    useEffect(() => {
      getusers
    }, [])
  return (
    <div>page{JSON.stringify(data)}</div> 
  )
}

export default page