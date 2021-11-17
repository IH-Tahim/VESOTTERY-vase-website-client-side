import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutImg from '../../images/about-img.jpg';
import Feature from '../Home/Feature/Feature';

const About = () => {
    return (
        <div>
            <Container>
                <h1 className="mt-5 mb-4 text-center">About Us</h1>
                <Row className="mb-4">
                    <Col md={7}>
                        <img src={aboutImg} alt="" className="img-fluid rounded" />
                    </Col>
                    <Col md={5} className="my-auto">
                        <h2>Welcome To VESOTTERY</h2>
                        <p>VESOTTERY is a Professional Vase selling Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best collection of Vases, with a focus on dependability and new and mordern vase collection. <br /> We're working to turn our passion for Vase selling into a booming online website. We hope you enjoy our Vase selling as much as we enjoy offering them to you.</p>
                    </Col>
                </Row>

            </Container>
            <Feature></Feature>
        </div>
    );
};

export default About;