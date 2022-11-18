import React from 'react';
import { Link } from 'react-router-dom';
import './Haeder.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            {/* <a href="/home">Home</a>
            <a href="/about">About</a> */}
            <Link to='/friends'>Friends</Link>
            <Link to='/products'>Products</Link>
            </nav>
            <p>Common header</p>
        </div>
    );
};

export default Header;