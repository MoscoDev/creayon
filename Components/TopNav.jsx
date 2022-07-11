import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import Avatar from './Avatar'
import Title from './title'
import { useRouter } from "next/router";

function TopNav() {
  const router = useRouter();
    const styles ={
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.3rem 0rem',
        position: 'sticky',
        top: 0,
        marginBottom: "20px",
        background: "var(--lightColor)",
    }
    const pageTitle = window.location.pathname;
    const title = pageTitle.substring(1);
   
   
    
  return (
    <div style={styles}>
      <BiArrowBack size={"1.7rem"} onClick={() => router.back()} />
      <Title text={title} size={"18px"} align={"center"} />
      <Avatar />
    </div>
  );
}

export default TopNav