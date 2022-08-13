import Link from "next/link";
import Otp from "./Otp";
import React, { useState } from "react";
import style from "../styles/Home.module.css";
import Button from "./Button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import styles from "../styles/Button.module.css";
import { getUserData, updateUserData } from "../slices/userSlice";
import { useSelector, useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import axios from "axios";

const Tabs = () => {

const user = useSelector((state) => state.user.value);
const dispatch = useDispatch();
// console.log(user);
  const [currentTab, setCurrentTab] = useState("1");
  const [phone, setPhone] = useState(user.phone);

  const [lastName, setLastName] = useState(user.lastName);
  const [firstName, setFirstName] = useState(user.firstName);
  const [city, setCity] = useState();
  const [address, setAddress] = useState(user.address);
   const [officePhone, setOfficePhone] = useState();
   const [officeName, setOfficeName] = useState();
   const [officeCity, setOfficeCity] = useState();
   const [officeAddress, setOfficeAddress] = useState();
  const token = localStorage.getItem("token");
   const handleSaveProfileEdits = (event) => {
    const id = jwtDecode(token)._id;
    event.preventDefault();
    var axios = require("axios");
    var data = JSON.stringify({
      address: address+ "" +city,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      city: city,
    });

    var config = {
      method: "put",
      url: `https://creayonbackend.herokuapp.com/api/v1/user/${id}`,
      headers: {
        Authorization:
          "Bearer " + token,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        localStorage.setItem("token", response.data.token.split(" ")[1]);
        dispatch(updateUserData(response.data.user));
        alert("profile updated");
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  

  const tabs = [
    {
      id: 1,
      tabTitle: "Home",
      content: (
        <form
          className={style.form}
          action="submit"
          style={{ marginBottom: "150px" }}
        >
          <label>Your Names</label>
          <input
            className={style.input}
            type="text"
            placeholder="First name"
            id="firstname"
            htmlFor="firstname"
            name="firstname"
            style={{ backgroundColor: "var(--light-grey)" }}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className={style.input}
            type="text"
            placeholder="Last name"
            id="firstname"
            htmlFor="firstname"
            name="firstname"
            style={{ backgroundColor: "var(--light-grey)" }}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label>Phone</label>
          <PhoneInput
            defaultCountry="US"
            className={style.input}
            placeholder="Enter phone number"
            value={phone}
            onChange={setPhone}
            style={{ backgroundColor: "var(--light-grey)" }}
          />

          <label htmlFor="city">city</label>
          <input
            className={style.input}
            type="text"
            placeholder="City"
            style={{ backgroundColor: "var(--light-grey)" }}
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <label htmlFor="Street Address">Street Address</label>
          <input
            className={style.input}
            type="street"
            placeholder="Street Address"
            id="street"
            htmlFor="street"
            name="street"
            style={{
              backgroundColor: "var(--light-grey)",
              marginBottom: "150px !important",
            }}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </form>
      ),
    },
    {
      id: 2,
      tabTitle: "Office",
      content: (
        <form
          className={style.form}
          action="submit"
          style={{ marginBottom: "150px" }}
        >
          <label>Your Name</label>
          <input
            className={style.input}
            type="text"
            placeholder="Name"
            id="firstname"
            htmlFor="firstname"
            name="firstname"
            style={{ backgroundColor: "var(--light-grey)" }}
            value={officeName}
            onChange={(e) => setOfficeName(e.target.value)}
          />
          <input
            className={style.input}
            type="text"
            placeholder="Last name"
            id="firstname"
            htmlFor="firstname"
            name="firstname"
            style={{ backgroundColor: "var(--light-grey)" }}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label>Phone</label>
          <PhoneInput
            defaultCountry="US"
            className={style.input}
            placeholder="Enter phone number"
            value={officePhone}
            onChange={setOfficePhone}
            style={{ backgroundColor: "var(--light-grey)" }}
          />

          <label htmlFor="city">city</label>
          <input
            className={style.input}
            type="text"
            placeholder="City"
            style={{ backgroundColor: "var(--light-grey)" }}
            value={officeCity}
            onChange={(e) => setOfficeCity(e.target.value)}
          />
          <label htmlFor="Street Address">Street Address</label>
          <input
            className={style.input}
            type="street"
            placeholder="Street Address"
            id="street"
            htmlFor="street"
            name="street"
            style={{
              backgroundColor: "var(--light-grey)",
              marginBottom: "150px !important",
            }}
            value={officeAddress}
            onChange={(e) => setOfficeAddress(e.target.value)}
          />
        </form>
      ),
    },
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div className="tab-container">
      <div
        className="tabs"
        style={{
          backgroundColor: "white",
          height: "60px",
          background: "#FFFFFF",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: "10px",
        }}
      >
        {tabs.map((tab, i) => (
          <button
            style={{ fontSize: "20px", lineHeight: "24px" }}
            key={i}
            id={tab.id}
            disabled={currentTab === `${tab.id}`}
            onClick={handleTabClick}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div style={{ marginBottom: "150px important" }}>
        {tabs.map((tab, i) => (
          <div key={i}>
            {currentTab === `${tab.id}` && (
              <div>
                <div>{tab.content}</div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div
        style={{
          margin: "0 auto",
          textAlign: "center",
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <div
          className="button-container"
          style={{
            display: "block",
            width: "80vw",
            margin: "0 auto",
          }}
        >
          <button
            className={styles[`orange`] + " " + styles[`lg`]}
            onClick={handleSaveProfileEdits}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
