import React from "react";
import "./Streamer.scss"; // Подключение CSS

const Streamer = () => {
  return (
    <div className="streamer-container">
      <h2 className="streamer-title">
        <span className="streamer-subtitle">Streamer</span>
        <br />
        <span className="streamer-highlight">Featured Streamer</span>
      </h2>
      <div className="streamer-grid">
        <div className="streamer-card">
          <div className="streamer-image" style={{ backgroundImage: "url('/public/image5.svg')" }}>
            <div className="play-button">
            <a target="_blank" href="https://www.youtube.com/watch?v=q7j2d6YCQbg">
                <img src="/public/image7.png" alt="" />
                </a>
            </div>
          </div>
        </div>
        <div className="streamer-card">
          
          <div className="streamer-image" style={{ backgroundImage: "url('/public/image6.svg')" }}
          
          >
            <div className="play-button">
              <a target="_blank" href="https://www.youtube.com/watch?v=q7j2d6YCQbg">
                <img src="/public/image7.png" alt="" />

              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Streamer;