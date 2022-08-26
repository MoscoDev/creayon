import React, { useEffect, useState } from "react";
import BottomNav from "../Components/BottomNav";
import Title from "../Components/Title";
import TopNav from "../Components/TopNav";
import style from "../styles/cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseProductQuantity,
  increaseProductQuantity,
  getCartData,
} from "../slices/cartSlice";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styles from "../styles/counter.module.css";
import buttonstyles from "../styles/Button.module.css";
import axios from "axios";
import { BiChevronDown } from "react-icons/bi";
import { useRouter } from "next/router";

function cart() {
  const router =useRouter()
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);
  const user = useSelector((state) => state.user.value);
  const [count, setCount] = useState("");
  const { cartItems } = cart;
  let token = localStorage.getItem("token");
  console.log(cart);
  // const handleIncrement = () => setCount(cartItem.quantity + 1);
  // let router = useRouter();
  // const handleDecrement = () => (cartItem.quantity > 1 ? setCount(count - 1) : count);

  const handleUpdateCart = () => {
    var data = cart;

    var config = {
      method: "put",
      url:
        "https://creayonbackend.herokuapp.com/api/v1/cart/update/" + user._id,
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if (response.data.success !== true) {
          return response.data.message;
        }
        const updatedCart = response.data.cart;
        dispatch(getCartData(updatedCart));
        alert("cart updated successfully");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [subtotal, setSubtotal] = useState(0);

  const getSubTotal = (cartItems) => {
    let sum = 0;
    for (let index = 0; index < cartItems.length; index++) {
      const subtotal = cartItems[index].subtotal;
      sum = sum + subtotal;

      console.log(sum);
    }
    setSubtotal(sum);
    return sum;
  };

  useEffect(() => {
    getSubTotal(cartItems);
  }, [cartItems]);

  const [display, setDisplay] = useState("none");
  return (
    <div className={style.cartPage}>
      <TopNav />
      <div className={style.popularFoodContainer}>
        <div className={style.top}>
          <div className={style.intro}>
            <p className={style.introText} style={{ color: "#4d4d4d" }}>
              <span
                style={{ color: "var(--orange)" }}
              >{`${user.username}`}</span>{" "}
              cart
            </p>
          </div>
          <button
            className={buttonstyles[`orange`] + " " + buttonstyles[`sm`]}
            onClick={handleUpdateCart}
            style={{
              borderRadius: "5px",
              padding: "5px",
            }}
          >
            update cart
          </button>
        </div>

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
                    Sweet meals, so so yummy
                  </small>
                  <p className={style.popularprice}>${cartItem.subtotal}</p>
                </div>
                <div className={styles.counter}>
                  <AiOutlineMinus
                    onClick={() =>
                      dispatch(decreaseProductQuantity(cartItem._id))
                    }
                  />
                  {cartItem.quantity}
                  <AiOutlinePlus
                    onClick={() =>
                      dispatch(increaseProductQuantity(cartItem._id))
                    }
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

      <div className={style.summary} id="summary" style={{ display: display }}>
        <div className={style.summary_rows}>
          <Title text={`Summary`} size={"15px"} align="left" />
          <button>
            <BiChevronDown
              style={{
                fontSize: "30px",
                padding: "1px",
                borderRadius: "50%",
                border: "1px var(--lightColor) solid",
              }}
              onClick={() => {
                setTimeout(() => {
                  setDisplay("none");
                }, 50);
                
              }}
            />
          </button>
        </div>
        <div className={style.summary_rows}>
          <p className={style.introText}>items</p>
          <p className={style.introText}>{cartItems.length}</p>
        </div>
        <div className={style.summary_rows}>
          <p className={style.introText}>Subtotal</p>
          <p className={style.introText}>{subtotal}</p>
        </div>
        <div className={style.summary_rows}>
          <p className={style.introText}>Delivery</p>
          <p className={style.introText}>$3</p>
        </div>
        <div className={style.summary_rows}>
          <p
            className={style.introText}
            style={{
              color: "var(--orange)",
              fontSize: "15.5px",
              margin: "12px 0px",
            }}
          >
            Total
          </p>
          <p
            className={style.introText}
            style={{
              color: "var(--orange)",
              fontSize: "15.5px",
              margin: "12px 0px",
            }}
          >
            $ {subtotal + 3}
          </p>
        </div>
        <button
          className={buttonstyles[`orange`] + " " + buttonstyles[`lg`]}
          // onClick={router.push("/paymentmethod")}
          style={{
            textAlign: "center",
            margin: "15px auto",
            position: "sticky",
            bottom: "70px",
          }}
        >
          Checkout
        </button>
      </div>

      <button
        className={buttonstyles[`orange`] + " " + buttonstyles[`lg`]}
        onClick={() => {
          setDisplay("flex");
        }}
        style={{
          textAlign: "center",
          margin: "15px auto",
          position: "sticky",
          bottom: "70px",
          display: display == "flex" ? "none" : "block",
        }}
      >
        place order
      </button>
      <BottomNav />
    </div>
  );
}

export default cart;
