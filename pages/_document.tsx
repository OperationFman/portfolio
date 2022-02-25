import Document, { Html, Head, Main, NextScript } from "next/document";
import { Navbar } from "../components/navigation/Navbar";

class MyDocument extends Document {
  render() {
    // Add fonts and styles below
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Navbar />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
