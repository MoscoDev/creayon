import React from 'react'
import style from '../styles/Profile.module.css'
import BottomNav from '../Components/BottomNav'
import TopNav from '../Components/TopNav'
import ProfileButton from '../Components/ProfileButton'
import { BsCheck2Circle } from 'react-icons/bs'

function profile() {
  return (
    <div className="profile_page">
      <TopNav />
      <div className="profile_page_content">
        <div className={style.dpContainer}>
          <img src={"/img/avatar.svg"} alt="" height={"140px"} />
        </div>
        <div className={style.infoContainer}>
          <ProfileButton buttonText={"My Order"} icon={"BsCheck2Circle"} />
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

export default profile