import React, { useState } from 'react';
import closeIcon from '../assets/closeIcon.png';
import menuIcon from '../assets/menuIcon.png';


const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { href: '#about', label: 'About' },
        { href: '#education', label: 'Education' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <nav className='navbar'>
            <a href='/' className='navbar__title' aria-label="Go to homepage">Portfolio</a>
            <div className='navbar__menu'>
                <img
                    className='navbar__menuBtn'
                    src={menuOpen ? closeIcon : menuIcon}
                    alt={menuOpen ? "Close menu" : "Open menu"}
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul
                    className={`navbar__menuItems ${menuOpen && "navbar__menuOpen"}`}
                    onClick={() => setMenuOpen(false)}
                >
                    {links.map((link, index) => (
                        <li key={index}>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Nav;