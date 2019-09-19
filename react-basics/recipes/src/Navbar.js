import React from 'react';
import './Navbar.css';

function Navbar() {
    return(
        <header>
            <h2><a href="#">Recipe App</a></h2>
            <nav>
                <li><a>New Recipe</a></li>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Contact Us</a></li>
            </nav>
        </header>
    );
}

export default Navbar;