import "./styles.css";
import "./prism.css";
import NavBar from "./ui/Navbar";
import { Inter } from "@next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="font-inter">
      <head />
      <body className="antialiased font-inter">
        <header>
          <NavBar />
        </header>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
