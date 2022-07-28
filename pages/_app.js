import Head from 'next/head'
import { useEffect, useState } from 'react';
import Layout from '../Components/Layout'
import '../styles/globals.css'
import styles from "../styles/Home.module.css";
import { store } from "./app/store";
import { Provider } from "react-redux";



function MyApp({ Component, pageProps }) {
  
  return (
    <Layout>
      <Head>
        <title>Creayon Foods</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,  viewport-fit=cover, user-scalable=noshrink-to-fit=no"
        />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  );
}

export default MyApp
