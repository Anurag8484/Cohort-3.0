import React, { useContext } from 'react'
import "../AppBar.css"
import { AuthContext } from './AuthSystem'
import Login from './Login'

const AppBar = ({username:propUsername,islog:propIslog,login:propLogin,logout:propLogout}) => {
  const contextValue = useContext(AuthContext)
  console.log(propIslog)
  const displayUsername = contextValue?.username ?? propUsername;
  const displayIsLog = contextValue?.islog ?? propIslog;
  const handleLogout = contextValue?.logout ?? propLogout

  if(displayIsLog){
    return (
      <header>
        <div>ReactState</div>
        <div className='right'>
          <p>Hii {displayUsername} !!</p>
          <button onClick={handleLogout} >Logout</button>
        </div>
      </header>
    )
  }else{
    return(
      <>
      <header>
        <div>ReactState</div>
        <div className='right'>
        </div>
      </header>
      </>
    )
  }
}

export default AppBar