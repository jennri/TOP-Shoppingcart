import React, { useContext } from "react";
import { ProductContext } from '../../context/product-context'
import { ShopContext } from "../../context/shop-context"
import { CartItem } from './cart-item'

export const Cart = () => {
    const { cartItems, totalCartAmount } = useContext(ShopContext);
    const totalAmount = totalCartAmount()

    const productsArray = useContext(ProductContext)

    return (
        <div>

            <div className='cart'> 
            <h1>Your cart items</h1>
            </div>

            <div>
            {productsArray.map((product) => {
                if (cartItems[product.id] > 0) {

                return <CartItem data={product}/>
                }
            })}
            </div>

            <div>
                {totalAmount > 0 ? (
                <div>
                    <p> Subtotal ${totalAmount}</p>
                </div>
                ) : (<h1> Empty cart </h1>)
                }
            </div>  
        </div>
    )
}