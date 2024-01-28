"use client";
import React, { Suspense, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    Razorpay: any;
  }
}
const PaymentButton = ({ amount }: { amount: number }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const makePayment = async () => {
    setIsLoading(true);

    // make an endpoint to get this key
    const key = process.env.NEXT_PUBLIC_RAZORPAY_KEY;
    const data = await fetch("/api/razorpay?amount=" + amount);
    const { order } = await data?.json();
    const options = {
      key: key,
      name: "John Doe",
      currency: order.currency,
      amount: order.amount,
      order_id: order.id,
      modal: {
        ondismiss: function () {
          setIsLoading(false);
        },
      },
      handler: function (response: any) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "John Doe",
        email: "jdoe@example.com",
        contact: "9876543210",
      },
    };
    
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    paymentObject.on("payment.failed", function (response: any) {
      alert("Payment failed. Please try again.");
      setIsLoading(false);
    });
  };

  return (
    <>
      <div className="">
        <Button
          onClick={() => makePayment()}
          className={cn(buttonVariants({ size: "lg" }))}
          disabled={isLoading}
        >
          Pay Now
        </Button>
      </div>
    </>
  );
};

export default PaymentButton;
