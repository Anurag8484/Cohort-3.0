import EventList from "../components/EventList";
import Navbar from "../components/Navabr"

export default function events() {
  return (
    <div className="h-screen w-screen  flex flex-col p-2">
     <Navbar events={true} />
    <EventList />
    <div>
    </div>
    </div>
  );
}
