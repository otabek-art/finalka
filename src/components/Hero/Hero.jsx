import React from 'react';
import s from './Hero.module.scss';

const Hero = () => {
  return (
    <>
    <section className={s.hero}>
      <div className={s.container}>
        <div className={s.textBox}>
          <h1 className={s.title}>
            The furniture brand <br /> for  the  future with timeless designs
          </h1>
          <button className={s.button}>View collection</button>
          <p className={s.description}>
            A new era in eco-friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors and a beautiful way to
            display things digitally using modern web technologies.
          </p>
        </div>
        <div className={s.imageBox}>
          <img src="https://kengmakon.uz/_next/image?url=https%3A%2F%2Fcdn.kengmakon.uz%2Fuploads%2F2024%2F10%2F23%2F16%2F15%2F1729689337463-449523338.webp&w=3840&q=75" alt="Modern chair design" className={s.image} />
        </div>
      </div>
    </section>



    <section className={s.section1}>
      <div className={s.container}>
        <div className={s.wrapper1}>
          <h3 className={s.makes}>What makes our brand different</h3>

          <div className={s.cards1}>
            <div className={s.card1}>
              <p className={s.icon}>🚚</p>
              <h5 className={s.title}>Next day as standard</h5>
              <p className={s.description}>
                Order before 3pm and get your order the next day as standard
              </p>
            </div>

            <div className={s.card1}>
              <p className={s.icon}>🛠️</p>
              <h5 className={s.title}>Made by true artisans</h5>
              <p className={s.description}>
                Handmade crafted goods made with real passion and craftsmanship
              </p>
            </div>

            <div className={s.card1}>
              <p className={s.icon}>💳</p>
              <h5 className={s.title}>Unbeatable prices</h5>
              <p className={s.description}>
                For our materials and quality, you won’t find better prices anywhere
              </p>
            </div>

            <div className={s.card1}>
              <p className={s.icon}>♻️</p>
              <h5 className={s.title}>Recycled packaging</h5>
              <p className={s.description}>
                We use 100% recycled packaging to ensure our footprint is manageable
              </p>
            </div>
          </div>
      


</div>
  </div>
</section>

    </>
  );
};

export default Hero;
