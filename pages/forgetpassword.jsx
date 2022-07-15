import React, { useState } from "react";
import style from "../styles/Home.module.css";
import Button from "../Components/Button";
import Imagebox from "../Components/Imagebox";
import Title from "../Components/Title";

function forgetpassword() {
  const [emailError, setEmailError] = useState("none");
  const [passwordError, setPasswordError] = useState("none");
  const [confirmPasswordError, setConfirmPasswordError] = useState("none");
  return (
    <div>
      <Title text="Creayon" align={"left"} />
      <Imagebox src="/img/forgotpassword.svg" />
      <Title text="Forgot Password?" align={"left"} />
      <div className="tc">
        <small style={{ textAlign: "justify", color: "#c4c4c4" }}>
          Don’t worry`it happens. please enter the Email address Associated with
          your accont
        </small>
      </div>
      <form className={style.form} action="submit">
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
        <small
          style={{
            display: emailError,
            transition: "all ease 9.9s",
            color: "red",
          }}
        >
          Please enter a valid email address.
        </small>
        <input
          className={style.input}
          type="password"
          placeholder="New Password"
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{.8,}$"
          title="Password should be atleat 8 characters with at least one letter (a to z) and one number(0 to 9)."
          id="password"
          htmlFor="password"
          onChange={(e) => {
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
            display: passwordError,
            transition: "all ease 9.9s",
            fontWeight: "200",
            color: "red",
          }}
        >
          Password should be atleat 8 characters with at least one letter (a to
          z) and one number(0 to 9).
        </small>

        <input
          className={style.input}
          type="password"
          placeholder="Confirm Password"
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{.8,}$"
          title="Password should be atleat 8 characters with at least one letter (a to z) and one number(0 to 9)."
          id="confirmPassword"
          htmlFor="password"
          onChange={(e) => {
            if (
              e.target.value.match(
                /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/
              ) == null &&
              e.target.value !== document.getElementById("password").value
            ) {
              setConfirmPasswordError("block");
            } else {
              setConfirmPasswordError("none");
             
            }
          }}
        />
        <small
          style={{
            display: confirmPasswordError,
            transition: "all ease 9.9s",
            fontWeight: "200",
            color: "red",
          }}
        >
          password and confirm password do not match
        </small>
        <div className={style.tc}>
          <small>
            <a
              href="/signup"
              style={{ color: "#ff4200", textAlign: "end", display: "block" }}
            >
              <span
                style={{ color: "#ff4200", textAlign: "end", display: "block" }}
              >
                Create a new account
              </span>
            </a>
          </small>
        </div>

        <Button
          text={"Submit"}
          colour="orange"
          link={"/verifymail"}
          size="lg"
        ></Button>
      </form>
    </div>
  );
}

export default forgetpassword;
