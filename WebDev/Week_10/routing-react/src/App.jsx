import { useState, useRef, useEffect } from "react";
function App(){

const [time,setTime] = useState(0);
// const [timer,setTimer] = useState(0);
const timer = useRef();
const [lapTime,setLap] = useState(0);

function startClock(){
    
    let value =  setInterval(() => {
        setTime(c=>c+1)
    }, 1000);
    
  timer.current = value;
}
function pauseClock(){
    clearInterval(timer.current)
    console.log(timer.current)
}

function lap(){
    setLap(time);
}


return(
    <div>
        {time}
        <br />
        Lap: {lapTime}
        <br />
        <button onClick={startClock}>Start</button>
        <button ref={timer} onClick={pauseClock}>Pause</button>
        <button onClick={lap}>Lap</button>
    </div>
)

}



export default App;