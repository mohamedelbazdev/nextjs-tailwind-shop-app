import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + " - Shop App" : "Shop App"}</title>
        <meta name="description" content="Ecommerce Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="container m-auto mt-4 flex min-h-screen flex-col justify-between pb-5">
        {children}
      </main>

      <Footer />
    </>
  );
}
