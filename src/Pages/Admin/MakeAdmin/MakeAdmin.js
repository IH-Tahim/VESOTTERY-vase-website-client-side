import React, { useState } from 'react';
import { Alert, FloatingLabel, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const [success, setSuccess] = useState(false);

    const onSubmit = data => {
        console.log(data);
        fetch('https://enigmatic-harbor-71567.herokuapp.com/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                    console.log(data);
                    reset();
                }

            })
    };
    return (
        <div>
            <h2 className="text-center mt-3">Make A New Admin</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                    <Form.Control type="email" placeholder="name@example.com"  {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                </FloatingLabel>
                <div className="text-center"><input type="submit" className="btn btn-dark mb-3" value="Make This User Admin"></input></div>

            </form>
            {success && <Alert variant="success">Admin Made Successfully.</Alert>}
        </div>
    );
};

export default MakeAdmin;