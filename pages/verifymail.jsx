import { useEffect } from 'react';
import Title from '../Components/Title'
import style from "../styles/Home.module.css";
import { useRouter } from 'next/router';

function verifymail() {
    let token = localStorage.getItem("token");
    let router = useRouter();
  useEffect(() => {
    if (token == null) {
      router.push("/login");
    }
  }, []);
  
  return (
    <div style={{display: "contents"}}>
      <Title text={"Verify Your Email"} align={"center"} />
      <div
        className={style.verifymail}
        style={{
          margin: "0 auto",
          textAlign: "center",
          flex: "1 1 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          rowGap: "6rem",
          alignItems: "center",
        }}
      >
        <div>
          <p style={{fontSize:"20px"}}>
            <strong>Hello, You’re a click away</strong>
          </p>
          <br />
          <p>
            Hit the button to verify your email and get back to making wonderful
            food orders
          </p>
        </div>
        <button className={style.button}>Verify Email</button>
      </div>
    </div>
  );
}

export default verifymail