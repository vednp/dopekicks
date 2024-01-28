import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import { v4 as uuid } from "uuid";

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY!,
  key_secret: process.env.NEXT_PUBLIC_RAZORPAY_SECRET,
});

async function calculate(cartTotal: number): Promise<number> {
    const currency_one = "USD";
    const currency_two = "INR";
  
    try {
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch exchange rate: ${response.status}`);
      }
  
      const data = await response.json();
      const rate = data.rates[currency_two];
  
      let cartTotalInDollars = cartTotal;
      let cartTotalInRupees = cartTotalInDollars * rate;
      
      return cartTotalInRupees;
    } catch (error) {
      console.error("Error fetching exchange rate:", error);
      throw error; 
    }
  }

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const totalAmount = Number(searchParams.get("amount"));
  const valueInRupees = await calculate(totalAmount);
  const amount = valueInRupees * 100;
  const options = {
    amount: amount.toString(),
    currency: "INR",
    receipt: uuid(),
  };

  const order = await razorpay.orders.create(options);
  return NextResponse.json({ message: "success", order });
}
