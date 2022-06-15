import React from "react";
import style from "../styles/Home.module.css";
import Button from "../Components/Button";
import Imagebox from "../Components/Imagebox";
import Title from "../Components/title";
import Divider from "../Components/Divider";

function Forgetpassword() {
  return (
    <div className={style.general}>
      <Title text="Creayon" />
      <Imagebox src="/img/login.png" />
      <Title text="Forgot Password" />
      <div className="tc">
        <small style={{ textAlign: "justify", color: "#c4c4c4" }}>
          Don’t worry`it happens. please enter the Email address Associated with
          your accont
        </small>
      </div>
      <form className={style.form} action="submit">
        <input className={style.input} type="email" placeholder="Email" />
        <input className={style.input} type="password" placeholder="New Password" />
        <input className={style.input} type="password" placeholder="Repeat Password" />
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
