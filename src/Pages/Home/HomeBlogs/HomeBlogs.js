import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const HomeBlogs = () => {
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
                <h4 className="mb-0 mt-4 text-center">From the blog post</h4>
                <h2 className="text-center mb-3">OUR RECENT POSTS</h2>

                <Row className="g-4 mt-3 mb-5">
                    {
                        blogs.map(blog => <Col md={4} key={blog._id}>
                            <Card className="h-100">
                                <Card.Img variant="top" src={blog.img} height="320px" />
                                <Card.Body>
                                    <Card.Title>{blog.title}</Card.Title>
                                    <span>By: {blog.name} |</span>

                                    <small> Date: {blog.date}</small>
                                    <br />

                                </Card.Body>
                            </Card>
                        </Col>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default HomeBlogs;