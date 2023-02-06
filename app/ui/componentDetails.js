'use client';
import Code from "./code";
import Preview from "./preview";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function ComponentDetails({code, language}) {
    const [viewport, setViewport] = useState("w-full");
    const [buttonText, setButtonText] = useState("Copy Code");

    const iframe = (
      <Preview
        lang={language}
        code={code}
        height="h-[500px]"
        scale="95"
        viewport={viewport}
      />
    );
    const codeBox = <Code code={code} language={language} />;
    const html = "html";
    const viewBox = [iframe, codeBox];

   const [activeView, setActiveView] = useState(iframe)
    
  return (
    <>
      <div className="flex justify-between items-center space-x-3 bg-black rounded-lg p-2 my-3">
        <div className="flex space-x-3 justify-start">
          {language === "html" ? (
            <button
              onClick={() => setActiveView(viewBox[0])}
              className="bg-white/10 text-white/90 text-sm font-medium hover:bg-white/20 rounded-lg p-2 inline-flex items-center space-x-2 border border-white/10">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>Preview</span>
            </button>
          ) : (
            <></>
          )}

          <button
            onClick={() => setActiveView(viewBox[1])}
            className="bg-white/10 text-white/90 text-sm font-medium hover:bg-white/20 rounded-lg p-2 inline-flex space-x-2 items-center border border-white/10">
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>
            <span>Code</span>
          </button>
        </div>
        <div className="flex space-x-3 justify-center">
          <button
            className="hidden sm:block bg-white/10 text-white/90 hover:bg-white/20 rounded-lg p-2 border border-white/10"
            onClick={({ target }) => {
              setViewport("max-w-sm");
              
            }}>
            <svg
              fill="none"
              stroke="currentColor"
              className="w-6 h-6"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
          </button>
          <button
            className="hidden md:block bg-white/10 text-white/90 hover:bg-white/20 rounded-lg p-2 border border-white/10"
            onClick={({ target }) => {
              setViewport("max-w-md");
              
            }}>
            <svg
              fill="none"
              stroke="currentColor"
              className="w-6 h-6"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </button>
          <button
            className="hidden lg:block bg-white/10 text-white/90 hover:bg-white/20 rounded-lg p-2 border border-white/20"
            onClick={({ target }) => {
              setViewport("max-w-2xl");
            }}>
            <svg
              fill="none"
              stroke="currentColor"
              className="w-6 h-6"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-end">
          <CopyToClipboard text={code}>
            <button
              className="inline-flex space-x-2  items-center bg-white/10 text-white/90 text-sm font-medium hover:bg-white/20 border border-white/10 rounded-lg p-2"
              onClick={() => setButtonText("Copied")}>
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                className="w-5 h-5"
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
        </div>
      </div>
      <div className="flex flex-col">
        {activeView}
      </div>
    </>
  );
}
