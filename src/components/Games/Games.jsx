import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Games.scss';

const Games = () => {
  const games = [
    {
      id: 1,
      title: 'Heroic Dungeon Keys',
      description: 'Access Burning Crusade dungeons on heroic difficulty.',
      image: 'https://via.placeholder.com/300x200', // Замените на свои изображения
      price: 220,
    },
    {
      id: 2,
      title: 'Gladiator Title Boost',
      description: 'Get Gladiator title in WoW Shadowlands.',
      image: 'https://via.placeholder.com/300x200', // Замените на свои изображения
      price: 300,
    },
    {
      id: 3,
      title: 'Sylvanas Windrunner Kill',
      description: 'Defeat Sylvanas Windrunner in WoW.',
      image: 'https://via.placeholder.com/300x200', // Замените на свои изображения
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
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
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
                <Link to={`/game/${game.id}`} className="view-profile">
                  View Profile
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Games;
