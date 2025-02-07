import React from "react";
import s from "./Menu.module.scss";
const Menu = () => {
  return (
    <>
      <section className={s.menu}>
        <div className="container">
          <div className={s.wrap}>
            <div className={s.card}>
              <b>Menu</b>
              <b>New arrivals</b>
              <b>Best sellers</b>
              <b>Popular this week</b>
              <b>All products</b>
            </div>
            <div className={s.card}>
              <b>Categories</b>
              <b>Furniture</b>
              <b>Plant pots</b>
              <b>Chairs</b>
              <b>Crockery</b>
            </div>

            <div className={s.card}>
              <b>Our company</b>
              <b>About us</b>
              <b>Contact us</b>
              <b>Privacy</b>
              <b>Returns policy</b>
            </div>

            <div className={s.card}>
              <b>Join our mailing list</b>

              <form action="" className={s.form}>
              <input type="text" value="your@email.com"  />


                <button>Sign up</button>
                
              </form>
            </div>
          </div>
         

          <div className={s.wrap}>
            <b>Copyright 2022 Avion LTD</b>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
