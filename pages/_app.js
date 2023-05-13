import "@/styles/globals.css";
import Head from "next/head";
 


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head jsx global>{
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      }</Head>
      <div id="hiden">
        <h1>kuy ten yed dek</h1>
        
      </div>
      <div className="container">
        <Component {...pageProps} />
      </div>
    </>
  );
}
