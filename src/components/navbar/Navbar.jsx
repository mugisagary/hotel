import React from 'react';

import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">SUMMITBOOKINGS</span>
            <div className="navItems">
                <button className="navButton">Registor</button>
                <button className="navButton">Login</button>
            </div>

            </div>

        </div>

    )
}

export default Navbar;