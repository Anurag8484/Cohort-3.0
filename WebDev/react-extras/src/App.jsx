import React, { useState } from "react";
import { Modal } from "./components/Modal";
import { Signup } from "./components/Signup";
import { Signin } from "./components/Signin";





function App(){

const [isModalOpen, setModalOpen] = useState(false);

return(
  <div>
    <button onClick={()=> setModalOpen(true)}>Open Modal</button>
    <Modal isOpen={isModalOpen} OnClose={()=>setModalOpen(false)}>
        <Signup />
        <br />
        <Signin />

    </Modal>
  </div>
)



}



export default App;