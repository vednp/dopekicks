import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

export async function POST (request: NextRequest) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY !);
    let data = await request.json();
    const amount = data?.amount;
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
              price_data: {
                currency: "usd",
                product_data: {
                    name: data.name || "Shopping Cart Payment",
                  },
                unit_amount: amount * 100 || 100,
              },
              quantity: 1,
            },
          ],
      mode: 'payment',
      success_url: 'http://localhost:3000',
      cancel_url: 'http://localhost:3000'
    })

    return NextResponse.json(session.url)
}