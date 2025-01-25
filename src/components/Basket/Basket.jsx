import React from 'react';
import './Basket.scss';

const Basket = () => {
  return (
    <div className="basket-container">
      <h1 className="basket-title">Your Basket</h1>
      <div className="basket-items">
        <p>No items in the basket</p>
      </div>
      <button className="checkout-button">Proceed to Checkout</button>
    </div>
  );
};

export default Basket;
