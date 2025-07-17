import { CiLock } from "react-icons/ci";
import { FaChevronDown, FaStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import { VscDebugStart } from "react-icons/vsc";

export function Hero() {
  return (
    <>
      <section className="grid lg:grid-cols-12  gap-10  my-15 mx-10  w-full">
        <div className=" bg-[#262626] h-96 min-h-110 mx-5 max-w-150 p-5 min-w-50   lg:col-span-4 rounded-lg shadow-lg overflow-hidden">
          <div className="border-b-[2px] border-[#333333] pb-5 m-5">
            <div className="flex ">
              <span className="bg-amber-50 rounded-[8px] px-1 py-1  text-yellow-500">
                <FaStar className="size-22 p-5" />
              </span>
            </div>
            <div className="flex text-white mt-3 font-bold text-[1.6rem]">
              <span>Favorite</span>
            </div>
            <div className="flex leading-10 flex-wrap text-white items-center gap-[2px] font-[400]  text-[13px] ">
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
            <div className="flex items-center flex-wrap  my-2  gap-5">
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
        </div>
        <div className="bg-yellow-300 mx-5  lg:col-span-8 h-96  rounded-lg shadow-lg">
          <div>List</div>
        </div>
      </section>
    </>
  );
}
