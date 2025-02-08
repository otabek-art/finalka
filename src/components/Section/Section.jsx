import React from "react";
import "./Section.scss";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <section className="sect">
        <div className="container">
            <div className="section">
            <div className="section__content">
        <h4>Game Tournament Here</h4>
        <h1>
          New <span>Games <br /></span> That You <span>Enjoy</span>
        </h1>
        <p>
          Gaming and Sports Template that is designed to build modern Online
          Game, Gaming News Portal, Gaming Online News Portal, and other News
          services websites. It is suitable for any kind of small business
          activity.
        </p>
        <div className="section__buttons">
          <Link  to="/Registration" href="#get-started" className="btn btn--primary">
            Get Started for Free
          </Link>
          <a target="_blank" href="https://youtu.be/7bvocbK7CaI?si=j--DzvUHQXDej5D1" className="btn btn--secondary">
            <span className="icon">▶</span> Watch Trailer
          </a>
        </div>
      </div>
      <div className="section__image">
        <img
          src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/How-to-make-an-awesome-gaming-logo-for-your-youtube-channel/header-how-to-make-an-awesome-gaming-logo-for-your-youtube-channel-designcrowd-blog.png"
          alt="Gaming Logo"
        />
      </div>
            </div>
 
        </div>
    
    </section>
  );
};

export default Section;
