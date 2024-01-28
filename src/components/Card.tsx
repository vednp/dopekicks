"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cartProduct, cardProductInterface } from "@/app/interface";
import { BadgeCheck, ShoppingBagIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CartContext } from "@/context/cart";
import { useContext } from "react";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
export default function Card(product: cardProductInterface) {
  const { name, imageUrl, price, categoryName, slug, _id } = product;
  const { addToCart } = useContext(CartContext);
  const { toast } = useToast();


  return (
    <motion.div 
    initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1,}}  
      transition={{ duration: 0.75, delay: 0.2 }}
      
    className="relative flex flex-col mt-6 text-gray-700 bg-transparent shadow-md bg-clip-border rounded-xl w-72 hover:scale-105 ease-in-out duration-300">
      <Link href={`/product/${slug}`} className="">
        <div className="relative mx-4 overflow-hidden text-white bg-clip-border rounded-xl bg-blue-gray-500 h-44">
          <div className="flex items-center justify-center">
            <Image src={imageUrl} width={250} height={150} alt={name} />
          </div>
        </div>
        <div className="p-6">
          <h5 className="block mb-2 line-clamp-1 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {name}
          </h5>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            {categoryName}
          </p>
          <p className=" text-xl pt-2 font-normal antialiased ">${price}</p>
        </div>
      </Link>
      <div className="p-6 pt-0 bottom-6 flex justify-between">
        <Link href={`/product/${slug}`}>
          <button
            onClick={() => {
            }}
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
          >
            Buy Now
          </button>
        </Link>
        <Button variant="ghost" size="sm" asChild>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <ShoppingBagIcon
                  onClick={() => {
                    addToCart(product)
                    toast({
                      title: "Added to cart",
                      description: "Item successfully added to cart",
                    });
                  }}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to cart</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Button>
      </div>
    </motion.div>
  );
}
