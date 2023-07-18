import React from "react";
import { Link } from 'react-router-dom'

import './navbar.css'
import { } from 'antd'
import { Col, Row } from 'antd';
import { UserOutlined, SearchOutlined, ShoppingFilled } from '@ant-design/icons'


export const Navbar = () => {
    return (
        <nav>
            <Row>
                <Col span={6}><p>Empty Space</p></Col>
                <Col span={12}>
                    <p>Logo goes here, links to home page</p>
                </Col>

                <Col span={6}>
                    <Link to="/search"> <SearchOutlined /> </Link>
                    <Link to="/account"> <UserOutlined /> </Link>
                    <Link to="/cart"> <ShoppingFilled /> </Link>
                </Col>
            </Row>

            <Row>
            <Col span={24}>
                <Link to="/">Home</Link>
                <Link to="/new">New</Link>
                <Link to="/sale">Sale</Link>
                {/* This will be a filtered page of the product page */}
                <Link to="/blog">Blog</Link>
                <Link to="/products">Products</Link>
                {/* This will split into skincare and categories link */}
                <Link to="/about-us">About Us</Link>
            </Col>
            </Row>
        </nav>
    )
}

export default Navbar;
