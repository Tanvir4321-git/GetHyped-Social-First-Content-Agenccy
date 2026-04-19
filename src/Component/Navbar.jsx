/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { GrClose } from "react-icons/gr";
import { AnimatePresence, motion } from 'framer-motion';
import { BsFire } from "react-icons/bs";
import logo from '../assets/logo.png'

const NAV_LINKS = [
    { label: 'Expertises', href: '/expertises' },
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
];

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className=' sticky top-0 z-50'>

            <div className='  max-w-360 mx-auto h-22.5 px-4.25 md:px-7.5 py-6 flex justify-between items-center'>

                {/* Logo */}
                <div>
                    <img className='md:w-32.25 md:h-14.25 w-24.75 h-10' src={logo} alt="logo" />
                </div>

                {/* Menu - desktop only */}
                <div className="hidden md:flex bg-white p-1 rounded-xl justify-between items-center gap-1.5">
                    {NAV_LINKS.map(({ label, href }) => (
                        <a key={href} className="menu-item" href={href}>
                            <span className="swoosh-bg">
                                <span className="swoosh-layer layer-orange" />
                                <span className="swoosh-layer layer-black" />
                            </span>
                            <span className="menu-text">{label}</span>
                        </a>
                    ))}
                </div>

                {/* Button - desktop only */}

                <div className='hidden md:block'>
                    <button className="flex items-center gap-2 bg-[#fcb8fa] rounded-lg p-1.5 text-[15px] font-semibold text-[#161616] cursor-pointer hover:-rotate-6 hover:scale-105 transition-transform duration-300 ease-in-out">
                        Get Results
                        <span className="flex items-center justify-center w-7.5 h-7.5 bg-white rounded-lg">

                            <BsFire className='transform scale-x-[-1] text-[#fa5424]' size={16} />

                        </span>
                    </button>
                </div>

                {/* Hamburger - mobile only */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    className={`md:hidden flex flex-col justify-center gap-1.5 z-50 items-center ${menuOpen ? 'bg-white' : 'bg-[#fcb8fa]'} w-9 h-9 rounded-sm cursor-pointer border-none`}

                >
                    {menuOpen ? <GrClose size={20} /> : <>
                        <span className="block w-5 h-0.5 bg-[#161616] rounded" />
                        <span className="block w-5 h-0.5 bg-[#161616] rounded" />
                    </>}
                </button>

            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -200 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 22 }}
                        className='md:hidden bg-[#fcb8fa] rounded-2xl mx-4 mb-4 p-5 flex flex-col items-center gap-2'
                    >
                        {NAV_LINKS.map(({ label, href }) => (

                            <a key={href}
                                href={href}
                                onClick={() => setMenuOpen(false)}
                                className="text-center px-4 py-2 bg-white rounded-2xl text-[25px] font-semibold text-[#161616]"
                            >
                                {label}
                            </a>
                        ))}

                        <button className="mt-1 flex items-center justify-center gap-2 bg-[#161616] rounded-xl p-1.5 text-[20px] font-bold text-white cursor-pointer">
                            Get Results
                            <span className="flex items-center justify-center w-9 h-9 bg-white rounded-lg">

                                <BsFire className='transform scale-x-[-1] text-[#fa5424]' size={16} />
                            </span>
                        </button>

                    </motion.div>
                )}
            </AnimatePresence>

        </nav >
    );
};

export default Navbar;