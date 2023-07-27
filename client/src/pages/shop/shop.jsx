import React, { useState, useEffect } from "react";
import { PRODUCTS } from "../../products"
import { Product } from "../shop/product"
import {} from "./shop.css"

export const Products = () => {

    return (
        <div>
            <h1>List of products</h1>
        <div>
            {PRODUCTS.map((product) => 
            <Product data={product}/>)}
        </div>
        </div>
    )
}