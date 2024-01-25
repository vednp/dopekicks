"use client";
import React from "react";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import Link from "next/link";
import { montserrat } from "../app/fonts";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="backdrop-blur-md fixed w-full z-10">
      <MaxWidthWrapper>
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <h1 className={cn("text-3xl font-medium leading-tight", montserrat.className)}>
              Dope Kicks
            </h1>
          </Link>
          <ul className="flex gap-4">
            <li>
              <Link
                className={`link ${
                  pathname === "/" ? "active text-green-900" : ""
                }`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`link ${
                  pathname === "/men" ? "active text-gray-500" : ""
                }`}
                href="/men"
              >
                Men
              </Link>
            </li>
            <li>
              <Link
                className={`link ${
                  pathname === "/women" ? "active text-gray-500" : ""
                }`}
                href="/women"
              >
                Women
              </Link>
            </li>
            <li>
              <Link
                className={`link ${
                  pathname === "/kids" ? "active text-gray-500" : ""
                }`}
                href="/kids"
              >
                Kids
              </Link>
            </li>
          </ul>
         
            <Button variant="default" className="gap-2 px-6 rounded-2xl">
              {" "}
              <ShoppingBag /> Cart
            </Button>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
