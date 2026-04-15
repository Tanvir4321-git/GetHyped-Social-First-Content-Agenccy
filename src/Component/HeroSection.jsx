/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {

    return (
        <section className='max-w-345 mx-auto md:pt-12.75 px-4.25 md:px-7.5'>
            <h1 className='font-semibold text-[50px] pr-10  w-87.5 md:w-229 md:text-[91px] leading-14.25 md:leading-21.75 mb-5.75 text-[#161616]'>Get Hyped. Get  Noticed. Get Results.</h1>

            <p className='font-semibold text-[21px] md:text-[23px] leading-7.5 mb- text-[#161616]'>Klaar met gokken op content <br />
                die niets oplevert?</p>

             {/* card */}

            <div className='grid grid-cols-1 md:grid-cols-4 justify-center items-center mt-10'>

                {/* 1 */}
                <motion.div
                    style={{ willChange: "transform" }}
                    initial={{ rotate: 8 }}
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
                    className={`w-77.5 h-90 md:h-105 transform-gpu hover:mx-10 rounded-4xl shadow-lg p-6 bg-[#0d8dff]`}
                >
                    <h1 className='font-semibold text-[63px] mb-30 md:mb-55 text-[#161616]'>10M+</h1>
                    <h3 className='font-semibold text-[23px] text-[#161616]'>Organische views</h3>
                    <hr />
                    <p className='text-[13px] text-[#161616] mt-2'>Groei door slimme content</p>
                </motion.div>

                {/* 2 */}
                <motion.div
                    style={{ willChange: "transform" }}
                    initial={{ rotate: 8 }}
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
                    className={`w-77.5 h-90 md:h-105 transform-gpu hover:mx-10 rounded-4xl shadow-lg`}
                >
                    <video className='w-full h-full object-fill rounded-4xl' muted autoPlay loop src="https://gethyped.b-cdn.net/Salontopper/Loop%20Salontopper.mp4"></video>
                </motion.div>

                {/* 3 */}
                <motion.div
                    style={{ willChange: "transform" }}
                    initial={{ rotate: -8 }}
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
                    className={`w-77.5 h-90 md:h-105 transform-gpu hover:mx-10 rounded-4xl shadow-lg p-6 bg-[#33c791]`}
                >
                    <h1 className='font-semibold text-[63px] mb-30 md:mb-55 text-[#161616]'>30+</h1>
                    <h3 className='font-semibold text-[23px] text-[#161616]'>
                        30+
                        Merken geholpen
                    </h3>
                    <hr />
                    <p className='text-[13px] text-[#161616] mt-2'>Van start-up tot multinational</p>
                </motion.div>

                {/* 4 */}
                <motion.div
                    style={{ willChange: "transform" }}
                    initial={{ rotate: -8 }}
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
                    className={`w-77.5 h-90 md:h-105 transform-gpu hover:mx-5 rounded-4xl shadow-lg`}
                >
                    <video className='w-full h-full object-fill rounded-4xl' muted autoPlay loop src="https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4"></video>
                </motion.div>

            </div>

           

        </section>
    );
};

export default HeroSection;