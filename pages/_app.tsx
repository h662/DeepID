import type { AppProps } from "next/app";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import Layout from "../components/Layout";

import "animate.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Deep ID</title>
        <meta
          name="description"
          content="Total Integrated Anti-Counterfeiting Serviced Platform: Deep ID"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(MyApp);
