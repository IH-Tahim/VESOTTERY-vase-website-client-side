import React, { useEffect, useState } from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PlaceOrder = () => {
    const { register, handleSubmit } = useForm();
    const { user } = useAuth();
    const { orderId } = useParams();

    const [orderDetails, setOrderDetails] = useState({});

    useEffect(() => {
        fetch(`https://enigmatic-harbor-71567.herokuapp.com/placeorder/${orderId}`)
            .then(res => res.json())
            .then(data => {
                setOrderDetails(data)
            })
    }, []);


    const onSubmit = data => {
        orderDetails.email = user.email;
        orderDetails.userName = data.name;
        orderDetails.address = data.address;

        const { _id, ...rest } = orderDetails;

        fetch("https://enigmatic-harbor-71567.herokuapp.com/placeorder", {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(rest)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
            })


        console.log(orderDetails);
        console.log(rest);
        console.log(data);
    };


    return (
        <Container>
            <Row>
                <Col md={7}>
                    <h4 className="text-center">Product Info</h4>
                    <hr />
                    <img src={orderDetails.img} alt="" height="300px" width="75%" />
                    <h4>{orderDetails.title}</h4>
                    <p>{orderDetails.details}</p>
                    <h5>Measurements: H{orderDetails.height} X W{orderDetails.width} cm</h5>
                    <h5>Price:  ${orderDetails.price}</h5>
                </Col>

                <Col md={5}>
                    <h4 className="text-center">User Info</h4>
                    <hr />

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <fieldset disabled>
                                <input className="form-control" type="text" value={user.email} {...register("email", { required: true })} />
                            </fieldset>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" value={user.displayName}  {...register("name", { required: true })} />
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