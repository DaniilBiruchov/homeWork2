import React, { useContext } from 'react';
import './Pages.css'
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import '../../App.css'
import { AuthContext } from '../../contex';
import Button from '../Button/Button';
import { ThemeContext } from "../../contex"

const Layout = () => {
    const {setIsAuth} = useContext(AuthContext)
    const { theme, setTheme } = useContext(ThemeContext)

    const navigate = useNavigate()

    const logout = (event) => {
        event.preventDefault()
        setIsAuth(false)
        localStorage.removeItem("auth")
        navigate('/')
    }

    const change = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div>
            <header className="header">
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/posts" >Posts</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/reviews">Reviews</NavLink>
                <div className='btn-nav'>
                    <Button onClick={change}>Theme</Button>
                    <Button onClick={logout}>Logout</Button>
                </div>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default Layout;