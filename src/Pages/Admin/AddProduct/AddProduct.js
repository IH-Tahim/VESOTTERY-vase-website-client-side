import React, { useState } from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const [added, setAdded] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        fetch("https://enigmatic-harbor-71567.herokuapp.com/addproduct", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.acknowledged) {
                    setAdded(true);

                }
            });

        console.log(data);

        reset();
    };
    return (
        <div>
            <h2 className="text-center mt-3">Add a New Product</h2>
            <Container>
                <Row>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="mb-3">
                            <label className="form-label" >Product Title</label>
                            <input type="text" className="form-control" placeholder="Title" {...register("title", { required: true })} />
                            {errors.title && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label" >Product Short Details</label>
                            <input type="text" className="form-control" placeholder="Product Details Max-100words" {...register("details", { required: true, max: 100 })} />
                            {errors.details && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label" >Product Image URL</label>
                            <input type="url" className="form-control" placeholder="Image URL" {...register("img", { required: true })} />
                            {errors.img && <span className="text-danger">This field is required</span>}
                        </div>

                        <Row>
                            <Col md={4}>
                                <div className="mb-3">
                                    <label className="form-label" >Product Price</label>
                                    <input type="number" className="form-control" placeholder="Price" {...register("price", { required: true })} />
                                    {errors.price && <span className="text-danger">This field is required</span>}
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="mb-3">
                                    <label className="form-label" >Product Height</label>
                                    <input type="number" className="form-control" placeholder="Product Height" {...register("height", { required: true })} />
                                    {errors.height && <span className="text-danger">This field is required</span>}
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="mb-3">
                                    <label className="form-label" >Product Width</label>
                                    <input type="number" className="form-control" placeholder="Product Width" {...register("width", { required: true })} />
                                    {errors.width && <span className="text-danger">This field is required</span>}
                                </div>
                            </Col>
                        </Row>

                        <input type="submit" className="btn btn-dark mb-3" value="Add Product" />
                    </form>
                    {added && <Alert variant="success">Product Added Successfully.</Alert>}
                </Row>
            </Container>


        </div>
    );
};

export default AddProduct;