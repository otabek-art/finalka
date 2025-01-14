import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules'; // Исправленный импорт
import './Revievs.scss'

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      image: '/public/revievs.png',
      text: 'Gaming and Sports Template that is designed to build modern Online Game, Gaming News Portal...',
      name: 'Dulal HD',
      role: 'UX Gamer',
    },
    {
      id: 2,
      image: 'https://images.vexels.com/media/users/3/147101/isolated/preview/b4a49d4b864c74bb73de63f080ad7930-instagram-profile-button.png',
      text: 'Another great template for creating websites that suit gaming and tech needs...',
      name: 'Alice Wonder',
      role: 'Game Designer',
    },
    {
      id: 3,
      image: 'https://i.pinimg.com/originals/64/11/7f/64117fa1f71783a834d0d96abcf06e80.jpg',
      text:'When I was 8 I realized that I wanted to create games so this is my purpose',
      name:'Alex Hirsh',
      role: 'Direktor and Founder',
    }
    // Добавьте больше отзывов по необходимости
  ];

  return (
    <div className="reviews-container">
      <h3 className="reviews-title">Testimonial</h3>
      <h2 className="reviews-subtitle">
        Gamer <span className="highlight">Reviews</span>
      </h2>
      <Swiper
        modules={[Pagination]} // Подключаем модуль Pagination
        spaceBetween={20}
        slidesPerView={2}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          850: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className="review-card">
            <div className="review-image" style={{ backgroundImage: `url(${review.image})` }}></div>
            <div className="review-content">
              <p className="review-text">{review.text}</p>
              <h4 className="review-name">{review.name}</h4>
              <span className="review-role">{review.role}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
