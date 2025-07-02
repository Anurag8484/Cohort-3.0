import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse ,faUsersRectangle ,faCreditCard,faUserAlt, faGear } from "@fortawesome/free-solid-svg-icons";
export function Sidebar() {
  return (
    <>
      <div className="border-2 border-black h-screen   absolute left-0 w-15 sticky overflow-hidden top-0 left-0 right-0 bottom-0 duration-700 hover:w-50">
        <div className=" mr-2 mt-4 ml-3">
          <div className="flex justify-between gap-3   ">
            <p className="bg-gray-500 p-1 rounded-lg">Img</p>
            <p className="bg-blue-600 rounded-lg p-1 text-white">Webinar.gg</p>
          </div>

          <div className="grid mt-10 grid-cols-2 gap-20 gap-x-9  m-2 mb-10 ml-2">
            <FontAwesomeIcon icon={faHouse} />
            <p>Home</p>
            <FontAwesomeIcon icon={faUsersRectangle} />
            <p>Webinars</p>
            <FontAwesomeIcon icon={faCreditCard} />
            <p>Billing</p>
            <FontAwesomeIcon icon={faUserAlt} />
            <p>User Profile</p>
            <FontAwesomeIcon icon={faGear} />
            <p>Setting</p>
          </div>
        </div>
      </div>
    </>
  );
}
