import React from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';

const PlaceOrder = () => {
    const { register, handleSubmit, watch } = useForm();
    const onSubmit = data => console.log(data);
    const { user } = useAuth();
    return (
        <Container>
            <Row>
                <Col md={7}>
                    <h4 className="text-center">Product Info</h4>
                    <hr />
                    <img src="" alt="" />
                    <h4>Title</h4>
                    <p>Details</p>
                    <h5>Measurements: H15 X W21 cm</h5>
                    <h5>Price: 15 $</h5>
                </Col>

                <Col md={5}>
                    <h4 className="text-center">User Info</h4>
                    <hr />

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" readOnly disabled Value={user.email}  {...register("email", { required: true })} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" Value={user.displayName}  {...register("name", { required: true })} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Your Address</Form.Label>
                            <Form.Control type="text" placeholder="Your Address" {...register("address", { required: true })} />
                        </Form.Group>
                        <input type="submit" value="Place Order" className="btn btn-dark mb-4" />

                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default PlaceOrder;