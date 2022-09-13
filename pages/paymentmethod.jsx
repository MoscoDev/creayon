import React, { useEffect, useState } from 'react'
import Button from '../Components/Button';
import TopNav from '../Components/TopNav';
import style from  '../styles/payment.module.css'
import {useRouter} from 'next/router';

function paymentmethod() {
 const router = useRouter();
   let token = localStorage.getItem("token");
  const [cardType, setcardType] = useState("Credit Card");
useEffect(() => {
  if (token == null) {
    router.push("/login");
  }
}, []);
  

  const handleSubmit=()=>{
    console.log(cardType)
    if(cardType==="Credit Card"){
     router.push('/payment')
    }

  }
  return (
    <div className="layout">
      <TopNav/>
      <div className={style["article"]}>
        <p className={style.paragraph}>
          <strong>Select your payment method</strong>
        </p>
        <p>
          <small>Add a new credit/debit card</small>
        </p>
      </div>
      <div className={style["radio-btn-container"]}>
        <div
          className={style["radio-btn"]}
          onClick={() => {
            setcardType("Paypal");
          }}
        >
          <div className={style["icon"]}>
            <svg
              width="31"
              height="26"
              viewBox="0 0 31 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              
              <path
                d="M21.9975 9.46732C21.035 8.4403 19.2953 8 17.0696 8H10.6102C10.39 8.00001 10.177 8.07356 10.0095 8.20743C9.84206 8.3413 9.73109 8.52671 9.69658 8.73033L7.00698 24.7005C6.95352 25.0154 7.21398 25.3006 7.55491 25.3006H11.5428L12.5443 19.3533L12.5132 19.5395C12.5846 19.1191 12.9686 18.809 13.4233 18.809H15.3184C19.0411 18.809 21.9561 17.3934 22.8076 13.2982C22.8329 13.1771 22.8548 13.0592 22.8737 12.944C22.7662 12.8908 22.7662 12.8908 22.8737 12.944C23.1272 11.4304 22.872 10.4001 21.9975 9.46732Z"
                fill="#27346A"
              />
              <path
                d="M14.0702 12.3988C14.1792 12.3502 14.2984 12.325 14.4192 12.3251H19.4833C20.083 12.3251 20.6423 12.3616 21.1534 12.4386C21.2964 12.46 21.4387 12.4855 21.5801 12.515C21.7804 12.5564 21.9784 12.6071 22.1734 12.6668C22.4247 12.7454 22.6587 12.8369 22.8738 12.944C23.1272 11.4298 22.872 10.4001 21.9975 9.46732C21.0345 8.4403 19.2953 8 17.0696 8H10.6096C10.1548 8 9.76786 8.31 9.69658 8.73033L7.00698 24.6999C6.95352 25.0153 7.21398 25.3001 7.55436 25.3001H11.5428L13.6206 12.964C13.641 12.8427 13.6926 12.7279 13.7709 12.6295C13.8493 12.531 13.952 12.4518 14.0702 12.3988Z"
                fill="#27346A"
              />
              <path
                d="M22.8076 13.2982C21.9561 17.3928 19.0412 18.809 15.3183 18.809H13.4228C12.968 18.809 12.5839 19.1191 12.5133 19.5395L11.2673 26.9343C11.2207 27.2099 11.4484 27.4596 11.7462 27.4596H15.1079C15.3004 27.4595 15.4867 27.3952 15.6331 27.2781C15.7795 27.161 15.8764 26.9988 15.9065 26.8207L15.9393 26.6603L16.5729 22.901L16.6137 22.6932C16.6438 22.5151 16.7407 22.353 16.8871 22.2359C17.0335 22.1187 17.2197 22.0544 17.4123 22.0543H17.9154C21.1718 22.0543 23.7217 20.8157 24.4668 17.2335C24.7779 15.7365 24.6169 14.4867 23.7942 13.6088C23.5446 13.3429 23.2347 13.1233 22.8737 12.944C22.8541 13.0598 22.8329 13.1771 22.8076 13.2982Z"
                fill="#2790C3"
              />
              <path
                d="M21.9825 12.6114C21.8497 12.5751 21.7157 12.543 21.5806 12.515C21.4392 12.4859 21.2969 12.4606 21.154 12.4391C20.6423 12.3616 20.0834 12.325 19.4832 12.325H14.4197C14.2988 12.3247 14.1795 12.3501 14.0707 12.3993C13.9523 12.4522 13.8495 12.5313 13.7711 12.6298C13.6928 12.7283 13.6413 12.8431 13.621 12.9645L12.5448 19.3532L12.5137 19.5395C12.5845 19.1191 12.9685 18.809 13.4233 18.809H15.3189C19.0417 18.809 21.9566 17.3934 22.8081 13.2982C22.8334 13.1771 22.8547 13.0597 22.8742 12.944C22.6586 12.8375 22.4252 12.7454 22.1739 12.6673C22.1104 12.6476 22.0466 12.629 21.9825 12.6114"
                fill="#1F264F"
              />
            </svg>
          </div>
          <p>{"Paypal"}</p>
          <input
            type="radio"
            value={cardType}
            name="cardType"
            checked={cardType == "Paypal"}
            onChange={() => {
              setcardType("Paypal");
            }}
          />
        </div>
        <div
          className={style["radio-btn"]}
          onClick={() => {
            setcardType("Credit Card");
          }}
        >
          <div className={style["icon"]}>
            <svg
              width="22"
              height="14"
              viewBox="0 0 22 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.02588 1.45404H13.9743V12.1424H8.02588V1.45404Z"
                fill="#FF5F00"
              />
              <path
                d="M8.40346 6.79828C8.40346 4.62664 9.42317 2.70042 10.9905 1.45404C9.83866 0.54762 8.38462 0 6.79836 0C3.04029 0 0 3.04029 0 6.79828C0 10.5562 3.04029 13.5966 6.79828 13.5966C8.38453 13.5966 9.83857 13.0489 10.9905 12.1424C9.42317 10.915 8.40346 8.96992 8.40346 6.79828Z"
                fill="#EB001B"
              />
              <path
                d="M21.9998 6.79828C21.9998 10.5562 18.9595 13.5966 15.2015 13.5966C13.6152 13.5966 12.1612 13.0489 11.0093 12.1424C12.5955 10.8961 13.5964 8.96992 13.5964 6.79828C13.5964 4.62664 12.5766 2.70042 11.0093 1.45404C12.1611 0.54762 13.6152 0 15.2015 0C18.9595 0 21.9999 3.05922 21.9999 6.79828H21.9998Z"
                fill="#F79E1B"
              />
            </svg>
          </div>
          <p>{"Credit Card"}</p>
          <input
            type="radio"
            value={cardType}
            name="cardType"
            checked={cardType == "Credit Card"}
            onChange={() => {
              setcardType("Credit Card");
            }}
          />
        </div>
        <div
          className={style["radio-btn"]}
          onClick={() => {
            setcardType("Apple Pay");
          }}
        >
          <div className={style["icon"]}>
            <img src="img/apple.svg" alt="" />
          </div>

          <p> {"Apple Pay"}</p>
          <input
            type="radio"
            value={cardType}
            name="cardType"
            checked={cardType == "Apple Pay"}
            onChange={() => {
              setcardType("Apple Pay");
            }}
          />
        </div>
        <div
          className={style["radio-btn"]}
          onClick={() => {
            setcardType("Google Pay");
          }}
        >
          <div className={style["icon"]}>
            <img src="img/google.svg" alt="" />
          </div>
          <p> {"Google Pay"}</p>
          <input
            type="radio"
            value={cardType}
            name="cardType"
            checked={cardType == "Google Pay"}
            onChange={() => {
              setcardType("Google Pay");
            }}
          />
        </div>

        <div
          className={style["radio-btn"]}
          onClick={() => {
            setcardType("Web Money");
          }}
        >
          <div className={style["icon"]}>
            <img src="img/webmoney.svg" alt="" />
          </div>
          <p> {"Web Money"}</p>
          <input
            type="radio"
            value={cardType}
            name="cardType"
            checked={cardType == "Web Money"}
            onChange={() => {
              setcardType("Web Money");
            }}
          />
        </div>
        
      </div>
      <div className={style["payment-button"]}>
        <button className={style.button} onClick={handleSubmit} > {`Pay with ${cardType}`}</button>
      </div>
    </div>
  );
}

export default paymentmethod;
