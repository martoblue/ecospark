import React from 'react';
import Navbar from '@components/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const Header = () => {
    return (
        <nav className="navbar navbar-light" style={{ backgroundColor: '#fd7e14', color: '#ffffff' }}>
            <a className="navbar-brand font-weight-bold m-2" href="/" style={{ color: '#ffffff' }}>
            </a>
            <Navbar />    
        </nav>
    );
};

export default Header;