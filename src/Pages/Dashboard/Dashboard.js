import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../Hooks/useAuth';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import AddProduct from './AddProduct/AddProduct';

import AddReviews from './AddReviews/AddReviews';
import DashboardHome from './DashboardHome/DashboardHome';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageOrders from './ManageOrders/ManageOrders';
import ManageProducts from './ManageProducts/ManageProducts';
import MyOrders from './MyOrders/MyOrders';
import Payment from './Payment/Payment';

const Dashboard = () => {
    const { logOut, admin } = useAuth();

    let { path, url } = useRouteMatch();
    return (
        <div>
            <Container>
                <Row>
                    <Col md={3} className="border-end">
                        <h4 className="text-center mb-3">Menu</h4>
                        <div className="d-flex flex-column ">
                            <Link to={`${url}/myorders`} className="text-decoration-none fw-bold p-2 mb-2">My Orders</Link>
                            <Link to={`${url}/payment`} className="text-decoration-none fw-bold p-2 mb-2">Payment</Link>
                            <Link to={`${url}/review`} className="text-decoration-none fw-bold p-2 mb-2">Add Review</Link>
                            {admin && <Link to={`${url}/manageorders`} className="text-decoration-none fw-bold p-2 mb-2">Manage Orders</Link>}
                            {admin && <Link to={`${url}/manageproducts`} className="text-decoration-none fw-bold p-2 mb-2">Manage Products</Link>}
                            {admin && <Link to={`${url}/addproduct`} className="text-decoration-none fw-bold p-2 mb-2">Add Product</Link>}
                            {admin && <Link to={`${url}/makeadmin`} className="text-decoration-none fw-bold p-2 mb-2">Make An Admin</Link>}

                            <button className="btn btn-dark mb-3" onClick={logOut}>Log Out</button>
                        </div>
                    </Col>
                    <Col md={9}>
                        <h2 className="text-center">Dashboard</h2>
                        <Switch>
                            <Route exact path={path}>
                                <DashboardHome></DashboardHome>
                            </Route>
                            <Route path={`${path}/myorders`}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route path={`${path}/payment`}>
                                <Payment></Payment>
                            </Route>
                            <Route path={`${path}/review`}>
                                <AddReviews></AddReviews>
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

export default Dashboard;