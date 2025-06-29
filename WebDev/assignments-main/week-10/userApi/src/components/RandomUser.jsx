import React, { useEffect, useState } from 'react'
import "../randomUser.css"
import axios from 'axios'

const RandomUser = () => {
  const  [user,setUser] = useState([]);

  const [pageCount, setPageCount] = useState(0)
  const [loading,setLoading] = useState(true)
  async function loadUsers(){
    setLoading(true)
    const res = await axios.get(`https://randomuser.me/api?page=${pageCount}`);
    setUser((prevUser) => [
      ...prevUser,
     { firstName:res.data.results[0].name.first,
      lastName:res.data.results[0].name.last,
      thumbnail:res.data.results[0].picture.thumbnail}
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
          Load More users
        </button>
      </header>
      <section>
        <div className="main">
          {loading ? (
            <h4>Loading...</h4>
          ) : (
            user.map((u, index) => (
              <div key={index} className="userCard">
            <div className="thumb">
              <img src={u.thumbnail} alt="" />
            </div>
            <div className="details">
              <h4>
                {u.firstName} {u.lastName}
              </h4>
            </div>
              </div>
            ))
          )}
      
        </div>
      </section>
    </>
  );
}

export default RandomUser