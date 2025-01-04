import React from 'react';
import './Robot.scss';

const Robot = () => {
  return (
    <div className="hero-section">
      <div className="content">
        {/* Левый блок с изображением */}
        <div className="image-container">
          <div className="hand-icon">
            <img
              src="/public/robot.png" // Укажите правильный путь к изображению
              alt="Game Controller"
              className="controller"
            />
          </div>
        </div>

        {/* Правый блок с текстом */}
        <div className="text-container">
          <h4>About Robot Games</h4>
          <h1>
            Robots is an Interactive <span className="highlight">Card Games</span>
          </h1>
          <p>
            Gaming and Sports Template that is designed to build modern Online Game, Gaming News
            Portal, Gaming Online News Portal, and other News services websites. It is suitable
            for any kind of small business activity.
          </p>
       
        </div>
      </div>
    </div>
  );
};

export default Robot;
