import Button from "@mui/material/Button";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";

const SubscriptionForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  return (
    <div>
      <PaymentElement />
      <Button>
        Subscribe
      </Button>
    </div>
  )
}

export default SubscriptionForm;