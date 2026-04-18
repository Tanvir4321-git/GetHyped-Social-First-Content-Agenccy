import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight } from "react-icons/fi";
gsap.registerPlugin(ScrollTrigger);

const Slider = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        let mm = gsap.matchMedia();

        mm.add({
            isDesktop: "(min-width: 768px)",
            isMobile: "(max-width: 767px)"
        }, (context) => {
            let { isDesktop } = context.conditions;
            const selector = isDesktop ? ".desktop-panel" : ".mobile-panel";
            const panels = gsap.utils.toArray(selector);

            panels.forEach((panel, i) => {
                ScrollTrigger.create({
                    trigger: panel,
                    start: "top top",
                    pin: true,
                    pinSpacing: false,
                    scrub: true,
                });

                if (i < panels.length - 1) {
                    gsap.to(panel, {
                        yPercent: -5,
                        opacity: 0,
                        scrollTrigger: {
                            trigger: panel,
                            start: "bottom bottom",
                            end: "bottom top",
                            scrub: true,
                        }
                    });
                }
            });
        });

        return () => mm.revert();
    }, []);

    return (
        <section ref={containerRef} className='max-w-360 mx-auto pt-10.5 md:pt-12 px-4.25 md:px-7.5'>

            {/* slider 1 */}
            {/* desktop */}

            <div className='desktop-panel hidden mb-10 bg-white h-135.5 p-12 rounded-3xl md:flex items-center justify-between z-1 relative'>
                <div>

                    <p className='text-[18px] font-medium rounded-sm p-1.5 inline text-[#161616] bg-[#eae4d8] mb-4.5'>Expertise</p>

                    <h1 className='text-[88px]  font-semibold text-[#161616] mb-22'>Social strategy</h1>
                    <p className='text-[22px] font-semibold text-[#161616] mb-4' >Slimme strategie. Sterke start.</p>

                    <p className='text-[16px] font-semibold text-[#161616] w-99.5 pr-10 mb-4 leading-5.25'>
                        We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.
                    </p>

                    <button className="flex items-center gap-2 border-none bg-[#fa5424] rounded-lg p-1.5 text-[14px] font-semibold text-white  cursor-pointer group hover:-rotate-6 hover:scale-105 transition-transform duration-300 ease-in-out">
                        Meer over social strategie
                        <span className="flex items-center justify-center w-7.5 h-7.5 bg-white rounded-md group-hover:-rotate-4 group-hover:scale-105 ease-in-out  transition-all duration-300">


                            <FiArrowRight color='black' size={18} />

                        </span>
                    </button>

                </div>

                <div>
                    <h1 className='text-[88px] font-semibold text-end text-[#eae4d8]'>01</h1>
                    <video className='w-70 h-95 rotate-3 -mt-10 border-8 border-[#fa5424] object-fill rounded-2xl' muted autoPlay loop src="https://gethyped.b-cdn.net/MD/MD%20Loop%20Schaken.mp4"></video>
                </div>

            </div>

            {/* mobile */}

            <div className='mobile-panel md:hidden mb-6 bg-white  p-4 rounded-2xl block z-1 relative'>
                <div>

                    <div className='flex justify-between items-center  -mt-4'>
                        <p className='text-[15px] font-medium rounded-sm p-1.5 inline text-[#161616] bg-[#eae4d8] '>Expertise</p>
                        <h1 className='text-[49px] font-semibold text-end text-[#eae4d8]'>01</h1>
                    </div>

                    <h1 className=' text-[49px] font-semibold text-[#161616] -mt-4 '>Social strategy</h1>

                    <video className='w-40.5 h-55 my-6 -rotate-2 border-4 border-[#fa5424] object-fill rounded-2xl' muted autoPlay loop src="https://gethyped.b-cdn.net/MD/MD%20Loop%20Schaken.mp4"></video>

                    <p className='text-[18px] font-semibold text-[#161616] mb-2' >Slimme strategie. Sterke start.</p>

                    <p className='text-[14px] font-semibold text-[#161616] w-99.5 pr-10 mb-4 leading-5.25'>
                        We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.
                    </p>

                    <button className="flex items-center gap-2 border-none bg-[#fa5424] rounded-lg p-1.5 text-[13px] font-semibold text-white  cursor-pointer group hover:-rotate-4 hover:scale-105 transition-transform duration-300 ease-in-out">
                        Meer over social strategie
                        <span className="flex items-center justify-center w-7 h-7 bg-white rounded-md group-hover:-rotate-4 group-hover:scale-105 ease-in-out  transition-all duration-300">

                            <FiArrowRight color='black' size={18} />

                        </span>
                    </button>

                </div>

            </div>

            {/* slider 2 */}
            {/* desktop */}

            <div className='desktop-panel hidden mb-10 bg-[#fcb8fa] h-135.5 p-12 rounded-3xl md:flex items-center justify-between z-2 relative'>
                <div>

                    <p className='text-[18px] font-medium rounded-sm p-1.5 inline text-[#161616] bg-white mb-4.5'>Expertise</p>

                    <h1 className='text-[88px] font-semibold text-[#161616] mb-22'>Content creation</h1>

                    <p className='text-[22px] font-semibold text-[#161616] mb-4' >Content die opvalt en raakt.</p>

                    <p className='text-[16px] font-semibold text-[#161616] w-99.5 pr-10 mb-4 leading-5.25'>
                        We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.
                    </p>

                    <button className="flex items-center gap-2 border-none bg-white rounded-lg p-1.5 text-[14px] font-semibold text-black  cursor-pointer group hover:-rotate-6 hover:scale-105 transition-transform duration-300 ease-in-out">
                        Meer over content creatie
                        <span className="flex items-center justify-center w-7.5 h-7.5 bg-black rounded-md group-hover:-rotate-4 group-hover:scale-105 ease-in-out  transition-all duration-300">

                            <FiArrowRight color='white' size={18} />

                        </span>
                    </button>

                </div>

                <div>
                    <h1 className='text-[88px] font-semibold text-end text-[#eae4d8]'>02</h1>
                    <video className='w-70 h-95 rotate-3 -mt-10 border-8 border-white object-fill rounded-2xl' muted autoPlay loop src="https://gethyped.b-cdn.net/Expertises/Loop%20BTS%20comp.mp4"></video>
                </div>

            </div>

            {/* mobile */}

            <div className='mobile-panel md:hidden mb-6 bg-[#fcb8fa]  p-4 rounded-2xl block z-2 relative'>
                <div>

                    <div className='flex justify-between items-center  -mt-4'>
                        <p className='text-[15px] font-medium rounded-sm p-1.5 inline text-[#161616] bg-white '>Expertise</p>
                        <h1 className='text-[49px] font-semibold text-end text-[#eae4d8]'>02</h1>
                    </div>

                    <h1 className=' text-[47px] whitespace-nowrap font-semibold text-[#161616] -mt-4 '>Content  creation</h1>

                    <video className='w-40.5 h-55 my-6 -rotate-2 border-4 border-white object-fill rounded-2xl' muted autoPlay loop src="https://gethyped.b-cdn.net/MD/MD%20Loop%20Schaken.mp4"></video>

                    <p className='text-[18px] font-semibold text-[#161616] mb-2' >Content die opvalt en raakt.</p>

                    <p className='text-[14px] font-semibold text-[#161616] w-99.5 pr-10 mb-4 leading-5.25'>
                        We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.
                    </p>

                    <button className="flex items-center gap-2 border-none bg-white rounded-lg p-1.5 text-[13px] font-semibold text-black cursor-pointer group hover:-rotate-4 hover:scale-105 transition-transform duration-300 ease-in-out">
                        Meer over content creatie
                        <span className="flex items-center justify-center w-7 h-7 bg-black rounded-md group-hover:-rotate-4 group-hover:scale-105 ease-in-out  transition-all duration-300">

                            <FiArrowRight color='white' size={18} />

                        </span>
                    </button>

                </div>

            </div>

            {/* slider 3 */}
            {/* desktop */}

            <div className='desktop-panel hidden mb-10 bg-[#33c791] h-135.5 p-12 rounded-3xl md:flex items-center justify-between z-3 relative'>
                <div>

                    <p className='text-[18px] font-medium rounded-sm p-1.5 inline text-[#161616] bg-white mb-4.5'>Expertise</p>

                    <h1 className='text-[88px]  font-semibold text-[#161616] mb-22'>Activation</h1>

                    <p className='text-[22px] font-semibold text-[#161616] mb-4' >Zichtbaar waar en wanneer het telt.</p>

                    <p className='text-[16px] font-semibold text-[#161616] w-99.5 pr-10 mb-4 leading-5.25'>
                        De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt.
                    </p>

                    <button className="flex items-center gap-2 border-none bg-white rounded-lg p-1.5 text-[14px] font-semibold text-black  cursor-pointer group hover:-rotate-6 hover:scale-105 transition-transform duration-300 ease-in-out">
                        Meer over activatie
                        <span className="flex items-center justify-center w-7.5 h-7.5 bg-black rounded-md group-hover:-rotate-4 group-hover:scale-105 ease-in-out  transition-all duration-300">

                            <FiArrowRight color='white' size={18} />

                        </span>
                    </button>

                </div>

                <div>
                    <h1 className='text-[88px] font-semibold text-end text-[#eae4d8]'>03</h1>
                    <video className='w-70 h-95 rotate-3 -mt-10 border-8 border-white object-fill rounded-2xl' muted autoPlay loop src="https://gethyped.b-cdn.net/Over%20de%20Top/overdetop-loop.mp4"></video>
                </div>

            </div>

            {/*mobile */}

            <div className='mobile-panel md:hidden mb-6 bg-[#33c791]  p-4 rounded-2xl block z-3 relative'>
                <div>

                    <div className='flex justify-between items-center  -mt-4'>
                        <p className='text-[15px] font-medium rounded-sm p-1.5 inline text-[#161616] bg-white '>Expertise</p>
                        <h1 className='text-[49px] font-semibold text-end text-[#eae4d8]'>03</h1>
                    </div>

                    <h1 className=' text-[49px] whitespace-nowrap font-semibold text-[#161616] -mt-4 '>Activation</h1>

                    <video className='w-40.5 h-55 my-6 -rotate-2 border-4 border-white object-fill rounded-2xl' muted autoPlay loop src="https://gethyped.b-cdn.net/Over%20de%20Top/overdetop-loop.mp4"></video>

                    <p className='text-[18px] font-semibold text-[#161616] mb-2' >Zichtbaar waar en wanneer het telt.</p>

                    <p className='text-[14px] font-semibold text-[#161616] w-99.5 pr-10 mb-4 leading-5.25'>
                        De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt.
                    </p>

                    <button className="flex items-center gap-2 border-none bg-white rounded-lg p-1.5 text-[13px] font-semibold text-black cursor-pointer group hover:-rotate-4 hover:scale-105 transition-transform duration-300 ease-in-out">
                        Meer over activatie
                        <span className="flex items-center justify-center w-7 h-7 bg-black rounded-md group-hover:-rotate-4 group-hover:scale-105 ease-in-out  transition-all duration-300">

                            <FiArrowRight color='white' size={18} />

                        </span>
                    </button>
                    
                </div>
            </div>

            {/* slider 4 */}
            {/* desktop */}


            <div className='desktop-panel hidden mb-10 bg-[#0d8dff] h-135.5 p-12 rounded-3xl md:flex items-center justify-between z-4 relative'>
                <div>
                    <p className='text-[18px] font-medium rounded-sm p-1.5 inline text-[#161616] bg-white mb-4.5'>Expertise</p>

                    <h1 className='text-[88px]  font-semibold text-[#161616] mb-22'>Data</h1>

                    <p className='text-[22px] font-semibold text-[#161616] mb-4' >Inzichten die impact maken.</p>

                    <p className='text-[16px] font-semibold text-[#161616] w-99.5 pr-10 mb-4 leading-5.25'>
                        We duiken in de cijfers om te snappen what écht werkt. En sturen jouw content scherp bij.
                    </p>

                    <button className="flex items-center gap-2 border-none bg-white rounded-lg p-1.5 text-[14px] font-semibold text-black  cursor-pointer group hover:-rotate-6 hover:scale-105 transition-transform duration-300 ease-in-out">
                        Meer over data
                        <span className="flex items-center justify-center w-7.5 h-7.5 bg-black rounded-md group-hover:-rotate-4 group-hover:scale-105 ease-in-out  transition-all duration-300">

                            <FiArrowRight color='white' size={18} />

                        </span>
                    </button>

                </div>

                <div>
                    <h1 className='text-[88px] font-semibold text-end text-[#eae4d8]'>04</h1>
                    <video className='w-70 h-95 rotate-3 -mt-10 border-8 border-white object-fill rounded-2xl' muted autoPlay loop src="https://gethyped.b-cdn.net/Expertises/Data%20comp.mp4"></video>
                </div>

            </div>

            {/* mobile */}

            <div className='mobile-panel md:hidden  mb-6 bg-[#0d8dff]  p-4 rounded-2xl  z-4 relative'>
                <div>

                    <div className='flex justify-between items-center  -mt-4'>
                        <p className='text-[15px] font-medium rounded-sm p-1.5 inline text-[#161616] bg-white '>Expertise</p>
                        <h1 className='text-[49px] font-semibold text-end text-[#eae4d8]'>04</h1>
                    </div>

                    <h1 className=' text-[49px] whitespace-nowrap font-semibold text-[#161616] -mt-4 '>Data</h1>

                    <video className='w-40.5 h-55 my-6 -rotate-2 border-4 border-white object-fill rounded-2xl' muted autoPlay loop src="https://gethyped.b-cdn.net/Expertises/Data%20comp.mp4"></video>

                    <p className='text-[18px] font-semibold text-[#161616] mb-2' >Inzichten die impact maken.</p>

                    <p className='text-[14px] font-semibold text-[#161616] w-99.5 pr-10 mb-4 leading-5.25'>
                        We duiken in de cijfers om te snappen what écht werkt. En sturen jouw content scherp bij.
                    </p>

                    <button className="flex items-center gap-2 border-none bg-white rounded-lg p-1.5 text-[13px] font-semibold text-black cursor-pointer group hover:-rotate-4 hover:scale-105 transition-transform duration-300 ease-in-out">
                        Meer over data
                        <span className="flex items-center justify-center w-7 h-7 bg-black rounded-md group-hover:-rotate-4 group-hover:scale-105 ease-in-out  transition-all duration-300">

                            <FiArrowRight color='white' size={18} />

                        </span>
                    </button>

                </div>
            </div>

        </section>
    );
};

export default Slider;