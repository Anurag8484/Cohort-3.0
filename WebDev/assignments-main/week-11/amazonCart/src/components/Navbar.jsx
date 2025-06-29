import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Navbar.css"
export function Navbar() {
    const navigate = useNavigate();
    
  return (
    <>
      <header>
        <div className="nav-left" onClick={()=>navigate('/')}>
            Amazon
        </div>
        <div className="nav-right">
            <i>
          <FontAwesomeIcon onClick={()=>navigate('/cart')} icon={faCartShopping} />
            </i>
        </div>
      </header>
    </>
  );
}
