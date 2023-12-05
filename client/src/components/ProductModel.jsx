import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context"

//The database if fed through this model, which takes the information and 
//shapes it to product cards
export const ProductModel = (props) => {
    const {id, name, description, price} = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemAmount = cartItems[id]

    return (
        <div>
        <h1>{name}</h1>
        <p>{description}</p>
        <p>${price}</p>
        <button className="addToCartBtn" onClick={() => addToCart(id)}>
        Add { cartItemAmount > 0 && <> ({cartItemAmount})</>}
        </button>
        </div>
        
    )
}