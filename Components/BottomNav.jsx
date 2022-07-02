import Link from 'next/link'
import { AiOutlineHome, AiOutlineShoppingCart } from 'react-icons/ai'
import { FaRegUser } from 'react-icons/fa'
import { IoIosHeartEmpty } from 'react-icons/io'
import { BsFolder2 } from 'react-icons/bs'
import style from '../styles/Nav.module.css'

function BottomNav() {
  return (
    <div className={style.BottomNav}>
      <Link href="/">
        <a>
          <AiOutlineHome size="1.5rem" />
        </a>
      </Link>
      <Link href="/">
        <a>
          <IoIosHeartEmpty size="1.5rem" />
        </a>
      </Link>{" "}
      <Link href="/">
        <a>
          <BsFolder2 size="1.3rem" />
        </a>
      </Link>{" "}
      <Link href="/">
        <a>
          <AiOutlineShoppingCart size="1.5rem" />
        </a>
      </Link>{" "}
      <Link href="/">
        <a>
          <FaRegUser size="1.5rem" color="#E5E5E5 " />
        </a>
      </Link>
    </div>
  );
}

export default BottomNav