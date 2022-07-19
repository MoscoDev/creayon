import Head from 'next/head'
import { useEffect, useState } from 'react';
import Layout from '../Components/Layout'
import '../styles/globals.css'
import styles from "../styles/Home.module.css";


function MyApp({ Component, pageProps }) {
  
  const [welcome, setWelcome] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setWelcome(false);
    }, 3000);
  }, []);
  return (
     welcome ? 
      (
        <div className={styles.welcome} style={{position: "fixed", top:"0px"}}>
          <div className={styles.welcomeText}>
            <h1>Creayon Food</h1>
          </div>
        </div>
      ) :
       ( 
    <Layout>
      <Head>
        <title>Creayon Foods</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>)
  );
}

export default MyApp
