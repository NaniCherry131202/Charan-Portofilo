import React, { useState } from 'react';
import closeIcon from '../assets/closeIcon.png';
import menuIcon from '../assets/menuIcon.png';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <nav className='navbar'>
                <a href='/' className='navbar__title'>Portfolio</a>
                <div className='navbar__menu'>
                    <img
                        className='navbar__menuBtn'
                        src={menuOpen ? closeIcon : menuIcon}
                        alt=""
                        onClick={() => setMenuOpen(!menuOpen)}
                    />
                    <ul
                        className={`navbar__menuItems ${menuOpen && "navbar__menuOpen"}`}
                        onClick={() => setMenuOpen(false)}
                    >
                         <li>
                            <a href='#about'>About</a>
                        </li>
                        <li>
                            <a href='#education'>Education</a>
                        </li>
                        <li>
                            <a href='#skills'>Skills</a>
                        </li>
                        <li>
                            <a href='#projects'>Projects</a>
                        </li>
                        <li>
                            <a href='#contact'>Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
