import React, { useState } from "react";
import style from "../styles/Home.module.css";
import Button from "../Components/Button";
import Imagebox from "../Components/Imagebox";
import Title from "../Components/Title";
import Divider from "../Components/Divider";


import { useRouter } from "next/router";


function login() {
const router = useRouter();


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
        />
        <input
          className={style.input}
          type="password"
          placeholder="Password"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          title="Password should be atleat 8 characters with at least one letter (a to z) and one number(0 to 9)."
          id="password"
          htmlFor="password"
          name="password"
        />
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
