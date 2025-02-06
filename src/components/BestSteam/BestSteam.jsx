import React from "react";
import "./BestSteam.scss"; // Подключаем стили

const BestSteam = () => {
  return (
    <div className="best-steam">
      <div className="best-steam__image">
        <img
          src="https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg"
          alt="Counter-Strike 2"
        />
      </div>
      <div className="best-steam__info">
        <h2>Counter-Strike 2</h2>
        <p>
        The most popular game on Steam is Counter-Strike 2. It is an iconic multiplayer shooter where players fight in 5v5 mode.
        </p>
        <a
          href="https://store.steampowered.com/app/730/CounterStrike_2/"
          target="_blank"
          rel="noopener noreferrer"
        >
    View on Steam
        </a>
      </div>
    </div>
  );
};

export default BestSteam;
