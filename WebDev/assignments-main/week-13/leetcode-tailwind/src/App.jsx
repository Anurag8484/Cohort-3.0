import { Sidebar } from "./components/Sidebar";
import { Hero } from "./components/Hero";

export default function App() {
  return (
    <>
      <section className="flex ">
        <Sidebar  />
        <Hero />
      </section>
    </>
  );
}
