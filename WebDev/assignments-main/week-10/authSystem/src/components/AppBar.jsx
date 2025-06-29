import React from 'react'
import "../AppBar.css"
const AppBar = ({username,logout}) => {
  return (
    <header>
      <div>ReactState</div>
      <div className='right'>
        <p>Hii {username} !!</p>
        <button onClick={logout} >Logout</button>
      </div>
    </header>
  )
}

export default AppBar