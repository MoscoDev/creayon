import React, { useState } from "react";
import BottomNav from "../Components/BottomNav";
import Title from "../Components/Title";
import TopNav from "../Components/TopNav";
import style from "../styles/cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../slices/cartSlice";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styles from "../styles/counter.module.css";

function cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);
const [count, setCount] = useState("");
  const { cartItems } = cart;
  // console.log(cart);
  // const handleIncrement = () => setCount(cartItem.quantity + 1);
  // let router = useRouter();
  // const handleDecrement = () => (cartItem.quantity > 1 ? setCount(count - 1) : count);

  return (
    <div className={style.cartPage}>
      <TopNav />
      <div className={style.popularFoodContainer}>
        <Title text="my cart" size={"15px"} align="left" />
        <div className={style.popular}>
          {cartItems.length >= 1 ? (
            cartItems?.map((cartItem) => (
              <div className={style.popularItem} key={cartItem._id}>
                <div
                  className={style.popularItemPic}
                  style={{ backgroundImage: `url(${cartItem.pic})` }}
                ></div>
                <div className={style.popularItemBody}>
                  <strong>
                    <p className={style.popularItemName}>{cartItem.name}</p>
                  </strong>
                  <small
                    className={style.light}
                    style={{ fontSize: "9px", whiteSpace: "nowrap" }}
                  >
                    Sweet Bicuits, so so yummy
                  </small>
                  <p className={style.popularprice}>${cartItem.subtotal}</p>
                </div>
                <div className={styles.counter}>
                  
                  <AiOutlineMinus
                    onClick={() =>
                      count > 1 ? setCount(count - 1) : count
                    }
                  />
                  <input style={{width:"30px"}} value={count} onChange={(e) => setCount(e.target.value)}
                  onLoad ={
                    ()=>{setCount(cartItem.quantity)}
                  }
                  />
                  <AiOutlinePlus
                    onClick={() => setCount(count + 1)}
                  />
                </div>
              </div>
            ))
          ) : (
            <div
              className={style.popularItem}
              style={{ justifyContent: "center", height: "70px" }}
            >
              {/* <div className={style.popularItemPic}></div> */}
              <div className={style.popularItemBody}>
                <strong>
                  <p className={style.popularItemName}>
                    ooops, No food in cart{" "}
                  </p>
                </strong>
                {/* <small
                  className={style.light}
                  style={{ fontSize: "9px", whiteSpace: "nowrap" }}
                >
                  Sweet Bicuits, so so yummy
                </small>
                <p className={style.popularprice}>$3.98</p> */}
              </div>
            </div>
          )}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

export default cart;
