export function MainContent() {
  return (
    <>
      <div className="w-full">
        <div className="h-48 bg-black md:block hidden"></div>
        <div className="grid grid-cols-11 gap-8 p-8 ">
          <div className="h-76 rounded-2xl bg-white md:col-span-2 -translate-y-24 shadow-lg col-span-11 md:block hidden">
            <div className="flex flex-wrap flex-col align-middle content-center justify-center text-center">
              <div className="flex justify-center">
                <img
                  className="  cursor-pointer w-24 mt-10 mb-5 rounded-md "
                  src="https://xsgames.co/randomusers/assets/avatars/male/66.jpg"
                  alt="asdasd"
                />
              </div>
              <div className="font-bold text-regal-gray">
                <p>Prabhleen Kaur</p>
              </div>
              <div className="text-[13px] text-regal-gray mt-2">
                <p>prabhleen@gmail.com</p>
                <p>9799999994</p>
                <p className="mt-4">Delhi, India</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 col-span-11">
            <div className="bg-blue-200 h-0">
              <p className="text-[12px]">Monday, 14 October</p>
              <p className="leading-12 text-blue-900 font-bold text-[20px]">
                Good Morning, Prabhleen! 👋🏻
              </p>
            </div>
            <div className="h-full p-1 bg-white  rounded-2xl shadow-xl translate-y-20 border-1 border-gray-200 ">
              <div className=" bg-gray-100 flex justify-between m-4 text-gray-800 rounded-[8px] pt-2 pb-2 pr-3 pl-3">
                <div className="flex gap-5 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                    />
                  </svg>

                  <p>Monday, 14 Octoboer 2024 </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
                <div className="flex gap-3 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </div>
              <div className=" flex gap-4 m-4 pt-2 pb-2 pl-3 pr-3 border-b-1 border-gray-200">
                <div className="flex flex-col border-r-1 pr-2 border-blue-200">
                  <span>11:30 AM</span>
                  <span className="text-[11px]">11:30 AM</span>
                </div>
                <div className=" flex flex-col justify-between ">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px]">Live</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4 text-red-500"
                    >
                      <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
                    </svg>
                  </div>

                  <span>UX Webinar</span>
                </div>
              </div>
              <div className=" flex gap-4 m-4 pt-2 pb-2 pl-3 pr-3 border-b-1 border-gray-200">
                <div className="flex flex-col border-r-1 pr-2 border-blue-200">
                  <span>11:30 AM</span>
                  <span className="text-[11px]">11:30 AM</span>
                </div>
                <div className=" flex flex-col justify-between ">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px]">Upcoming</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4 text-blue-500"
                    >
                      <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
                    </svg>
                  </div>

                  <span>My first Webinar</span>
                </div>
              </div>
              <div className=" flex gap-4 m-4 pt-2 pb-2 pl-3 pr-3 border-b-1 border-gray-200">
                <div className="flex flex-col border-r-1 pr-2 border-blue-200">
                  <span>11:30 AM</span>
                  <span className="text-[11px]">11:30 AM</span>
                </div>
                <div className=" flex flex-col justify-between ">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px]">Upcoming</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4 text-blue-500"
                    >
                      <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
                    </svg>
                  </div>

                  <span>Important Webinar</span>
                </div>
              </div>
              <div className=" flex gap-4 m-4 pt-2 pb-2 pl-3 pr-3 border-b-0 border-gray-200">
                <div className="flex flex-col border-r-1 pr-2 border-blue-200">
                  <span>11:30 AM</span>
                  <span className="text-[11px]">11:30 AM</span>
                </div>
                <div className=" flex flex-col justify-between ">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px]">Upcoming</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4 text-blue-500"
                    >
                      <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
                    </svg>
                  </div>

                  <span>Webinar 1</span>
                </div>
              </div>
            </div>
          </div>

          <div className="h-46 rounded-2xl translate-y-20 shadow-lg flex justify-between items-center flex-col  bg-white p-5 md:col-span-3 col-span-11">
            <div className="grid grid-cols-2 gap-15 ">
              <div className="flex flex-col justify-center text-center">
                <div className="border-0 flex justify-center p-0 mb-0 rounded-[8px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-8 m-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                    />
                  </svg>
                </div>
                <span className="text-[10px] ">Schedule a Webinar</span>
              </div>
              <div className="flex flex-col justify-center text-center">
                <div className="border-0 flex justify-center p-0 mb-0 rounded-[8px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-8 m-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
                <span className="text-[10px] ">Join a Webinar</span>
              </div>
              <div className="flex flex-col justify-center text-center">
                <div className="border-0 flex justify-center p-0 mb-0 rounded-[8px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
                    />
                  </svg>
                </div>
                <span className="text-[10px] ">Open Recordings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
