import React from 'react';
import './Catalog.scss';

const Catalog = () => {
  const products = [
    {
      id: 1,
      name: 'Humankind digital game Deluxe',
      price: 150.0,
      oldPrice: 170.0,
      reviews: 125,
      image: 'image 1.svg', // Замените на реальный путь к картинке
    },
    {
      id: 2,
      name: 'Humankind digital game Deluxe',
      price: 150.0,
      oldPrice: 170.0,
      reviews: 125,
      image: 'image 2.svg',
    },
    {
      id: 3,
      name: 'Humankind digital game Deluxe',
      price: 150.0,
      oldPrice: 170.0,
      reviews: 125,
      image: 'image 3.svg',
    },
    {
      id: 4,
      name: 'Humankind digital game Deluxe',
      price: 150.0,
      oldPrice: 170.0,
      reviews: 125,
      image: 'image 4.svg',
    },
  ];

  return (
    <section className="catalog">
      <h2>Our Featured Game</h2>
      <p className="catalog-description">
        Gaming and Sports Template that is designed to build modern Online Game, Gaming News Portal, and more.
      </p>
      <div className="catalog-grid">
        {products.map((product) => (
          <div className="catalog-item" key={product.id}>
            <img src={product.image} alt={product.name} className="catalog-image" />
            <h3>{product.name}</h3>
            <div className="catalog-reviews">
              <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
              <span>{product.reviews}+ Reviews</span>
            </div>
            <div className="catalog-prices">
              <span className="price">${product.price.toFixed(2)}</span>
              <span className="old-price">${product.oldPrice.toFixed(2)}</span>
            </div>
            <button className="shop-now">Shop Now →</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Catalog;
