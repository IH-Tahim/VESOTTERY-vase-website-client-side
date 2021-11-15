import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://enigmatic-harbor-71567.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);

            })
    }, []);
    return (
        <div>
            <h2 className="text-center">Explore All Products</h2>
            <Container>
                <Row xs={1} md={3} className="g-3">
                    {
                        products.map((product) => <Col className="mb-3" key={product._id} >
                            <Card className="position-relative h-100">
                                <Card.Img variant="top" src={product.img} height="300px" />
                                <Card.Body>
                                    <div className="package-meta text-center">
                                        <span className="text-white price_box">Price: ${product.price}</span>
                                    </div>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>
                                        {product.details}
                                    </Card.Text>
                                </Card.Body>
                                <Button className="btn-dark" as={Link} to={`/placeorder/${product._id}`} >Place Order</Button>

                            </Card>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default AllProducts;