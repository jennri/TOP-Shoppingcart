import React, { useState } from "react";
import axios from 'axios';

export const ProductAdd = () => {

    const [productList, setproductList] = useState([])

    const [brand, setBrand] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [sale, setSale] = useState('')
    const [description, setDescription] = useState('')
    const [madein, setMadein] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [directions, setDirections] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            brand: brand,
            name: name,
            price: price,
            sale: false,
            description: description,
            madein: madein,
            ingredients: ingredients,
            directions: directions,

        }
        setproductList([...productList].concat(newProduct))
        setBrand('')
        setName('')
        setPrice('')
        setDescription('')
        setMadein('')
        setIngredients('')
        setDirections('')


        axios({
            url: '/product/save',
            method: 'POST',
            data: newProduct
        })
        .then(() => {
            console.log('Data sucessfully posted')
        })
        .catch(() => {
            console.log('Data unable to be posted, internal server error')
        });

    }

    return (

 
        <div>
            <h1>Add new product</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-input">
                    <input
                        type='text'
                        name='product_brand'
                        placeholder='Brand Name'
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}/>
                </div>
                <div className="form-input">
                    <input
                        type='text'
                        name='product_name'
                        placeholder='Name of Product'
                        value={name}
                        onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="form-input">
                    <textarea
                        type='text'
                        name='product_description'
                        placeholder='Description of Product'
                        cols='30'
                        rows='10'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div className="form-input">
                    <input
                        type='number'
                        name='product_price'
                        placeholder='Enter price in AUD to two decimal places'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div className="form-input">
                    <input
                        type='text'
                        name='product_madein'
                        placeholder='Where was this product made in?'
                        value={madein}
                        onChange={(e) => setMadein(e.target.value)}/>
                </div>
                <div className="form-input">
                    <input
                        type='text'
                        name='product_ingredients'
                        placeholder='List of key ingredients'
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}/>
                </div>
                <div className="form-input">
                    <input
                        type='text'
                        name='product_directions'
                        placeholder='Product Usage'
                        value={directions}
                        onChange={(e) => setDirections(e.target.value)}/>
                </div>
                <button>Submit</button>
            </form>
        </div>

    )
}    