import React, { useContext, useState } from "react"
import { ProductContext } from '../../context/product-context'
import { ReviewContext } from "../../context/review-context"
import { ReviewModel } from "./review/ReviewModel"
import { useParams } from 'react-router-dom';
import { ReviewAdd } from './review/review-add'

import './product-page.css'

export const ProductDetails = () => {
  //Finds the current product id by matching the URL and displays it's information
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

  //Reviews section
  const reviewsArray = useContext(ReviewContext)
  const [showReviewForm, setShowReviewForm] = useState(false);

  const toggleReviewForm = () => {
    setShowReviewForm((prev) => !prev);
  };


  //Aight taking a break for the rest of the week too tired
  // then create user accounts and admin accounts, they would have to log in 
  // only users can leave a review, they can also add favourites


  return (  
    <div>
      <h1>{currentProduct.brand}</h1>
      <h2>{currentProduct.name}</h2>
      <p>${currentProduct.price}</p>
      <p>{currentProduct.description}</p>
      <p>{currentProduct.madein}</p>
      <p>{currentProduct.ingredients}</p>
      <p>{currentProduct.directions}</p>

      <div>       
          {reviewsArray.filter(review => review.productId === id)
                       .map((review) => 
          <div key={review.id} className="review-container">
          <ReviewModel data={review}/>
          </div>)}
      
      </div>

      <button onClick={toggleReviewForm}>Add Review</button>
      {showReviewForm && <ReviewAdd productId={currentProduct.id} />}

      

    </div>
  );
}
