import Link from "next/link";
import style from "../styles/verifyphone.module.css";
import Button from "../Components/Button";
import Timer from "../Components/Timer";
import OtpInput from "react-otp-input";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { updateUserFavourites } from "../slices/userSlice";

function Verifyphone() {
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [otpErrorMessage, setOtpErrorMessage] = useState("");
  let router = useRouter();
  let token = localStorage.getItem("token");
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token == null) {
      router.push("/login");
    }
  }, []);

  const handleChange = (otp) => setOtp(otp);
  return (
    <div className={style.general}>
      <div style={{ display: "flex", columnGap: "1rem", borderBottom: "1px solid var(--lightColor)" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50px",
          }}
        >
          <Link href={"/"}>
            <a>
              <img src="/img/back-button.svg" />
            </a>
          </Link>
        </div>
        <p
          style={{
            fontSize: "20px",
            textAlign: "center",
            flex: "1 1 auto",
            margin: "0 auto",
          }}
        >
          <strong
            style={{
              fontSize: "20px",
              textAlign: "center",
              flex: "1 1 auto",
             lineHeight: "50px"
            }}
          >
            Verify Your Phone Number
          </strong>
        </p>
      </div>
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
        <img height={240} width={300} src="/img/verifyphone.svg" />
        <div>
          <p
            style={{ fontSize: "14px", textAlign: "center", flex: "1 1 auto" }}
          >
            Enter the OTP sent to &gt;<strong>{user.email}</strong>
          </p>
          <br />
          <form
            action=""
            style={{
              display: "flex",
              flexDirection: "row",
              width: "300px",
              columnGap: "1rem",
              justifyContent: "center",
            }}
          >
            <OtpInput
              value={otp}
              onChange={handleChange}
              numInputs={4}
              inputStyle={"otp"}
              isInputSecure
              focusStyle={"otp-focus"}
              separator={<span></span>}
            />
          </form>
          <br />
          <Timer />
        </div>
        <Button
          text={"Verify"}
          colour="orange"
          link={"#"}
          size="lg"
          handleClick={() => {
            if (otp.length < 4) {
              setOtpError(true);
              setOtpErrorMessage("Please enter a valid OTP");
            } else {
              setOtpError(false);
              setOtpErrorMessage("");
            }
          }}
        ></Button>
      </div>
    </div>
  );
}

export default Verifyphone;
