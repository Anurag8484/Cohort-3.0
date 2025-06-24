import { useState, createContext, useContext } from "react";
import { BulbProvider,BulbContext } from "./utils/contextProvider";

function App() {
  return (
    <>
      <div>
        <br />
        <BulbProvider>
        <Light />
        </BulbProvider>
      </div>
    </>
  );
}

function Light() {
  return (
    <div>
      <LightBulb/>
      <LightSwitch />
    </div>
  );
}

function LightBulb() {
  const {bulbOn} = useContext(BulbContext)
  return <div>{bulbOn ? "Bulb On" : "Bulb Off"}</div>;
}

function LightSwitch() {
  const {setBulbOn} = useContext(BulbContext)
  return (
    <div>
      <br />
      <button
        onClick={() => {
          setBulbOn((c) => !c);
        }}
      >
        Toggle the button{" "}
      </button>
    </div>
  );
}

export default App;
