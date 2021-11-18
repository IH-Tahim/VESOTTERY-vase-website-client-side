import React from 'react';
import './Navigation.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
    const { logOut, user, admin } = useAuth();
    return (

        <>
            <Navbar bg="light" variant="light" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="main_logo">VESOTTERY</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/products">Explore Products</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blog</Nav.Link>
                            {admin ? <Nav.Link as={Link} to="/admin">Admin</Nav.Link> : <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>}

                            {user?.email ?
                                <NavDropdown title={user.displayName} id="collasible-nav-dropdown">

                                    <NavDropdown.Item onClick={logOut} >Log Out</NavDropdown.Item>
                                </NavDropdown> : <Nav.Link as={Link} to="/login">Login</Nav.Link>}




                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
};

export default Navigation;