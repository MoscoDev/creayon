import React from 'react'
import Tabs from '../../Components/Tabs';
import TopNav from '../../Components/TopNav'
import style from "../../styles/Profile.module.css";

function editProfile() {
  return (
     <div className={style.profile}>
        <TopNav />
        <Tabs/>
    </div>
  )
}

export default editProfile