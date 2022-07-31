import React from 'react'
import BottomNav from '../Components/BottomNav';
import Title from '../Components/Title';
import TopNav from '../Components/TopNav';
import style from "../styles/cart.module.css";

function cart() {
  return (
    <div className={style.cartPage}>
      <TopNav />
      <div className={style.popularFoodContainer}>
        <Title text="Popular Food" size={"18px"} align="left" />
        <div className={style.popular}>
          <div className={style.popularItem}>
            <div
              className={style.popularItemPic}
              style={{ backgroundImage: "url(/img/biscuit.svg)" }}
            ></div>
            <div className={style.popularItemBody}>
              <strong>
                <p className={style.popularItemName}>Biscuits</p>
              </strong>
              <small
                className={style.light}
                style={{ fontSize: "9px", whiteSpace: "nowrap" }}
              >
                Sweet Bicuits, so so yummy
              </small>
              <p className={style.popularprice}>$3.98</p>
            </div>
          </div>
          <div className={style.popularItem}>
            <div
              className={style.popularItemPic}
              style={{ backgroundImage: "url(/img/biscuit.svg)" }}
            ></div>
            <div className={style.popularItemBody}>
              <strong>
                <p className={style.popularItemName}>Biscuits</p>
              </strong>
              <small
                className={style.light}
                style={{ fontSize: "9px", whiteSpace: "nowrap" }}
              >
                Sweet Bicuits, so so yummy
              </small>
              <p className={style.popularprice}>$3.98</p>
            </div>
          </div>
          <div className={style.popularItem}>
            <div
              className={style.popularItemPic}
              style={{ backgroundImage: "url(/img/biscuit.svg)" }}
            ></div>
            <div className={style.popularItemBody}>
              <strong>
                <p className={style.popularItemName}>Biscuits</p>
              </strong>
              <small
                className={style.light}
                style={{ fontSize: "9px", whiteSpace: "nowrap" }}
              >
                Sweet Bicuits, so so yummy
              </small>
              <p className={style.popularprice}>$3.98</p>
            </div>
          </div>
        </div>
      </div>
     <BottomNav /> 
    </div>
  );
}

export default cart