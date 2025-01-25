import React from 'react';
import './GameProfile.scss';

const GameProfile = () => {
  const cards = [
    {
      id: 1,
      image: '/public/image8.svg', // Замените на фактические пути к вашим изображениям
      title: 'Sylvanas Windrunner Kill',
      price: '220K',
      description: 'Heroic Dungeon Keys',
      subtitle: 'Access Burning Crusade dungeons on heroic difficulty.'
    },
    {
      id: 2,
      image: '/public/image9.svg',
      title: 'Sylvanas Windrunner Kill',
      price: '220K',
      description: 'Gladiator Title Boost',
      subtitle: 'Get Gladiator title in WoW Shadowlands.'
    },
    {
      id: 3,
      image: '/public/image10.svg',
      title: 'Sylvanas Windrunner Kill',
      price: '220K',
      description: 'Sylvanas Windrunner Kill',
      subtitle: 'Defeat Sylvanas Windrunner in WoW.'
    },
  ];

  return (
    <div className="profile-container">
      <div className="cards">
        {cards.map(card => (
          <div key={card.id} className="card">
            <img src={card.image} alt={card.title} className="card-image" />
            <div className="card-content">
              <div className="card-header">
                <span className="stars">★★★★★</span>
              </div>
              <h2 className="card-title">{card.title}</h2>
              <p className="card-price">{card.price} <span className="currency">🪙</span></p>
            </div>
            <div className="card-footer">
              <h4 className="card-description">{card.description}</h4>
              <p className="card-subtitle">{card.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameProfile;
