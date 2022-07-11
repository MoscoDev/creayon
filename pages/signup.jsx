import React from 'react'
import style from "../styles/Home.module.css"
import Button from '../Components/Button';
import Imagebox from '../Components/Imagebox'
import Title from '../Components/title'

function signup() {
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
        />
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
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          title="Password should be atleat 8 characters with at least one letter (a to z) and one number(0 to 9)."
          id="password"
          htmlFor="password"
          name="password"
        />{" "}
        <input
          className={style.input}
          type="password"
          placeholder="Confirm Password"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          title="Password should be atleat 8 characters with at least one letter (a to z) and one number(0 to 9)."
          id="password"
          htmlFor="password"
          name="password"
        />
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
        <Button
          text={"Continue"}
          colour="orange"
          link={"/verifymail"}
          size="lg"
        ></Button>
      </form>
    </div>
  );
}

export default signup