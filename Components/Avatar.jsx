import Link from 'next/link'
import React from 'react'

function Avatar() {
  return (
    <Link href={"/profile"}>
    <div style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: '#fff',
        backgroundImage: 'url(/img/avatar.svg)',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
    }}></div></Link>
  )
}

export default Avatar