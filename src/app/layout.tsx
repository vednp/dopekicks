import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { CartProvider } from "@/context/cart";
import { Toaster } from "@/components/ui/toaster"
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        </CartProvider>
        <Toaster />
      </body>
    </html>
  );
}
