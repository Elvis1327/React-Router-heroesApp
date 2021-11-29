import React from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate();
    console.log(navigate)

    const handleLogin = () => {
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
