import React from 'react';
import { Alert, Col, Container, FloatingLabel, Form, Row, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import loginImg from '../../images/login.svg';

const Login = () => {
    const { emailSignIn, authError, user, loading, googleSignIn } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        emailSignIn(data.email, data.password, location, history);
        reset();
    };
    const handelGoogleLogin = () => {
        googleSignIn(location, history);
    }
    return (
        <Container>
            <Row className="my-4">
                <Col md={6} className="my-auto">
                    <h2 className="text-center mb-4">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                            <Form.Control type="email" placeholder="name@example.com"  {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                            <Form.Control type="password" placeholder="Password" {...register("password", { required: true })} />
                        </FloatingLabel>

                        {user?.email ? <span className="text-info">You Are Already Logedin </span> : <input type="submit" className="btn btn-dark mb-3" value="Login"></input>} {loading && <Spinner className="ms-3" animation="border" variant="primary" />}

                    </form>
                    {authError && <Alert variant="danger">{authError}</Alert>}
                    <Link to="/register" className="text-decoration-none d-block mb-3">Don't Have a Account? Register Here</Link>
                    <button className="btn btn-warning" onClick={handelGoogleLogin}>Login With Google</button>
                </Col>
                <Col md={6} className="d-md-none d-lg-block">
                    <img src={loginImg} alt="" className="img-fluid" />
                </Col>
            </Row>
        </Container>
    );
};

export default Login;