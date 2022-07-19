import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import style from "../styles/counter.module.css";

function Counter({minCount, maxCount}) {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
   ( count > (minCount || 1) )? setCount(count - 1) : setCount(minCount || 1);

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
