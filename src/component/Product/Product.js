import React from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RippleButton from "./RippleButton";

function Product({ id, title, image, price, rating,link }) {
  const [{ basket }, dispatch] = useStateValue();
  const notify = () => toast("You have added an item!");

  const addToBasket = () => {

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        link: link,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
<Link to={link} className="product">
      <img src={image} alt="" />
      </Link>
      <button onClick={() => {addToBasket(); notify();}}>Add to Basket</button>
      <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
    </div>
  );
}

export default Product;