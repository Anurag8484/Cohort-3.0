import { Sidebar } from "./components/Sidebar";
import { Hero } from "./components/Hero";
import { useState } from "react";

export default function App() {

  const [toggleSideBar,setToggleSideBar] = useState(true)

  return (
    <>
      <section className="flex bg-[#1A1A1A] h-full">
        <Sidebar
          toggleSideBar={toggleSideBar}
          setToggleSideBar={setToggleSideBar}
        />
        <Hero />
      </section>
    </>
  );
}
