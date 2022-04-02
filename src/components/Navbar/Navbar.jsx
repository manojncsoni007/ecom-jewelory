import React from 'react'
import { FaHeart, FaUser, FaShoppingCart } from "react-icons/fa"
import './Navbar.css';
import { useCart } from '../../context/cart-context';

const Navbar = () => {
    const { cartItem, wishlist } = useCart();
    return (
        <nav className="navbar" id="header">
            <div className="navbar-title">
                <a href="index.html">
                    JEWELORY
                </a>
            </div>
            <div className="search-bar">
                <input type="text" name="search" placeholder="🔍 Search" />
            </div>
            <div className="navbar-menu flex-center">
                <a href="./pages/authentication/login.html">
                    <FaUser size='1.5rem' />
                    <span className='flex'>Login</span>
                </a>
                <a href="./pages/wishlist/wishlist.html">
                    <div className="badge-on-icon">
                        <FaHeart size='1.5rem' />
                        <span className="badge badge-sm center">{wishlist}</span>
                    </div>
                </a>
                <a href="./pages/cart/cart.html">
                    <div className="badge-on-icon">
                        <FaShoppingCart size='1.5rem' />
                        <span className="badge badge-sm center">{cartItem}</span>
                    </div>
                </a>
            </div>
        </nav>
    )
}

export default Navbar