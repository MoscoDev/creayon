import React from "react";
import style from "../styles/Home.module.css";
import Button from "../Components/Button";
import Imagebox from "../Components/Imagebox";
import Title from "../Components/title";
import Divider from "../Components/Divider";

function login() {
  return (
    <div className={style.general}>
      <Title text="Creayon" />
      <Imagebox src="/img/login.png" />
      <Title text="Login" />
      <form className={style.form} action="submit">
        <input className={style.input} type="email" placeholder="Email" />
        <input className={style.input} type="password" placeholder="Password" />
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
                style={{ color: "#ff4200", textAlign: "end", display: "block" }}
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
