import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section brand">
          <h1>Gamix-G</h1>
          <p>
            Gamix-G is a modern platform for gaming and sports enthusiasts,
            offering solutions for online games, news portals, and related
            services. Perfect for both personal and small business projects.
          </p>
        </div>
        <div className="footer-section company">
          <h2>Company</h2>
          <p>
            Explore our resources to learn more about our company and its
            services.
          </p>
          <ul>
            <li>Support Center</li>
            <li>About Us</li>
            <li>Our Blog</li>
            <li>Frequently Asked Questions</li>
          </ul>
        </div>
        <div className="footer-section games">
          <h2>Games & Cards</h2>
          <p>
            Dive into a wide range of games and categories tailored to every
            gamer.
          </p>
          <ul>
            <li>All Games</li>
            <li>Action Games</li>
            <li>Hero Adventures</li>
            <li>Robot Challenges</li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>
            Reach out to us for support, questions, or partnership opportunities.
          </p>
          <ul>
            <li>Email: contact@example.com</li>
            <li>Phone: +1 234-567-890</li>
            <li>Find us on Google Maps</li>
          </ul>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-pinterest-p"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Terms of Service | Secure Payments | Privacy Policy | Contact Us |
          FAQs
        </p>
      </div>
    </footer>
  );
};

export default Footer;
