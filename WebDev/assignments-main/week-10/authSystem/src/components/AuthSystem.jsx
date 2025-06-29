import React from 'react'
import Home from './Home'
import Login from './Login'
import AppBar from './AppBar'
import { createContext,useState,useContext } from 'react'

export const AuthContext = createContext(undefined);

function AuthSystem(){
  const [useContextApi, setUseContextApi] = useState(false);
  const [username, setUser] = useState("Anurag");
  const [islog, setIslog] = useState(false);

  function login() {
    setIslog(true);
  }
  function logout() {
    setIslog(false);
  }

  const contextValue = useContextApi ? {username,islog,login,logout} : undefined

  return (
    <AuthContext.Provider value={contextValue}>
      <AppBar username={username} islog={islog} login={login} logout={logout} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: "1rem",
          backgroundColor: "#f0f0f0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <input
            id="use-context-api"
            type="checkbox"
            checked={useContextApi}
            onChange={(e) => setUseContextApi(e.target.checked)}
          />
          <label htmlFor="use-context-api">
            Use Context API: {useContextApi ? "On" : "Off"}
          </label>
        </div>
      </div>
    
        {islog ? (
          <Home />
        ): (<Login Onlogin={login} />)}
    </AuthContext.Provider>
  );



}

export default AuthSystem