import React from 'react'
import style from "../styles/Home.module.css"
import Button from '../Components/Button';
import Imagebox from '../Components/Imagebox'
import Title from '../Components/title'

function signup() {
  return (
    <div className={style.general}>
      <Title text="Creayon" />
      <Imagebox src="/img/signup.png" />
      <Title text="Signup" />
      <form className={style.form} action="submit">
        <input className={style.input} type="text" placeholder="Name" />
        <input className={style.input} type="email" placeholder="Email" />
        <input className={style.input} type="password" placeholder="Password" />
        <div className="tc">
          <small>
            By Signing up, you’ve agree to our
            <a href="#">
              <span style={{color:"#ff4200"}}> Terms & conditions and Privacy Policy</span>
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