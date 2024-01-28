import React from 'react'
import { useContext } from 'react'
import { CartContext } from '@/context/cart'
import Image from 'next/image'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import PaymentButton from './MakePaymentComponent'
import { cartProduct } from '@/app/interface'

export default function ShoppingCart() {
const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)

const cartTotal = getCartTotal()

  return (
    <div className="flex-col flex items-center bg-white gap-8 text-black text-sm">
    <div className="flex flex-col gap-4">
      {cartItems.map((item: cartProduct) => (
        <div className="flex justify-between py-4 items-center" key={item._id}>
          <div className="flex gap-4">
            <Image src={item.imageUrl} width={170} height={10} alt={item.name} className="rounded-md h-24 mr-2" />
            <div className="flex flex-col">
              <h1 className="text-base font-bold">{item.name}</h1>
              <p className="text-gray-600 py-2">${item.price}</p>
          <div className="flex gap-4">
            <button
              className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              onClick={() => {
                addToCart(item)
              }}
            >
              +
            </button>
            <p>{item.quantity}</p>
            <button
              className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              onClick={() => {
                removeFromCart(item)
              }}
            >
              -
            </button>
          </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    {
      cartItems.length > 0 ? (
        <div className="flex flex-col justify-between items-center">
      <h1 className="text-lg font-medium">Total <span className='bg-gray-200 text-black rounded antialiased px-2'> ${getCartTotal()} </span> </h1>
      <Button
        variant="ghost"
        className="px-4 py-2 my-2"
        onClick={() => {
          clearCart()
        }}
      >
        Clear cart
      </Button>
       {/* <Button
      onClick={() => makePayment({amount: 100})}
      variant={"default"}
      className="px-4 py-2 "
      >
        Checkout <ArrowRight className="ml-2 h-4 w-4"/>
      </Button> */}
      <PaymentButton amount={cartTotal} />
     
    </div>
      ) : (
        <h1 className="text-lg font-light">Your cart is empty</h1>
      )
    }
  </div>
  )
}