/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {

    return (
        <section className='max-w-360 mx-auto md:pt-12.75 px-4.25 md:px-7.5'>

            <h1 className='font-semibold text-[50px] pr-10  w-87.5 md:w-229 md:text-[91px] leading-14.25 md:leading-21.75 mb-5.75 text-[#161616]'>Get Hyped. Get  Noticed. Get Results.</h1>

            <p className='font-semibold text-[21px] md:text-[23px] leading-7.5 mb-3  text-[#161616]'>Klaar met gokken op content <br />
                die niets oplevert?</p>

            {/*  card */}

            <div className='grid grid-cols-2 md:grid-cols-4 justify-center items-center mt-10 md:gap-0 gap-3'>

                {/* 1 */}
                <motion.div
                    style={{ willChange: "transform" }}
                    initial={{ rotate: 4 }}
                    whileHover={{
                        rotate: 0,
                        scale: 1.08,
                        zIndex: 10,
                    }}
                    animate={{ x: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 12
                    }}
                    className={`md:w-77.5 w-50 h-64.5 md:h-105 z-10 transform-gpu hover:mx-10 rounded-2xl md:rounded-4xl shadow-lg p-2.5 md:p-6 bg-[#0d8dff] flex flex-col justify-between`}
                >
                    <h2 className='font-semibold text-[46px] md:text-[63px] mb-10 md:mb-55 text-[#161616]'>10M+</h2>

                    <div>

                        <h3 className='font-semibold text-[15px] md:text-[23px] text-[#161616]'>Organische views</h3>

                        <hr />
                        <p className='text-[13px] whitespace-nowrap text-[#161616] mt-2'>Groei door slimme content</p>
                    </div>

                </motion.div>

                {/* 2 */}
                <motion.div
                    style={{ willChange: "transform" }}
                    initial={{ rotate: 4 }}
                    whileHover={{
                        rotate: 0,
                        scale: 1.08,
                        zIndex: 10,
                    }}
                    animate={{ x: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 12
                    }}
                    className={`md:w-77.5 w-50 h-64.5 md:h-105 transform-gpu hover:mx-10 rounded-2xl md:rounded-4xl shadow-lg `}
                >
                    <video
                        className='w-full h-full object-fill rounded-2xl md:rounded-4xl' muted autoPlay loop playsInline
                        src="https://gethyped.b-cdn.net/Salontopper/Loop%20Salontopper.mp4"></video>
                </motion.div>

                {/* 3 */}

                <motion.div
                    style={{ willChange: "transform" }}
                    initial={{ rotate: -4 }}
                    whileHover={{
                        rotate: 0,
                        scale: 1.08,
                        zIndex: 10,
                    }}
                    animate={{ x: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 12
                    }}
                    className={`md:w-77.5 w-50 h-64.5 md:h-105 z-10 transform-gpu hover:mx-10 rounded-2xl md:rounded-4xl shadow-lg p-2.5 md:p-6 bg-[#33c791] flex flex-col justify-between`}
                >
                    <h2 className='font-semibold text-[46px] md:text-[63px] mb-10 md:mb-55 text-[#161616]'>30+</h2>

                    <div>

                        <h3 className='font-semibold   text-[15px] md:text-[23px] text-[#161616]'>

                            Merken geholpen
                        </h3>
                        <hr />
                        <p className='text-[13px] whitespace-nowrap text-[#161616] mt-2'>Van start-up tot multinational</p>
                    </div>

                </motion.div>

                {/* 4 */}
                <motion.div
                    style={{ willChange: "transform" }}
                    initial={{ rotate: -4 }}
                    whileHover={{
                        rotate: 0,
                        scale: 1.08,
                        zIndex: 10,
                    }}
                    animate={{ x: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 12
                    }}
                    className={`md:w-77.5 w-50 h-64.5 md:h-105 transform-gpu hover:mx-10 rounded-2xl md:rounded-4xl shadow-lg `}
                >
                    <video
                        className='w-full h-full object-fill rounded-2xl md:rounded-4xl' muted autoPlay loop playsInline
                        src="https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4"></video>
                </motion.div>

            </div>



        </section>
    );
};

export default HeroSection;