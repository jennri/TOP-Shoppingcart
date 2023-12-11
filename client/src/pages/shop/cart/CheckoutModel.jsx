import React, { useContext, useState } from 'react';
import { ShopContext } from "../../../context/shop-context"

// This takes product info from the shop and cart context and models it
// Each product has the name. cost, quantity and a way to change the qty
// Buttons can be used, or the user can insert a qty they wish

export const CartItem = (props) => {
    const {id, name, price} = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
    
    // Only one method can be used to change the qty at a time, if the textbox is clicked the 
    // user enters a editing state, in this state the button are disabled and the value they input is stored
    // and only when they click out or press enter, is the value submitted and the cart qty is updated
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
                <span className="test"
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