import React, { useEffect, useState } from 'react'
import "../randomUser.css"
import axios from 'axios'

const RandomUser = () => {
  const  [user,setUser] = useState([]);

  const [pageCount, setPageCount] = useState(0)
  const [loading,setLoading] = useState(true)
  async function loadUsers(){
    setLoading(true)
    const res = await axios.get(
      `https://randomuser.me/api?page=${pageCount}&results=5`
    );
    setUser((prevUser) => [
      ...prevUser, ...res.data.results
    ]);
    setLoading(false)
    
  }


  useEffect(()=>{
    loadUsers();
  },[pageCount])






  return (
    <>
      <header>
        <div className="left">Hey Lets Know New People</div>
            <button onClick={() => setPageCount((c) => c + 1)}>
        {loading ? (
            <h4>Loading...</h4>
          ) : (
          <p>Load More users</p>
        )}
        </button>
      </header>
      <section>
        <div className="main">
          {user.map((u, index) => (
            <div key={index} className="userCard">
          <div className="thumb">
            <img src={u.picture.thumbnail} alt="" />
          </div>
          <div className="details">
            <h4>
              {u.name.first} {u.name.last}
            </h4>
          </div>
            </div>
          ))}
          
      
        </div>
      </section>
    </>
  );
}

export default RandomUser