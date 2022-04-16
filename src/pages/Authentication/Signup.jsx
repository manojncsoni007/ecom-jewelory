import React from 'react'
import {Link} from 'react-router-dom'
import { Navbar } from '../../components'
import './Authentication.css'

const Signup = () => {
    return (
        <>
            <Navbar />
            <main className="auth-container">
                <form action="">
                    <h4 className="text-center">Signup</h4>
                    <div className="input-container">
                        <label for="name" className="label">Name *</label>
                        <input type="text" id="name" className="input" placeholder="Enter your name"/>
                    </div>
                    <div className="input-container">
                        <label for="email" className="label">Email Address *</label>
                        <input type="text" id="email" className="input" placeholder="Enter email address"/>
                    </div>
                    <div className="input-container">
                        <label for="password" className="label">Password *</label>
                        <input type="password" id="password" className="input" placeholder="Enter password"/>
                    </div>
                    <div className="user-auth flex-center">
                        <label for="remember-me">
                            <input type="checkbox" id="remember-me"/>
                                I accept all Terms & Condition</label>
                    </div>
                    <button className="authentication-btn">Signup</button>
                    <div className="flex-center">
                        <Link to="/login">Already User ?</Link>
                    </div>
                </form>
            </main>
        </>
    )
}

export { Signup }