import React, { createContext, useState, useEffect } from "react"

//Ensure you export this too, as it is used plenty in other components
export const ReviewContext = createContext(null);

export const ReviewContextProvider = (props) => {
    const [reviews, setReviews] = useState([]);
    const [reviewsArray, setReviewsArray] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/reviewList')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Error fetching data:', error));
        }, []); 
        // Empty dependency array ensures the effect runs only once

    //Creates an object library/array that then is fed to create product cards
    useEffect(() => {
        const mappedReviews = reviews.map(review => ({
            id: review._id,
            productId: review.productId,
            name: review.name,
            email: review.email,
            rating: review.rating,
            title: review.title,
            description: review.description,
            skin: review.skinType,
            recommend: review.recommend
        }));

        // Set the new array in state
        setReviewsArray(mappedReviews);
        }, [reviews]);


  return (
    <ReviewContext.Provider value={reviewsArray}>
      {props.children}
      </ReviewContext.Provider>
  );
};



