import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../Hooks/useAuth';


import AddReviews from './AddReviews/AddReviews';
import DashboardHome from './DashboardHome/DashboardHome';

import MyOrders from './MyOrders/MyOrders';
import Payment from './Payment/Payment';

const Dashboard = () => {
    const { logOut } = useAuth();

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


                        </Switch>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Dashboard;