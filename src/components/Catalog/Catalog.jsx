import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Catalog.scss";
import { CartContext } from "../Context/CartContext";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  // Fetch products from db.json
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <section className="catalog">
      <h2 data-aos="fade-down">Our Featured Game</h2>
      <p className="catalog-description" data-aos="fade-up">
        Gaming and Sports Template that is designed to build modern Online Game,
        Gaming News Portal, and more.
      </p>
      <div className="catalog-grid">
        {products.map((product) => (
          <div className="catalog-item" key={product.id} data-aos="fade-up">
            <img
              src={product.image}
              alt={product.name}
              className="catalog-image"
            />
            <h3>{product.name}</h3>
            <div className="catalog-reviews">
              <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
              <span>{product.reviews}+ Reviews</span>
            </div>
            <div className="catalog-prices">
              <span className="price">${product.price.toFixed(2)}</span>
              <span className="old-price">${product.oldPrice.toFixed(2)}</span>
            </div>
            <button onClick={() => addToCart(product)} className="shop-now">
              Shop Now →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Catalog;
