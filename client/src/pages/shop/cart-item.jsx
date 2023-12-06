import React, { useContext, useState } from 'react';
import { ShopContext } from "../../context/shop-context"

export const CartItem = (props) => {
    const {id, name, price} = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
    
    const [isEditing, setIsEditing] = useState(false);
    const [quantity, setQuantity] = useState(cartItems[id]);
    const [btnDisabled, setbtnDisabled] = useState(false);

    const handleClick = () => {
        setIsEditing(true)
        setbtnDisabled(true)
    }

    const holdingCartQtyUpdate = (e) => {
        setQuantity(e.target.value);
      };

    const handleBlur = () => {
        cartQtyUpdate()
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            cartQtyUpdate()
        }
    }

    const cartQtyUpdate = () => {
        updateCartItemCount(quantity, id)
        setIsEditing(false)
        setbtnDisabled(false)
    }

    return (
    <div className='cartItem'>
        <div>
            <p><b> {name} </b></p>
            <p>$ {price} </p>
        </div>

        <div>
            {isEditing ? (
                <input
                type='number'
                value={quantity} 
                onChange={holdingCartQtyUpdate}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                />
            ) : (
                <span class="test"
                onClick={() => handleClick()}>
                {cartItems[id]}</span>
            )}
        </div>
        
        <div>
            <button disabled={btnDisabled} 
            onClick={() => removeFromCart(id)}>-</button>

            <button disabled={btnDisabled} 
            onClick={() => addToCart(id)}>+</button>
        </div>
    </div>
    
    )
}