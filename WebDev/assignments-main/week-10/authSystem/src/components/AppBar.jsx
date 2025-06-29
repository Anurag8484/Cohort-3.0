import React, { useContext } from 'react'
import "../AppBar.css"
import { AuthContext } from '../context/AuthContext'
import Login from './Login'
// const AppBar = ({username,logout}) => {
//   return (
//     <header>
//       <div>ReactState</div>
//       <div className='right'>
//         <p>Hii {username} !!</p>
//         <button onClick={logout} >Logout</button>
//       </div>
//     </header>
//   )
// }
const AppBar = () => {
  const {user,logout,userlog,login} = useContext(AuthContext)
  if(userlog){
    return (
      <header>
        <div>ReactState</div>
        <div className='right'>
          <p>Hii {user.name} !!</p>
          <button onClick={logout} >Logout</button>
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
      <Login/>
      </>
    )
  }
}

export default AppBar