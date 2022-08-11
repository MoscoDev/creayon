import React, { useEffect } from 'react'
import Tabs from '../../Components/Tabs';
import TopNav from '../../Components/TopNav'
import style from "../../styles/Profile.module.css";
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../slices/userSlice';

function editProfile() {
    let token = localStorage.getItem("token");
    let router = useRouter();
useEffect(() => {
  if (token == null) {
    router.push("/login");
  }
}, [token]);

const user = useSelector((state) => state.user.value);
  

  return (
     <div className={style.profile}>
        <TopNav />
        <Tabs/>
    </div>
  )
}

export default editProfile