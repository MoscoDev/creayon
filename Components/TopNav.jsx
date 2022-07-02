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
        padding: '0.5rem 1rem'
    }
  return (
    <div style={styles}>
        <BiArrowBack/>
        <Title text="Home" align={"center"} />
        <Avatar />
    </div>
  )
}

export default TopNav