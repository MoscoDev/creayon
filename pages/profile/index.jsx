import React from 'react'
import style from '../../styles/Profile.module.css'
import BottomNav from '../../Components/BottomNav'
import TopNav from '../../Components/TopNav'
import { BsCheck2Circle } from 'react-icons/bs'
import { BiChevronRight } from 'react-icons/bi'
import { FiEdit } from 'react-icons/fi'
import { AiOutlineCreditCard } from 'react-icons/ai'
import { TbDiscount2 } from 'react-icons/tb'
import { MdNotificationsNone, MdOutlineLocationOn } from 'react-icons/md'
import Link from 'next/link'



function profile() {
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
         
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

export default profile