import React, { useState, useContext } from "react"
import { Link } from 'react-router-dom'
import { ProductContext } from '../../context/product-context'
import { ProductModel } from "./ProductModel"

import './shop-page.css'

export const ProductList = () => {
    const productsArray = useContext(ProductContext)

    // Seems to be safer if I just copy the object library and mutate it according to filters.
    // I'll have to see how the addition of images will affect the speed
    // States so rerender may occur when a filter is applied
    const [filteredProducts, setFilteredProducts] = useState(productsArray);

    //Issue with the product page not loading all the products.
    //Can be solved by only selecting on types/ categories of products
    //Removing the need for an all product page


    const filterItemsPrice = () => {
        const filteredArray = Object.values(productsArray).
                            filter(product => product.price === 5)
        setFilteredProducts(filteredArray)
    }

    const clearFilter = () => {
        setFilteredProducts(productsArray)
    }


    return (
        <div className='product-display'>
            <div className='filter-list-container'>
            <div className='filter-list'>
                <div className='title'>
                <h1>Filter by</h1>

                </div>
                <div className='filter-list-links'>
                <li onClick={() => clearFilter()}>Clear Filter</li>
                <li onClick={() => filterItemsPrice()}>Price Filter</li>
                </div>
            </div>
            </div>
            
            <div className='product-list-container'>
    
            <div className='product-list'>

                <div className='title'>
                <h1>List of products</h1>
                </div>
                
                <div className="filter-container">
                <Link to="/product-add">Add new product</Link>
                <label htmlFor="categoryFilter">Filter by Category:</label>
                <select id="categoryFilter" >
                <option value="all">All</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
                </select>
                </div>

                <div className='product-item-container'>       
                {filteredProducts.map((product) => 
                <div key={product.id} className='product-item'>
                <ProductModel data={product}/>
                </div>)}
                </div>
            </div>
            </div>
        </div>
      );
}

