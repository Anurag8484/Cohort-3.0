import { FaStar } from "react-icons/fa";
import { IoLockClosedOutline } from "react-icons/io5";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarLeftCollapseFilled,
  TbLayoutSidebarLeftExpandFilled,
} from "react-icons/tb";

export function Sidebar({ toggleSideBar, setToggleSideBar }) {
  return (
    <>
      <div
        className={`bg-sidebar  ${
          toggleSideBar ? "w-75" : "w-0"
        } overflow-hidden text-white  duration-400   hidden lg:block`}
      >
        <div className={`${toggleSideBar ? "block" : "hidden"} duration-50`}>
          <div className={` flex justify-between m-5  items-center font-bold`}>
            <span>My Lists</span>
            <TbLayoutSidebarLeftCollapseFilled
              className="size-5 hover:scale-105 duration-300 cursor-pointer"
              onClick={() => setToggleSideBar(false)}
            />
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
      </div>
      <div className="hidden lg:block">
        <div
          className={` ${
            toggleSideBar ? "hidden" : "block"
          }  text-white  items-start w-75      justify-end flex my-10 `}
        >
          <span
            className={` ${
              toggleSideBar ? "hidden" : "block"
            } border-[1px] border-gray-600 p-1 rounded-[8px] hidden lg:block hover:scale-105 duration-200`}
            onClick={() => setToggleSideBar(true)}
          >
            <TbLayoutSidebarLeftExpandFilled className="size-6 cursor-pointer " />
          </span>
        </div>
      </div>
    </>
  );
}
