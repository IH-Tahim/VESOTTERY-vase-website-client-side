import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Button, Col } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    const [isChanged, setIsChanged] = useState(false);

    useEffect(() => {
        fetch(`https://enigmatic-harbor-71567.herokuapp.com/myorders/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyOrders(data);
                setIsChanged(false);
            })
    }, [isChanged]);

    const handelCancelOrder = id => {

        const proceed = window.confirm('Are You Sure You Want To Cancel This Order?');
        if (proceed) {
            fetch(`https://enigmatic-harbor-71567.herokuapp.com/myorders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {
                        alert('Order Cancel Successfully');
                        setIsChanged(true);
                    }
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
                                </Card.Body>
                                <Button variant="dark" onClick={() => { handelCancelOrder(product._id) }}>Cancel Order</Button>

                            </Card>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default MyOrders;