import React from "react";
import { Link } from 'react-router-dom'


export const Navbar = () => {
    return (
        <nav>
            <div>
                <p>This is the nav start</p>
            </div>
            <div>
                <p>Logo goes here, links to home page</p>
            </div>
            <ul>
                <li><Link to="/search"> Search </Link></li>
                <li><Link to="/account"> Account </Link></li>
                <li><Link to="/cart"> Cart </Link></li>
            </ul>
            <div>
                <Link to="/">Home</Link>
                <Link to="/new">New</Link>
                <Link to="/sale">Sale</Link>
                {/* This will be a filtered page of the product page */}
                <Link to="/blog">Blog</Link>
                <Link to="/products">Products</Link>
                {/* This will split into skincare and categories link */}
                <Link to="/about-us">About Us</Link>

            </div>
            <div>
                <p>This is the nav end</p>
            </div>
        </nav>
    )
}

export default Navbar;
