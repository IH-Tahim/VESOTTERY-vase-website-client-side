import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../images/404Error.svg'

const NotFound = () => {
    return (
        <div className="text-center">
            <h2 className="m-4">Looks Like Your Link Is Broken!</h2>
            <img src={errorImg} alt="" width="400" />
            <br />
            <Link to="/">
                <button className="btn btn-dark mb-4">Go Back Home</button>
            </Link>
        </div>
    );
};

export default NotFound;