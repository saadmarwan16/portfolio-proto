import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="dark">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Web site created using create-react-app"
          />
          <meta
            name="keywords"
            content="Marwan Sa-ad, Saad, Full Stack Web Developer, Mobile Developer, Freelancer, Reactjs Developer, Flutter Developer, Nextjs Developer"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-fixed bg-gradient-to-r from-green to-blue-500 dark:from-dark-500 dark:to-dark-700 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
