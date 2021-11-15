import React from 'react';
import './Feature.css';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory, faUserClock, faParachuteBox, faSkiingNordic, faUmbrellaBeach, faTruck, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

const Feature = () => {
    return (
        <div className="category-section">
            <Container>
                <Row className="py-3">
                    <Col md={7} className="my-auto">

                        <h1 className="text-white">Our Service Policy At a Glace</h1>
                    </Col>
                    <Col md={5}>
                        <Row className="g-4">
                            <Col>
                                <div className="border mb-3 py-3 rounded text-center">
                                    <span className="text-white"><FontAwesomeIcon icon={faUserClock} size="4x" /></span>
                                    <h4 className="mt-3 text-white">24 Hours<br />Support</h4>
                                </div>

                            </Col>
                            <Col>
                                <div className="border mb-3 py-3 rounded text-center">
                                    <span className="text-white"><FontAwesomeIcon icon={faTruck} size="4x" /></span>
                                    <h4 className="mt-3 text-white">Emergency<br />Service</h4>
                                </div>

                            </Col>
                        </Row>
                        <Row className="g-4">
                            <Col>
                                <div className="border mb-3 py-3 rounded text-center">
                                    <span className="text-white"><FontAwesomeIcon icon={faCalendarCheck} size="4x" /></span>
                                    <h4 className="mt-3 text-white">Ontime<br />Delevery</h4>
                                </div>

                            </Col>
                            <Col>
                                <div className="border mb-3 py-3 rounded text-center">
                                    <span className="text-white"><FontAwesomeIcon icon={faHistory} size="4x" /></span>
                                    <h4 className="mt-3 text-white">Return<br />Damage Product</h4>
                                </div>

                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Feature;