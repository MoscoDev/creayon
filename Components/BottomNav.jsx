import Link from 'next/link'
import { AiOutlineHome, AiOutlineShoppingCart } from 'react-icons/ai'
import { FaRegUser } from 'react-icons/fa'
import { IoIosHeartEmpty } from 'react-icons/io'
import { BsFolder2 } from 'react-icons/bs'
import style from '../styles/Nav.module.css'

function BottomNav() {
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
            color={title === "cart" ? "#FF4200" : "#666666"}
          />
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

export default BottomNav