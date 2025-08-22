'use client'
import { useRouter } from "next/navigation";
import Input from "./Input";
import Link from "next/link";
type NavBarProps = {

    events: boolean

}

export default function Navbar({events}:NavBarProps){
  // const router = useRouter();
    return (
      <>
        {events && (
          <div className=" p-2 flex items-center justify-around  border-b-[0.5px] border-neutral-600 sticky top-0">
            <h1 className="text-3xl">Events</h1>
            <div className="">
              <Input type={"text"} placeholder={"Search"} />
            </div>
            <div className="flex gap-3">
              <Link href={"/addEvent"} className="bg-white text-black py-1 px-2 rounded-md shadow-lg cursor-pointer hover:scale-110 duration-200"
              >
                Add Event
              </Link>
              <Link href={"/"} onClick={()=>{localStorage.removeItem("user")}} className="bg-white text-black py-1 px-2 rounded-md shadow-lg cursor-pointer hover:scale-110 duration-200">
                Logout
              </Link>
            </div>
          </div>
        )}

        {!events && (
          <div className=" p-2 flex items-center justify-around  border-b-[0.5px] border-neutral-600 sticky top-0">
            <h1 className="text-3xl">Book ~ MyLife</h1>
            <div className="flex gap-3">
              <Link href={"/signup"} className="bg-white text-black py-1 px-2 rounded-md shadow-lg cursor-pointer hover:scale-110 duration-200">
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </>
    );
}