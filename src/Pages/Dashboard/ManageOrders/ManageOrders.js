import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Button, Col } from 'react-bootstrap';


const ManageOrders = () => {

    const [myOrders, setMyOrders] = useState([]);
    const [isChanged, setIsChanged] = useState(false);
    const [statusStyle, setStatusStyle] = useState('');



    useEffect(() => {
        fetch(`https://enigmatic-harbor-71567.herokuapp.com/allorders`)
            .then(res => res.json())
            .then(data => {
                setMyOrders(data);
                setIsChanged(false);
                console.log(data);
            })
    }, [isChanged]);

    const handelCancelOrder = id => {

        const proceed = window.confirm('Are You Sure You Want To Delete This Order?');
        if (proceed) {
            fetch(`https://enigmatic-harbor-71567.herokuapp.com/myorders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {
                        alert('Order Deleted Successfully');
                        setIsChanged(true);
                    }
                })
        }
    }


    const handelShippedOrder = id => {
        const proceed = window.confirm('Are You Sure You Want To Delete This Order?');
        if (proceed) {
            fetch(`https://enigmatic-harbor-71567.herokuapp.com/shipped/${id}`, {
                method: 'PUT'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        setIsChanged(true);
                    }
                    console.log(data);
                })
        }
    }
    return (
        <div>
            <h2 className="text-center">my Order</h2>
            <Container>
                <Row xs={1} md={3} className="g-3">
                    {
                        myOrders.map((product) => <Col className="mb-3" key={product._id} >
                            <Card className="position-relative h-100">
                                <Card.Img variant="top" src={product.img} height="300px" />
                                <Card.Body>
                                    <div className="package-meta text-center">
                                        <span className="text-white price_box">Price: ${product.price}</span>
                                    </div>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text className="text-truncate">
                                        {product.details}

                                    </Card.Text>
                                    <p>Address: {product.address}</p>
                                    <p className="text-info">Order Status: {product.status}</p>
                                    <small className="text-center">Placed By: {product.email}</small>
                                </Card.Body>



                                <Button variant="secondary" className="mb-2 " onClick={() => { handelShippedOrder(product._id) }}>Ship Product</Button>
                                <Button variant="danger" onClick={() => { handelCancelOrder(product._id) }}>Cancel Order</Button>

                            </Card>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ManageOrders;