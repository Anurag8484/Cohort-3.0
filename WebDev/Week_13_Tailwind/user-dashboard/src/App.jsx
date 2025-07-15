import { useEffect, useState } from "react";
import { Home } from "./components/Home";
import { Sidebar } from "./components/Sidebar";
import { MainContent } from "./components/MainContent";

const useMediaQuery = (query) =>{
  const [matches, setMatches] = useState(false);

  useEffect(()=>{
    const media = window.matchMedia(query);
    if (media.matches !== matches){
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
  },[matches, query]);

  return matches;
}

function App(){
  const [sidebarOpen, setSideBarOpen] = useState(true);

  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(()=>{
    if (isDesktop == false){
      setSideBarOpen(false)
    }else{
      setSideBarOpen(true)
    }
  }, [isDesktop])
  return (
    <>
    <div className="flex">
      <Sidebar sidebarOpen={sidebarOpen} setSideBarOpen ={setSideBarOpen} />
      <MainContent sidebarOpen={sidebarOpen} />
    </div>
      {/* <Home />  */}
    </>
  );
}


export default App;