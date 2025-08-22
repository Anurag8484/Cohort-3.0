import { PrismaClient } from "@prisma/client";
import axios from "axios";


const client = new PrismaClient();

async function getAllEvents(){
    try {
        const events = await client.event.findMany({ include:{
            creator: true
        }});
        console.log(events)
        return events
    } catch (error) {
        console.error(error);
    }
}


export default async function EventList(){
    const events = await getAllEvents();

    return (
      <div className="grid grid-cols-4 p-10 my-10 gap-10 ">
        {events?.map((event) => (
          <div
            key={event.id}
            className="outline-1 p-4 max-w-90 outline-neutral-400 shadow-lg rounded-lg  min-h-30    "
          >
            <div className="flex mb-5 justify-between border-b-[0.1px] border-neutral-700">
              <div>
                <h1 className="text-xl font-[600]">{event.title}</h1>
                <span className="text-sm text-neutral-500 font-[500]">
                  {event.description}
                </span>
              </div>
              <div className="text-md text-amber-200">
                <span>
                  {new Date(event.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
            <div className="flex justify-between">

            <span className="my-5">
              Created By:
              <span className="text-green-100 font-bold">
                {event.creator.name}{" "}
              </span>
            </span>

            <span className="my-5">
              Location:
              <span className="text-red-100 font-bold">
                {event.location}
              </span>
            </span>
            </div>
            <br />
            <div className="text-center">
              <button className=" bg-white rounded-md py-1 px-2 text-black shadow-lg hover:scale-105 duration-200 cursor-pointer">
                Book
              </button>
            </div>
          </div>
        ))}
      </div>
    );
}