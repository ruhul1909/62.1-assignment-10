import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h4>Please register here</h4>
            <form action="">
                <input type="Name" />
                <br />
                <input type="email" />
                <br />
                <input type="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <Link to="/login" > Already Register</Link>
        </div>
    );
};

export default Register;