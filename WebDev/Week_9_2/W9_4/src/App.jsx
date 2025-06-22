import { useState } from "react";

function App(){
  const [timer, settimer] = useState(true);

  return(
    <div style={{display:"flex", background:"#9f9f9f"}}>
      <Card>
        <div>
          Hi There
        </div>
      </Card>
      <Card>
        <div>
          What do you want to post
          <br />
          <br />
          <input></input>
        </div>
      </Card>
    </div>
  )
}

function Card({ children }) {
  return (
    <div
      style={{ background: "beige", borderRadius: 10, padding: 10, margin: 10 }}
    >
      Upper Top Bar
      <br />
      <br />
      {children}
      <br />
      Lower Bottom Bar
    </div>
  );
}


export default App;