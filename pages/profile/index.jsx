import React, { useEffect } from "react";
import style from "../../styles/Profile.module.css";
import BottomNav from "../../Components/BottomNav";
import TopNav from "../../Components/TopNav";
import { BsCheck2Circle } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { AiOutlineCreditCard } from "react-icons/ai";
import {useDispatch, useSelector } from "react-redux";
import {getUserData} from "../../slices/userSlice";
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
  
  function handleLogout(event) {
    event.preventDefault();
    var data = "";
    var config = {
      method: "get",
      url: "https://foodbukka.herokuapp.com/api/v1/auth/logout",
      headers: {
        // Cookie: token,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        localStorage.removeItem("token");
        dispatch(getUserData(null));
        window.location.href = "/";
        alert("You have successfully logged out!");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className={style.profile}>
      <TopNav />
      <div className={style["profile_page_content"]}>
        <div className={style.dpContainer}>
          <img src={"/img/avatar.svg"} alt="" height={"140px"} />
        </div>

        <div className={style.button} style={{ marginBottom: "1rem" }}>
          <BsCheck2Circle style={{ opacity: "0" }} className={style.icon} />
          <div>
            <h3 className={style.userName}>Maria Salow</h3>

            <small>+23481634575</small>
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
