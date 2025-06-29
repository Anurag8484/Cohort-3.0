import AuthSystem from './components/AuthSystem';
import './Auth.css';
import { createContext, useState } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import AppBar from './components/AppBar';
import { AuthContextProvider } from './context/AuthContext';



function App() {
  
  // const [user,setUser] = useState({
  //   name:'anurag',
  // });

  // const [userlog,setlog] = useState(false)
  

  



  return(
    <>
  <AuthContextProvider>
    <AppBar />
    <Home />
    <Login />
  </AuthContextProvider>
    {/* {!userlog ? <Login login={login}  /> : <AppBar username={user.name} logout={logout} />} */}
    {/* {userlog ? < Home /> : ""} */}
    </>
  ) 
  
  ;
}

export default App;
