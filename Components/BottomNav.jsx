import Link from "next/link";
import { AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsFolder2 } from "react-icons/bs";
import style from "../styles/Nav.module.css";
import { useSelector } from "react-redux";
// import cartSlice from "../slices/cartSlice";
// import userSlice from "../slices/userSlice";

function BottomNav() {
  const cart = useSelector((state) => state.cart.value);
  console.log(cart.cartItems.length);
  const pageTitle = window.location.pathname;
  // remove the '/' from the page title
  const title = pageTitle.substring(1);
  return (
    <div className={style.BottomNav}>
      <Link href="/home">
        <a>
          <AiOutlineHome
            size="1.3rem"
            color={title === "home" ? "#FF4200" : "#666666"}
          />
        </a>
      </Link>
      <Link href="/favourite">
        <a>
          <IoIosHeartEmpty
            size="1.3rem"
            color={title === "favourite" ? "#FF4200" : "#666666"}
          />
        </a>
      </Link>{" "}
      <Link href="/orders">
        <a>
          <BsFolder2
            size="1.3rem"
            color={title === "orders" ? "#FF4200" : "#666666"}
          />
        </a>
      </Link>{" "}
      <Link href="/cart">
        <a>
          <AiOutlineShoppingCart
            size="1.3rem"
            color={title === "cart" ? "#FF4200" : "#180808"}
          />
          <div
            style={{
              width: "22px",
              height: "22px",
              color: "white",
              backgroundColor: "#FF4200",
              borderRadius: "50%",
              fontSize: "12px",
              textAlign: "center",
              margin: "0px auto",
              position: "absolute",
              top: "8px",
              marginLeft: "15px",
              lineHeight: "22px",
            }}
          >
            {cart.cartItems.length}
          </div>
        </a>
      </Link>{" "}
      <Link href="/profile">
        <a className={style.active}>
          <FaRegUser
            size="1.3rem"
            color={title === "profile" ? "#ff4200" : "#666666"}
          />
        </a>
      </Link>
    </div>
  );
}

export default BottomNav;
