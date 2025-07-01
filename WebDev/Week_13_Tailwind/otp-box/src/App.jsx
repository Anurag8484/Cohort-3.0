import { useEffect, useRef, useState } from "react";

const dgt_count = 5

function App(){

  const [inputArr,setInputArr] = useState(new Array(dgt_count).fill(""));
  const refArr = useRef([]);
  useEffect(()=>{
    refArr.current[0]?.focus()
  },[])
  
  
  
  function handleOnChange(value,index){
    console.log(value,index)
    if (isNaN(value)) return;
    const newArr = [...inputArr];
    newArr[index] = value.trim().slice(-1);
    setInputArr(newArr)
    value.trim() && refArr.current[index + 1]?.focus();

    
  }

  function handleOnKeyDown(e,index){
    console.log(e)
    if (!e.target.value && e.key === "Backspace"){
      refArr.current[index-1]?.focus()
    }
    else if (e.key === "ArrowRight") {
      refArr.current[index+1]?.focus()
    } 
    else if (e.key === "ArrowLeft") {
      refArr.current[index-1]?.focus()
    }
    else{
      return;
    }
  }


  return(
    <>
      <div className="flex flex-col justify-center items-center bg-black h-screen  ">
        <h1 className="text-3xl m-5 text-white">Validate OTP</h1>
          <div>
          {inputArr.map((input,index)=>{
            return (
              <input
                type="text"
                key={index}
                value={inputArr[index]}
                ref={(input) => (refArr.current[index] = input)}
                onChange={(e) => handleOnChange(e.target.value, index)}
                onKeyDown={(e) => handleOnKeyDown(e, index)}
                className=" border-white caret-transparent focus:border-4  selection:bg-transparent text-white border-2 m-2 w-12 p-2 rounded-xl text-center text-2xl"
              />
            );
          })}
          </div>
          <div>
            <button className="text-white m-5 border-white transition-transform duration-300  hover:scale-110 border-1 px-3 py-1 rounded-md cursor-pointer hover:">Submit</button>
          </div>
      </ div>
    </>
  )




}



export default App;