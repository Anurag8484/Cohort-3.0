import { useState } from "react";
import { Home } from "./components/Home";
import { Sidebar } from "./components/Sidebar";

function App(){
  return (
    <>
      {/* <Sidebar/> */}
      {/* <Home />  */}

      <div className="h-screen bg-white dark:bg-black text-black dark:text-white">
        <h1 >Hi there</h1>
        <button
          onClick={() => {
            document.querySelector("html").classList.toggle("dark");
          }}
        >
          Toggle Theme
        </button>
      </div>
    </>
  );
}


export default App;