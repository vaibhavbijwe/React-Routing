import axios from 'axios'
import React, { useEffect, useState } from 'react'

function App() {
  const [users , setusers] = useState([])
  const getusers = async () =>{
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
    setusers(data)
  }

  useEffect(() => {
    getusers()
  }, [])
  
  return (
    
    <>
    <div>
      <button onClick={getusers} className='bg-yellow-400 px-4 py-3 font-bold text-white mt-5 ml-5 rounded hover:bg-yellow-200 hover:text-black shadow '>Get Data</button>
      <div className='p-8 bg-slate-950 mt-5 text-white shadow-2xl rounded
      '>
        <ul>
          {users.map((e)=>{
            return <li>
              {e.username} --- <a href={'/${e.id}}'}>Explore</a>
            </li>
          })}
        </ul>
      </div>
    </div>
    </>
  )
}

export default App