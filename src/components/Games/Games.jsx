import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Games.scss";

const Games = () => {
  const gamesData = [
    {
      title: "Sylvanas Windrunner Kill",
      price: "220K",
      image: "/path-to-image1.jpg", // Замените на путь к вашим изображениям
    },
    {
      title: "Sylvanas Windrunner Kill",
      price: "220K",
      image: "/path-to-image2.jpg",
    },
    {
      title: "Sylvanas Windrunner Kill",
      price: "220K",
      image: "/path-to-image3.jpg",
    },
    {
      title: "Sylvanas Windrunner Kill",
      price: "220K",
      image: "/path-to-image4.jpg",
    },
  ];

  return (
    <section className="games-section">
      <div className="games-header">
        <h1>Earn on the Game and Spend on the Game</h1>
        <p>Buy services for gold and play to your heart's content</p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="games-swiper"
      >
        {gamesData.map((game, index) => (
          <SwiperSlide key={index} className="game-card">
            <div className="game-image">
              <img src={game.image} alt={game.title} />
            </div>
            <div className="game-info">
              <h2>{game.title}</h2>
              <p>{game.price} 🪙</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Games;
