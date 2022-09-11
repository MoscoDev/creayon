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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function cart() {
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);
  const user = useSelector((state) => state.user.value);
  const [count, setCount] = useState("");
  const { cartItems } = cart;
  let token = localStorage.getItem("token");
  
  
  const notify = (message) =>
    toast.success(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const info = (message) =>
    toast.warning(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleUpdateCart = () => {
    var data = cart;
    setDisabled(true)
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
       
        if (response.data.success !== true) {
          info("error while updating cart");
          return response.data.message;
        }
        else if (response.data.message == "Token is not valid") {
          ()=>router.push('./login')
        }
        const updatedCart = response.data.cart;
        dispatch(getCartData(updatedCart));
        notify("cart updated");
        setDisabled(false)
        // alert("cart updated successfully");
      })
      .catch(function (error) {
        setDisabled(false);
        info(error.message);
      });
  };

  const [subtotal, setSubtotal] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const getSubTotal = (cartItems) => {
    let sum = 0;
    for (let index = 0; index < cartItems.length; index++) {
      const subtotal = cartItems[index].subtotal;
      sum = sum + subtotal;
    }
    
    setSubtotal(sum);
    return sum;
  };

  useEffect(() => {
    getSubTotal(cartItems);
  }, [cartItems]);
  const [buttonDisplay, setButtonDisplay] = useState('none')
  const [display, setDisplay] = useState("none");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if ((user.username == "" || null) && !loaded) {
      router.push("/login");
    } else {
      setLoaded(true);
    }
  }, []);

  return loaded ? (
    <div className={style.cartPage}>
      <ToastContainer />
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
            disabled={disabled}
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
                <div className={style.left}>
                  <div
                    className={style.popularItemPic}
                    style={{
                      backgroundImage: `url(${cartItem.pic})`,
                      borderRadius: "50%",
                    }}
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
                </div>
                <div className={style.counter}>
                  <AiOutlinePlus
                    onClick={() =>
                      dispatch(increaseProductQuantity(cartItem._id))
                    }
                  />
                  <p>{cartItem.quantity}</p>
                  <AiOutlineMinus
                    onClick={() =>
                      dispatch(decreaseProductQuantity(cartItem._id))
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

      <div className={style.summary} id="summary" style={{display: "none"}} >
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
                  document.getElementById("summary").style.transform =
                    "translateY(296px)";
                }, 500);
          document.getElementById("summary").style.display = "none";
          document.getElementById("placeOrder").style.display = "block";
          
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
          onClick={() => router.push("/paymentmethod")}
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

      <div
      id="placeOrder"
        className={buttonstyles[`orange`] + " " + buttonstyles[`lg`]}
        onClick={() => {
          setDisplay("flex");
          document.getElementById("placeOrder").style.display = "none"
           
          document.getElementById("summary").style.display = "flex";
          setTimeout(()=>{document.getElementById("summary").style.transform = "translateY(0px)"}, 500)
          
        }}
        style={{
          textAlign: "center",
          margin: "15px auto",
          position: "sticky",

          bottom: "70px",
          
        }}
      >
        place order
      </div>
      <BottomNav />
    </div>
  ) : null;
}

export default cart;
