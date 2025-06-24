import { useState } from "react";
function App() {
  return (
    <>
      <div>
        <LightBulb />
      </div>
    </>
  );
}

function LightBulb() {
  const [bulbOn, setBulbOn] = useState(true);
  return (
    <div>
      <BulbState bulbOn={bulbOn} />
      <ToggleBulbState setBulbOn={setBulbOn} />
    </div>
  );
}

function BulbState({bulbOn}) {
  return <div>{bulbOn ? "Bulb On" : "Bulb Off"}</div>;
}

function ToggleBulbState({setBulbOn}) {
  return (
    <div>
      <button onClick={()=>{setBulbOn(c=>!c)}}>Toggle the button </button>
    </div>
  );
}

export default App;
