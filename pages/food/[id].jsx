import React, { useEffect, useState } from "react";
import Title from "../../Components/Title";
import TopNav from "../../Components/TopNav";
import style from "../../styles/food.module.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styles from "../../styles/counter.module.css";
import { useRouter } from "next/router";
// import BottomNav from "../../Components/BottomNav";
import { useSelector, useDispatch } from "react-redux";
import { getUserData, updateUserFavourites } from "../../slices/userSlice";
import axios from "axios";
import { getCartData } from "../../slices/cartSlice";
import BottomNav from "../../Components/BottomNav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const notify = (message) =>
  toast.success(message, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
const info = (message) =>
  toast.warning(message, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });


function Food({ meal, photo }) {
  
//   const [count, setCount ] =useState(1)
//   // || useSelector((state) => state.counter.value);
//   const user = useSelector((state) => state.user.value);
//   const cart = useSelector((state) => state.cart.value);

//   const dispatch = useDispatch();
//   let token = localStorage.getItem("token");
//   const handleIncrement = () => setCount(count+1);
//   let router = useRouter();
//   const handleDecrement = () => count>1 ? setCount(count-1): count;
  
//   useEffect(() => {
//     if (token == null && !loaded) {
//       router.push("/login");
//     }
//     if (user.verified == false) {
//       router.push("/verifyphone");
//     } else {
//       setLoaded(true);
//     }
//   }, [user, token]);
//    const [mealSize, setMealSize] = useState("md");
//    const [rate, setRate] = useState(1);
//   const [favourites, setFavourites] = useState(user?.favourites);
//   const [favColour, setfavColour] = useState(
//     favourites.includes(meal._id) ? "#FA602B" : "var(--lightColor)"
//   );
  
//   // useEffect(() => {
//   //   first
  
//   //   return () => {
//   //     second
//   //   }
//   // }, [favourites])
  
//   //  let productInCart = cart.cartItems.find((o) => o.productId === meal._id);
//   //  console.log(productInCart)
//   //  useEffect(() => {
//   //    if(productInCart){
//   //     setCount(productInCart.quantity)
//   //     console.log(count)
//   //    }
//   //    return
//   //  }, [cart])
   

//   const handleAddToCart = () => {
//     var data = {
//       productId: meal._id,
//       quantity: count,
//       name: meal.menuname,
//       price: 10* rate,
//       pic: photo
//     };

//     var config = {
//       method: "post",
//       url: "https://creayonbackend.herokuapp.com/api/v1/cart/" + user._id,
//       headers: {
//         Authorization: "Bearer " + token,
//         "Content-Type": "application/json",
//       },
//       data: data,
//     };

//     axios(config)
//       .then(function (response) {
        
//         dispatch(getCartData(response.data.cart));
// notify("cart updated");
//       })
//       .catch(function (error) {
//         console.log(error);
//         info(error.message)
//       });
//   };

  
//   // console.log(favourites);
//   const addToFavourite = (mealID) => {
//     var axios = require("axios");
//     var data = JSON.stringify({
//       favourites: mealID,
//     });

//     var config = {
//       method: "post",
//       url:
//         "https://creayonbackend.herokuapp.com/api/v1/user/" +
//         user._id +
//         "/favourite/?option=add",
//       headers: {
//         Authorization: "Bearer " + token,
//         "Content-Type": "application/json",
//       },
//       data: data,
//     };

//     axios(config)
//       .then(function (response) {
//         // console.log(JSON.stringify(response.data));
//         if (response.data.success == true) {
//           console.log(user.favourites);
//           dispatch(updateUserFavourites(response?.data.favourites));

//           document.getElementById(mealID).style.fill = "#FA602B";
//           setfavColour("#FA602B"
//           );
//         }
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };
//   const removeFromFavourite = (mealID) => {
//     var axios = require("axios");
//     var data = JSON.stringify({
//       favourites: mealID,
//     });

//     var config = {
//       method: "post",
//       url:
//         "https://creayonbackend.herokuapp.com/api/v1/user/" +
//         user._id +
//         "/favourite/?option=remove",
//       headers: {
//         Authorization: "Bearer " + token,
//         "Content-Type": "application/json",
//       },
//       data: data,
//     };

//     axios(config)
//       .then(function (response) {
        
//         if (response.data.success == true) {
//           dispatch(updateUserFavourites(response?.data.favourites));
//           console.log(user.favourites);
//           setfavColour("var(--lightColor)");
//           document.getElementById(meal._id).style.fill = "var(--lightColor)";
//         }
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };
 
