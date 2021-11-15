import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("https://enigmatic-harbor-71567.herokuapp.com/blogs")
            .then(res => res.json())
            .then(data => {
                setBlogs(data);

            })
    }, [])
    return (
        <div>
            <Container>
                <h2 className="text-center my-3">Our Blogs</h2>

                <Row className="g-4 my-3">
                    {
                        blogs.map(blog => <Col md={4} key={blog._id}>
                            <Card className="h-100">
                                <Card.Img variant="top" src={blog.img} height="400px" />
                                <Card.Body>
                                    <Card.Title>{blog.title}</Card.Title>
                                    <span>By: {blog.name} |</span>

                                    <small> Date: {blog.date}</small>
                                    <br />
                                    <Card.Text>
                                        {blog.details}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Blogs;