import { useRef, useState } from "react"

export function Otp(){
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();


return (
  <div className="flex justify-center content-center items-center">
    <SubOtpBox
      ref={ref1}
      onDone={() => {
        ref2.current.focus();
      }}
    />
    <SubOtpBox
      ref={ref2}
      onDone={() => {
        ref3.current.focus();
      }}
    />
    <SubOtpBox
      ref={ref3}
      onDone={() => {
        ref4.current.focus();
      }}
    />
    <SubOtpBox
      ref={ref4}
      onDone={() => {
        ref5.current.focus();
      }}
    />
    <SubOtpBox
      ref={ref5}
      onDone={() => {
        ref6.current.focus();
      }}
    />
    <SubOtpBox
      ref={ref6}
      onDone={() => {
        ref6.current.focus();
      }}
    />
  </div>
);
}

function SubOtpBox({ref,onDone}){
    const [inputValue, setValue] = useState("")
    return <div>
        <input  value={inputValue}   ref={ref} onChange={(e)=>{
            const val = e.target.value
            if (val==""){
                //go back
            }else
            onDone()}}  type="text" className="max-w-10 h-10 m-1  rounded-2xl bg-blue-200 outline-none text-black text-center"/>
    </div>
}