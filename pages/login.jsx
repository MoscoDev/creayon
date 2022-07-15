import React, { useState } from "react";
import style from "../styles/Home.module.css";
import Button from "../Components/Button";
import Imagebox from "../Components/Imagebox";
import Title from "../Components/Title";
import Divider from "../Components/Divider";
import Link from "next/link";

import { useRouter } from "next/router";

function login() {
  const router = useRouter();
  const [emailError, setEmailError] = useState("none");
  const [passwordError, setPasswordError] = useState("none");


  return (
    <div>
      <Title text="Creayon" align={"left"} />
      <Imagebox src="/img/login.svg" />
      <Title text="Login" align={"left"} />
      <form className={style.form}>
        <input
          className={style.input}
          type="email"
          placeholder="Email"
          id="email"
          htmlFor="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          required
          onBlur={(e) => {
            // check if email is valid with regex pattern
            if (
              e.target.value.match(
                /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
              ) == null
            ) {
              console.log("invalid email");
              setEmailError("block");
            } else {
              setEmailError("none");
            }
          }}
        />
        <small style={{ display: emailError, transition: "all ease 9.9s" }}>
          Please enter a valid email address.
        </small>
        <input
          className={style.input}
          type="password"
          placeholder="Password"
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{.8,}$"
          title="Password should be atleat 8 characters with at least one letter (a to z) and one number(0 to 9)."
          id="password"
          htmlFor="password"
          onBlur={(e) => {
            if (
              e.target.value.match(
                /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/
              ) == null
            ) {
              setPasswordError("block");
            } else {
              setPasswordError("none");
            }
          }}
        />
        <small
          style={{
            display: passwordError  ,
            transition: "all ease 9.9s",
            fontWeight: "200",
          }}
        >
          Password should be atleat 8 characters with at least one letter (a to
          z) and one number(0 to 9).
        </small>
        <div className={style.tcs}>
          <small>
            <a
              href="/signup"
              style={{
                color: "#c4c4c4",
                textAlign: "left",
              }}
            >
              <span
                style={{
                  color: "#c4c4c4",
                  textAlign: "start",
                }}
              >
                Create a new account
              </span>
            </a>
          </small>
          <small>
            <a
              href="/forgetpassword"
              style={{ color: "#ff4200", textAlign: "end", display: "block" }}
            >
              <span
                style={{
                  color: "#ff4200",
                  textAlign: "end",
                  display: "block",
                }}
              >
                forgot password?
              </span>
            </a>
          </small>
        </div>

        <Button
          text={"Login"}
          colour="orange"
          link={"/verifymail"}
          size="lg"
        ></Button>
        <Divider />
        <div
          style={{
            display: "flex",
            boxShadow: " 0px 0px 5px 0px rgb(0 0 0 / 45%)",
            padding: "12px 20px",
            width: "95%",
            borderRadius: "10px",
            margin: "0 auto",
            alignItems: "center",
            // columnGap: "70px",
          }}
        >
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.6181 12.3178C23.6181 11.327 23.5377 10.604 23.3637 9.85425H12.05V14.3261H18.6909C18.5571 15.4374 17.8341 17.111 16.2274 18.2356L16.2048 18.3854L19.782 21.1565L20.0298 21.1813C22.3059 19.0792 23.6181 15.9863 23.6181 12.3178Z"
              fill="#4285F4"
            />
            <path
              d="M12.05 24.1C15.3035 24.1 18.0348 23.0289 20.0298 21.1812L16.2273 18.2356C15.2098 18.9452 13.8441 19.4406 12.05 19.4406C8.86346 19.4406 6.15892 17.3386 5.19482 14.4332L5.05351 14.4452L1.33392 17.3239L1.28528 17.4591C3.26682 21.3954 7.33706 24.1 12.05 24.1Z"
              fill="#34A853"
            />
            <path
              d="M5.19485 14.4333C4.94047 13.6835 4.79325 12.8801 4.79325 12.0501C4.79325 11.2199 4.94047 10.4166 5.18147 9.66683L5.17473 9.50714L1.40853 6.58228L1.28531 6.64089C0.468618 8.27436 0 10.1087 0 12.0501C0 13.9915 0.468618 15.8257 1.28531 17.4592L5.19485 14.4333Z"
              fill="#FBBC05"
            />
            <path
              d="M12.05 4.65932C14.3127 4.65932 15.839 5.6367 16.7093 6.45348L20.1101 3.13301C18.0215 1.19162 15.3035 0 12.05 0C7.33706 0 3.26682 2.70454 1.28528 6.64086L5.18144 9.6668C6.15892 6.7614 8.86346 4.65932 12.05 4.65932Z"
              fill="#EB4335"
            />
          </svg>
          <p style={{width: "100%", textAlign:"center"}}>Sign in with Google</p>
        </div>
      </form>
    </div>
  );
}

export default login;
