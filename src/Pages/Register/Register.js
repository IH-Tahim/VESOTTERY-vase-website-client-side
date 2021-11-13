import React from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import loginImg from '../../images/register.svg';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <Container>
            <Row className="my-4">
                <Col md={6} className="my-auto">
                    <h2 className="text-center mb-4">Register Now</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <FloatingLabel controlId="floatingText" label="Your Name" className="mb-3">
                            <Form.Control type="text" placeholder="Name" {...register("name", { required: true })} />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                            <Form.Control type="email" placeholder="name@example.com"  {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                            <Form.Control type="password" placeholder="Password" {...register("password", { required: true })} />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPassword" label="Re-Enter Password" className="mb-3">
                            <Form.Control type="password" placeholder="Re-Enter Password" {...register("reEnterPassword", { required: true })} />
                        </FloatingLabel>


                        <input type="submit" className="btn btn-dark mb-3" value="Register"></input>


                    </form>
                    <Link to="/login" className="text-decoration-none d-block mb-3">Already Have an Account? Login Here</Link>
                    <button className="btn btn-warning">Register With Google</button>
                </Col>
                <Col md={6} className="d-md-none d-lg-block text-center">
                    <img src={loginImg} alt="" className="w-75" />
                </Col>
            </Row>
        </Container>
    );
};

export default Register;