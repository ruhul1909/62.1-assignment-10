import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle, signInUsingGithub } = useAuth();

    return (
        <div>
            <h3>Please login</h3>
            <button onClick={signInUsingGoogle}>Google Sign In</button>

            <br />
            <button onClick={signInUsingGithub}>Github Sign In</button>
            <br />
            <Link to="/register">New user? </Link>
        </div>
    );
};

export default Login;