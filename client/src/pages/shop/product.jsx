import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context"

export const Product = (props) => {
    const {id, name, price} = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemAmount = cartItems[id]

    return (
        <div>
        <h1>{name}</h1>
        <p>${price}</p>
        <button className="addToCartBtn" onClick={() => addToCart(id)}>
        Add { cartItemAmount > 0 && <> ({cartItemAmount})</>}
        </button>
        </div>
        
    )
}