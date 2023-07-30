import React, {useState} from "react";
import { PRODUCTS } from "../../products"
import { Product } from "../shop/product"
import { Link  } from 'react-router-dom'

export const Products = () => {


    return (
        <div>
            <h1>List of products</h1>
    
        <Link to="/product-add">Add new product</Link>

      
        <div>
            {PRODUCTS.map((product) => 
            <Product data={product}/>)}
        </div>

        </div>
    )
}