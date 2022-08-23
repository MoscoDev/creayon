import React, { useEffect, useState } from "react";
import style from "../../styles/Profile.module.css";
import BottomNav from "../../Components/BottomNav";
import TopNav from "../../Components/TopNav";
import { BsCheck2Circle } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { AiOutlineCreditCard } from "react-icons/ai";
import {useDispatch, useSelector } from "react-redux";
import {updateUserData} from "../../slices/userSlice";
import { getCartData } from "../../slices/cartSlice";
import { MdNotificationsNone, MdOutlineLocationOn } from "react-icons/md";
import { TbLogout, TbDiscount2 } from "react-icons/tb";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

function profile() {
const user = useSelector((state) => state.user.value);
const dispatch = useDispatch();
  let token = localStorage.getItem("token");
  let router = useRouter();
  useEffect(() => {
    if (token == null) {
      router.push("/login");
    }
  }, []);
  const [preview, setPreview] = useState({ file: "", imagePreviewUrl: "" });
  console.log(preview.imagePreviewUrl, preview.file);
const handleImageChange = (e) => {
  e.preventDefault();
  let reader = new FileReader();
  let file = e.target.files[0];
  reader.onloadend = () => {
    setPreview({
      file: file,
      imagePreviewUrl: reader.result,
    });
  }
  reader.readAsDataURL(file);
}

const handleUpload = (e) => {
  e.preventDefault();
  var FormData = require("form-data");
  
  var data = new FormData();
  data.append(
    "image",
   preview.file,
  );

  var config = {
    method: "post",
    url: "https://creayonbackend.herokuapp.com/api/v1/user/upload/"+user._id,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
       dispatch(updateUserData(response.data.user));
       alert("Profile picture updated successfully");
    })
    .catch(function (error) {
      console.log(error);
    });

}


  function handleLogout(event) {
    event.preventDefault();
    var data = "";
    var config = {
      method: "post",
      url: `https://creayonbackend.herokuapp.com/api/v1/logout/${user._id}`,
      headers: {
        
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
       
        router.push("/login");
         localStorage.removeItem("token");
         dispatch(updateUserData({}));
         dispatch(
           getCartData({
             value: {
               _id: "",
               cartItems: [],
               active: false,
               createdAt: "",
               updatedAt: "",
               __v: 0,
             },
           })
         );

        console.log(response.data.message);
        alert("You have successfully logged out!");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const [updateAvatar, setUpdateAvatar] = useState(false);

  return (
    <div className={style.profile}>
      <TopNav />
      <div className={style["profile_page_content"]}>
        <div className={style.dpContainer}>
          <div
            className="fgjh"
            style={{
              borderRadius: "50%",
              border: "1px solid #ffffffa4",
              objectFit: "contain",
              width: "140px",
              height: "140px",
              backgroundImage: `url(${user.avatar || "/img/avatar.svg"})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
          </div>

          {updateAvatar ? (
            <div
              style={{
                backgroundColor:
                  preview.imagePreviewUrl == ""
                    ? "rgba(255, 255, 255, 0.5)"
                    : "rgba(255, 255, 255, 1)",
                backgroundImage: `url(${preview.imagePreviewUrl})`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                width: "140px",
                transform: "translateY(-100%)",
                borderRadius: "50%",
                height: "140px",
                marginBottom: "-140px",
                width: "140px",
                // position: "absolute",
                padding: "12.5px",
              }}
            >
              <div className={style.edit}>
                {preview.imagePreviewUrl == "" ? (
                  <input
                    type="file"
                    style={{
                      width: "100%",
                      display: preview.imagePreviewUrl == "" ? "auto" : "none",
                    }}
                    onChange={handleImageChange}
                  />
                ) : (
                  <button
                    onClick={handleUpload}
                    style={{ backgroundColor: "#ffffffa4", padding: "1rem" }}
                  >
                    upload
                  </button>
                )}
              </div>
            </div>
          ) : null}

          <div
            className="uploaderContainer"
            style={{
              width: "140px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                borderRadius: "50%",
                border: "1px solid #ffffffa4",
                padding: "0px",
                width: "1.9rem",
                height: "1.9rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#ffffffa4",
              }}
            >
              {!updateAvatar ? (
                <FiEdit
                  size={"1.3rem"}
                  className={style.icon}
                  onClick={() => setUpdateAvatar(true)}
                />
              ) : (
                <IoIosClose
                  size={"1.3rem"}
                  className={style.icon}
                  onClick={() => setUpdateAvatar(false)}
                />
              )}
            </div>
          </div>
        </div>

        <div className={style.button} style={{ marginBottom: "1rem" }}>
          <BsCheck2Circle style={{ opacity: "0" }} className={style.icon} />
          <div>
            <h3 className={style.userName}>
              {user.lastName + " " + user.firstName}
            </h3>

            <small>{user.phone}</small>
          </div>

          <FiEdit size={"1.3rem"} className={style.icon} />
        </div>
        <div className={style.infoContainer}>
          <Link href={"profile/"}>
            <a className={style.button}>
              <BsCheck2Circle size={"1.3rem"} className={style.icon} />
              <p>My Orders</p>
              <BiChevronRight />
            </a>
          </Link>

          <Link href={`profile/edit`}>
            <a className={style.button}>
              <MdOutlineLocationOn size={"1.3rem"} className={style.icon} />
              <p>Address</p>
              <BiChevronRight />
            </a>
          </Link>

          <Link href={"/paymentmethod"}>
            <a className={style.button}>
              <AiOutlineCreditCard size={"1.3rem"} className={style.icon} />
              <p>Payment</p>
              <BiChevronRight />
            </a>
          </Link>
          <Link href={"profile/"}>
            <a className={style.button}>
              <TbDiscount2 size={"1.3rem"} />
              <p>Voucher</p>
              <BiChevronRight />
            </a>
          </Link>
          <Link href={"profile/"}>
            <a className={style.button}>
              <MdNotificationsNone size={"1.3rem"} className={style.icon} />
              <p>Notifications</p>
              <BiChevronRight />
            </a>
          </Link>
          <div onClick={handleLogout} className={style.button}>
            <TbLogout
              size={"1.3rem"}
              style={{ strokeWidth: "2" }}
              className={style.icon}
            />
            <p>Logout</p>
            <BiChevronRight />
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

export default profile;
