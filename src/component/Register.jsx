import React, { useState } from 'react'
import "./register.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Register = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""

    })
    const handleChange = (e) => {

        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    const handleRegister = async () => {

        const { password, reEnterPassword } = user;
        if (password === reEnterPassword) {
            axios.post("http://localhost:3005/register", user)

                .then(res =>
                    alert(res.data.message));
            navigate("/");

        } else {
            alert("Password Didn't match...");
        }
    }
    return (
        <div className='registerForm'>
            <form onSubmit={handleRegister}>
                <div className="register-cont">
                    <h1>Register</h1>
                    <input type="text" name="name" value={user.name} placeholder='Your Name' onChange={handleChange} required />
                    <input type="text" required name="email" value={user.email} placeholder='Your Email' onChange={handleChange} />
                    <input type="password" required name="password" value={user.password} placeholder='Your Password' onChange={handleChange} />
                    <input type="password" required name="reEnterPassword" value={user.reEnterPassword} placeholder='Re-enter Password' onChange={handleChange} />
                    <button type='submit' className='btn btn-primary'>Register</button>
                    <div>Or</div>
                    Already have an account?
                    <a href='/' >Login</a>
                </div>
            </form>
        </div>
    )
}
export default Register;