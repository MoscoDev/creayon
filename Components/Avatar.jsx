import React from 'react'

function Avatar() {
  return (
    <div style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: '#fff',
        backgroundImage: 'url(/img/avatar.svg)',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
    }}></div>
  )
}

export default Avatar