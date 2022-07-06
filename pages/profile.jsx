import React from 'react'
import style from '../styles/Profile.module.css'
import BottomNav from '../Components/BottomNav'
import TopNav from '../Components/TopNav'
import { BsCheck2Circle } from 'react-icons/bs'
import { BiChevronRight } from 'react-icons/bi'

function profile() {
  return (
    <div>
      <TopNav />
      <div className="profile_page_content">
        <div className={style.dpContainer}>
          <img src={"/img/avatar.svg"} alt="" height={"140px"} />
        </div>
        <div className={style.button}>
          <BsCheck2Circle />
          <div>
            <p>Maria Salow</p>
            <p>
              <span>+23481634575</span>
            </p>
          </div>
          
          <BiChevronRight />
        </div>
        <div className={style.infoContainer}>
          <div className={style.button}>
            <BsCheck2Circle />
            <p>My Orders</p>
            <BiChevronRight />
          </div>
          <div className={style.button}>
            <BsCheck2Circle />
            <p>Address</p>
            <BiChevronRight />
          </div>
          <div className={style.button}>
            <BsCheck2Circle />
            <p>Payment</p>
            <BiChevronRight />
          </div>
          <div className={style.button}>
            <BsCheck2Circle />
            <p>Voucher</p>
            <BiChevronRight />
          </div>
          <div className={style.button}>
            <BsCheck2Circle />
            <p>Notifications</p>
            <BiChevronRight />
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

export default profile