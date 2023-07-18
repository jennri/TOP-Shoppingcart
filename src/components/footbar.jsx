import React from "react";
import { Link } from 'react-router-dom'
import './footbar.css';
import { Col, Row } from 'antd';


export const Footbar = () => {
    return (
        <div>
            <Row>
                <Col span={8}>
                    <h1>About Our Company</h1>
                </Col>

                <Col span={8}>
                    <ul>
                        <li><Link to="/contact-us"> Contact us </Link></li>
                        <li><Link to="/shipping-policy"> Shipping Policy </Link></li>
                        <li><Link to="/privacy-policy"> Privacy Policy </Link></li>
                        <li><Link to="/frequently-asked-questions"> FAQs </Link></li>
                        <li><Link to="/refund-policy"> Refund Policy </Link></li>
                        <li><Link to="/terms-of-services"> Terms of Services </Link></li>
                    </ul>
                </Col>

                <Col span={8}>
                    <h1>Newsletter</h1>
                    <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
                    <form>
                        <label for="subemail"></label>
                        <input id="subemail" name="subemail" placeholder="Enter your email" type="email" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </Col>
            </Row>
        </div>
    )
}

export default Footbar;
