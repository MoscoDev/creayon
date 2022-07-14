import React, { useState } from "react";
import style from "../styles/Home.module.css";
import Button from "../Components/Button";
import Imagebox from "../Components/Imagebox";
import Title from "../Components/Title";
import Divider from "../Components/Divider";


import { useRouter } from "next/router";


function login() {
const router = useRouter();
const [emailError, setEmailError] = useState("none");

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
          // name="password"
          // onBlur={(e) => {
          //   if (
          //     e.target.value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/) ==
          //     null
          //   ) {
          //     setEmailError("block");
          //   } else {
          //     setEmailError("none");
          //   }
          // }
          // }
          onChange={(e) => {
            // check if email is valid with regex pattern
            if (
              e.target.value.match(
                /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/
              ) == null
            ) {
              setEmailError("block");
            } else {
              setEmailError("none");
            }
          }}
        />
        <small
          style={{
            display: emailError,
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
        <Button
          text={"Login with google"}
          colour="white"
          link={"/verifymail"}
          size="lg"
        ></Button>
      </form>
    </div>
  );
}

export default login;
