import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import Avatar from './Avatar'
import Title from './title'


function TopNav() {
    const styles ={
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.1rem 0rem'
    }
    const pageTitle = window.location.pathname;
    // remove the '/' from the page title
    const title = pageTitle.substring(1);
   
   
    
  return (
    <div style={styles}>
        <BiArrowBack size={"1.7rem"}/>
        <Title text={title} size={"18px"} align={"center"} />
        <Avatar />
    </div>
  )
}

export default TopNav