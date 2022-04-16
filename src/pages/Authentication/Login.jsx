import React from 'react'
import './Authentication.css'
import {Link} from 'react-router-dom'
import { Navbar } from '../../components'

const Login = () => {
  return (
      <>
      <Navbar/>
        <main className="auth-container">
        <form action="">
            <h4 className="text-center">Login</h4>
            <div className="input-container">
                <label for="email" className="label">Email Address *</label>
                <input type="text" id="email" className="input" placeholder="Enter email address"/>
            </div>
            <div className="input-container">
                <label for="password" className="label">Password *</label>
                <input type="password" id="password" className="input" placeholder="Enter password"/>
            </div>
            <div className="login-remember">
                <label for="remember-me"><input type="checkbox" id="remember-me"/>Remember Me</label>
                <a href="" className="forgot-password">Forgot your password ?</a>
            </div>
            <button className="authentication-btn">Login</button>
            <div className="flex-center">
                <Link to="/signup"> Create New Account <i className="fa fa-chevron-right"></i></Link>
            </div>
        </form>
    </main>
      </>
  )
}

export {Login}