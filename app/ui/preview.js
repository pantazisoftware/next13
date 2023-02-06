"use client";


export default function Preview({ lang, code, height, scale, viewport }) {

  const preload = `<html class="w-full h-full">
                        <head>
                            <meta charset="utf-8">
                            <script src="https://cdn.tailwindcss.com"></script>
                            <meta name="viewport" content="width=device-width, initial-scale=1" />
                            <script>
                                function fixLinks() {
                                    var links = document.querySelectorAll("a");

                                    for (var index = 0; index < links.length; index++) {
                                        links[index].removeAttribute('href');
                                    }
                                }
                            </script>

                            <style>
                                a {
                                    cursor: pointer;
                                }
                            </style>
                        </head>
                        <body
                            onload="fixLinks();"
                            style="height: min-content;"
                            class="my-auto px-4 w-full"
                        >`;
  if (lang === "html") {
    return (
        <div className={`shadow-lg border border-slate-100 rounded-lg mx-auto origin-center ${viewport} ${height}`}>
          <iframe
            className={
              `w-full h-full origin-center rounded-lg overflow-hidden ` + height
            }
            loading="eager"
            srcDoc={
              `<div class="scale-[${scale}%] origin-top">${preload}` +
              code +
              `</div>`
            }></iframe>
        </div>
    );
  }
}
