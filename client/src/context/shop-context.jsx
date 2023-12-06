import React, { createContext, useContext, useState } from 'react';
import { ProductContext } from './product-context'

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const productsArray = useContext(ProductContext)
    // creates an array with all the products and have them all on 0 in the cart
    // cart is an obbject library, so I had to create it using other means. New to me. 
    const getDefaultCart = () => {
      let cart = {};
      for (let i = 0; i < productsArray.length ; i++) {
        const productID = productsArray[i].id;
        cart[productID] = 0;
      }
      return cart;
    };

    const [cartItems, setCartItems] = useState(getDefaultCart());

    //Need to add decimal in the prices
    const totalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0){
                let itemInfo = productsArray.find((product) => product.id === (item))
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount
    }

  //Ensures changes in the item qty is done only if the current qty is a number
  //Without it, the object returns NaN
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) - 1 }));
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
