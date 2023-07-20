import React from "react";
import { Link } from 'react-router-dom'
import { Col, Row, Space, Input, Button } from 'antd';
import {
    FacebookOutlined,
    InstagramOutlined,
    TwitterOutlined,
    WechatOutlined
} from '@ant-design/icons'
import './bar.css'


export const Footbar = () => {
    return (
        <div>
            <Row>
                <Col span={8} className="foot-bar__left">
                    <div className="foot-bar__left-text">
                        <h1>About Our Company</h1>
                        <p>Lehmaansa lie rahasumma tassakaan lipullaan vielakaan eri. Liikkeelle osa eli paaltapain kuitenkaan ota. Ota maailman aittanne kaljaasi jaa niinkuin moottori lasianne. </p>


                    </div>

                    <div className="foot-bar__left-socialmedia">
                        <p>Follow Us!</p>
                        <Link> <FacebookOutlined /></Link>
                        <Link> <InstagramOutlined /></Link>
                        <Link> <TwitterOutlined /></Link>
                        <Link> <WechatOutlined /></Link>
                    </div>

                </Col>


                <Col span={4} className="foot-bar__middle-help">
                    <h2>Quick Help</h2>
                    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                        <Link to="/contact-us"> Contact us </Link>
                        <Link to="/account"> My Account </Link>
                        <Link to="/shipping-policy"> Shipping Policy </Link>
                        <Link to="/online-tracking"> Online Tracking </Link>
                        <Link to="/frequently-asked-questions"> FAQs </Link>
                    </Space>
                </Col>

                <Col span={4} className="foot-bar__middle-about">
                    <h2>Get to know us</h2>
                    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                        <Link to="/About Us"> About Us </Link>
                        <Link to="/careers"> Careers </Link>
                        <Link to="/customer-experience"> Customer Experience </Link>
                        <Link to="/refund-policy"> Refund Policy </Link>
                        <Link to="/terms-of-services"> Terms of Services </Link>
                    </Space>
                </Col>


                <Col span={8} className="foot-bar__right">
                    <div className="foot-bar__right-container">
                        <Space direction="vertical" size="medium" align="start">
                            <div>
                                <Space direction="vertical" size="medium" align="start">
                                    <h1>Newsletter</h1>
                                    <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
                                </Space>
                            </div>
                            <Input
                                placeholder="Email address"
                                style={{ width: 200 }}
                            />
                            <Button>Grape!</Button>
                        </Space>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Footbar;
