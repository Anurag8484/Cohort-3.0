import { useState } from "react";

function App(){
return(
  <div style={{ background:"dfe6e9", height: "100vh"}}>
    <ToggleMessage />
    <ToggleMessage />
    <ToggleMessage />
  </div>
)
}

const ToggleMessage = ()=>{
  const[notificationCount, setNotificationCount] = useState(0);   // Defining a State Variable
//  WHen the val of state var changes, => The component that uses that state var; re-renders!!/
  console.log('re-render')
  function increment(){
    setNotificationCount(notificationCount +1 )
  }
  return (
    <div>
      <button onClick={increment}>Increase Count</button> {notificationCount}
    </div>
  );


}

export default App;