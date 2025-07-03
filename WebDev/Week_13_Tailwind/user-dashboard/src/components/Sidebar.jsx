import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse ,faUsersRectangle ,faCreditCard,faUserAlt, faGear } from "@fortawesome/free-solid-svg-icons";
export function Sidebar() {
  return (
    <>
      <div className="border-2  border-zinc-200 h-screen text-zinc-500  overflow-hidden   w-15  sm:w-60   duration-700 ">
        <div className=" mr-2 mt-4 ml-3">
          <div className="flex justify-between gap-10   ">
            <img

              className=" p-1 rounded-lg w-10"
              src="https://imgs.search.brave.com/ZxTWTxrjaHgy9SwD8k0vNGseY5qHcXwAYlAxC8B-41w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmVhbGZha2VwaG90/b3MuY29tL19uZXh0/L2ltYWdlP3VybD0v/aW1hZ2VzL3Byb2Zl/c3Npb25hbC1oZWFk/c2hvdC1pbnB1dC1v/dXRwdXRzL21heC1p/bnB1dC5qcGcmdz0z/ODQwJnE9NzU"
              alt=""
            />
          </div>

          <div className="grid  mt-10 grid-cols-2 gap-10 mr-5  items-center  align-middle  m-2 mb-10 ml-2 border-zinc-400">
            <FontAwesomeIcon icon={faHouse} />
            <p className="ml-4 cursor-pointer">Home</p>
            <FontAwesomeIcon icon={faUsersRectangle} />
            <p className="ml-4">Webinars</p>
            <FontAwesomeIcon icon={faCreditCard} />
            <p className="ml-4">Billing</p>
            <FontAwesomeIcon icon={faUserAlt} />
            <p className="ml-4">User Profile</p>
            <FontAwesomeIcon icon={faGear} />
            <p className="ml-4">Setting</p>
          </div>
        </div>
      </div>
    </>
  );
}
