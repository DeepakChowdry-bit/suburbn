'use client';
import React from 'react';
import useCart from './useCart';

export const CartProvider = ({ children }) => {
  const cart = useCart();
  return (
    <div value={cart}>
      {React.Children.map(children, child => 
        React.cloneElement(child, { cart })
      )}
    </div>
  );
};

export default CartProvider;
