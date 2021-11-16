import React, { useState } from 'react';
import { Alert, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';

const AddReviews = () => {
    const { user } = useAuth();
    const [added, setAdded] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();


    const onSubmit = data => {
        fetch("https://enigmatic-harbor-71567.herokuapp.com/review", {
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
            <h2 className="text-center mt-3">Give Your Review</h2>
            <Container>
                <Row>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <fieldset disabled>
                                <input className="form-control" type="text" value={user.email} {...register("email", { required: true })} />
                            </fieldset>
                        </Form.Group>

                        <div className="mb-3">
                            <label className="form-label" >Name</label>
                            <input type="text" className="form-control"  {...register("name", { required: true })} />
                            {errors.name && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label" >Your Rating (1 to 5)</label>
                            <input type="number" className="form-control" placeholder="rating" {...register("rating", { required: true, max: 5, min: 0 })} />
                            {errors.rating && <span className="text-danger">This field is required & value should be 0to5</span>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label" >Your Image URL</label>
                            <input type="url" className="form-control" placeholder="Image URL"  {...register("img", { required: true })} />
                            {errors.img && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label" >Your Review (Max:250 words)</label>
                            <textarea className="form-control" rows="2" {...register("review", { required: true, maxLength: 250 })} />
                            {errors.review && <span className="text-danger">This field is required</span>}
                        </div>

                        <input type="submit" className="btn btn-dark mb-3" value="Submit Review" />
                    </form>
                    {added && <Alert variant="success">Review Added Successfully.</Alert>}
                </Row>
            </Container>


        </div>
    );
};

export default AddReviews;