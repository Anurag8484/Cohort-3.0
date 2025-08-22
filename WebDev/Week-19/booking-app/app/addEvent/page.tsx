"use client";
import { useRef } from "react";
import Input from "../components/Input";
import axios from "axios";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navabr";


export default function AddEvent() {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  return (
    <>
      <Navbar events={false} />
      <div className="flex h-screen w-screen  justify-center items-center">
        <div className="border-1 border-neutral-700 min-h-60  py-6 justify-between shadow-lg  px-5 flex flex-col text-center rounded-lg">
          <h1 className="text-2xl ">Add Event</h1>
          <div className="flex flex-col gap-4   my-5 ">
            <Input ref={titleRef} type={"text"} placeholder={"Title"} />
            <Input
              ref={descriptionRef}
              type={"text"}
              placeholder={"Description"}
            />
            <Input ref={locationRef} type={"text"} placeholder={"Location"} />
            <Input ref={dateRef} type={"date"} placeholder={"Date"} />
          </div>
          <div>
            <button
              className=" bg-white text-black  py-1 px-2 rounded-lg cursor-pointer"
              onClick={async () => {
                try {
                    await axios.post("http://localhost:3000/api/event/add",{
                        title: titleRef.current?.value,
                        description: descriptionRef.current?.value,
                        location: locationRef.current?.value,
                        date: dateRef.current?.value,
                        userId: localStorage.getItem("user")
                    });
                    router.push("/events");
                } catch (error) {
                    console.error(error)
                }
              }}
            >
              Add Event
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
