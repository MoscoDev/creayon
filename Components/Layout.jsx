 import React, { useState, useEffect } from 'react'
import style from '../styles/Home.module.css'

function Layout({children}) {
  
  const [mobile, setMobile] = useState(null);

  useEffect(() => {
    const updateMobile = () => {
      
      const screenWidth = window.innerWidth;
      if (screenWidth < 576) {
        setMobile(true);
      } else {
        setMobile(false);
      }

      console.log(NavigatorUAData);
    };

    updateMobile();
    window.addEventListener("resize", updateMobile);
    return () => {
      window.removeEventListener("resize", updateMobile);
    };
  }, []);
  
  return mobile ? (
    <div className={style.general} style={{minHeight:"100vh", width:"100vw" }}>{children}</div>
  ) : (
    <div className="container">
      <div className="row">
        <div className="col-md-12">mummy</div>
      </div>
    </div>
  );
}
  


export default Layout