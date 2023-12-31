import React, { useState } from "react";
import axios from 'axios';

export const ProductAdd = () => {

    const [productList, setproductList] = useState([])
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            name: name,
            description: description,
            price: price,
            sale: false,
        }
        setproductList([...productList].concat(newProduct))
        setName('')
        setDescription('')
        setPrice('')

        axios({
            url: '/save',
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
                        name='product_name'
                        placeholder='Name of Product'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="form-input">
                    <textarea
                        type='text'
                        name='product_description'
                        placeholder='Description of Product'
                        cols='30'
                        rows='10'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className="form-input">
                    <input
                        type='number'
                        name='product_price'
                        placeholder='Enter price in AUD to two decimal places'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>

    )
}