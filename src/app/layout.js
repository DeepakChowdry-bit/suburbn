import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import TopCta from "@/Components/TopCta";
import Footer from "@/Components/Footer";
import NextTopLoader from 'nextjs-toploader';
import useCart from "@/lib/useCart";
import CartProvider from "@/lib/CartContext";


export const metadata = {
  title: "SUBURBN.",
  description: "Clothing Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-zinc-50`}>
        <NextTopLoader
          color="linear-gradient(to right, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))"
          height={5}
          showSpinner={true}
          easing="ease"
          speed={700}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          crawl={true}
        />
        {/* <CartProvider> */}
          <TopCta />
          <Navbar />
          {children}
          <Footer />
        {/* </CartProvider> */}


      </body>
    </html>
  );
}
