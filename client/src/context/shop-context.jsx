import React, { createContext, useContext, useState } from 'react';
import { ProductContext } from './product-context'

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const productsArray = useContext(ProductContext)
    // creates an array with all the products and have them all on 0 in the cart
    const getDefaultCart = () => {
      let cart = {};
      for (let i = 1; i < productsArray.length + 1; i++) {
          cart[i] = 0;
      }
      console.log(cart)
      return cart;
    };

    const [cartItems, setCartItems] = useState(getDefaultCart());
    
    const totalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0){
                let itemInfo = productsArray.find((product) => product.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount
    }

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: newAmount}))
  }

 const contextValue = { cartItems, addToCart, 
                        removeFromCart, updateCartItemCount,
                        totalCartAmount }

    return (
        <ShopContext.Provider value={contextValue}>
        {props.children}
      </ShopContext.Provider>
    )
}
