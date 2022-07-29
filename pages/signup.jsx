import React, { useState } from "react";
import style from "../styles/Home.module.css";
import Button from "../Components/Button";
import Imagebox from "../Components/Imagebox";
import Title from "../Components/Title";
import styles from "../styles/Button.module.css";
import axios from "axios";
import {useRouter} from "next/router";



function signup() {
  const router = useRouter();
  const [emailError, setEmailError] = useState("none");
  const [passwordError, setPasswordError] = useState("none");
  const [confirmPasswordError, setConfirmPasswordError] = useState("none");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");


function handleSignup(event) {
  event.preventDefault();
  if (emailError === "none" && passwordError === "none" && confirmPasswordError === "none") {
var data = JSON.stringify({
  username: firstName,
  password: password,
  phoneNumber: phone,
  email: email,
});

var config = {
  method: "post",
  url: "https://foodbukka.herokuapp.com/api/v1/auth/register",
  headers: {
    "Content-Type": "application/json",
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
     alert("You have successfully signed up!");
      router.push("/login");

  })
  .catch(function (error) {
    console.log(error);
    alert("user already exists");
    event.preventDefault()
  });
   
    

  }
}

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
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input
          className={style.input}
          type="text"
          placeholder="Last Name"
          id="lastname"
          htmlFor="lastname"
          name="lastname"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <input
          className={style.input}
          type="email"
          placeholder="Email"
          id="email"
          htmlFor="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
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
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <input
          className={style.input}
          type="password"
          placeholder="Password"
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{.8,}$"
          title="Password should be atleat 8 characters with at least one letter (a to z) and one number(0 to 9)."
          id="password"
          value={password}
          htmlFor="password"
          onChange={(e) => {
            setPassword(e.target.value);
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
          title="Password should be atleat 8 characters with at least one letter (a to z) and one number(0 to 9)."
          id="confirmpassword"
          htmlFor="confirmpassword"
          onChange={(e) => {
            // check if password and confirm password are same

            if (e.target.value !== document.getElementById("password").value) {
              setConfirmPasswordError("block");
            } else {
              setConfirmPasswordError("none");
            }
          }}
          // onBlur={(e) => {
          //   // check if password and confirm password are same

          //   if (e.target.value !== password) {
          //     setConfirmPasswordError("block");
          //   } else {
          //     setConfirmPasswordError("none");
          //   }
          // }}
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
          onClick={handleSignup}
        >
          <button className={styles[`orange`] + " " + styles[`lg`]}>
            Register
          </button>
        </div>
      </form>
      <br />
    </div>
  );
}

export default signup;
