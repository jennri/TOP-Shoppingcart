import React from "react";
import { Link } from 'react-router-dom'

import './bar.css'
import { Input, Button } from 'antd'
import { Col, Row } from 'antd';
import { UserOutlined, 
        SearchOutlined, 
        ShoppingFilled, 
        HeartOutlined,
         } from '@ant-design/icons'
import logo from '../assets/logo-transparent-title.png'
    


export const Navbar = () => {
    return (
        <nav>
            <Row>
                <Col span={6} className='nav-bar__left'>
                    <div className='nav-bar__left-search-container'>
                    <Input
                    placeholder="Whatcha lookin for?"
                    style={{ width: 200 }}
                    />
                    <Button icon={<SearchOutlined />} />
                    </div>
                </Col>

                <Col span={12} className='nav-bar__middle'>
                    <img src={logo} alt='logo' />
                </Col>

                <Col span={6} className='nav-bar__right'>
                    <div className="nav-bar__right-icon-container">
                    <Link to="/account"> <UserOutlined /> </Link>
                    <Link><HeartOutlined /></Link>
                    <Link to="/cart"> <ShoppingFilled /> </Link>
                    </div>
                </Col>
            </Row>

            <Row>
            <Col span={24} className='nav-bar__bottom'>
                <div className="nav-bar__bottom--container">
                <Link to="/">HOME</Link>
                <Link to="/new">NEW</Link>
                <Link to="/sale">SALE</Link>
                {/* This will be a filtered page of the product page */}
                <Link to="/products">PRODUCTS</Link>
                {/* This will split into skincare and categories link */}
                <Link to="/blog">BLOG</Link>
                <Link to="/about-us">ABOUT US</Link>
                </div>
            </Col>
            </Row>
        </nav>
    )
}

export default Navbar;
