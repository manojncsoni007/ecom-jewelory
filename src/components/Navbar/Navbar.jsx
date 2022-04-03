import React from 'react'
import { FaHeart, FaUser, FaShoppingCart } from "react-icons/fa"
import './Navbar.css';
import { useCart } from '../../context/cart-context';
import {Link} from 'react-router-dom'

const Navbar = () => {
    const { cartItem, wishlist } = useCart();
    return (
        <nav className="navbar" id="header">
            <div className="navbar-title">
                <Link to="/">
                    GOlDLANE
                </Link>
            </div>
            <div className="search-bar">
                <input type="text" name="search" placeholder="🔍 Search" />
            </div>
            <div className="navbar-menu flex-center">
                <Link to="/">
                    <FaUser size='1.5rem' />
                    <span className='flex'>Login</span>
                </Link>
                <Link to="/">
                    <div className="badge-on-icon">
                        <FaHeart size='1.5rem' />
                        <span className="badge badge-sm center">{wishlist}</span>
                    </div>
                </Link>
                <Link to="/">
                    <div className="badge-on-icon">
                        <FaShoppingCart size='1.5rem' />
                        <span className="badge badge-sm center">{cartItem}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export {Navbar};
