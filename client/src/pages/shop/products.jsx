import React, { useState, useEffect } from "react"
import { ProductModel } from "../../components/ProductModel"
import { Link  } from 'react-router-dom'

export const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [productsArray, setProductsArray] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/productList')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
        }, []); 
        // Empty dependency array ensures the effect runs only once

    //Creates an object library/array that then is fed to create product cards
    useEffect(() => {
        const mappedProducts = products.map(product => ({
            id: product._id,
            name: product.name,
            description: product.description,
            price: product.price,
        }));

        // Set the new array in state
        setProductsArray(mappedProducts);
        }, [products]);


  return (
    <div>
        <h1>List of products</h1>
        <Link to="/product-add">Add new product</Link>

        {productsArray.map((product) => 
        <ProductModel data={product}/>)}
    </div>
  );
};


export default {ProductList}


