import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import { TYPES } from '../../types/types';
import { AuthContext } from '../../auth/authContext';

const Login = () => {

    const { dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogin = () => {
        
        const action = {
            type: TYPES.login,
            payload: {name: 'Elvis', logged: true}
        };
        dispatch(action);

        navigate('/marvel', {
            replace: true
        });

    };

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button 
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login with Google
            </button>
        </div>
    )
}

export default Login
