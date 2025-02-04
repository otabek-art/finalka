import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { CartContext } from "../Context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Games.scss";

const Games = () => {
  const { addToCart } = useContext(CartContext);

  const games = [
    {
      id: 1,
      title: "Heroic Dungeon Keys",
      description: "Access Burning Crusade dungeons on heroic difficulty.",
      image: "/image8.svg",
      price: 220,
    },
    {
      id: 2,
      title: "Gladiator Title Boost",
      description: "Get Gladiator title in WoW Shadowlands.",
      image: "/image9.svg",
      price: 300,
    },
    {
      id: 3,
      title: "Sylvanas Windrunner Kill",
      description: "Defeat Sylvanas Windrunner in WoW.",
      image: "/image10.svg",
      price: 400,
    },
    {
      id: 4,
      title: "Sylvanas Windrunner Kill",
      description: "Defeat Sylvanas Windrunner in WoW.",
      image: "/image11.svg",
      price: 400,
    },
  ];

  return (
    <div className="games-container">
      <h1 className="games-title">Available Games</h1>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {games.map((game) => (
          <SwiperSlide key={game.id}>
            <div className="game-card">
              <img src={game.image} alt={game.title} className="game-image" />
              <h3>{game.title}</h3>
              <p>{game.description}</p>
              <div className="game-footer">
                <span className="game-price">{game.price}$</span>
                <button className="add-to-cart" onClick={() => addToCart(game)}>
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Games;
