import React, { useContext } from 'react';
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import '../../App.css'
import { AuthContext } from '../../contex';
import Button from '../Button/Button';

const Layout = () => {
    const {setIsAuth} = useContext(AuthContext)

    const navigate = useNavigate()

    const logout = (event) => {
        event.preventDefault()
        setIsAuth(false)
        localStorage.removeItem("auth")
        navigate('/')
    }

    return (
        <div>
            <header className="header">
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/posts" >Posts</NavLink>
                <NavLink to="/about">About</NavLink>
                <Button onClick={logout}>Logout</Button>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default Layout;