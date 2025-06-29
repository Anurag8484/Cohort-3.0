import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import "../WishList.css";
import { wishItemState } from "../store/wishItemsState";
import { useRecoilValue } from "recoil";

export function WishList() {

    const items = useRecoilValue(wishItemState);

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
                <h3>{item.id}</h3>
              </div>
              <div className="card-middle">
                <h4>{item.name} || {item.price}</h4>
              </div>
              <div className="card-bottom">
                <button>Add to card</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
