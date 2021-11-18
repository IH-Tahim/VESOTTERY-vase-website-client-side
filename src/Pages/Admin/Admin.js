import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../Hooks/useAuth';
import AddProduct from './AddProduct/AddProduct';
import DashboardHome from '../Dashboard/DashboardHome/DashboardHome';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import ManageOrders from './ManageOrders/ManageOrders';
import ManageProducts from './ManageProducts/ManageProducts';
import MakeAdmin from './MakeAdmin/MakeAdmin';

const Admin = () => {
    const { logOut } = useAuth();
    let { path, url } = useRouteMatch();
    return (
        <div>
            <Container>
                <Row>
                    <Col md={3} className="border-end">
                        <h4 className="text-center mb-3">Menu</h4>
                        <div className="d-flex flex-column ">
                            <Link to={`${url}/manageorders`} className="text-decoration-none fw-bold p-2 mb-2">Manage Orders</Link>

                            <Link to={`${url}/manageproducts`} className="text-decoration-none fw-bold p-2 mb-2">Manage Products</Link>
                            <Link to={`${url}/addproduct`} className="text-decoration-none fw-bold p-2 mb-2">Add Product</Link>
                            <Link to={`${url}/makeadmin`} className="text-decoration-none fw-bold p-2 mb-2">Make an Admin</Link>


                            <button className="btn btn-dark mb-3" onClick={logOut}>Log Out</button>
                        </div>
                    </Col>
                    <Col md={9}>
                        <h2 className="text-center">Admin Dashboard</h2>
                        <Switch>
                            <Route exact path={path}>
                                <DashboardHome></DashboardHome>
                            </Route>

                            <AdminRoute path={`${path}/addproduct`}>
                                <AddProduct></AddProduct>
                            </AdminRoute>
                            <AdminRoute path={`${path}/manageorders`}>
                                <ManageOrders></ManageOrders>
                            </AdminRoute>
                            <AdminRoute path={`${path}/manageproducts`}>
                                <ManageProducts></ManageProducts>
                            </AdminRoute>
                            <AdminRoute path={`${path}/makeadmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>

                        </Switch>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Admin;