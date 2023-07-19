import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Cart } from '../pages/shop/cart'

import './bar.css'
import '../pages/shop/cart-modal.css'

import { Input, Button, Modal } from 'antd'
import { Col, Row } from 'antd';
import { UserOutlined, 
        SearchOutlined, 
        ShoppingFilled, 
        HeartOutlined,
         } from '@ant-design/icons'
import logo from '../assets/logo-transparent-title.png'
    

export const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

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
                    <Link onClick={showModal}> <ShoppingFilled /> </Link>
                    <Modal className='modal-test' open={isModalOpen} onOk={handleOk} onCancel={handleCancel} 
                    okText="Checkout"
                    cancelText="Back"
                    okButtonProps={{
                       
                      }}
                    cancelButtonProps
                 
                    >
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

export default Navbar;
