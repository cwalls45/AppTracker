import Button from "@mui/material/Button";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { bindActionCreators } from "redux";
import { State, environmentActionCreators } from "../../redux";
import { useDispatch, useSelector } from "react-redux";

const SubscriptionForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const dispatch = useDispatch();
  const { setError, setIsLoading } = bindActionCreators(environmentActionCreators, dispatch);
  const environment = useSelector((state: State) => state.environment);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      setIsLoading(true);

      if (!stripe || !elements) {
        return;
      }

      const cardElement = elements.getElement(PaymentElement);
      if (!cardElement) {
        return;
      }

      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        redirect: 'if_required'
      });

      if (error) {
        //may need to throw error to be caught by the catch block
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        // set success banner or modal
      }
    } catch (error) {
      setError(true, 'An error occurred while processing your payment.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <Button disabled={environment.isLoading}>
        Subscribe
      </Button>
    </form>
  )
}

export default SubscriptionForm;