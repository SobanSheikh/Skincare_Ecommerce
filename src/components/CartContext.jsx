import React, { createContext, useContext, useState } from 'react';

// Creating a context for the cart state
const CartContext = createContext();

// Custom hook to use the cart context
export const useCart = () => {
  return useContext(CartContext);
}

// Cart provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addItemToCart = (item1) => {
   // Check if the item is already in the cart
   const existingItemIndex = cartItems.findIndex(item => item.id === item1.id);
    
   if (existingItemIndex !== -1) {
     // If item is already in the cart, increase its quantity
     const updatedCartItems = [...cartItems];
     updatedCartItems[existingItemIndex].quantity += 1;
     setCartItems(updatedCartItems);
   } else {
     // If item is not in the cart, add it
     setCartItems([...cartItems, item1]);
  };
}
  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    const state = cartItems.filter(mov => mov.id !== id);
    setCartItems(state)
  };

  // Function to clear all items from the cart
 
  const increaseQuantity = (id) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (id) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  // Value object for the context provider
  const value = {
    cartItems,
    addItemToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
