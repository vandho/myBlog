import React, { useState } from 'react'
import './NavBar.css'

import { Link } from 'react-router-dom'

export const NavBar = () => {

    const [isMobile, setIsMobile] = useState(false);
    
    return (
        <nav className='navbar'>
            <div className='logo'>
                <h2>Mamoank</h2>
            </div>
            <button className='mobile-menu-icon' onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
            <ul className={isMobile ? 'nav-link-mobile' : 'nav-link'} onClick={() => setIsMobile(false)}>
                <Link to="/"><li className="nav-items">Home</li></Link>
                <Link to="/about" ><li className="nav-items">About Me</li></Link>
                <Link to="/contact" ><li className="nav-items">Contact Me</li></Link>
            </ul>
            
        </nav>
    )
}
