import React from "react";
import { useNavigate } from "react-router-dom";
import "./Best.scss"; // Подключаем стили

const Best = () => {
  const navigate = useNavigate();

  const items = [
    {
      id: 1,
      title: "THE BEST PRODUCTS TODAY",
      description:
        "ARENA RATING BOOST IN WORLD OF WARCRAFT SHADOWLANDS IS A COMPLEX AREA, AS ALL FIGHTING IN ARENAS",
      image: "/image12.svg", // Замени на актуальный путь
    },
    {
      id: 2,
      title: "THE BEST PRODUCTS TOMORROW",
      description:
        "ARENA RATING BOOST IN WORLD OF WARCRAFT SHADOWLANDS IS A COMPLEX AREA, AS ALL FIGHTING IN ARENAS",
      image: "/image13.svg", // Замени на актуальный путь
    },
  ];

  return (
    <div className="best-container">
      {items.map((item) => (
        <div
          key={item.id}
          className="best-item"
          style={{ backgroundImage: `url(${item.image})` }}
          onClick={() => navigate("/admin")} // Переход на Games
        >
          <div className="overlay">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Best;
