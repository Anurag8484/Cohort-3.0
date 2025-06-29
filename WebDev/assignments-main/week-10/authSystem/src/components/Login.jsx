import React, { useState,useContext } from 'react'
import "../login.css"
import { AuthContext } from "./AuthSystem";

const Login = ({Onlogin: propOnLogin}) => {
  
  const contextValue = useContext(AuthContext)
  function handleLogin(){
    if(contextValue?.login){
      contextValue.login();
    }else if (propOnLogin) {
      propOnLogin()
      }
  }


    return (
      <>
        <section>
          <div className="main1">
            <h2>Welcome to the AuthSystem Demo</h2>
            <p>Click on the Login button:</p>
            <ul>
              <button onClick={handleLogin}  className="loginbtn">
                Login
              </button>
            </ul>
          </div>
        </section>
      </>
    );

  }

export default Login