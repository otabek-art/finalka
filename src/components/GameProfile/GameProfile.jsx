import React from 'react';
import { useParams } from 'react-router-dom';
import './GameProfile.scss';

const GameProfile = () => {
  const { id } = useParams();

  const games = [
    {
      id: 1,
      title: 'Heroic Dungeon Keys',
      description: 'Access Burning Crusade dungeons on heroic difficulty.',
      image: '/public/image1.svg',
      price: 220,
      details: 'Detailed description about Heroic Dungeon Keys.',
    },
    {
      id: 2,
      title: 'Gladiator Title Boost',
      description: 'Get Gladiator title in WoW Shadowlands.',
      image: 'https://via.placeholder.com/600x400',
      price: 300,
      details: 'Detailed description about Gladiator Title Boost.',
    },
    {
      id: 3,
      title: 'Sylvanas Windrunner Kill',
      description: 'Defeat Sylvanas Windrunner in WoW.',
      image: 'https://via.placeholder.com/600x400',
      price: 400,
      details: 'Detailed description about Sylvanas Windrunner Kill.',
    },
  ];

  const game = games.find((game) => game.id === parseInt(id));

  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>{game.title}</h1>
        <p>{game.description}</p>
      </div>
      <div className="profile-content">
        <img src={game.image} alt={game.title} className="profile-image" />
        <p>{game.details}</p>
        <span className="price">{game.price}$</span>
      </div>
    </div>
  );
};

export default GameProfile;
