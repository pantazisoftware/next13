"use client";

import Preview from "./preview";
import Link from "next/link";

export default function Component({ component }) {
  return (
    <div>
      <Link href={`/components/${component?.slug}`}>
        <div className="border border-slate-200 rounded-lg p-4 flex flex-col overflow-hidden">
          <Preview
            lang={component?.language}
            code={component?.code}
            height="h-64 origin-center"
            scale="80"
          />
          <h1 className="font-bold text-lg">{component?.name}</h1>
          <p className="font-mono text-sm text-slate-500">
            #{component?.expand?.category?.name}
          </p>
          <div className="flex justify-between items-center"></div>
        </div>
      </Link>
    </div>
  );
}
