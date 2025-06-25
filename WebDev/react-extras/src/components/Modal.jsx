import { useState } from "react";



export function Modal({ isOpen, OnClose, children}){
    if (!isOpen){
        return null;
    }

    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          transition:"0.5s"
        }}
        >
        <div style={{
            border: "1px solid black",
            borderRadius:"20px",
            padding:10,
            backgroundColor:"#fff",
            transition:"0.5s"
        }}>
          {children}
          <br />
          <br />
          <br />
          <button onClick={OnClose}>Close</button>
        </div>
      </div>
    );



}