import React from "react";
import "./Steam.scss"; // Подключаем стили

const Steam = () => {
  return (
    <section className="about">
      <div className="container">
        <h1 className="steam__title">
          There are different types of games by type, fantasy, fighting, history
          but did you know about game stores?
        </h1>
        <div className="steam__wrap">
          <div className="steam__image">
            <img className="steam__image"  src="/public/steam.svg" alt="Steam Emblem" />
          </div>
          <div className="steam__content">
           
            <p>
            Steam is a digital distribution service and storefront developed by Valve Corporation. <br /> It was launched as a software client in September 2003 to provide game updates automatically for Valve's games and expanded to distributing third-party titles in late 2005. <br /> Steam offers various features, such as game server matchmaking with Valve Anti-Cheat (VAC) <br /> measures, social networking, and game streaming services. The Steam client functions include update maintenance, cloud storage, and community features such as direct messaging, an in-game overlay, discussion forums, and a virtual collectable marketplace. <br /> The storefront also offers productivity software, game soundtracks, videos, and sells hardware made by Valve, such as the Index and Steam Deck.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steam;
