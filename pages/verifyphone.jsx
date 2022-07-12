import Link from 'next/link';
import style from "../styles/verifyphone.module.css";
import Button from '../Components/Button';
import Timer from '../Components/Timer';
import OtpInput from 'react-otp-input';
import { useState } from 'react';

function verifyphone() {
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [otpErrorMessage, setOtpErrorMessage] = useState('');
  const [otpErrorMessage2, setOtpErrorMessage2] = useState('');
  

  const handleChange = (otp) => setOtp(otp);
  return (
    <div className={style.general}>
     
      <div style={{ display: "flex", columnGap: "1rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "30px",
          }}
        >
          <Link href={"/"}>
            <a>
              <img src="/img/back-button.svg" />
            </a>
          </Link>
        </div>
        <p style={{ fontSize: "20px", textAlign: "center", flex: "1 1 auto" }}>
          <strong>Verify Your Phone Number</strong>
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
            Enter the OTP sent to &gt;<strong> +234816345751</strong>
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
            {/* <input
              class={styles["otp"]}
              type="number"
              oninput="digitValidate(this)"
              onkeyup="tabChange(1)"
              maxlength={1}
              pattern={"/\b\d{5}\b/g"}
            />
            <input
              class={styles["otp"]}
              type="number"
              oninput="digitValidate(this)"
              onkeyup="tabChange(2)"
              maxlength={1}
            />
            <input
              class={styles["otp"]}
              type="number"
              oninput="digitValidate(this)"
              onkeyup="tabChange(3)"
              maxlength={1}
              min={1}
            />
            <input
              class={styles["otp"]}
              type="number"
              oninput="digitValidate(this)"
              onkeyup="tabChange(4)"
              maxlength={1}
            /> */}
            <OtpInput
              value={otp}
              onChange={handleChange}
              numInputs={4}
              inputStyle={"otp"}
              focusStyle={"otp-focus"}
              separator={<span></span>}
            />
            
          </form>
          <br />
          <Timer />
         
        </div>
        <Button
          text={"Submit"}
          colour="orange"
          link={"/verifymail"}
          size="lg"
          handleClick={() => {
            if (otp.length < 4) {
              setOtpError(true);
              setOtpErrorMessage("Please enter a valid OTP");
            } else {
              setOtpError(false);
              setOtpErrorMessage("");
            }
          }
          }
        ></Button>
      </div>
    </div>
  );
}

export default verifyphone