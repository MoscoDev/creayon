import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
          <title>Creayon Food</title>
          <meta name="description" content="Creayon Food at your door step" />
          <meta name="description" content="Creayon Food so delicious" />
          <meta name="description" content="Welcome to Creayon Food" />
          {/* for mobile viewport only */}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="viewport"
            content="width=device-width, maximum-scale=1.0"
          />
          <title>Creayon Food at your door step</title>
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
