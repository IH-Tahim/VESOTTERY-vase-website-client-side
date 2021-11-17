import React from 'react';
import './Navigation.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
    const { logOut, user } = useAuth();
    return (
        <div>
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

                                {user?.email ?
                                    <NavDropdown title={user.displayName} id="collasible-nav-dropdown">
                                        <NavDropdown.Item as={Link} to="/dashboard">My Dashboard</NavDropdown.Item>

                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={logOut} >Log Out</NavDropdown.Item>
                                    </NavDropdown> : <Nav.Link as={Link} to="/login">Login</Nav.Link>}




                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Navigation;