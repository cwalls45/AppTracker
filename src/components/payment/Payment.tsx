import { useEffect, useState } from "react";
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js';
import { apiGet } from "../../utils/apiRequests";
import { useSelector } from "react-redux";
import { State } from "../../redux";
import { Stripe, loadStripe } from "@stripe/stripe-js";
import Grid from "@mui/material/Grid";

const Payment = () => {

  const [clientSecret, setClientSecret] = useState('');
  const [stripePromise, setStripePromise] = useState<Stripe | null>(null);

  const environment = useSelector((state: State) => state.environment);

  const fetchPublishableKey = async (): Promise<string> => {
    const publishableKey = await apiGet(`${environment.apiUrl}/subscribe/stripe-config`);
    return publishableKey.data.publishableKey;
  }

  const createCheckoutSession = async (): Promise<string> => {
    const paymentIntentSecret = await apiGet(`${environment.apiUrl}/subscribe/checkout-session`);
    return paymentIntentSecret.data.clientSecret;
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
    async function setClientSecretFromCheckoutSession() {
      const checkoutSessionClientSecret = await createCheckoutSession();
      setClientSecret(checkoutSessionClientSecret);
    };

    setClientSecretFromCheckoutSession();
  }, []);

  return (
    <Grid container justifyContent='center' alignItems='center' sx={{ height: '100vh', width: 'auto' }}>
      {stripePromise && clientSecret && (
        <Grid container item md={10} justifyContent='center' alignItems='center'>
          <Grid container item justifyContent='center'>
            <EmbeddedCheckoutProvider
              stripe={stripePromise}
              options={{ clientSecret }}
            >
              <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
          </Grid>
        </Grid>
      )}
    </Grid>
  )
}

export default Payment;