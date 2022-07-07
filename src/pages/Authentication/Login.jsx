import React, { useState } from 'react'
import './Authentication.css'
import { Link } from 'react-router-dom'
import { Navbar } from '../../components'
import { useAuth } from '../../context'

const Login = () => {
    const { loginUser } = useAuth();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const loginHandler = (e) => {
        e.preventDefault();
        loginUser(email, password)

    }

    const dummyHandler = (e) => {
        e.preventDefault();
        setEmail('manojsoni@gmail.com');
        setPassword('manoj123');
        loginUser('manojsoni@gmail.com', 'manoj123');
    }

    return (
        <>
            <Navbar />
            <div className="main-section">
                <main className="auth-container">
                    <form onSubmit={(e) => loginHandler(e)}>
                        <h4 className="form-title">Login</h4>
                        <div className="auth-input-container">
                            <label htmlFor="email">Email Address *</label>
                            <input type="text" id="email" value={email} className="input" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email address" required />
                        </div>
                        <div className="auth-input-container">
                            <label htmlFor="password">Password *</label>
                            <input type="password" value={password} id="password" className="input" onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" required />
                        </div>
                        <button className="guest-btn" onClick={(e) => dummyHandler(e)}>Use Guest Credentials</button>
                        <button className="auth-btn">Login</button>
                        <div className="flex-center">
                            <Link to="/signup"> Create New Account <i className="fa fa-chevron-right"></i></Link>
                        </div>
                    </form>
                </main>
            </div>
        </>
    )
}

export { Login }