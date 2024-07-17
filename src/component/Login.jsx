import React, { useState } from 'react'
import './login.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export const Login = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        const userCred = await axios.post("http://localhost:3005/login", user);
        const message = userCred.data.message;
        if (message === "User not registered") {
            alert(message)
        } else if (message === "Log in successful") {
            navigate("/home");
        } else {
            alert(message);
        }
    }
    return (
        <div className="loginForm">
            <form onSubmit={handleLogin}>
                <div className="login-cont">
                    <h1>LogIn</h1>
                    <input type="text" name='email' required value={user.email} onChange={handleChange} placeholder='Enter your email' />
                    <input type="password" name='password' required value={user.password} onChange={handleChange} placeholder='Enter your password' />
                    <button type='submit' className="btn btn-primary" >Login</button>
                    <div>Or</div>
                    <div className="register-btn-cont">
                        didn't have an account?
                        <a href='/register'>Register</a>
                    </div>
                </div>
            </form>
        </div>
    )
}