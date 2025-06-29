import { useNavigate } from "react-router-dom";

export function WishList(){
    const navigate = useNavigate();
    return (
      <>
        <button onClick={()=>navigate("/cart")}>Cart</button>
      </>
    );
}