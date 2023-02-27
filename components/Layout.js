import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + " - Shop App" : "Shop App"}</title>
        <meta name="description" content="Ecommerce Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center justify-between shadow-md px-4">
            <Link href="/" legacyBehavior>
              <a className="text-lg font-bold">Shoa-App</a>
            </Link>
            <div>
              <Link href="/cart" legacyBehavior>
                <a className="m-3">Cart</a>
              </Link>
              <Link href="/login" legacyBehavior>
                <a className="">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 ">{children}</main>
        <footer className="flex h-12 justify-center items-center shadow-inner">
          <p>Copyright &#169; 2023 Shop App || By M-Elbaz</p>
        </footer>
      </main>
    </>
  );
}
