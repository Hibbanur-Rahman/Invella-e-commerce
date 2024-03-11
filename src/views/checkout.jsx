import {loadStripe} from "@stripe/stripe-js";
import {
  Elements,
  linkAuthenticationElement,
  PaymentElement,
} from "@stripe/react-stripe-js";

const stripe = loadStripe('pk_test_51NiiOgSAsO3Y0PmoXLtoCmw8jcEGuCd8XRFykRDonK0TLaRfEHObkFfenaBGl8TjnDGDnJoOctFSHVvmCJueZQKB001KX6rK3N');

// Enable the skeleton loader UI for the optimal loading experience.
const loader = 'auto';

const CheckoutPage = ({clientSecret}) => (
  <Elements stripe={stripe} options={{clientSecret, appearance, loader}}>
    <CheckoutForm />
  </Elements>
);

export default function CheckoutForm() {
  return (
    <form>
      <h3>Contact info</h3>
      <linkAuthenticationElement/>
      <h3>Payment</h3>
      <button type="submit">Submit</button>
    </form>
  );
}