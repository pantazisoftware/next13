"use client";

import React, { useEffect } from "react";
import Prism from "prismjs";
require("prismjs/components/prism-jsx");
require("prismjs/components/prism-css");
require("prismjs/components/prism-markup");


export default function Code({ code, language }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="rounded-xl overflow-hidden">
          <pre className="rounded-xl h-96 overflow-hidden relative">
            <code className={`language-${language}`}>{code}</code>
          </pre>
        
    </div>
  );
}
