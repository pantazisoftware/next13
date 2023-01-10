"use client";

import React, { useState, useEffect } from "react";
import Prism from "prismjs";
require("prismjs/components/prism-javascript");
require("prismjs/components/prism-css");
require("prismjs/components/prism-markup");
//import hljs from "highlight.js/lib/common";
import { CopyToClipboard } from "react-copy-to-clipboard";
//import "highlight.js/styles/base16/monokai.css";

export default function Code({ source }) {
  useEffect(() => {
    //hljs.initHighlightingOnLoad();
    Prism.highlightAll();
  }, []);
  const [buttonText, setButtonText] = useState("Copy");
  return (
    <>
      <div className="flex flex-col space-y-2">
        <div>
          <h2 className="font-bold">Code</h2>
          <pre className="rounded-lg overflow-hidden relative">
            <code className="language-html h-96">{source}</code>
            <CopyToClipboard text={source} result={console.log("copied")}>
              <button
                className="absolute top-2 right-2 bg-white/20 text-white hover:bg-white/30 rounded-lg z-10 font-sans px-2 py-2 inline-flex items-center space-x-2 font-medium shadow-md"
                onClick={() => setButtonText("Copied")}>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6"
                  />
                </svg>
                <span>{buttonText}</span>
              </button>
            </CopyToClipboard>
          </pre>
        </div>
        <div>
          <h2 className="font-bold">Preview</h2>
          <iframe
            className="w-full h-96 border border-slate-200 rounded-lg overflow-hidden"
            srcDoc={
              `<script src="https://cdn.tailwindcss.com"></script>` + source
            }
            frameborder="0"></iframe>
        </div>
      </div>
    </>
  );
}
