import { LuArrowUpRight } from "react-icons/lu"
import { FiArrowRight } from "react-icons/fi";
import { useRef } from "react";

const CARDS = [
    {
        color: '#fa5424',
        borderColor: 'border-[#fa5424]',
        videoSrc: 'https://gethyped.b-cdn.net/Bullit/Bullit%20%7C%20Loop.mp4',
        title: <>Van nul naar vol,<br /> binnen 3 weken</>,
        label: 'Built',
        rotate: '-rotate-2 md:rotate-0',
        translateY: '',
    },
    {
        color: '#0d8dff',
        borderColor: 'border-[#0d8dff]',
        videoSrc: 'https://gethyped.b-cdn.net/Roasta/roasta-loop.mp4',
        title: <>Zacht in smaak, <br /> sterk in beeld</>,
        label: 'Roasta',
        rotate: 'rotate-2 md:rotate-0',
        translateY: 'md:-translate-y-17',
    },
    {
        color: '#33c791',
        borderColor: 'border-[#33c791]',
        videoSrc: 'https://gethyped.b-cdn.net/Loco/loco-bites-loop.mp4',
        title: <>Content die écht <br /> smaakt (en raakt)</>,
        label: 'Loco',
        rotate: '-rotate-1 md:rotate-0',
        translateY: 'md:-translate-y-40',
    },
];

const Content = () => {

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

                <button className="flex items-center gap-2  border rounded-lg p-1 text-[14px] font-semibold text-[#161616] bg-white  cursor-pointer group hover:-rotate-6 hover:scale-105 transition-transform duration-300 ease-in-out">
                    Bekijk al ons werk
                    <span className="flex items-center justify-center w-7.5 h-7.5 bg-black rounded-md group-hover:-rotate-4 group-hover:scale-105 ease-in-out  transition-all duration-300">
                        <FiArrowRight color="white" />
                    </span>
                </button>

            </div>

            {/* video card */}
            <div className='md:ml-20 mt-10 md:mt-20 md:flex-row flex-col flex justify-center items-center md:justify-between gap-16 md:gap-0 '>

                {CARDS.map((card, i) => (
                    <div
                        key={card.label}
                        onMouseEnter={() => handleHover(videoRefs[i])}
                        onMouseLeave={() => handleLeave(videoRefs[i])}
                        className={`${card.rotate} transform ${card.translateY} cursor-pointer group hover:-rotate-3 transition-all duration-300 ease-in-out`}
                    >
                        {/* desktop */}
                        <video
                            ref={videoRefs[i]}
                            className={`w-86 h-112.5 md:border-10 border-6 ${card.borderColor} object-fill rounded-3xl hidden md:block`}
                            muted
                            loop
                            src={card.videoSrc}
                        />

                        {/* mobile */}
                        <video
                            className={`w-86 h-112.5 md:border-10 border-6 ${card.borderColor} object-fill rounded-3xl block md:hidden`}
                            autoPlay
                            muted
                            loop
                            playsInline
                            src={card.videoSrc}
                        />

                        <div className='relative z-50 -mt-47 md:-mt-50 ml-5.5'>
                            <svg className='w-[93.3%] -mb-17' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 429 174" fill="none">
                                <path d="M428.625 35.0943V136.589C428.625 152.326 428.625 167.249 428.625 173.088L1.03513e-06 173.082C-1.56688e-05 170.148 0.000175319 166.808 0.000175319 159.068V77.9695C0.000175319 70.9826 5.03458 65.0132 11.904 63.8674L388.605 1.00885C409.565 -2.47661 428.625 13.7568 428.625 35.0862" fill={card.color} />
                            </svg>

                            <div className='w-75 -mt-1 rounded-b-2xl p-3' style={{ backgroundColor: card.color }}>
                                <h3 className='font-semibold text-[21px] md:text-[23px] mb-3 text-white leading-6.25'>{card.title}</h3>

                                <button className='font-medium text-white bg-white/40 p-1 md:p-2 rounded-sm md:rounded-lg text-[14px]'>{card.label}</button>

                                <button className='absolute top-2 left-63'>
                                    <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full overflow-hidden relative z-50">
                                        <LuArrowUpRight size={22} className="absolute transition-all duration-300 ease-in-out group-hover:translate-x-6 group-hover:-translate-y-6 group-hover:opacity-0" />
                                        <LuArrowUpRight size={22} className="absolute -translate-x-6 translate-y-6 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100" />
                                    </span>
                                </button>

                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </section>
    );
};

export default Content;