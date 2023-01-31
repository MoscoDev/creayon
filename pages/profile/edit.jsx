import React, { useEffect } from 'react'
import Tabs from '../../Components/Tabs';
import TopNav from '../../Components/TopNav'
import style from "../../styles/Profile.module.css";
import { useRouter } from 'next/router';


function EditProfile() {
    let token = localStorage.getItem("token");
    let router = useRouter();
useEffect(() => {
  if (token == null) {
    router.push("/login");
  }
}, [token]);


  return (
     <div className={style.profile}>
        <TopNav />
        <Tabs/>
    </div>
  )
}

export default EditProfile
