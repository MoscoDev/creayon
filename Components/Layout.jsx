 import React, { useState, useEffect } from 'react'
import style from '../styles/Home.module.css'

function Layout({children}) {
  
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const updateMobile = () => {
      setMobile(window.innerWidth < 576 ? true : false);
    };

    updateMobile();
    window.addEventListener("resize", updateMobile);
    return () => {
      window.removeEventListener("resize", updateMobile);
    };
  }, []);
  
  return mobile ? (
    <div className={style.general} style={{ background: "#E5E5E5", minHeight:"100vh" }}>{children}</div>
  ) : (
    <div className="container">
      <div className="row">
        <div className="col-md-12">mummy</div>
      </div>
    </div>
  );
}
  


export default Layout