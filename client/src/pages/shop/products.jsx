import React, { useContext } from "react"
import { Link } from 'react-router-dom'
import { ProductContext } from '../../context/product-context'
import { ProductModel } from "../../components/ProductModel"


export const ProductList = () => {
    const productsArray = useContext(ProductContext)
    return (
        <div>
            <h1>List of products</h1>
            <Link to="/product-add">Add new product</Link>
    
            {productsArray.map((product) => 
            <ProductModel data={product}/>)}
        </div>
      );
}

