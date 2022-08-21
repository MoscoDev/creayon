import Link from 'next/link'
import React from 'react'
import { useSelector, useDispatch } from "react-redux";

function Avatar() {
const user = useSelector((state) => state.user.value);
console.log(user.user)
  return (
    <Link href={"/profile"}>
    <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: '#fff',
        backgroundImage: `url(${user.avatar})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        margin: '10px 0px'
    }}></div></Link>
  )
}

export default Avatar