import React, { useState } from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import { useCart } from './cartcontext';

function CheckOut() {
  const { cartItems } = useCart(); 
  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const handleToken = async (token) => {
    try {
      const response = await axios.post('/api/charge', {
        token: token.id,
        amount: cartTotal,
        items: cartItems,
      });

      if (response.data.success) {
        setPaymentCompleted(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      {paymentCompleted ? (
        <p>Payment Successful! Thank you for your order.</p>
      ) : (
        <StripeCheckout
          stripeKey="YOUR_STRIPE_PUBLISHABLE_KEY"
          token={handleToken}
          amount={cartTotal * 100}
          currency="USD"
        />
      )}
    </div>
  );
}

export default CheckOut;





