import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import Button from "../Components/Button";

export default function Home() {
  const [welcome, setWelcome] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setWelcome(false);
    }, 3000);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Creayon Food</title>
        <meta name="description" content="Creayon Food at your door step" />
        <meta name="description" content="Creayon Food so delicious" />
        <meta name="description" content="Welcome to Creayon Food" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="viewport" content="width=device-width, maximum-scale=1.0" />
        <title>Creayon Food at your door step</title>
      </Head>
      {welcome ? 
      (
        <div className={styles.welcome} style={{position: "fixed", top:"0px", left:"0px"}}>
          <div className={styles.welcomeText}>
            <h1>Creayon Food</h1>
          </div>
        </div>
      ) :
       (
        <div className={styles.onboardingPage}>
          <Carousel
            lengend={false}
            showThumbs={false}
            showIndicators={true}
            swipeScrollTolerance={10}
            autoPlay={true}
            showStatus={false}
            infiniteLoop={true}
          >
            <div>
              <div className={styles.imgcontainer}>
                <Image
                  width={324}
                  height={249}
                  src="/img/onboarding1.svg"
                  alt="image1"
                />
                <p className={styles.subtitle}>
                  Providing excellent meal service
                </p>
                <p className={styles.title}>Creayon Food at your door step</p>
              </div>
            </div>
            <div>
              <div className={styles.imgcontainer}>
                <Image
                  width={373}
                  height={249}
                  src="/img/onboarding2.svg"
                  alt="image2"
                />

                <p className={styles.subtitle}>
                  Providing the quickest delivery service possible
                </p>
                <p className={styles.title}>Creayon Food so delicious</p>
              </div>
            </div>
            <div>
              <div className={styles.imgcontainer}>
                <Image
                  width={297}
                  height={249}
                  src="/img/onboarding3.svg"
                  alt="image3"
                />
                <p className={styles.subtitle}>Have a taste and ask for more</p>
                <p className={styles.title}>Welcome to Creayon Food</p>
              </div>
            </div>
          </Carousel>
          <div className={styles.onboardingButtons}>
            <Button
              text="login"
              colour="orange"
              link={"/login"}
              size="md"
            ></Button>
            <Button
              text="signup"
              colour="white"
              link={"/signup"}
              size="md"
            ></Button>
          </div>
        </div>
       )}
    </div>
  );
}
