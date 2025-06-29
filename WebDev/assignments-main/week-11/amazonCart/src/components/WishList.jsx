import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import "../WishList.css";

export function WishList() {
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
          <div className="itemCard">
            <div className="card-top">
                <h3>Image of the item</h3>
            </div>
            <div className="card-middle">
                <h4>Item Desc</h4>
            </div>
            <div className="card-bottom">
                <button>Add to card</button>
            </div>
          </div>
          <div className="itemCard">
            <div className="card-top">
                <h3>Image of the item</h3>
            </div>
            <div className="card-middle">
                <h4>Item Desc</h4>
            </div>
            <div className="card-bottom">
                <button>Add to card</button>
            </div>
          </div>
          <div className="itemCard">
            <div className="card-top">
                <h3>Image of the item</h3>
            </div>
            <div className="card-middle">
                <h4>Item Desc</h4>
            </div>
            <div className="card-bottom">
                <button>Add to card</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
