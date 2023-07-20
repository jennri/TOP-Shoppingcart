import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Cart } from '../pages/shop/cart'

import './bar.css'
import '../pages/shop/cart-modal.css'

import Modal from 'react-modal';
import { Input, Button } from 'antd'
import { Col, Row } from 'antd';
import {
    UserOutlined,
    SearchOutlined,
    ShoppingFilled,
    HeartOutlined,
} from '@ant-design/icons'
import logo from '../assets/logo-transparent-title.png'

export const Navbar = () => {
    // This was copied and pated off npm-modal dependency example.
    // Only change was the document.body.style.overflow, this is to prevent scrolling on the main page
    // and just enable scrolling in the modal. When the modal is closed, scrolling is enabled. 
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
    }
    function closeModal() {
        document.body.style.overflow = 'scroll'
        setIsOpen(false);
    }

    const modalStyle = {
        content: {
        position: "absolute",
        borderRadius: ".5em",
        left: '70%',
        MarginRight: '-70%',
        top: '0px',
        right: '0px',
        bottom: '0px',
        }

    };

    const navigate = useNavigate();
    function toHomePage() {
        navigate('/');
    }

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
                    <img src={logo} alt='logo' onClick={toHomePage}/>
                </Col>

                <Col span={6} className='nav-bar__right'>
                    <div className="nav-bar__right-icon-container">
                        <Link to="/account"> <UserOutlined /> </Link>
                        <Link><HeartOutlined /></Link>
                        <Link onClick={openModal}> <ShoppingFilled /> </Link>

                        {/* Copied and pasted from npm-modal example */}
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            style={modalStyle}>
                            <button onClick={closeModal}>x</button>
                            <Cart />
                        </Modal>

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