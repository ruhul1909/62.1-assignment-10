import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/icon/GHlogo.png'
import './Header.css'



const Header = () => {
    const { user, logout } = useAuth();
    const activeStyle = {
        fontWeight: "bold",
        color: "red",
        margin: '4px',
        padding: '10px',

    }
    return (
        <div>
            <nav>
                <img className="logo" src={logo} alt="" />
                <NavLink activeStyle={activeStyle} to="/home"> Home</NavLink>
                <NavLink activeStyle={activeStyle} to="/services">Services</NavLink>
                <NavLink activeStyle={activeStyle} to="/register">Register</NavLink>
                <NavLink activeStyle={activeStyle} to="/shipping">Shipping</NavLink>
                <NavLink activeStyle={activeStyle} to="/orderHistory">OrderHistory</NavLink>
                <NavLink activeStyle={activeStyle} to="/login">Login</NavLink>
            </nav>
            <span> {user.displayName}</span>
            {user?.email && <button onClick={logout}>Log Out</button>}
        </div>

    );
};

export default Header;