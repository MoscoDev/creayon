import React from 'react'
import style from '../styles/Profile.module.css'
import BottomNav from '../Components/BottomNav'
import TopNav from '../Components/TopNav'
import { BsCheck2Circle } from 'react-icons/bs'
import { BiChevronRight } from 'react-icons/bi'
import { FiEdit } from 'react-icons/fi'
import { AiOutlineCreditCard } from 'react-icons/ai'
import { TbDiscount2 } from 'react-icons/tb'
import { MdNotificationsNone, MdOutlineLocationOn } from 'react-icons/md'



function profile() {
  return (
    <div>
      <TopNav />
      <div className={style["profile_page_content"]}>
        <div className={style.dpContainer}>
          <img src={"/img/avatar.svg"} alt="" height={"140px"} />
        </div>

        <div className={style.button}>
          <BsCheck2Circle style={{ opacity: "0" }} />
          <div>
            <h3 className={style.userName}>Maria Salow</h3>

            <small>+23481634575</small>
          </div>

          <FiEdit />
        </div>
        <br />
        <div className={style.infoContainer}>
          <div className={style.button}>
            <BsCheck2Circle size={"1.3rem"} className={style.icon} />
            <p>My Orders</p>
            <BiChevronRight />
          </div>
          <div className={style.button}>
            <MdOutlineLocationOn size={"1.3rem"} className={style.icon} />
            <p>Address</p>
            <BiChevronRight />
          </div>
          <div className={style.button}>
            <AiOutlineCreditCard size={"1.3rem"} className={style.icon} />
            <p>Payment</p>
            <BiChevronRight />
          </div>
          <div className={style.button}>
            <TbDiscount2 size={"1.3rem"} className={style.icon} />
            <p>Voucher</p>
            <BiChevronRight />
          </div>
          <div className={style.button}>
            <MdNotificationsNone size={"1.3rem"} className={style.icon} />
            <p>Notifications</p>
            <BiChevronRight />
          </div>
        </div>
      </div>
      <BottomNav active={""} />
    </div>
  );
}

export default profile