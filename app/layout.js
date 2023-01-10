import "./styles.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header className="border-b border-slate-300 py-3 px-4">
          <h2 className="font-bold text-xl">Nice Website</h2>
          <div className="inline-flex space-x-2 items-center">
            <a href="/" className="hover:text-blue-500 font-medium">
              Homepage
            </a>
            <a href="/components" className="hover:text-blue-500 font-medium">
              Components
            </a>
          </div>
        </header>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
