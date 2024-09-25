import React from 'react';
import { useState, useEffect } from 'react';

const CartLayout = () => {
  const [Cart, setCart] = useState(null);

  useEffect(() => {
    const loadComponent = async () => {
      const { default: CartComponent } = await import('cart_components/Cart');
      setCart(() => CartComponent);
    };

    loadComponent();
  }, []);

  return Cart ? <Cart /> : <div>Loading Cart...</div>;
};

export default CartLayout;
