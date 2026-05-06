import React from "react";
import Link from "next/link";

export function NavBar() {
  return (
    <nav className="bg-zinc-900 text-white px-6 py-4 flex items-center justify-between">
      <ul className="flex gap-6 list-none">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
