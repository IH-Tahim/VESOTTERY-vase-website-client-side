import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Button, Col } from 'react-bootstrap';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [isChanged, setIsChanged] = useState(false);
    useEffect(() => {
        fetch('https://enigmatic-harbor-71567.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);

            })
    }, [isChanged]);

    const handelDeleteOrder = id => {

        const proceed = window.confirm('Are You Sure You Want To Delete This Product?');
        if (proceed) {
            fetch(`https://enigmatic-harbor-71567.herokuapp.com/products/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {
                        alert('Product Deleted Successfully');
                        setIsChanged(true);
                    }
                })
        }
    }
    return (
        <div>
            <h2 className="text-center">Manage All Products</h2>
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
                                    <Card.Text className="text-truncate">
                                        {product.details}
                                    </Card.Text>
                                </Card.Body>
                                <Button variant="dark" onClick={() => { handelDeleteOrder(product._id) }}>Delete Product</Button>

                            </Card>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ManageProducts;