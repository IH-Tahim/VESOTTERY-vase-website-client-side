import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { admin, user } = useAuth();

    if (admin === undefined) {
        return <div className="text-center"><Spinner className="m-auto" animation="grow" variant="primary" /></div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email && admin ? children : <Redirect
                to={{
                    pathname: "/notfound",
                    state: { from: location }
                }}
            ></Redirect>

            }
        >

        </Route>
    );
};

export default AdminRoute;