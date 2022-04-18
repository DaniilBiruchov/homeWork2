import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import '../../App.css'

const Layout = () => {
    return (
        <div>
            <header className="header">
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/posts" >Posts</NavLink>
                <NavLink to="/about">About</NavLink>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default Layout;