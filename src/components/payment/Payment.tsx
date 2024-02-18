import { useEffect, useState } from "react";
import { Stripe, loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SubscriptionForm from "./SubscriptionForm";

const Payment = () => {
  // let stripePromise = loadStripe('pk_test_51OiGIxH3wSqiLx13H4pt0pzPUsJ2nxH7FBnjHKtMUDQMhfyHWnA3bZ3mfVjtdTfrpuJc2sW5cmc7to8tPpjmuNj700NML4fmlp');

  const [clientSecret, setClientSecret] = useState('')
  const [stripePromise, setStripePromise] = useState(null)

  useEffect(() => {
    // get publishable key from api
    // setStripePromise(loadStripe(publishableKey))
  }, []);

  return (
    <div>
      <Elements stripe={stripePromise} options={{clientSecret: ''}}>
        <SubscriptionForm />
      </Elements>
    </div>
  )
}

export default Payment;