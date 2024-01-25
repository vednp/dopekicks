import React from "react";
import NikeHero from "../../public/nike-hero2.jpg";
import NikeHero2 from "../../public/nike-hero.jpg";
import { montserrat } from "@/app/fonts";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"
import { motion } from "framer-motion"
import { MaxWidthWrapper } from "./MaxWidthWrapper";
export default function Hero() {
  
  return (
    <div>
      <div className="flex relative">

        <div className="absolute flex flex-col top-44 left-16 animate-fade-in  ">
        <p className={cn("text-3xl font-light tracking-tight", montserrat.className)}>Nike Air Zoom Pegasus 36</p>
        <Button variant="ghost" size="sm" className="mt-2 dark" asChild>
          <Link href="/">Buy Now  <ArrowRight className="ml-2 h-4 w-4"  /></Link>
        </Button>
        </div>

      <Image
        className=" max-w-sm sm:max-w-5xl md:max-w-5xl items-stretch min-h-screen lg:max-w-screen-2xl "
        src={NikeHero}
        alt="nike"
      ></Image>
       </div>
    </div>
  );
}

