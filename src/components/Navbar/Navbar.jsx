import React from 'react'
import { FaHeart, FaUser, FaShoppingCart } from "react-icons/fa"
import './Navbar.css';
import { useCart } from '../../context/cart-context';
import { Link } from 'react-router-dom'

const Navbar = () => {
    const { cartState } = useCart();
    return (
        <nav className="navbar" id="header">
            <div className='navbar-header'>
                <Link to="/">
                    <span>HOME</span>
                </Link>
                <Link to="/product">
                    <span>SHOP</span>
                </Link>
            </div>
            <div className="navbar-title">
                <Link to="/">
                    <span className='gold'>GOLD</span>LANE
                </Link>
            </div>

            {/*
            <div className="search-bar">
                <input type="text" name="search" placeholder="🔍 Search" />
            </div> */}
            <div className="navbar-menu flex-center">
                <Link className='icon-name' to="/login">
                    <FaUser size='1.5rem' />
                    <span className='flex'>Login</span>
                </Link>
                <Link to="/wishlist">
                    <div className="badge-on-icon">
                        <FaHeart size='1.5rem' />
                        <span className="badge badge-sm center">{cartState.wishlistItem.length}</span>
                    </div>
                </Link>
                <Link to="/cart">
                    <div className="badge-on-icon">
                        <FaShoppingCart size='1.5rem' />
                        <span className="badge badge-sm center">{cartState.cartItem.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export { Navbar };
