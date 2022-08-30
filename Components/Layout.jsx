 import React, { useState, useEffect } from 'react'
import style from '../styles/Home.module.css'

function Layout({children}) {
  
  const [mobile, setMobile] = useState(null);
//  const [welcome, setWelcome] = useState(true);
//  useEffect(() => {
//    setTimeout(() => {
//      setWelcome(false);
//    }, 3000);
//  }, []);
  useEffect(() => {
    const updateMobile = () => {
      let check = false;
      const screenWidth = window.innerWidth;
      window.mobileAndTabletCheck = function () {
        // let check = false;
        (function (a) {
          if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
              a
            ) 
          )
            check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
        
      };

 window.mobileAndTabletCheck()
 if (check) {
   setMobile(true);
 } else {
   setMobile(false);
 }
    };

    updateMobile();
    window.addEventListener("resize", updateMobile);
    return () => {
      window.removeEventListener("resize", updateMobile);
    };
  }, []);
  
  return mobile == null ? null : mobile ? (
    <div
      className={style.general}
      style={{ minHeight: "100vh", width: "100vw" }}
    >
      {children}
    </div>
  ) : (
    <div className="container">
      <div className="row">
        <div
          className="col-md-12"
          style={{
            background: "url(./img/bg.png)",
            width: "100vw",
            height: "100vh",
            backgroundImage: "url(/img/bg.png)",
            backgroundPosition: "center",
            backgroundSize: "50%",
            backgroundColor: "var(--lightColor)",
            backgroundRepeat: "no-repeat",
            fontFamily: "'Recoleta', sans-serif",
            color: " #FF5D68",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            padding: "7%",
          }}
        >
          <h2 style={{ width: "max-content" }}>
            oops Creayon Foods is available for mobile devices only
          </h2>
        </div>
      </div>
    </div>
  );
}
  


export default Layout