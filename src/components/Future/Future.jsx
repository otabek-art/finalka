import React from "react";
import s from "./Future.module.scss";

const Future = () => {
  return (
    <>
      <section className={s.ceramics}>
        <div className="container">
          <h2>New ceramics</h2>

          <div className={s.cards2}>
            <div className={s.card2}>
              <img src="https://img01.flagma.uz/photo/prodaem-stul-eames-kupite-ego-u-proizvoditelya-1872277_big.jpg" alt="The Dandy chair" className={s.img} />
              <p className={s.text}>The Dandy chair</p>
              <p className={s.price}>£250</p>
            </div>

            <div className={s.card2}>
              <img src="/Parent.png" alt="Rustic Vase Set" className={s.img} />
              <p className={s.text}>Rustic Vase Set</p>
              <p className={s.price}>£155</p>
            </div>

            <div className={s.card2}>
              <img src="https://stupino.mybloom.ru/upload/iblock/07b/07b8e3b4abddea12622552570b1a92de.jpg" alt="The Silky Vase" className={s.img} />
              <p className={s.text}>The Silky Vase</p>
              <p className={s.price}>£125</p>
            </div>

            <div className={s.card2}>
              <img src="https://www.fedomo.ru/images/vybiraem-nastolnuyu-lampu-dlya-rabochego-stola-1.jpg" alt="The Lucy Lamp" className={s.img} />
              <p className={s.text}>The Lucy Lamp</p>
              <p className={s.price}>£399</p>
            </div>
          </div>
        </div>
        <button className={s.btn}> View collection</button>
      </section>

      <section className={s.popularProducts}>
        <div className="container">
          <h2>Our popular products</h2>
          <div className={s.cards}>
            <div className={s.card}>
              <img src="/Large.png" alt="The Poplar suede sofa" className={s.image} />
              <p className={s.text}>The Poplar suede sofa</p>
              <p className={s.price}>£980</p>
            </div>

            <div className={s.card}>
              <img src="/Table.png" alt="The Dandy chair" className={s.image} />
              <p className={s.text}>The Dandy chair</p>
              <p className={s.price}>£250</p>
            </div>

            <div className={s.card}>
              <img
                src="/blackTable.png"
                alt="The Dandy chair"
                className={s.image}
              />
              <p className={s.text}>The Dandy chair</p>
              <p className={s.price}>£250</p>
            </div>
          </div>
          <button className={s.btn}>View collection</button>
        </div>
      </section>
    </>
  );
};

export default Future;
