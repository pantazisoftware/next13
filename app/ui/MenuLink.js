"use client";

import Link from "next/link";

export default function MenuLink({ id, href, name }) {
  return (
    <Link
      key={id}
      href={href}
      className="font-medium text-slate-600 hover:text-slate-800">
      {name}
    </Link>
  );
}
