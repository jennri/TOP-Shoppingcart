import React, { useContext } from 'react';
import { ShopContext } from "../../context/shop-context"

export const CartItem = (props) => {
    const {id, name, price} = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

    return (
    <div className='cartItem'>
        <div>
        <p><b> {name} </b></p>
        <p>$ {price} </p>
        <p>{id}</p>
            <div>
            <input value={cartItems[id]} 
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
            <button onClick={() => removeFromCart(id)}>-</button>
            <button onClick={() => addToCart(id)}>+</button>
            </div>
        </div>
    </div>
    
    )
}