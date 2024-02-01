import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { CartProvider } from "@/context/cart";
import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Dope Kicks ",
  description: " Find your favorite kicks ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body
        className={cn(
          "min-h-screen font-sans antialiased scroll-smooth",
          inter.className
        )}
      >
        <CartProvider>
        <Navbar />
        {children}
        <Footer/>
        </CartProvider>
        <Toaster />
      </body>
    </html>
  );
}
