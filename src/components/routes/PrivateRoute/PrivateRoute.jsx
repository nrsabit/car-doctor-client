import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    if (loader) {
        return <div className='w-full flex justify-center'>
            <progress className="progress h-6 progress-secondary w-96 my-24"></progress>
        </div>
    }
    if (user) {
        return children
    }
    return <Navigate to="/login" replace></Navigate>
};

export default PrivateRoute;