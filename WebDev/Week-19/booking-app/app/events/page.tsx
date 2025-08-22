export default function events() {
  return (
    <div className="h-screen w-screen border-1 border-red-800 flex flex-col p-2">
      <div className=" p-2 flex items-center justify-between  border-b-[0.5px] border-neutral-600">
        <h1 className="text-3xl">Events</h1>
            <button className="bg-white text-black py-1 px-2 rounded-md shadow-lg cursor-pointer hover:scale-110 duration-200">Add Event</button>
      </div>
    </div>
  );
}
