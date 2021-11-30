import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';


import { AuthContext } from '../auth/authContext';

const PrivateRoute = ({children}) => {
    
    const { user } = useContext(AuthContext);
    const { logged } = user;

    return logged === true 
        ? children 
        : <Navigate to="/login" />

}
export default PrivateRoute;


