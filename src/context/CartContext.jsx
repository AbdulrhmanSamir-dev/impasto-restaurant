import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('cartItems');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const exist = prev.find((i) => i.id === item.id && i.size === item.size);
      if(exist){
        return prev.map((i) =>
          i.id === item.id && i.size === item.size ? {...i, quantity: i.quantity + item.quantity} : i
        );
      } else {
        return [...prev, item];
      }
    });
  };

  const updateQuantity = (id, size, quantity) => {
    setCartItems((prev) =>
      prev.map((i) => (i.id === id && i.size === size ? {...i, quantity} : i))
    );
  };

  const removeFromCart = (id, size) => {
    setCartItems((prev) => prev.filter((i) => !(i.id === id && i.size === size)));
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};