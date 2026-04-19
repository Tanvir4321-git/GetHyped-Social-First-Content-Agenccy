import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight } from "react-icons/fi";
gsap.registerPlugin(ScrollTrigger);

const SLIDES = [
    {
        id: '01',
        idcolor: 'text-[#eae4d8]',
        bg: 'bg-white',
        badgeBg: 'bg-[#eae4d8]',
        btnBg: 'bg-[#fa5424]', btnText: 'text-white',
        iconBg: 'bg-white', iconColor: 'black',
        borderColor: 'border-[#fa5424]',
        title: 'Social strategy',
        subtitle: 'Slimme strategie. Sterke start.',
        body: 'We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.',
        btnLabel: 'Meer over social strategie',
        videoSrc: 'https://gethyped.b-cdn.net/MD/MD%20Loop%20Schaken.mp4',
    },
    {
        id: '02',
         idcolor: 'text-[#fdd0fe]',
        bg: 'bg-[#fcb8fa]',
        badgeBg: 'bg-white',
        btnBg: 'bg-white', btnText: 'text-black',
        iconBg: 'bg-black', iconColor: 'white',
        borderColor: 'border-white',
        title: 'Content creation',
        subtitle: 'Content die opvalt en raakt.',
        body: 'We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.',
        btnLabel: 'Meer over content creatie',
        videoSrc: 'https://gethyped.b-cdn.net/Expertises/Loop%20BTS%20comp.mp4',
    },
    {
        id: '03',
         idcolor: 'text-[#73e2b6]',
        bg: 'bg-[#33c791]',
        badgeBg: 'bg-white',
        btnBg: 'bg-white', btnText: 'text-black',
        iconBg: 'bg-black', iconColor: 'white',
        borderColor: 'border-white',
        title: 'Activation',
        subtitle: 'Zichtbaar waar en wanneer het telt.',
        body: 'De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt.',
        btnLabel: 'Meer over activatie',
        videoSrc: 'https://gethyped.b-cdn.net/Over%20de%20Top/overdetop-loop.mp4',
    },
    {
        id: '04',
         idcolor: 'text-[#28aaff]',
        bg: 'bg-[#0d8dff]',
        badgeBg: 'bg-white',
        btnBg: 'bg-white', btnText: 'text-black',
        iconBg: 'bg-black', iconColor: 'white',
        borderColor: 'border-white',
        title: 'Data',
        subtitle: 'Inzichten die impact maken.',
        body: 'We duiken in de cijfers om te snappen what écht werkt. En sturen jouw content scherp bij.',
        btnLabel: 'Meer over data',
        videoSrc: 'https://gethyped.b-cdn.net/Expertises/Data%20comp.mp4',
    },
];

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
        <section id="next-section" ref={containerRef} className='max-w-360 mx-auto pt-10.5 md:pt-12 px-4.25 md:px-7.5'>

            {SLIDES.map((slide, index) => (
                <React.Fragment key={slide.id}>

                    {/* desktop */}

                    <div className={`desktop-panel hidden mb-10 ${slide.bg} h-135.5 p-12 rounded-3xl md:flex items-center justify-between z-${index + 1} relative`}>
                        <div>

                            <p className={`text-[18px] font-medium rounded-sm p-1.5 inline text-[#161616] ${slide.badgeBg} mb-4.5`}>Expertise</p>

                            <h1 className='text-[88px] font-semibold text-[#161616] mb-22'>{slide.title}</h1>

                            <p className='text-[22px] font-semibold text-[#161616] mb-4'>{slide.subtitle}</p>

                            <p className='text-[16px] font-semibold text-[#161616] w-99.5 pr-10 mb-4 leading-5.25'>{slide.body}</p>

                            <button className={`flex items-center gap-2 border-none ${slide.btnBg} rounded-lg p-1.5 text-[14px] font-semibold ${slide.btnText} cursor-pointer group hover:-rotate-6 hover:scale-105 transition-transform duration-300 ease-in-out`}>
                                {slide.btnLabel}
                                <span className={`flex items-center justify-center w-7.5 h-7.5 ${slide.iconBg} rounded-md group-hover:-rotate-4 group-hover:scale-105 ease-in-out transition-all duration-300`}>
                                    <FiArrowRight color={slide.iconColor} size={18} />
                                </span>
                            </button>

                        </div>
                        <div>

                            <h1 className={`text-[88px] font-semibold text-end  ${slide.idcolor}`}>{slide.id}</h1>

                            <video
                             className={`w-70 h-95 rotate-3 -mt-10 border-8 ${slide.borderColor} object-fill rounded-2xl`} 
                             muted autoPlay loop 
                             src={slide.videoSrc} />
                        </div>
                    </div>

                    {/* mobile */}

                    <div className={`mobile-panel md:hidden mb-6 ${slide.bg} p-4 rounded-2xl block z-${index + 1} relative`}>
                        <div>

                            <div className='flex justify-between items-center -mt-4'>

                                <p className={`text-[15px] font-medium rounded-sm p-1.5 inline text-[#161616] ${slide.badgeBg}`}>Expertise</p>

                                <h1 className={`text-[49px] font-semibold text-end ${slide.idcolor}`}>{slide.id}</h1>

                            </div>

                            <h1 className='text-[49px] font-semibold text-[#161616] -mt-4'>{slide.title}</h1>

                            <video 
                            className={`w-40.5 h-55 my-6 -rotate-2 border-4 ${slide.borderColor} object-fill rounded-2xl`}
                             muted autoPlay loop playsInline 
                             src={slide.videoSrc} />

                            <p className='text-[18px] font-semibold text-[#161616] mb-2'>{slide.subtitle}</p>

                            <p className='text-[14px] font-semibold text-[#161616] w-99.5 pr-10 mb-4 leading-5.25'>{slide.body}</p>

                            <button className={`flex items-center gap-2 border-none ${slide.btnBg} rounded-lg p-1.5 text-[13px] font-semibold ${slide.btnText} cursor-pointer group hover:-rotate-4 hover:scale-105 transition-transform duration-300 ease-in-out`}>
                                {slide.btnLabel}
                                <span className={`flex items-center justify-center w-7 h-7 ${slide.iconBg} rounded-md group-hover:-rotate-4 group-hover:scale-105 ease-in-out transition-all duration-300`}>
                                    <FiArrowRight color={slide.iconColor} size={18} />
                                </span>
                            </button>

                        </div>
                    </div>

                </React.Fragment>
            ))}

        </section>
    );
};

export default Slider;