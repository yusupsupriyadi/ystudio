import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <title>Ystudio</title>
        <link rel="icon" type="image/x-icon" className="rounded-full" href="images/ystudio.png"></link>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <body className="font-poppins bg-[#ecf3ff]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
