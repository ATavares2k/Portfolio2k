import "./globals.css";
import { League_Spartan } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
const spartan = League_Spartan({
  subsets: ["latin"],
});

export const metadata = {
  title: "André Tavares PORTFOLIO",
  description: "My Portfolio, enjoy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spartan.className}>
        <Navbar />
        <main className="border-4 border-red-300">{children}</main>
      </body>
    </html>
  );
}
