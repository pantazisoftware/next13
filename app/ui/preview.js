"use client";

export default function Preview({ lang, code }) {
  if (lang === "html") {
    return (
      <>
        <h2 className="font-bold">Preview</h2>
        <iframe
          className="w-full h-96 border border-slate-200 rounded-lg overflow-hidden"
          srcDoc={`<script src="https://cdn.tailwindcss.com"></script>` + code}
          frameborder="0"></iframe>
      </>
    );
  }
  return (
    <>
      <p className="text-slate-500">No preview</p>
    </>
  );
}
