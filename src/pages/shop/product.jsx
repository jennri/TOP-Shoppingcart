import React from "react";

export const Product = (props) => {
    const {id, name, price} = props.data;
    return (
        <div>
        <h1>{name}</h1>
        <p>${price}</p>
        </div>
        
    )
}