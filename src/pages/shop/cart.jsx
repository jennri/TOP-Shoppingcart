import React, { useContext} from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context"
import { CartItem } from './cart-item'

export const Cart = () => {
    const { cartItems, totalCartAmount } = useContext(ShopContext);
    const totalAmount = totalCartAmount()

    return (
        <div>
            <div className='cart'> 
            <h1>Your cart items</h1>
            </div>

            <div>
            {PRODUCTS.map((product) => {
                if (cartItems[product.id] !== 0) {
                    return <CartItem data={product}/>
                }
            })}
            </div>

            <div>
                {totalAmount > 0 ? (
                <div>
                    <p> Subtotal ${totalAmount}</p>
                    <button>CheckOut</button>
                </div>
                ) : (
                    <h1> Empty cart </h1>
                )
                }
              

            </div>
            
        </div>
    )
}