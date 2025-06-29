import AuthSystem from './components/AuthSystem';
import './Auth.css';
import { useState } from 'react';
import Login from './components/Login';

function App() {
  
  const [user,setUser] = useState({
    name:'anurag',
  });

  const [userlog,setlog] = useState(false)
  
  function login(){

  }

  



  return(
    <>
    <Login login={login}  />
    </>
  ) 
  
  ;
}

export default App;
