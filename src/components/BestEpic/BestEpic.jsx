import React from 'react';
import "./BestEpic.scss"; // Подключаем стили

const BestEpic = () => {
  return (
    <div className="best-epic">
      <div className="best-epic__image">
        <img
          src="https://cdn1.epicgames.com/offer/fn/EN_BXECO_33-00_Shooter_EGS_Launcher_Blade_2560x1440_2560x1440-36e1ff15dc00cd506986a2565764bbd3?resize=1&w=480&h=270&quality=medium"
          alt="Fortnite"
        />
      </div>
      <div className="best-epic__info">
        <h2>Fortnite</h2>
        <p>
          The most popular game on Epic Games is Fortnite. This is a battle royale game with
          unique building mechanics and dynamic gameplay that attracts millions of players.
        </p>
        <a
          href="https://www.epicgames.com/fortnite/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Epic Games
        </a>
      </div>
    </div>
  );
};

export default BestEpic;
