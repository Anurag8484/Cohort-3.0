import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import "../WishList.css";
import { useRecoilValue } from "recoil";
import { cardItemState } from "../store/cardItemState";
import "../Cart.css"
export function AmazonCard() {
    const items = useRecoilValue(cardItemState);

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
                  <div className="itemPrice">{item.price}</div>
                </div>
                <div className="CartCard-bottom">
                  <div className="itemCount">
                    <FontAwesomeIcon className="icon decIcon" icon={faMinus} />
                    <input type="text" />
                    <FontAwesomeIcon className="icon addIcon " icon={faPlus} />
                    <p onClick={() => addToCart(item)}>Remove</p>
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
                <p>Items(2):</p>
                <p>22465</p>
              </div>
              <div className="final-bottom">
                <h3>Order Total</h3>
                <h3>23423</h3>
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
