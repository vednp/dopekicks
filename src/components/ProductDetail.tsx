"use client"
import React from 'react'
import { ShoppingBagIcon, Star, Truck } from "lucide-react";
import { productDetails, cartProduct } from '@/app/interface'
import Image from 'next/image'
import { Button } from './ui/button'
import PaymentButton from './MakePaymentComponent';
import { CartContext } from "@/context/cart";
import { useContext } from "react";
import { useToast } from "@/components/ui/use-toast";
export default function ProductDetail(data : productDetails) {

    const { description, imageUrl, name, price, categoryName, _id } = data[0] ;
    const { addToCart } = useContext(CartContext);
    const { toast } = useToast();
  return (
    <div className="bg-white pt-24 min-h-screen ">
    <div className="mx-auto max-w-screen-xl px-4 md:px-8 ">
      <div className="grid gap-8 md:grid-cols-2">
        <Image src={imageUrl} alt={name} width={500} height={500} className='mt-8'></Image>

        <div className="md:py-8">
          <div className="mb-2 md:mb-3">
            <span className="mb-0.5 inline-block text-gray-500">
              {categoryName}
            </span>
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
              {name}
            </h2>
          </div>

          <div className="mb-6 flex items-center gap-3 md:mb-10">
            <Button className="rounded-full gap-x-2">
              <span className="text-sm">4.2</span>
              <Star className="h-5 w-5" />
            </Button>

            <span className="text-sm text-gray-500 transition duration-100">
              56 Ratings
            </span>
          </div>

          <div className="mb-4">
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-gray-800 md:text-2xl">
                ${price}
              </span>
              <span className="mb-0.5 text-red-500 line-through">
                ${price + 30}
              </span>
            </div>

            <span className="text-sm text-gray-500">
              Incl. Vat plus shipping
            </span>
          </div>

          <div className="mb-6 flex items-center gap-2 text-gray-500">
            <Truck className="w-6 h-6" />
            <span className="text-sm">2-4 Day Shipping</span>
          </div>

          <div className="flex gap-2.5">
            
            <PaymentButton amount={price}/>
            <Button variant="ghost" size="lg" onClick={() => {
                    addToCart( data[0] );
                    toast({
                      title: "Added to cart",
                      description: "Item successfully added to cart",
                    });
                  }}>
          
          <ShoppingBagIcon className="h-6 mr-2 w-6" /> Add to cart
        </Button>
          </div>

          <p className="mt-12 text-base text-gray-500 tracking-wide">
            {description}
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}