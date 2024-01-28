"use client";
import React from "react";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import Link from "next/link";
import { montserrat } from "../app/fonts";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ShoppingCart from "./ShoppingCart";

export default function Navbar() {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Men",
      href: "/Men",
    },
    {
      name: "Women",
      href: "/Women",
    },
    {
      name: "Kids",
      href: "/Kids",
    },
  ];

  const pathname = usePathname();
  return (
    <div className="backdrop-blur-md fixed w-full z-10">
      <MaxWidthWrapper>
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <h1
              className={cn(
                "text-xl sm:text:2xl md:text-3xl font-medium leading-tight",
                montserrat.className
              )}
            >
              Dope Kicks
            </h1>
          </Link>
          <div className="hidden md:flex gap-6 ">
            {links.map((link) => {
              return (
                <Link
                  key={link.name}
                  className={`link ${
                    pathname === link.href ? "active text-green-900" : ""
                  }`}
                  href={link.href}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <Sheet >
            <SheetTrigger asChild >
              <div>
              <Button
                variant="default"
                className="gap-2 md:px-6 md:mx-9 rounded-xl"
              >
                {" "}
                <ShoppingBag /> Cart
              </Button>{" "}
              </div>
            </SheetTrigger>
            <SheetContent side="right" className="overflow-y-scroll">
              <SheetHeader>
                <SheetTitle>Shopping Cart</SheetTitle>
                <SheetDescription >
                  <ShoppingCart/>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
