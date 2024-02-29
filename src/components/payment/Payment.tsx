import { useEffect, useState } from "react";
import { Stripe, loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SubscriptionForm from "./SubscriptionForm";
import { apiGet } from "../../utils/apiRequests";
import { useSelector } from "react-redux";
import { State } from "../../redux";

const Payment = () => {

  const [clientSecret, setClientSecret] = useState('');
  const [stripePromise, setStripePromise] = useState<Stripe | null>(null);

  const environment = useSelector((state: State) => state.environment);

  const fetchPublishableKey = async (): Promise<string> => {
    const publishableKey = await apiGet(`${environment.apiUrl}/subscribe/stripe-config`);
    return publishableKey.data.publishableKey;
  }

  const createPaymentIntent = async (): Promise<string> => {
    const paymentIntentSecret = await apiGet(`${environment.apiUrl}/subscribe/payment-intent`);
    return paymentIntentSecret.data.paymentIntent;
  };

  useEffect(() => {
    async function setStripePromiseWithPublishableKey() {
      const publishableKey = await fetchPublishableKey();
      const loadStripeWithPublishableKey = await loadStripe(publishableKey);
      setStripePromise(loadStripeWithPublishableKey);
    };

    setStripePromiseWithPublishableKey();
  }, []);

  useEffect(() => {
    async function setClientSecretWithPaymentIntent() {
      const paymentIntentSecret = await createPaymentIntent();
      setClientSecret(paymentIntentSecret);
    };

    setClientSecretWithPaymentIntent();
  }, []);

  return (
    <div>
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <SubscriptionForm />
        </Elements>
      )}
    </div>
  )
}

export default Payment;