import React, { useState } from "react";
import style from "../styles/Home.module.css";
import Button from "../Components/Button";
import Imagebox from "../Components/Imagebox";
import Title from "../Components/Title";

function signup() {
  const [emailError, setEmailError] = useState("none");
  const [passwordError, setPasswordError] = useState("none");
  const [confirmPasswordError, setConfirmPasswordError] = useState("none");

  return (
    <div>
      <Title text="Creayon" align={"left"} />
      <Imagebox src="/img/signup.svg" />
      <Title text="Signup" align={"left"} />
      <form className={style.form} action="submit">
        <input
          className={style.input}
          type="text"
          placeholder="First Name"
          id="firstname"
          htmlFor="firstname"
          name="firstname"
        />
        <input
          className={style.input}
          type="text"
          placeholder="Last Name"
          id="lastname"
          htmlFor="lastname"
          name="lastname"
        />
        <input
          className={style.input}
          type="email"
          placeholder="Email"
          id="email"
          htmlFor="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          onBlur={(e) => {
            // check if email is valid with regex pattern
            if (
              e.target.value.match(
                /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
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
            color: "red",
          }}
        >
          Please enter a valid email address.
        </small>
        <input
          className={style.input}
          type="tel"
          name="tel"
          id="tel"
          htmlFor="tel"
          placeholder="Phone Number"
        />
        <input
          className={style.input}
          type="password"
          placeholder="Password"
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{.8,}$"
          title="Password should be atleat 8 characters with at least one letter (a to z) and one number(0 to 9)."
          id="password"
          htmlFor="password"
          onChange={(e) => {
            // check if email is valid with regex pattern
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
          id="confirmpassword"
          htmlFor="confirmpassword"
          onBlur={(e) => {
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
          Password & confirm password does not match .
        </small>
        <div className="tc">
          <small>
            By Signing up, you’ve agree to our
            <a href="#">
              <span style={{ color: "#ff4200" }}>
                {" "}
                Terms & conditions and Privacy Policy
              </span>
            </a>
          </small>
        </div>
        <div
          className="button-container"
          style={{ display: "block", width: "-webkit-fill-available" }}
        >
          <Button
            text={"Register"}
            colour="orange"
            link={"/verifymail"}
            size="lg"
          ></Button>
        </div>
      </form>
    </div>
  );
}

export default signup;
