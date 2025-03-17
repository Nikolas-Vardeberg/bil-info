"use server"

import { createClient } from "@/utils/supabase/server"
import { stripe } from "../lib/stripe"

const returnUrl = `${process.env.NEXT_PUBLIC_APP_URL}/account`;

export const createStripeUrl = async () => {
    const supabase = await createClient()
    const { data: { user }, error } = await supabase.auth.getUser()

    if (error || !user) {
        throw new Error("User not found")
    }

    const stripeSession = await stripe.checkout.sessions.create({
        mode: "subscription",
        payment_method_types: ["card"],
        customer_email: user.email,
        line_items: [
            {
                quantity: 1,
                price_data: {
                    currency: "USD",
                    product_data: {
                        name: "Car Info Pro",
                        description: "Unlimited car searches",
                    },
                    unit_amount: 1000,
                    recurring: {
                        interval: "month"
                    }
                }
            }
        ],
        metadata: {
            userId: user.id,
        },
        success_url: returnUrl,
        cancel_url: returnUrl,
    })

    return { data: stripeSession.url }
}