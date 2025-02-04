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
          <div className="steam__image"></div>
          <div className="steam__content">
            <h2 className="steam__subtitle">ABOUT ME</h2>
            <p>
              It is Muhammad Faiz Khan, a passionate <b>learner, designer</b>{" "}
              and <b>developer</b>. It’s me who imagine my own universe and
              struggling a lot to have my imaginations in real life. I first
              started my journey to make <b>money</b> since 2020, when I realize
              that there is nothing valuable without <b>money</b>.
            </p>
            <p>
              With that said, I <b>Alhamdolillah</b> made my first{" "}
              <b>$420</b> from freelance platforms not by passion but as a
              learner. I’m involved also in learning how to invest and take
              high profit from <b>stocks</b> and <b>crypto</b> currency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steam;
