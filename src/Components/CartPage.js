import React from 'react';
import { useCart } from './cartcontext';

function CartPage() {
  const { cartItems } = useCart(); 

  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
          </li>
        ))}
      </ul>
      <p>Total: ${cartTotal.toFixed(2)}</p>
      <button onClick={()=>alert('thankyou for buying')}>Checkout</button>
    </div>
  );
}
export default CartPage;