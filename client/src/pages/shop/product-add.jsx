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
            id: new Date().getTime(),
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
            url: 'http://localhost:8000/save',
            method: 'POST',
            data: newProduct
        })
        .then(() => {
            console.log('Data has been sent to the server')
        })
        .catch(() => {
            console.log('Internal server error')
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

            <div>
                {productList.map((product) => <div>
                    {product.name}
                    {product.description}
                    {product.price}

                </div>)}

            </div>

        </div>

    )
}