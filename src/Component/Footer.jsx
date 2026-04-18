import React, { useState } from 'react'; // useState added
import { MdEmail } from "react-icons/md";
import { BsFire } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion"; // framer-motion added
import bg from '../assets/bg.png'
import sticker from '../assets/sticker.png'
import logo from '../assets/logo.png'
import { FaLinkedinIn, FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";

import st1 from '../assets/st1.png'
import st2 from '../assets/st2.png'
import st3 from '../assets/st3.png'
import st4 from '../assets/st4.png'

const Footer = () => {
    // --- Animation Logic Start ---
    const [activeStickers, setActiveStickers] = useState([]);
    const [lastPos, setLastPos] = useState({ x: 0, y: 0 });

    // ৪টি লোগোর অ্যারে
    const stickerLogos = [st1, st2, st3, st4];

    const handleMouseMove = (e) => {
        if (window.innerWidth < 768) return;

        const { clientX, clientY } = e;
        
        // মাউস মুভমেন্ট ডিস্ট্যান্স চেক (গ্যাপ মেইনটেইন করার জন্য)
        const distance = Math.hypot(clientX - lastPos.x, clientY - lastPos.y);

        if (distance > 150) { 
            const id = Date.now();
            
            // লোগোগুলো থেকে র‍্যান্ডমলি একটি সিলেক্ট করা হচ্ছে
            const randomImg = stickerLogos[Math.floor(Math.random() * stickerLogos.length)];

            const newSticker = {
                id,
                x: clientX,
                y: clientY,
                img: randomImg, // সিলেক্টেড ইমেজ
                rotate: Math.random() * 40 - 20, 
            };

            setActiveStickers((prev) => [...prev, newSticker]);
            setLastPos({ x: clientX, y: clientY });

            // ১ সেকেন্ড পর রিমুভ হবে (Visibility Control)
            setTimeout(() => {
                setActiveStickers((prev) => prev.filter((s) => s.id !== id));
            }, 1000); 
        }
    };
    // --- Animation Logic End ---

    const socialLinks = [
        { icon: <FaLinkedinIn size={17} />, href: "#" },
        { icon: <FaTiktok size={17} />, href: "#" },
        { icon: <FaInstagram size={17} />, href: "#" },
        { icon: <FaYoutube size={17} />, href: "#" },
    ];

    return (
        <section className='max-w-360 mx-auto px-4.25 md:px-7.5'>
            <div className=' border-t border-[#ccc7c1]'>

                {/* desktop footer - added handleMouseMove & overflow-hidden */}
                <div 
                    onMouseMove={handleMouseMove} 
                    className='hidden min-h-screen md:flex flex-col justify-end relative pt-17 overflow-hidden'
                >
                    {/* Sticker Rendering */}
                    <AnimatePresence>
                        {activeStickers.map((s) => (
                            <motion.img
                                key={s.id}
                                src={s.img} 
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.1, transition: { duration: 0.3 } }}
                                style={{
                                    position: 'fixed',
                                    left: s.x,
                                    top: s.y,
                                    width: '200px',
                                    translateX: '-50%',
                                    translateY: '-50%',
                                    rotate: s.rotate,
                                    pointerEvents: 'none',
                                    zIndex: 40
                                }}
                                alt="sticker"
                            />
                        ))}
                    </AnimatePresence>

                    <div className='flex justify-center items-center'>
                        <div>
                            <h1 className='font-semibold text-[96px] text-[#161616] '>Let's Get Hyped</h1>

                            <div className='flex justify-center items-center gap-3 mt-3'>
                                <button className="flex items-center gap-2 border border-[#161616] rounded-[10px] p-1 text-[14px] font-semibold text-[#161616] bg-transparent cursor-pointer group hover:-rotate-4 hover:scale-105 transition-transform duration-300 ease-in-out">
                                    Mail ons direct
                                    <span className="flex items-center justify-center w-7.5 h-7.5 bg-[#161616] rounded-lg group-hover:-rotate-4 group-hover:scale-105 ease-in-out transition-all duration-300">
                                        <MdEmail color='white' />
                                    </span>
                                </button>

                                <button className="flex items-center gap-2 bg-[#fa5424] rounded-lg p-1 text-[14px] font-semibold text-white cursor-pointer hover:-rotate-6 hover:scale-105 transition-transform duration-300 ease-in-out">
                                    Get Results
                                    <span className="flex items-center justify-center w-7.5 h-7.5 bg-white rounded-lg">
                                        <BsFire className='transform scale-x-[-1] text-[#fa5424]' size={18} />
                                    </span>
                                </button>
                            </div>
                            {/* Static sticker maintained as per original code */}
                            <img className='absolute top-74 hidden md:flex rotate-12 right-20' src={sticker} width={110} alt="" />
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${bg})` }} className='z-50 bg-cover bg-center bg-no-repeat h-70 flex gap-120 items-end rounded-t-4xl pb-1'>
                        {/* logo */}
                        <img src={logo} width={280} alt="" />

                        {/* right */}
                        <div >
                            <div className='flex gap-20 items-center'>
                                {/* left */}
                                <div >
                                    {/* menu */}
                                    <div className='flex rounded-lg justify-between items-center gap-2.5'>
                                        <a className="menu-item bg-white" href="/expertises">
                                            <span className="swoosh-bg">
                                                <span className="swoosh-layer layer-orange"></span>
                                                <span className="swoosh-layer layer-black"></span>
                                            </span>
                                            <span className="menu-text">Expertises</span>
                                        </a>

                                        <a className="menu-item bg-white" href="/work">
                                            <span className="swoosh-bg">
                                                <span className="swoosh-layer layer-orange"></span>
                                                <span className="swoosh-layer layer-black"></span>
                                            </span>
                                            <span className="menu-text">Work</span>
                                        </a>

                                        <a className="menu-item bg-white" href="/about">
                                            <span className="swoosh-bg">
                                                <span className="swoosh-layer layer-orange"></span>
                                                <span className="swoosh-layer layer-black"></span>
                                            </span>
                                            <span className="menu-text">About</span>
                                        </a>

                                        <a className="menu-item bg-white" href="/contact">
                                            <span className="swoosh-bg">
                                                <span className="swoosh-layer layer-orange"></span>
                                                <span className="swoosh-layer layer-black"></span>
                                            </span>
                                            <span className="menu-text">Contact</span>
                                        </a>
                                    </div>

                                    {/* social media */}
                                    <div className="flex items-center gap-4 mt-7">
                                        <span className="font-bold text-sm text-[#161616]">Follow us</span>
                                        <div className="flex items-center gap-2">
                                            {socialLinks.map((s, i) => (
                                                <a
                                                    key={i}
                                                    href={s.href}
                                                    className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#161616] hover:scale-110 transition-colors duration-300"
                                                >
                                                    {s.icon}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* right info */}
                                <div className="flex flex-col gap-4 text-sm">
                                    <div>
                                        <p className="font-bold text-[#161616] mb-1">Contact</p>
                                        <p className='font-medium text-[11px] text-[#161616] '>info@gethyped.nl</p>
                                        <p className='font-medium text-[11px] text-[#161616] '>+31 6 1533 7496</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-[#161616] mb-1">Adres</p>
                                        <p className='font-medium text-[11px] text-[#161616] '>Beltrumsestraat 6,</p>
                                        <p className='font-medium text-[11px] text-[#161616] '>7141 AL Groenlo</p>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom bar */}
                            <div className="flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-500 pt-2 pb-2 gap-2">
                                <span>© 2025 Get Hyped</span>
                                <span>© Design by Dylan</span>
                                <a href="/privacy" className="hover:underline">Privacyvoorwaarden</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* mobile footer */}
                <div className='pt-14 md:hidden block'>
                    <img src={logo} width={400} className='-mb-10' alt="" />
                    <div className='bg-[#eae4d8] pb-3 flex flex-col gap-6 justify-center items-center pt-20'>
                        <button className="flex items-center gap-2 bg-[#fa5424] rounded-lg p-2 text-[18px] font-semibold text-white ">
                            Get Hyped! Neem contact op
                            <span className="flex items-center justify-center w-7.5 h-7.5 bg-white rounded-lg">
                                <BsFire className='transform scale-x-[-1] text-[#fa5424]' size={18} />
                            </span>
                        </button>

                        <div className='flex items-center gap-2'>
                            <a className="text-[18px] font-semibold rounded-xl p-2.5 bg-white" href="">Expertises</a>
                            <a className="text-[18px] font-semibold rounded-xl p-2.5 bg-white" href="/">Work</a>
                            <a className="text-[18px] font-semibold rounded-xl p-2.5 bg-white" href="/about">About</a>
                            <a className="text-[18px] font-semibold rounded-xl p-2.5 bg-white" href="/contact">Contact</a>
                        </div>

                        <div className="flex items-center gap-4 ">
                            <div className="flex items-center gap-2">
                                {socialLinks.map((s, i) => (
                                    <a key={i} href={s.href} className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#161616] ">
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div>
                            <p className='font-medium text-[16px] text-[#161616] '>info@gethyped.nl</p>
                            <p className='font-medium text-[16px] text-[#161616] '>+31 6 1533 7496</p>
                        </div>
                        <div>
                            <p className='font-medium text-[16px] text-[#161616] '>Beltrumsestraat 6,</p>
                            <p className='font-medium text-[16px] text-[#161616] '>7141 AL Groenlo</p>
                        </div>

                        <span className='text-[12px] text-gray-500'>© 2025 Get Hyped</span>
                        <span className='text-[12px] text-gray-500'>© Design by Dylan</span>
                        <span className='text-[12px] text-gray-500'>Privacyvoorwaarden</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;