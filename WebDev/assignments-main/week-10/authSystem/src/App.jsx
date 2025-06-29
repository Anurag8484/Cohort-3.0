import AuthSystem from './components/AuthSystem';
import './Auth.css';
import { useState } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import AppBar from './components/AppBar';

function App() {
  
  const [user,setUser] = useState({
    name:'anurag',
  });

  const [userlog,setlog] = useState(false)
  
  function login(){
    setlog(true)
  }
  function logout(){
    setlog(false)
  }

  



  return(
    <>
    {!userlog ? <Login login={login}  /> : <AppBar username={user.name} logout={logout} />}
    {userlog ? < Home /> : ""}
    </>
  ) 
  
  ;
}

export default App;
