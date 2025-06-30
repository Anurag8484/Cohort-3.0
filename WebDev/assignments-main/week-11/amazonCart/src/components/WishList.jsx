import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import "../WishList.css";
import { wishItemState } from "../store/wishItemsState";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cardItemState } from "../store/cardItemState";

export function WishList() {
  const items = useRecoilValue(wishItemState);
  const setCartItem = useSetRecoilState(cardItemState);
  const cartItems = useRecoilValue(cardItemState);


  async function addToCart(item){
    setCartItem((prevItem)=>[
      ...prevItem,{
        id:item.id,
        imageUrl:item.imageUrl,
        name:item.name,
        price: item.price
      }
    ])
    console.log(cartItems);
    
  }


  return (
    <>
      <section>
        <div className="listHeader">
          <p>Your Wish List</p>
          <div className="listhead-right">
            <FontAwesomeIcon icon={faShareNodes} />
            <a href=""> Share with Others</a>
          </div>
        </div>
        <div className="main-list">
          {items.map((item, index) => (
            <div key={index} className="itemCard">
              <div className="card-top">
              <img src={item.imageUrl} alt="" />
              </div>
              <div className="card-middle">
                <h5>{item.name}</h5>
                <h3>{item.price}</h3>
              </div>
              <div className="card-bottom">
                <button onClick={() => addToCart(item)}>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
