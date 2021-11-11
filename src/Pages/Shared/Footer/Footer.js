import React from 'react';
import './Footer.css';
import { Col, Container, FloatingLabel, Form, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faFacebookMessenger, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (

        <div className="bg_gray">
            <Container>
                <Row className="py-4">
                    <Col md={4} className="mb-3">
                        <h1 className="text-white footer_logo">VESOTTERY</h1>
                        <p className="footer_text">Each piece of Pottery is unique and individual as the next, with layer upon layer of reactive glaze to create vibrant and bold decoration.</p>

                        <hr />
                        <h4 className="mb-3 footer_text">Social Links</h4>
                        <div>
                            <span className="icon_style me-2"><FontAwesomeIcon icon={faFacebookF} /></span>
                            <span className="icon_style_round me-2"><FontAwesomeIcon icon={faFacebookMessenger} /></span>
                            <span className="icon_style_round me-2"><FontAwesomeIcon icon={faInstagram} /></span>
                            <span className="icon_style_round"><FontAwesomeIcon icon={faWhatsapp} /></span>

                        </div>

                    </Col>

                    <Col md={4}>
                        <h3 className='text-white mb-3'>Get In Touch</h3>
                        <ul className="footer-ul">
                            <li className="mb-3"><FontAwesomeIcon icon={faPhoneAlt} /> &ensp;Phone:
                                <a href="tel:+8801671234567">01671234567</a></li>
                            <li className="mb-3"> <FontAwesomeIcon icon={faEnvelope} /> &ensp;Email:
                                <a href="mailto:support@medito.com">support@medito.com</a></li>
                            <li><FontAwesomeIcon icon={faMapMarkerAlt} /> &ensp;Location:
                                12/3/jha mainka chipa road,Dhanmondi,Dhaka-1209</li>
                        </ul>
                    </Col>

                    <Col md={4}>
                        <h3 className='text-white mb-3'>Subscribe To Newslatter</h3>
                        <p className="footer_text">Get 10% off your first order and be the first to see our new products and special offers</p>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                        <div className="d-grid gap-2">
                            <Button size="lg" variant='dark' className='footer_btn'>
                                SUBSCRIBE NOW
                            </Button>
                        </div>
                    </Col>

                </Row>
            </Container>
            <div className="footer_bottom py-3">
                Copyright ©2021 made with ❤ by Tahim. All Rights Reserved.
            </div>

        </div >
    );
};

export default Footer;