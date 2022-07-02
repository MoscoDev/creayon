import React from "react";
import style from "../styles/Home.module.css";
import Button from "../Components/Button";
import Imagebox from "../Components/Imagebox";
import Title from "../Components/title";
import Divider from "../Components/Divider";

function Forgetpassword() {
  return (
    <div className={style.general}>
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

        <input
          className={style.input}
          type="password"
          placeholder="Repeat Password"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          title="Password should be atleat 8 characters with at least one letter (a to z) and one number(0 to 9)."
          id="password"
          htmlFor="password"
          name="password"
        />
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

export default Forgetpassword;
