import { FaStar } from "react-icons/fa";
import { IoLockClosedOutline } from "react-icons/io5";
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarLeftCollapseFilled, TbLayoutSidebarLeftExpandFilled } from "react-icons/tb";

export function Sidebar({toggleSideBar,setToggleSideBar}) {


    if (toggleSideBar){

        return (
            <>
      <div className=" bg-sidebar w-75 text-white   hidden md:block ">
        <div className="flex justify-between m-5  items-center font-bold">
          <span>My Lists</span>
          <TbLayoutSidebarLeftCollapseFilled className="size-5 hover:scale-105 duration-300 cursor-pointer" onClick={()=>setToggleSideBar(false)} />
        </div>
        <div className="font-bold mx-4">
          <span>Created by me</span>
        </div>
        <div className=" flex justify-between items-center m-3 font-medium cursor-pointer hover:scale-105 duration-300 bg-[#434343] px-2 py-2 rounded-[6px] ">
          <div className=" flex items-center gap-2">
            <span className="bg-amber-50 rounded-[3px] px-1 py-1 text-yellow-500">
              <FaStar />
            </span>
            <span>Favorite</span>
          </div>
          <div>
            <IoLockClosedOutline />
          </div>
        </div>
      </div>
    </>
  );
}
else{
    return (
      <div className="text-white w-75 items-start   justify-end flex my-10 ">
        <span
          className=" border-[1px] border-gray-600 p-1 rounded-[8px] hover:scale-105 duration-200  "
          onClick={() => setToggleSideBar(true)}
        >
          <TbLayoutSidebarLeftExpandFilled className="size-6 cursor-pointer " />
        </span>
      </div>
    );
}
}
