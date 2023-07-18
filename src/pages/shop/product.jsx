import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context"

export const Product = (props) => {
    const {id, name, price} = props.data;
    const { addToCart } = useContext(ShopContext);

    return (
        <div>
        <h1>{name}</h1>
        <p>${price}</p>
        <button className="addToCartBtn" onClick={() => addToCart(id)}>Add</button>
        </div>
        
    )
}