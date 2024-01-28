"use client";
import { cartProduct } from '@/app/interface';
import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext( {
  cartItems: [],
  addToCart: (item: cartProduct) => {},
  removeFromCart: (item: cartProduct) => {},
  clearCart: () => {},
  getCartTotal: () => 0
} );

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const isClient = typeof window !== 'undefined';

  const cartItemsString = isClient ? localStorage.getItem('cartItems') : null;
  const initialCartItems = cartItemsString ? JSON.parse(cartItemsString) : [];
  const [cartItems, setCartItems] = useState(initialCartItems);

  const addToCart = (item: cartProduct) => {
    const isItemInCart = cartItems.find((cartItem: cartProduct) => cartItem._id === item._id);
    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem : cartProduct ) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item: cartProduct) => {
    const isItemInCart = cartItems.find((cartItem: cartProduct) => cartItem._id === item._id);

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem: cartProduct) => cartItem._id !== item._id));
    } else {
      setCartItems(
        cartItems.map((cartItem: cartProduct) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total: number, item: cartProduct) => total + item.price * item.quantity, 0);
  };

  useEffect(() => {
    if (isClient) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }, [cartItems, isClient]);

  useEffect(() => {
    if (isClient) {
      const cartItems = localStorage.getItem('cartItems');
      if (cartItems) {
        setCartItems(JSON.parse(cartItems));
      }
    }
  }, [isClient]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
