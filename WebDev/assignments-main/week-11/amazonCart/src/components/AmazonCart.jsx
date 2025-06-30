import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import "../WishList.css";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { cardItemState } from "../store/cardItemState";
import "../Cart.css"
import { addCount } from "../store/cartTotalSelector";
export function AmazonCard() {
    const items = useRecoilValue(cardItemState);
    const setItems = useSetRecoilState(cardItemState)
    let {total,totalCount} = useRecoilValue(addCount)
    console.log(total)

    function removeItem(item){
        const updatedItems = items.filter((i)=>i.id !== item.id)
        setItems(updatedItems)
    }

    function increaseCount(item){

        setItems((prevItems)=>
            prevItems.map((i)=>i.id===item.id ? {...i,qty:i.qty+1}:i)
        )
        
    }
    
    function decreaseCount(item){
        setItems((prevItems) =>
          prevItems.map((i) =>
            i.id === item.id ? { ...i, qty: i.qty > 1? i.qty-1:1 } : i
          )
        );

    }


  return (
    <>
      <section>
        <div className="listHeader">
          <p>Your Cart</p>
          <div className="listhead-right">
            <FontAwesomeIcon icon={faShareNodes} />
            <a href=""> Share with Others</a>
          </div>
        </div>
        <div className="cartLayout">
          <div className="main-list-cart">
            {items.map((item, index) => (
              <div key={index} className="CartCard">
                <div className="CartCard-top">
                  <div className="itemImage">
                    <img src={item.imageUrl} alt="" />
                  </div>
                  <div className="itemDesc">{item.name}</div>
                  <div className="itemPrice">₹{item.price}</div>
                </div>
                <div className="CartCard-bottom">
                  <div className="itemCount">
                    <FontAwesomeIcon
                      onClick={() => decreaseCount(item)}
                      className="icon decIcon"
                      icon={faMinus}
                    />
                    <p>{item.qty}</p>
                    <FontAwesomeIcon
                      onClick={() => increaseCount(item)}
                      className="icon addIcon "
                      icon={faPlus}
                    />
                    <p onClick={() => removeItem(item)}>Remove</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="checkout">
            <div className="finalbox">
              <div className="final-top">
                <h2>Order Summary</h2>
              </div>
              <div className="final-middle">
                <p>Items({totalCount}):</p>
                <p>₹{total}</p>
              </div>
              <div className="final-bottom">
                <h3>Order Total</h3>
                <h3>₹{total}</h3>
              </div>
              <div className="final-button">
                <button>Proceed to Buy</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
