import React, { useState } from "react";
import axios from 'axios';

export const ReviewAdd = ({ productId }) => {

    const [reviewList, setReviewList] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [rating, setRating] = useState('')
    const [title, setReviewTitle] = useState('')
    const [description, setReviewDescription] = useState('')
    const [skinType, setSkinType] = useState('')
    const [recommend, setRecommend] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        const newReview = {
            productId: productId,
            name: name,
            email: email,
            rating: rating,
            title: title,
            description: description,
            skin: skinType,
            recommend: recommend,
        }
        setReviewList([...reviewList].concat(newReview))


        axios({
            url: '/product/review/save',
            method: 'POST',
            data: newReview
        })
        .then(() => {
            console.log('Review sucessfully posted')
        })
        .catch(() => {
            console.log('Review unable to be posted, internal server error')
        });
        setName('')
        setEmail('')
        setRating('')
        setReviewTitle('')
        setReviewDescription('')
        setSkinType('')
        setRecommend('')
    }

    return (
        <div>
            <h3>Add new review</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-input">
                    <input
                        type='text'
                        name='product_name'
                        placeholder='Your Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-input">
                    <textarea
                        type='text'
                        name='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-input">
                    <input
                        type='number'
                        name='rating'
                        placeholder='Your rating'
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    />
                </div>
                <div className="form-input">
                    <input
                        type='string'
                        name='review-title'
                        placeholder='Review Title'
                        value={title}
                        onChange={(e) => setReviewTitle(e.target.value)}
                    />
                    <input
                        type='string'
                        name='review-description'
                        placeholder='How did you find this product?'
                        value={description}
                        onChange={(e) => setReviewDescription(e.target.value)}
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="categoryFilter">Your Skin Type:</label>
                    <select id="skin-type" onChange={(e) => setSkinType(e.target.value)}>
                    <option value="Dry">Dry</option>
                    <option value="Oily">Oily</option>
                    <option value="Combination">Combination</option>
                    <option value="Normal">Normal</option>
                    </select>
                </div>
                <div className="form-input">
                <label htmlFor="recommendation">Do you recommend this product?</label>
                    <input type='radio' id='Yes' name='recommendation' value='true'
                    onChange={(e)=>setRecommend(e.target.value)}/>
                    <label for='yes'>Yes, would recommend</label>
                    <input type='radio' id='No' name='recommendation' value='false'
                    onChange={(e)=>setRecommend(e.target.value)}/>
                    <label for='yes'>No, would not recommend</label>
                    
                    
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>

    )
}