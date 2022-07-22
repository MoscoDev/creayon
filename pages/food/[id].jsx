import React, { useState } from "react";
import Title from "../../Components/Title";
import TopNav from "../../Components/TopNav";
import style from "../../styles/food.module.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styles from "../../styles/counter.module.css";
import { useRouter } from "next/router";

function food({meal}) {
   
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const imgNumber = Math.floor(Math.random() * 3);

  const handleDecrement = () => {
    (count > 1 ) ? setCount(count - 1) : setCount(1);
  };
  const [mealSize, setMealSize] = useState("md");
  const [rate, setRate] = useState(1);
  return (
    <div className={style.foodPage}>
      <TopNav text={meal.menuname} />
      <div
        className={style.foodImage}
        style={{
          backgroundImage: `url(${meal.images[imgNumber]})`,
        }}
      >
        <div className={styles.counter}>
          <AiOutlineMinus onClick={handleDecrement} />
          <span>{count}</span>
          <AiOutlinePlus onClick={handleIncrement} />
        </div>
      </div>
      <Title text={meal.menuname} size={"17px"} align="left" />
      <div className={style.sizeOptionContainer}>
        <div
          className={style.sizeOption}
          onClick={() => {
            setMealSize("sm");
            setRate(0.75);
          }}
        >
          <p className={style.sizeText}>S</p>
        </div>
        <div
          className={style.sizeOption}
          style={{
            backgroundColor: mealSize == "md" ? "var(--orange)" : null,
            color: mealSize == "md" ? "white" : null,
          }}
          onClick={() => {
            setMealSize("md");
            setRate(1);
          }}
        >
          <p className={style.sizeText}>M</p>
        </div>
        <div
          className={style.sizeOption}
          onClick={() => {
            setMealSize("lg");
            setRate(1.25);
          }}
        >
          <p className={style.sizeText}>L</p>
        </div>
      </div>
      <div className={style["mealPrice"]}>
        <strong>
          <p>{"$" + Math.round(count * rate * 9.99)}</p>
        </strong>
      </div>
      <div className={style["mealDescription"]}>
        <strong>
          <p>Description</p>
        </strong>
        <article>
          <p className={style.light} style={{ fontSize: "14px" }}>
            {meal.description}
          </p>
        </article>
      </div>
      <div className={style["action"]}>
        <svg
          width="59"
          height="59"
          viewBox="0 0 59 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_121_307)">
            <circle cx="29.5" cy="25.5" r="25.5" fill="white" />
            <circle cx="29.5" cy="25.5" r="22.5" fill="#FF4200" />
            <path
              d="M38.2913 17.6118C37.7805 17.1008 37.1741 16.6955 36.5066 16.4189C35.8392 16.1423 35.1238 16 34.4013 16C33.6788 16 32.9634 16.1423 32.2959 16.4189C31.6285 16.6955 31.022 17.1008 30.5113 17.6118L29.4513 18.6718L28.3913 17.6118C27.3596 16.5801 25.9603 16.0005 24.5013 16.0005C23.0423 16.0005 21.643 16.5801 20.6113 17.6118C19.5796 18.6435 19 20.0428 19 21.5018C19 22.9609 19.5796 24.3601 20.6113 25.3918L21.6713 26.4518L29.4513 34.2318L37.2313 26.4518L38.2913 25.3918C38.8023 24.8811 39.2076 24.2746 39.4842 23.6072C39.7608 22.9397 39.9031 22.2243 39.9031 21.5018C39.9031 20.7793 39.7608 20.0639 39.4842 19.3965C39.2076 18.729 38.8023 18.1226 38.2913 17.6118V17.6118Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_121_307"
              x="0"
              y="0"
              width="59"
              height="59"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_121_307"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_121_307"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <div className={style["border"]}>
          <div className={style["addCart"]}>
            <p>Add to cart</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default food;

// / direct database queries.
export async function getStaticProps({ params }) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const router = useRouter();
  // const id = router.query.id;
  // const id = window.location.pathname.split("/")[2];
  const res = await fetch(`https://foodbukka.herokuapp.com/api/v1/menu/${params.id}`);
  const meals = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      meal: meals.Result,
    },
  };
}
export async function getStaticPaths() {
  const res = await fetch("https://foodbukka.herokuapp.com/api/v1/menu/");
  const mealsJ = await res.json();
const meals = mealsJ.Result;
    const paths = meals.map((meal) => ({
      params: { id: meal._id },
    }));

  return { paths, fallback: false };
}