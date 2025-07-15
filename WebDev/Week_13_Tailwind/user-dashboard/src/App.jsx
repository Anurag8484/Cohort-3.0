import { useState } from "react";
import { Home } from "./components/Home";
import { Sidebar } from "./components/Sidebar";

function App(){
  return (
    <>
    {/* <Sidebar/> */}
    {/* <Home />  */}

    <div className={`h-screen  bg-white text-red-800 dark:bg-blue-800 dark:text-black`}>

    <button onClick={() => {
      document
        .querySelector("html")
        .classList.toggle(
          "dark");
    }} >Toggle Theme</button>
    </div>
    </>
  )
}


export default App;