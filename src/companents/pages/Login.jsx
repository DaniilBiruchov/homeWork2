import React, { useContext } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { AuthContext } from '../../contex';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const { setIsAuth } = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()

    const fromPage = location.state?.from?.pathname

    const login = (event) => {
        event.preventDefault()
        setIsAuth(true)
        navigate(fromPage)
        localStorage.setItem("auth", "true")
    }

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h1>Login</h1>
            <form onSubmit={login}>
                <Input type="text" placeholder="enter username"/>
                <Input type="password" placeholder="enter password"/>
                <Button>Enter</Button>
            </form>
        </div>
    );
};

export default Login;