import { Sidebar } from "./components/Sidebar";
import { Hero } from "./components/Hero";
import { useEffect, useState } from "react";
import { useDarkMode } from "./hooks/useDarkMode";

export default function App() {

  const [toggleSideBar,setToggleSideBar] = useState(true);
  const [darkMode, toggleDarkMode] = useDarkMode();

 

  return (
    <>
      <section className="flex   dark:bg-[#1A1A1A] text-black min-h-screen ">
        <header className="flex items-center justify-end p-4">
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 dark:text-white"
          >
            Toggle {darkMode ? "Light" : "Dark"} Mode
          </button>
        </header>
        <Sidebar
          toggleSideBar={toggleSideBar}
          setToggleSideBar={setToggleSideBar}
        />
        <Hero />
      </section>
    </>
  );
}
