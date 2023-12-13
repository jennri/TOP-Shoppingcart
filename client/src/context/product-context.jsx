import React, { createContext, useState, useEffect } from "react"

//Ensure you export this too, as it is used plenty in other components
export const ProductContext = createContext(null);

export const ProductContextProvider = (props) => {
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
            brand: product.brand,
            name: product.name,
            price: product.price,
            description: product.description,
            madein: product.madein,
            ingredients: product.ingredients,
            directions: product.directions
            
        }));

        // Set the new array in state
        setProductsArray(mappedProducts);
        }, [products]);


  return (
    <ProductContext.Provider value={productsArray}>
      {props.children}
      </ProductContext.Provider>
  );
};



