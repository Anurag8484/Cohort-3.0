import { SideBarToggle } from "./SideBarToggle";

export function Sidebar({sidebarOpen, setSideBarOpen}) {
  if(sidebarOpen){
    return (
      <>
        <div className="w-96 h-screen bg-red-100 duration-300 fixed top-0 left-0 md:relative opacity-90 ">
          <div>
            <div
              className="cursor-pointer hover:bg-slate-200 duration-300 "
              onClick={() => {
                setSideBarOpen(!sidebarOpen);
              }}
            >
              <SideBarToggle />
            </div>
          </div>
        </div>
      </>
    );
  }else{
    return (
      <div className=" h-screen fixed top-0 left-0 duration-300">
        <div
          className="cursor-pointer hover:bg-slate-200 text-red-500  duration-300"
          onClick={() => {
            setSideBarOpen(!sidebarOpen);
          }}
        >
          <SideBarToggle />
        </div>
      </div>
    );
  }
}
