import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="flex h-12 items-center justify-between shadow-md px-4">
        <Link href="/" legacyBehavior>
          <a className="text-lg font-bold">Shop-App</a>
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
  );
}
