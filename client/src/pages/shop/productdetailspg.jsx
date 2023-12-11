import React, { useContext } from "react"
import { ProductContext } from '../../context/product-context'
import { useParams } from 'react-router-dom';


export const ProductDetails = () => {
  const productsArray = useContext(ProductContext)
  const { id } = useParams();
  let currentProduct = {}

  const findCurrentProduct = () => {
    for (let i=0; i < productsArray.length; i++){
      if (productsArray[i].id === id){
        currentProduct = productsArray[i]
      }
    }
  }
  findCurrentProduct()

  return (  
    <div>
      <h1>{currentProduct.name}</h1>
      <p>${currentProduct.price}</p>
    </div>
  );
}
