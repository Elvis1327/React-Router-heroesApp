import React, { useContext } from 'react';

import { AuthContext } from '../auth/authContext';
import { Navigate } from 'react-router-dom';

const PublicRoutes = ({children}) => {

    const { user } = useContext(AuthContext);
    const { logged } = user;

    return (logged === true) 
        ? (<Navigate to="/" />)
        : (children)
}

export default PublicRoutes;
