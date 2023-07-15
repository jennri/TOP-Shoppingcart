import React from "react";
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <div>
                <p>This is the nav start</p>
            </div>
            <div>
                <p>Logo goes here, links to home page</p>
            </div>
            <div>
                <Link to="/search"> Search </Link>
                <Link to="/account"> Account </Link>
                <Link to="/cart"> Cart </Link>

            </div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/products">Products</Link>
                <Link to="/contact">Contact Us</Link>

            </div>
            <div>
                <p>This is the nav end</p>
            </div>
        </div>
    )
}
