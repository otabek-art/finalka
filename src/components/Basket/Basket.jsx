import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext"; // С большой буквы
import { FaTrash } from "react-icons/fa";
import "./Basket.scss";
import { Link } from "react-router-dom";

const Basket = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="basket-container">
      <h1 className="basket-title">Your Basket</h1>
      {cart.length === 0 ? (
        <p className="empty-basket">No items in the basket</p>
      ) : (
        <div className="basket-items">
          {cart.map((item) => (
            <div key={item.id} className="basket-item">
              <img
                src={item.image}
                alt={item.title}
                className="basket-item-image"
              />
              <div className="basket-item-details">
                <h3>{item.title}</h3>
                <p>{item.price}$</p>
              </div>
              <button
                className="remove-item"
                onClick={() => removeFromCart(item.id)}
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      )}
      <Link to={'/games'}>
        <button className="checkout-button">Proceed to Checkout</button>
      </Link>
    </div>
  );
};

export default Basket;
