import { useCart } from '@/pages/api/CartContext';
import React from 'react';

const Cart = () => {
  const { cart, removeFromCart, cartTotal } = useCart();

  return (
    <div className='p-4 bg-gray-100 border border-gray-200 rounded-md w-80'>
      {cart.length === 0 ? (
        <p className='text-center'>Your cart is empty.</p>
      ) : (
        <>
          <ul className='space-y-4'>
            {cart.map((item) => (
              <li key={item.id} className='flex justify-between items-center'>
                <div>
                  <h4 className='font-semibold'>{item.productName}</h4>
                  <p>
                    ${item.price.toFixed(2)} x {item.quantity}
                  </p>
                </div>
                <button
                  className='bg-red-500 text-white px-2 py-1 rounded'
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className='mt-4'>
            <h3 className='font-bold text-lg'>
              Total: ${cartTotal.toFixed(2)}
            </h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
