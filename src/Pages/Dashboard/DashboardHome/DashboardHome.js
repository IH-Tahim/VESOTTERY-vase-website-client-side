import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const DashboardHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <h2 className="text-center mt-3">Welcme To Your Dashboard</h2>
            <h3 className="text-center text-info">{user.displayName}</h3>
        </div>
    );
};

export default DashboardHome;