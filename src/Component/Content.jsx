/* eslint-disable react-hooks/refs */
import { LuArrowUpRight } from "react-icons/lu"
import { FiArrowRight } from "react-icons/fi";
import { useRef } from "react";

const Content = () => {

    // video start and pause
    const videoRefs = [useRef(null), useRef(null), useRef(null)];

    const handleHover = (ref) => {
        ref.current?.play();
    };

    const handleLeave = (ref) => {
        if (ref.current) {
            ref.current.pause();
            ref.current.currentTime = 0;
        }
    };


    return (
        <section className='max-w-360 mx-auto pb-15 mt-160 md:mt-170 px-4.25 md:px-7.5'>

            <div className='md:ml-28.75'>

                <h1 className='font-bold text-[49px] md:text-[91px] leading-12.25 md:leading-23 mb-4 text-[#161616] '>Content <br /> dat scoort.</h1>

                <p className='font-semibold text-[23px] leading-7.5  mb-4 text-[#161616]'>Wij vertellen jouw verhaal. Op <br /> een manier die écht past bij jouw <br />doelgroep. Metcreatieve content <br />  die werkt en het verschil maakt.</p>

                <button className="flex items-center gap-2  border rounded-lg p-1 text-[14px] font-semibold text-[#161616] bg-white  cursor-pointer group hover:-rotate-3 hover:scale-105 transition-transform duration-300 ease-in-out">

                    Bekijk al ons werk

                    <span className="flex items-center justify-center w-7.5 h-7.5 bg-black rounded-md group-hover:-rotate-4 group-hover:scale-105 ease-in-out  transition-all duration-300">
                        <FiArrowRight color="white" />
                    </span>
                </button>

            </div>
            {/* video card */}

            <div className='md:ml-20 mt-10 md:mt-20 md:flex-row flex-col flex justify-center items-center md:justify-between gap-16 md:gap-0 '>

                {/* 1st card */}
                <div onMouseEnter={() => handleHover(videoRefs[0])}
                    onMouseLeave={() => handleLeave(videoRefs[0])}
                    className=' -rotate-2 md:rotate-0 cursor-pointer group hover:-rotate-3 transition-all duration-300 ease-in-out' >

                    {/* desktop */}

                    <video
                        ref={videoRefs[0]}
                        className='w-86 h-112.5 md:border-10 border-6 border-[#fa5424] object-fill rounded-3xl hidden md:block'
                        muted
                        loop
                        src="https://gethyped.b-cdn.net/Bullit/Bullit%20%7C%20Loop.mp4"
                    />

                    {/* mobile */}

                    <video
                        className='w-86 h-112.5 md:border-10 border-6 border-[#fa5424] object-fill rounded-3xl block md:hidden'
                        autoPlay
                        muted
                        loop
                        playsInline
                        src="https://gethyped.b-cdn.net/Bullit/Bullit%20%7C%20Loop.mp4"
                    />

                    <div className='relative z-50 -mt-47 md:-mt-50 ml-5.5'>

                        <svg className='w-[93.3%] -mb-17' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 429 174" fill="none"><path d="M428.625 35.0943V136.589C428.625 152.326 428.625 167.249 428.625 173.088L1.03513e-06 173.082C-1.56688e-05 170.148 0.000175319 166.808 0.000175319 159.068V77.9695C0.000175319 70.9826 5.03458 65.0132 11.904 63.8674L388.605 1.00885C409.565 -2.47661 428.625 13.7568 428.625 35.0862" fill="#fa5424"></path></svg>

                        <div className='bg-[#fa5424] w-75 -mt-1 rounded-b-2xl p-3'>

                            <h3 className='font-semibold text-[21px] md:text-[23px] mb-3 text-white leading-6.25'>Van nul naar vol,<br /> binnen 3 weken</h3>

                            <button className='font-medium text-white bg-white/40 p-1 md:p-2 rounded-sm md:rounded-lg text-[14px]'>Built</button>

                            <button className='absolute top-2 left-63'>
                                <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full overflow-hidden relative z-50">
                                    <LuArrowUpRight size={22} className="absolute transition-all duration-300 ease-in-out group-hover:translate-x-6 group-hover:-translate-y-6 group-hover:opacity-0" />
                                    <LuArrowUpRight size={22} className="absolute -translate-x-6 translate-y-6 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100" />
                                </span>
                            </button>

                        </div>
                    </div>
                </div>


                {/* 2nd card */}

                <div onMouseEnter={() => handleHover(videoRefs[1])}
                    onMouseLeave={() => handleLeave(videoRefs[1])}
                    className='rotate-2 md:rotate-0 transform md:-translate-y-17 cursor-pointer group hover:-rotate-3 transition-all duration-300 ease-in-out' >

                    {/* desktop */}
                    <video
                        ref={videoRefs[1]}
                        className='w-86 h-112.5 md:border-10 border-6 border-[#0d8dff] object-fill rounded-3xl hidden md:block'
                        muted
                        loop
                        src="https://gethyped.b-cdn.net/Roasta/roasta-loop.mp4"
                    />

                    {/* mobile */}
                    <video
                        className='w-86 h-112.5 md:border-10 border-6 border-[#0d8dff] object-fill rounded-3xl block md:hidden'
                        autoPlay
                        muted
                        loop
                        playsInline
                        src="https://gethyped.b-cdn.net/Roasta/roasta-loop.mp4"
                    />

                    <div className='relative z-50 -mt-47 md:-mt-50 ml-5.5'>

                        <svg className='w-[93.3%] -mb-17' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 429 174" fill="none"><path d="M428.625 35.0943V136.589C428.625 152.326 428.625 167.249 428.625 173.088L1.03513e-06 173.082C-1.56688e-05 170.148 0.000175319 166.808 0.000175319 159.068V77.9695C0.000175319 70.9826 5.03458 65.0132 11.904 63.8674L388.605 1.00885C409.565 -2.47661 428.625 13.7568 428.625 35.0862" fill="#0d8dff"></path></svg>

                        <div className='bg-[#0d8dff] w-75 -mt-1 rounded-b-2xl p-3'>

                            <h3 className='font-semibold text-[21px] md:text-[23px] mb-3 text-white leading-6.25'>Zacht in smaak, <br /> sterk in beeld</h3>

                            <button className='font-medium text-white bg-white/40 p-1 md:p-2 rounded-sm md:rounded-lg text-[14px]'>Roasta</button>

                            <button className='absolute top-2 left-63'>
                                <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full overflow-hidden relative z-50">
                                    <LuArrowUpRight size={22} className="absolute transition-all duration-300 ease-in-out group-hover:translate-x-6 group-hover:-translate-y-6 group-hover:opacity-0" />
                                    <LuArrowUpRight size={22} className="absolute -translate-x-6 translate-y-6 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100" />
                                </span>
                            </button>

                        </div>
                    </div>
                </div>


                {/* 3rd card */}
                <div onMouseEnter={() => handleHover(videoRefs[2])}
                    onMouseLeave={() => handleLeave(videoRefs[2])}
                     className='-rotate-1 md:rotate-0 transform md:-translate-y-40 cursor-pointer group hover:-rotate-3 transition-all duration-300 ease-in-out' >

                    {/* desktop */}
                    <video
                        ref={videoRefs[2]}
                        className='w-86 h-112.5 md:border-10 border-6 border-[#33c791] object-fill rounded-3xl hidden md:block'
                        muted
                        loop
                        src="https://gethyped.b-cdn.net/Loco/loco-bites-loop.mp4"
                    />

                    {/* mobile */}
                    <video
                        className='w-86 h-112.5 md:border-10 border-6 border-[#33c791] object-fill rounded-3xl block md:hidden'
                        autoPlay
                        muted
                        loop
                        playsInline
                        src="https://gethyped.b-cdn.net/Loco/loco-bites-loop.mp4"
                    />

                    <div className='relative z-50 -mt-47 md:-mt-50 ml-5.5'>

                        <svg className='w-[93.3%] -mb-17' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 429 174" fill="none"><path d="M428.625 35.0943V136.589C428.625 152.326 428.625 167.249 428.625 173.088L1.03513e-06 173.082C-1.56688e-05 170.148 0.000175319 166.808 0.000175319 159.068V77.9695C0.000175319 70.9826 5.03458 65.0132 11.904 63.8674L388.605 1.00885C409.565 -2.47661 428.625 13.7568 428.625 35.0862" fill="#33c791"></path></svg>

                        <div className='bg-[#33c791] w-75 -mt-1 rounded-b-2xl p-3'>

                            <h3 className='font-semibold text-[21px] md:text-[23px] mb-3 text-white leading-6.25'>Content die écht <br /> smaakt (en raakt)</h3>

                            <button className='font-medium text-white bg-white/40 p-1 md:p-2 rounded-sm md:rounded-lg text-[14px]'>Loco</button>

                            <button className='absolute top-2 left-63'>
                                <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full overflow-hidden relative z-50">
                                    <LuArrowUpRight size={22} className="absolute transition-all duration-300 ease-in-out group-hover:translate-x-6 group-hover:-translate-y-6 group-hover:opacity-0" />
                                    <LuArrowUpRight size={22} className="absolute -translate-x-6 translate-y-6 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100" />
                                </span>
                            </button>

                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Content;