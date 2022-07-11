import Link from "next/link";
import Otp from "./Otp";
import React, { useState } from "react";
import style from "../styles/Home.module.css";
import Button from "./Button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


const Tabs = () => {
  const [currentTab, setCurrentTab] = useState("1");
  const [phone, setPhone] = useState();
  const [name, setName] = useState();
  const [city, setCity] = useState();
  const [address, setAddress] = useState();
   const [officePhone, setOfficePhone] = useState();
   const [officeName, setOfficeName] = useState();
   const [officeCity, setOfficeCity] = useState();
   const [officeAddress, setOfficeAddress] = useState();

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
          <label>Your Name</label>
          <input
            className={style.input}
            type="text"
            placeholder="Name"
            id="firstname"
            htmlFor="firstname"
            name="firstname"
            style={{ backgroundColor: "var(--light-grey)" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
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
          {/* <input
            className={style.input}
            type="tel"
            name="tel"
            id="tel"
            htmlFor="tel"
            placeholder="Phone Number"
            style={{ backgroundColor: "var(--light-grey)" }}
          /> */}
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
      <div style={{margin:"0 auto", textAlign:"center", 
            position: "absolute",
            bottom: "20px",
            left:"50%",
            transform: "translateX(-50%)",
            }}>
        <Button
          text={"Save"}
          colour="orange"
          link={"/verifymail"}
          size="lg"
          style={{
            margin: "0 auto",
            padding: "10px 0px",
            width: "100% !important",
            display: "block",
            textAlign: "center",
           
          }}
        ></Button>
      </div>
    </div>
  );
};

export default Tabs;
