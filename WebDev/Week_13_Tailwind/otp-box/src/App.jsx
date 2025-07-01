import { useEffect, useRef, useState } from "react";

const dgt_count = 5

function App(){

  const [inputArr,setInputArr] = useState(new Array(dgt_count).fill(""));
  const refArr = useRef([]);
  useEffect(()=>{
    refArr.current[0]?.focus()
  },[])
  
  const isComplete = inputArr.every((dgt)=>dgt!=="");
  
  


  function handleOnKeyDown(e,index){
    if (e.key === "Backspace"){
      e.preventDefault();
      const newArr = [...inputArr];
      newArr[index] = "";
      setInputArr(newArr);
      refArr.current[index - 1]?.focus();
      return;

      
    }
    else if (e.key === "ArrowRight") {
      refArr.current[index+1]?.focus()
      refArr.current[index + 1]?.select();
    } 
    else if (e.key === "ArrowLeft") {
      refArr.current[index-1]?.focus()
      refArr.current[index - 1]?.select();
    }

    else if (/^[0-9]$/.test(e.key)){
      const newArr = [...inputArr];
      newArr[index] = e.key
      setInputArr(newArr);

      refArr.current[index + 1]?.focus();
      return;
    }
  
  }


  return (
    <>
      <div className="flex flex-col justify-center items-center bg-black h-screen  ">
        <h1 className="text-3xl m-5 text-white">Validate OTP</h1>
        <div>
          {inputArr.map((input, index) => {
            return (
              <input
                type="text"
                key={index}
                value={inputArr[index]}
                ref={(input) => (refArr.current[index] = input)}
                onKeyDown={(e) => handleOnKeyDown(e, index)}
                readOnly
                className=" border-white select-none  focus:border-2 selection:bg-transparent focus:text-green-500 text-white border-2 m-2 w-12 p-2 rounded-xl text-center text-2xl"
              />
            );
          })}
        </div>
        <div>
          <button
            disabled={!isComplete}
            className={`text-white m-5 border-white transition-transform duration-300  hover:scale-110 border-1 px-3 py-1 rounded-md cursor-pointer ${
              isComplete
                ? "bg-green-500 text-white border-green-300"
                : "bg-gray-600 text-gray-300 border-gray-600 cursor-not-allowed"
            } `}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );




}



export default App;