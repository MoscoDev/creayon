import Head from 'next/head'
import { useEffect, useState } from 'react';
import Layout from '../Components/Layout'
import '../styles/globals.css'
import styles from "../styles/Home.module.css";


function MyApp({ Component, pageProps }) {
  
  return ( 
    <Layout>
      <Head>
        <title>Creayon Foods</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