//   return (
//     <div className={style.foodPage}>
//       <ToastContainer />
//       <TopNav text={meal.menuname} />
//       <div className={style.foodContainer}>
//         <div
//           className={style.foodImage}
//           style={{
//             backgroundImage: `url(${photo})`,
//           }}
//         >
//           <div className={styles.counter}>
//             <AiOutlineMinus onClick={handleDecrement} />
//             <span>{count}</span>
//             <AiOutlinePlus onClick={handleIncrement} />
//           </div>
//         </div>
//         <Title text={meal.menuname} size={"17px"} align="left" />
//         <div className={style.sizeOptionContainer}>
//           <div
//             className={style.sizeOption}
//             onClick={() => {
//               setMealSize("sm");
//               setRate(0.75);
//             }}
//           >
//             <p className={style.sizeText}>S</p>
//           </div>
//           <div
//             className={style.sizeOption}
//             style={{
//               backgroundColor: mealSize == "md" ? "var(--orange)" : null,
//               color: mealSize == "md" ? "white" : null,
//             }}
//             onClick={() => {
//               setMealSize("md");
//               setRate(1);
//             }}
//           >
//             <p className={style.sizeText}>M</p>
//           </div>
//           <div
//             className={style.sizeOption}
//             onClick={() => {
//               setMealSize("lg");
//               setRate(1.25);
//             }}
//           >
//             <p className={style.sizeText}>L</p>
//           </div>
//         </div>
//         <div className={style["mealPrice"]}>
//           <strong>
//             <p>{"$" + Math.round(count * rate * 9.99)}</p>
//           </strong>
//         </div>
//         <div className={style["mealDescription"]}>
//           <strong>
//             <p>Description</p>
//           </strong>
//           <article>
//             <p className={style.light} style={{ fontSize: "14px" }}>
//               {meal.description}
//             </p>
//           </article>
//         </div>
//         <div className={style["action"]}>
//           <button onClick={(event) => {
//                         event.preventDefault();
//                         if (user.favourites.includes(meal._id)) {
//                          removeFromFavourite(meal._id);
                          
//                         } else {
//                           addToFavourite(meal._id);
                        
//                         }
//                       }}>
//           <svg
//           id= {meal._id}
//             width="59"
//             height="59"
//             viewBox="0 0 59 59"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <g filter="url(#filter0_d_121_307)">
//               <circle cx="29.5" cy="25.5" r="25.5" fill="white" />
//               <circle cx="29.5" cy="25.5" r="22.5" fill={favColour} />
//               <path
//                 d="M38.2913 17.6118C37.7805 17.1008 37.1741 16.6955 36.5066 16.4189C35.8392 16.1423 35.1238 16 34.4013 16C33.6788 16 32.9634 16.1423 32.2959 16.4189C31.6285 16.6955 31.022 17.1008 30.5113 17.6118L29.4513 18.6718L28.3913 17.6118C27.3596 16.5801 25.9603 16.0005 24.5013 16.0005C23.0423 16.0005 21.643 16.5801 20.6113 17.6118C19.5796 18.6435 19 20.0428 19 21.5018C19 22.9609 19.5796 24.3601 20.6113 25.3918L21.6713 26.4518L29.4513 34.2318L37.2313 26.4518L38.2913 25.3918C38.8023 24.8811 39.2076 24.2746 39.4842 23.6072C39.7608 22.9397 39.9031 22.2243 39.9031 21.5018C39.9031 20.7793 39.7608 20.0639 39.4842 19.3965C39.2076 18.729 38.8023 18.1226 38.2913 17.6118V17.6118Z"
//                 fill="white"
//               />
//             </g>
//             <defs>
//               <filter
//                 id="filter0_d_121_307"
//                 x="0"
//                 y="0"
//                 width="59"
//                 height="59"
//                 filterUnits="userSpaceOnUse"
//                 colorInterpolationFilters="sRGB"
//               >
//                 <feFlood floodOpacity="0" result="BackgroundImageFix" />
//                 <feColorMatrix
//                   in="SourceAlpha"
//                   type="matrix"
//                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                   result="hardAlpha"
//                 />
//                 <feOffset dy="4" />
//                 <feGaussianBlur stdDeviation="2" />
//                 <feComposite in2="hardAlpha" operator="out" />
//                 <feColorMatrix
//                   type="matrix"
//                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
//                 />
//                 <feBlend
//                   mode="normal"
//                   in2="BackgroundImageFix"
//                   result="effect1_dropShadow_121_307"
//                 />
//                 <feBlend
//                   mode="normal"
//                   in="SourceGraphic"
//                   in2="effect1_dropShadow_121_307"
//                   result="shape"
//                 />
//               </filter>
//             </defs>
//           </svg>
// </button>
//           <div className={style["border"]}>
//             <div className={style["addCart"]} onClick={handleAddToCart}>
//               <p>Add to cart</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <BottomNav />
//     </div>
//   );
}

export default Food;

// / direct database queries.
// export async function getStaticProps({ params }) {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   // const router = useRouter();
//   // const id = router.query.id;
//   // const id = window.location.pathname.split("/")[2];
//   const res = await fetch( `https://foodbukka.herokuapp.com/api/v1/menu/${params.id}`);
//   const meals = await res.json();

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       meal: meals.Result,
//       photo: meals.Result.images[Math.floor(Math.random() * 3)],
//     },
//   };
// }
// export async function getStaticPaths() {
//   const res = await fetch("https://foodbukka.herokuapp.com/api/v1/menu/");
//   const mealsJ = await res.json();
//   const meals = mealsJ.Result;
//   const paths = meals.map((meal) => ({
//     params: { id: meal._id },
//   }));

//   return { paths, fallback: false };
// }
