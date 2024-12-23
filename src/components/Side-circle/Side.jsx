import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import './Side.css'; // Importing the CSS file
import { useTheme } from '../ThemeContext'; // Assuming this context is available

const Links = () => {
    return (
        <div className="links">
            <nav className='links'>
                <div><a href="#home">Home</a></div>
                <div><a href="#about-me">About Me</a></div>
                <div><a href="#skills">Skills</a></div>
                <div><a href="#contact-me">Contact</a></div>
                <div><a href="#projects">My Projects</a></div>
            </nav>
        </div>
    );
};

const SideWithLinks = () => {
    const [open, setOpen] = useState(false);
    const { theme } = useTheme(); // Access the current theme

    const variants = {
        open: {
            clipPath: 'circle(150% at 0% 0%)',
            transition: { type: 'spring', stiffness: 20, damping: 10, duration: 1 },
        },
        closed: {
            clipPath: 'circle(0% at 0% 0%)',
            transition: { type: 'spring', stiffness: 200, damping: 30, duration: 0.7 },
        },
    };

    return (
        <motion.div 
            className={`sidebar ${theme === 'dark' ? 'dark' : ''}`} // Apply dark class conditionally
            animate={open ? 'open' : 'closed'}
        >
            <motion.div className={`background ${theme === 'dark' ? 'dark-bg' : ''}`} variants={variants}>
                <Links />
            </motion.div>
            <button className={`menu-button ${theme === 'dark' ? 'dark-button' : ''}`} onClick={() => setOpen((prev) => !prev)}>
                {open ? <FiX size={30} /> : <FiMenu size={30} />}
            </button>
        </motion.div>
    );
};

export default SideWithLinks;
