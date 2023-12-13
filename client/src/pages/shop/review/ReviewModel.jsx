import React from "react";

export const ReviewModel = (props) => {
    const {productId, name, email, rating, title, 
        description} = props.data;

    return (
        <div>
        <p>{name}</p>
        <p>{email}</p>
        <p>{rating}</p>
        <p>{title}</p>
        <p>{description}</p>
        </div>

        
    )
}