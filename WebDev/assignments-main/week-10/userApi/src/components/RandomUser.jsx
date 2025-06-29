import React, { useEffect, useState } from 'react'
import "../randomUser.css"
import axios from 'axios'

const RandomUser = () => {
  const  [user,setUser] = useState([])
  const [pageCount, setPageCount] = useState(0)

  async function loadUsers(){
    const res = await axios.get(`https://randomuser.me/api?page=${pageCount}`);
    
  }


  useEffect(()=>{

    const res = axios


  },[pageCount])




  return (
    <div>RandomUser</div>
  )
}

export default RandomUser