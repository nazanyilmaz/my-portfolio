import React from "react";
import Head from "next/head";
import Header from "../components/Header";

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content="Portfolio" />
        <meta property="og:title" content={title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-gray-900 antialiased font-montserrat relative z-10 px-3 overflow-hidden">
        <div className="w-full h-full">
          <Header />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
