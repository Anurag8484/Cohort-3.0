import { useState,useEffect } from "react";
import "./App.css"
import { usePostTitle,useFetch } from "./hooks/useFetch";

// a custom hook

function App(){
  const [currentPost, setCurrentPost] =useState(1)
  const { finalData } = useFetch("https://jsonplaceholder.typicode.com/posts/"+currentPost);



return (
<div>
  <button onClick={()=>setCurrentPost(1)}>1</button>
  <button onClick={()=>setCurrentPost(2)}>2</button>
  <button onClick={()=>setCurrentPost(3)}>3</button>
  <br /><br /><br /><br />
  {JSON.stringify(finalData)}
</div>

)
}




export default App;