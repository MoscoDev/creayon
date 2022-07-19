import React, { useEffect, useState } from 'react'
import TopNav from '../Components/TopNav'
import BottomNav from '../Components/BottomNav'
import style from '../styles/Home.module.css'

import {AiOutlineSearch} from 'react-icons/ai'
import Title from '../Components/Title'
import Counter from '../Components/counter'

export default function home() {
   
  const [welcome, setWelcome] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setWelcome(false);
    }, 3000);
  }, []);
  return (
    welcome ? 
      (
        <div className={styles.welcome} style={{position: "fixed", top:"0px"}}>
          <div className={styles.welcomeText}>
            <h1>Creayon Food</h1>
          </div>
        </div>
      ) :
       (
    <div className={style.home}>
      <TopNav />
      <div className={style.intro}>
        <p className={style.introText}>
          Hello, <span className={style.orange}>Maria </span>
        </p>
        <p className={style.light}>What do you want to eat today</p>
      </div>
      <div className={style.searchBarContainer}>
        <div className={style.searchBar}>
          <AiOutlineSearch size={"1.7rem"} />
          <input
            className={style.search}
            placeholder="Search"
            type="search"
            name=""
            id=""
          />
        </div>
        <div
          className="filter"
          style={{
            width: "43px",
            background: "#F24E1E",
            borderRadius: "10px 10px 10px 20px",
            height: "38px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
            width="21"
            height="17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5625 1.89069C6.2144 1.89069 5.88056 1.99017 5.63442 2.16723C5.38828 2.3443 5.25 2.58446 5.25 2.83488C5.25 3.08529 5.38828 3.32545 5.63442 3.50252C5.88056 3.67959 6.2144 3.77906 6.5625 3.77906C6.9106 3.77906 7.24444 3.67959 7.49058 3.50252C7.73672 3.32545 7.875 3.08529 7.875 2.83488C7.875 2.58446 7.73672 2.3443 7.49058 2.16723C7.24444 1.99017 6.9106 1.89069 6.5625 1.89069ZM2.84812 1.89069C3.11929 1.33784 3.62216 0.859101 4.28741 0.520474C4.95267 0.181846 5.74755 0 6.5625 0C7.37745 0 8.17233 0.181846 8.83759 0.520474C9.50284 0.859101 10.0057 1.33784 10.2769 1.89069H19.6875C20.0356 1.89069 20.3694 1.99017 20.6156 2.16723C20.8617 2.3443 21 2.58446 21 2.83488C21 3.08529 20.8617 3.32545 20.6156 3.50252C20.3694 3.67959 20.0356 3.77906 19.6875 3.77906H10.2769C10.0057 4.33192 9.50284 4.81065 8.83759 5.14928C8.17233 5.48791 7.37745 5.66975 6.5625 5.66975C5.74755 5.66975 4.95267 5.48791 4.28741 5.14928C3.62216 4.81065 3.11929 4.33192 2.84812 3.77906H1.3125C0.964403 3.77906 0.630564 3.67959 0.384423 3.50252C0.138281 3.32545 0 3.08529 0 2.83488C0 2.58446 0.138281 2.3443 0.384423 2.16723C0.630564 1.99017 0.964403 1.89069 1.3125 1.89069H2.84812ZM14.4375 7.55581C14.0894 7.55581 13.7556 7.65529 13.5094 7.83236C13.2633 8.00943 13.125 8.24959 13.125 8.5C13.125 8.75041 13.2633 8.99057 13.5094 9.16764C13.7556 9.34471 14.0894 9.44419 14.4375 9.44419C14.7856 9.44419 15.1194 9.34471 15.3656 9.16764C15.6117 8.99057 15.75 8.75041 15.75 8.5C15.75 8.24959 15.6117 8.00943 15.3656 7.83236C15.1194 7.65529 14.7856 7.55581 14.4375 7.55581ZM10.7231 7.55581C10.9943 7.00296 11.4972 6.52422 12.1624 6.1856C12.8277 5.84697 13.6226 5.66512 14.4375 5.66512C15.2524 5.66512 16.0473 5.84697 16.7126 6.1856C17.3778 6.52422 17.8807 7.00296 18.1519 7.55581H19.6875C20.0356 7.55581 20.3694 7.65529 20.6156 7.83236C20.8617 8.00943 21 8.24959 21 8.5C21 8.75041 20.8617 8.99057 20.6156 9.16764C20.3694 9.34471 20.0356 9.44419 19.6875 9.44419H18.1519C17.8807 9.99704 17.3778 10.4758 16.7126 10.8144C16.0473 11.153 15.2524 11.3349 14.4375 11.3349C13.6226 11.3349 12.8277 11.153 12.1624 10.8144C11.4972 10.4758 10.9943 9.99704 10.7231 9.44419H1.3125C0.964403 9.44419 0.630564 9.34471 0.384423 9.16764C0.138281 8.99057 0 8.75041 0 8.5C0 8.24959 0.138281 8.00943 0.384423 7.83236C0.630564 7.65529 0.964403 7.55581 1.3125 7.55581H10.7231ZM6.5625 13.2209C6.2144 13.2209 5.88056 13.3204 5.63442 13.4975C5.38828 13.6746 5.25 13.9147 5.25 14.1651C5.25 14.4155 5.38828 14.6557 5.63442 14.8328C5.88056 15.0098 6.2144 15.1093 6.5625 15.1093C6.9106 15.1093 7.24444 15.0098 7.49058 14.8328C7.73672 14.6557 7.875 14.4155 7.875 14.1651C7.875 13.9147 7.73672 13.6746 7.49058 13.4975C7.24444 13.3204 6.9106 13.2209 6.5625 13.2209ZM2.84812 13.2209C3.11929 12.6681 3.62216 12.1893 4.28741 11.8507C4.95267 11.5121 5.74755 11.3302 6.5625 11.3302C7.37745 11.3302 8.17233 11.5121 8.83759 11.8507C9.50284 12.1893 10.0057 12.6681 10.2769 13.2209H19.6875C20.0356 13.2209 20.3694 13.3204 20.6156 13.4975C20.8617 13.6746 21 13.9147 21 14.1651C21 14.4155 20.8617 14.6557 20.6156 14.8328C20.3694 15.0098 20.0356 15.1093 19.6875 15.1093H10.2769C10.0057 15.6622 9.50284 16.1409 8.83759 16.4795C8.17233 16.8182 7.37745 17 6.5625 17C5.74755 17 4.95267 16.8182 4.28741 16.4795C3.62216 16.1409 3.11929 15.6622 2.84812 15.1093H1.3125C0.964403 15.1093 0.630564 15.0098 0.384423 14.8328C0.138281 14.6557 0 14.4155 0 14.1651C0 13.9147 0.138281 13.6746 0.384423 13.4975C0.630564 13.3204 0.964403 13.2209 1.3125 13.2209H2.84812Z"
              fill="#F8F8F8"
            />
          </svg>
        </div>
      </div>
      <div className={style.filterBox}>
        <div className={style.filter}>
          <img src="/img/burger.svg" alt="" />
          <span>Burger</span>
        </div>
        <div className={style.filter}>
          <img src="/img/vegetable.svg" alt="" />
          <span>Veggie</span>
        </div>
        <div className={style.filter}>
          <img src="/img/friedfood.svg" alt="" />
          <span>fried food</span>
        </div>
        <div className={style.filter}>
          <img src="/img/burger.svg" alt="" />
          <span>Burger</span>
        </div>
      </div>
      <div className={style.foodMenu}>
        <div className={style.foodMenuItem}>
          <div className={style.foodMenuBody}>
            <strong>
              <p>Jollof Rice</p>
            </strong>
            <small className={style.light} style={{ fontSize: "11px" }}>
              Jollof rice with chicken
            </small>
            <p className={style.price}>$9.98</p>
          </div>
          <div
            className={style.foodMenuHeader}
            style={{ backgroundImage: "url(/img/jollof.svg)", zIndex: "20" }}
          ></div>
        </div>
       
        <div className={style.foodMenuItem}>
          <div className={style.foodMenuBody}>
            <strong>
              <p>Spicy pork</p>
            </strong>
            <small className={style.light} style={{ fontSize: "11px" }}>
              Stir-fried hot and spicy pork
            </small>
            <p className={style.price}>$9.98</p>
          </div>
          <div
            className={style.foodMenuHeader}
            style={{ backgroundImage: "url(/img/pork.svg)", zIndex: "20" }}
          ></div>
        </div>
        <div className={style.foodMenuItem}>
          <div className={style.foodMenuBody}>
            <strong>
              <p>Fried Chicken</p>
            </strong>
            <small className={style.light} style={{ fontSize: "11px" }}>
              Chicken and chips
            </small>
      
            <p className={style.price}>{"$5.98    "}<Counter   /></p>
          </div>
          <div
            className={style.foodMenuHeader}
            style={{ backgroundImage: "url(/img/chicken.svg)", zIndex: "20" }}
          ></div>
        </div>
      </div>
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
    </div>)
  );
}
