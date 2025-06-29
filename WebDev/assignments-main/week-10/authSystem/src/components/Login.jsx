import React, { useContext } from 'react'
import "../login.css"
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const {userlog,login} = useContext(AuthContext)

  if(!userlog){
    return (
      <>
        <section>
          <div className="main">
            <h2>Welcome to the AuthSystem Demo</h2>
            <p>Click on the Login button:</p>
            <ul>
              <button onClick={login}  className="loginbtn">
                Login
              </button>
            </ul>
          </div>
        </section>
      </>
    );

  }else{
    return(
      ""
    )
  }

}

export default Login