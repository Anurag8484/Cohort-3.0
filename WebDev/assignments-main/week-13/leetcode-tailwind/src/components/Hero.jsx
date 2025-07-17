import { CiLock } from "react-icons/ci";
import { FaChevronDown, FaStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import { VscDebugStart } from "react-icons/vsc";

export function Hero() {
  return (
    <>
      <section className="grid md:grid-cols-12  gap-10 flex-wrap my-15 ml-10  w-full">
        <div className=" bg-[#262626] h-96 mx-5   md:col-span-4 rounded-lg shadow-lg">
          <div className="flex p-5">
            <span className="bg-amber-50 rounded-[8px] px-1 py-1  text-yellow-500">
              <FaStar className="size-22 p-5" />
            </span>
          </div>
          <div className="flex text-white font-bold text-[1.6rem] mx-5">
            <span>Favorite</span>
          </div>
          <div className="flex leading-10 text-white items-center gap-[2px] font-[400]  text-[13px] mx-5">
            <span>Sumana</span>
            <span>
              <LuDot />
            </span>
            <span>19 questions</span>
            <span>
              <LuDot />
            </span>
            <div className="flex items-center gap-[5px] ">
              <span>
                <CiLock className="size-[16px]" />
              </span>
              <span>Private</span>
              <span>
                <IoIosArrowDown className="size-[19px] mx-1 cursor-pointer hover:scale-105 duration-300" />
              </span>
            </div>
            <span></span>
          </div>
          <div className="flex items-center mx-5 my-2  gap-5">
            <div className="bg-white flex items-center rounded-2xl px-3 py-2 gap-1 font-bold hover:scale-110 cursor-pointer duration-300">
              <span>
                <VscDebugStart />
              </span>
              <span>Practice</span>
            </div>
            <div className=" text-white rounded-3xl p-3  bg-[#383838] hover:scale-110 cursor-pointer duration-300">
              <span>
                <FaCodeFork />
              </span>
            </div>
          </div>
        </div>
        <div className="bg-yellow-300 mx-5  md:col-span-8 h-96  rounded-lg shadow-lg">
          <div>List</div>
        </div>
      </section>
    </>
  );
}
