import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import style from "../styles/counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

function Counter({minCount}) {
   const count = useSelector((state) => state.counter.value);
   const dispatch = useDispatch();
  

  const handleIncrement = () => dispatch(increment());

  const handleDecrement = () => {
   ( count > ( 1) )? () => dispatch(decrement()) : setCount( 1);

  };
  return (
    <div className={style.counter}>
      <AiOutlineMinus onClick={handleDecrement} />
      <span>{count}</span>
      <AiOutlinePlus onClick={handleIncrement} />
    </div>
  );
}

export default Counter;
