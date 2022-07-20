import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="public/icon-192x192.png"></link>
          <meta name="theme-color" content="#FF4200" />
          <meta name="HandheldFriendly" content="true" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#FF4200"
          />
          <meta name="description" content="Creayon Food at your door step" />
          <meta name="description" content="Creayon Food so delicious" />
          <meta name="description" content="Welcome to Creayon Food" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
