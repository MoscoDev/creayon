import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { getCartData, initialState } from "../slices/cartSlice";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function payment() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  let token = localStorage.getItem("token");
  let router = useRouter();
  useEffect(() => {
    if (token == null) {
      router.push("/login");
    }
  }, []);
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

  const cart = useSelector((state) => state.cart.value);
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  let { cartItems } = cart;
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

  const price = (subtotal + 3) * 100;

  const handleUpdateCart = () => {
    var data = cart;

    var config = {
      method: "delete",
      url: "https://creayonbackend.herokuapp.com/api/v1/cart/" + user._id,
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then(function (response) {
        if (response.data.success !== true) {
          info("error while updating cart");
          return response.data.message;
        } else if (response.data.message == "Token is not valid") {
          () => router.push("./login");
        }
        dispatch(getCartData(initialState.value));
       

        // alert("cart updated successfully");
      })
      .catch(function (error) {
        setDisabled(false);
        info(error.message);
      });
  };

  function SquadPay() {
    const squadInstance = new squad({
      onClose: () => console.log("Widget closed"),
      onLoad: () => {
        console.log("Widget loaded successfully", cart);
      },
      onSuccess: async () => {
        handleUpdateCart();
        console.log(`Linked successfully`);
        
      },
      key: "sandbox_pk_e1e0548296b50d11aa1034556f6a04dfd2094f0e77ba",
      //Change key (test_pk_sample-public-key-1) to the key on your Squad Dashboard
      email: user.email,
      amount: price,
      //Enter amount in Naira or Dollar (Base value Kobo/cent already multiplied by 100)
      currency_code: "USD",
      metadata: cart,
    });
    squadInstance.setup();
    squadInstance.open();
  }
  return (
    <div className="layout">
      <ToastContainer />
      <Head>
        <title>SQUAD</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        <script src="https://checkout.squadco.com/widget/squad.min.js"></script>
      </Head>
      <form style={{}} className="text-left">
        <div
          className="text-left"
          style={{
            color: "var(--orange)",
            fontSize: "25px",
            fontFamily: "'Recoleta', sans-serif",
          }}
        >
          Creayon Checkout
        </div>

        <div className="row text-left">
          <div className="col-lg-4">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email-address"
              className="form-control"
              required
              value={user.email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
          </div>
          <div className="col-lg-4">
            <label htmlFor="amount">Amount</label>
            <input
              type="tel"
              id="amount"
              className="form-control"
              required
              disabled
              value={"$" + price / 100}
            />
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <label>First Name</label>
            <input
              type="text"
              id="first-name"
              className="form-control"
              value={user.firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <br />
          </div>
          <div className="col-lg-4">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              className="form-control"
              value={user.lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <br />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-submit">
            <button
              type="button"
              onClick={SquadPay}
              className="btn btn-lg"
              style={{
                backgroundColor: "var(--orange)",
                color: "white",
                position: "fixed",
                bottom: "20px",
                width: "80%",
                left: "50%",
                transform: " translateX(-50%)",
              }}
            >
              Check Out
            </button>
            <br />
            <br />
          </div>
        </div>
      </form>
    </div>
  );
}

export default payment;
