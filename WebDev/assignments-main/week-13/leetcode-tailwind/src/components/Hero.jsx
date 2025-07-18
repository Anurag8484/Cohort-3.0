import { CiLock } from "react-icons/ci";
import { FaChevronDown, FaStar } from "react-icons/fa";
import { FaCodeFork, FaFilter } from "react-icons/fa6";
import { IoIosArrowDown, IoIosCloseCircleOutline } from "react-icons/io";
import { IoCloseCircle, IoRefresh } from "react-icons/io5";
import { LuDot } from "react-icons/lu";
import { TiTick } from "react-icons/ti";
import { VscDebugStart } from "react-icons/vsc";

export function Hero() {
  return (
    <>
      <section className="grid lg:grid-cols-12  gap-0  my-15 mx-10  w-full">
        <div className=" bg-[#262626]  max-h-138 min-h-146   mb-15 max-w-150 p-0 translate-y-4 min-w-50    lg:col-span-4 rounded-lg shadow-lg overflow-hidden">
          <div className="border-b-[2px] border-[#333333] pb-5 m-5 ">
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
          <div className="my-1 mx-5">
            <div className="flex items-center justify-between text-[15px]  ">
              <span className="text-white font-[500]">Progress</span>
              <IoRefresh className="text-[#A8A8A8] size-5" />
            </div>
            <div className="grid grid-cols-3 gap-2 grid-rows-3 min-h-40 my-1 ">
              <div className="col-span-2 row-span-3 flex justify-center items-center bg-[#333333] rounded-lg ">
                <div className="flex size-40   rounded-full relative">
                  <svg
                    className="w-full h-full rotate-[-222deg]"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke="#"
                      stroke-width="3"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke="#039727"
                      stroke-width="3"
                      fill="none"
                      stroke-linecap="round"
                      stroke-dasharray="282.6"
                      stroke-dashoffset="75"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                    <div className="font-bold text-3xl">
                      19<span className="font-[400] text-sm">/19</span>
                    </div>
                    <div className="flex  items-center">
                      <TiTick className="text-[#128729]" />
                      <span className="text-2sm">Solved</span>
                    </div>
                    <div className="flex  items-center translate-y-4   ">
                      <span className="text-sm font-[400] text-[#A8A8A8]">
                        0 Atempting
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col py-2 font-[600]    items-center  text-sm rounded-lg  bg-[#333333]">
                <span className="text-[#1CBBBA]">Easy</span>
                <span className="text-white">11/11</span>
              </div>
              <div className=" flex flex-col py-2 font-[600]    items-center  text-sm rounded-lg  bg-[#333333]">
                <span className="text-[#FFB700]">Med.</span>
                <span className="text-white">7/7</span>
              </div>
              <div className=" flex flex-col py-2 font-[600]    items-center  text-sm rounded-lg  bg-[#333333]">
                <span className="text-[#DF3937]">Hard</span>
                <span className="text-white">1/1</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" mx-2   lg:col-span-8 min-h-96 p-4    rounded-lg shadow-lg">
          <div className="flex flex-wrap mb-5 items-center gap-2.5 ">
            <div className="bg-white flex items-center rounded-2xl px-3 py-1.5 gap-2.5 hover:scale-110 cursor-pointer duration-300">
              <FaFilter />
              <span className=" font-[500] text-[13px]">Filter</span>
            </div>
            <div className="flex gap-1.5 items-center border-1 text-[13px] border-gray-600 rounded-2xl px-2.5 py-1">
              <span className="text-white font-[600]">Easy</span>
              <IoCloseCircle className="text-[#727272] hover:scale-110 cursor-pointer duration-300 hover:text-red-300   size-4" />
            </div>
          </div>

          <div className="text-[15px]">
            <div className=" flex  justify-between  rounded-xl  p-3 bg-[#282828] hover:scale-105 duration-300 cursor-pointer">
              <span className="text-white font-[500] flex items-center gap-3">
                <TiTick className="text-[#128729]" />
                14. Longest Common Prefix
              </span>
              <span className="text-[#1CBBBA] mr-12">Easy</span>
            </div>
            <div>
              <div className=" flex justify-between  rounded-xl hover:scale-105 duration-300 cursor-pointer   p-3">
                <span className="text-white font-[500] flex items-center gap-3">
                  <TiTick className="text-[#128729]" />
                  217. Contains Duplicate
                </span>
                <span className="text-[#1CBBBA] mr-12">Easy</span>
              </div>
              <div className=" flex justify-between  rounded-xl hover:scale-105 duration-300 cursor-pointer   p-3  bg-[#282828] ">
                <span className="text-white font-[500] flex items-center gap-3">
                  <TiTick className="text-[#128729]" />
                  125. Valid Palindrome
                </span>
                <span className="text-[#1CBBBA] mr-12">Easy</span>
              </div>
              <div className=" flex justify-between  rounded-xl hover:scale-105 duration-300 cursor-pointer   p-3 ">
                <span className="text-white font-[500] flex items-center gap-3">
                  <TiTick className="text-[#128729]" />
                  26. Remove Duplicates from Sorted Array
                </span>
                <span className="text-[#1CBBBA] mr-12">Easy</span>
              </div>
              <div className=" flex justify-between  rounded-xl hover:scale-105 duration-300 cursor-pointer   p-3 bg-[#282828]">
                <span className="text-white font-[500] flex items-center gap-3">
                  <TiTick className="text-[#128729]" />
                  66. Plus One
                </span>
                <span className="text-[#1CBBBA] mr-12">Easy</span>
              </div>
              <div className=" flex justify-between  rounded-xl hover:scale-105 duration-300 cursor-pointer   p-3 ">
                <span className="text-white font-[500] flex items-center gap-3">
                  <TiTick className="text-[#128729]" />
                  136. Single Number
                </span>
                <span className="text-[#1CBBBA] mr-12">Easy</span>
              </div>
              <div className=" flex justify-between  rounded-xl hover:scale-105 duration-300 cursor-pointer   p-3 bg-[#282828]">
                <span className="text-white font-[500] flex items-center gap-3">
                  <TiTick className="text-[#128729]" />
                  121. Best Time to Buy and Sell Stock
                </span>
                <span className="text-[#1CBBBA] mr-12">Easy</span>
              </div>
              <div className=" flex justify-between  rounded-xl hover:scale-105 duration-300 cursor-pointer   p-3 ">
                <span className="text-white font-[500] flex items-center gap-3">
                  <TiTick className="text-[#128729]" />
                  88. Merge Sorted Array
                </span>
                <span className="text-[#1CBBBA] mr-12">Easy</span>
              </div>
              <div className=" flex justify-between  rounded-xl hover:scale-105 duration-300 cursor-pointer   p-3 bg-[#282828]">
                <span className="text-white font-[500] flex items-center gap-3">
                  <TiTick className="text-[#128729]" />
                  69. Sqrt(x)
                </span>
                <span className="text-[#1CBBBA] mr-12">Easy</span>
              </div>
              <div className=" flex justify-between  rounded-xl hover:scale-105 duration-300 cursor-pointer   p-3 ">
                <span className="text-white font-[500] flex items-center gap-3">
                  <TiTick className="text-[#128729]" />
                  206. Reverse Linked List
                </span>
                <span className="text-[#1CBBBA] mr-12">Easy</span>
              </div>
              <div className=" flex justify-between  rounded-xl hover:scale-105 duration-300 cursor-pointer   p-3 bg-[#282828]">
                <span className="text-white font-[500] flex items-center gap-3">
                  <TiTick className="text-[#128729]" />
                  141. Linked List Cycle
                </span>
                <span className="text-[#1CBBBA] mr-12">Easy</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
