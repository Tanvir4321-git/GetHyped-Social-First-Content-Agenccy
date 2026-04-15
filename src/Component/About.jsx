import React from 'react';

const About = () => {
    return (
        <section className='max-w-345 mx-auto mt-20 md:mt-30.5 px-4.25 md:px-7.5'>
            {/* Text */}

            <h2 className='font-semibold md:w-287.5 text-[30px] md:text-[57px]  leading-8.75 md:leading-14.25  mb-17 text-[#161616] mx-0 md:ml-27.25 pr-0  md:pr-60'>Wij maken content die opvalt. Die  blijft hangen. Die jouw doelgroep  raakt en jouw merk in beweging  brengt. Snel, krachtig en energiek.</h2>



    <div className='flex md:flex-row flex-col items-end gap-10'>

{/* Left - Image for desktop */}

      <div className=" md:w-1/3 w-full  h-[306x] hidden md:block">
 <img src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6894757aa6dd3f84f6e463a2_Anniek%20Bril.webp" alt="about" className="w-[230px] rounded-2xl h-full object-cover" />
      </div>
      {/* video for mobile */}

      <div className='md:w-1/3 w-full h-110.25 rotate-4 md:hidden block'>
      <video className='w-80 h-full object-fill rounded-2xl ml-3' muted autoPlay loop src="https://gethyped.b-cdn.net/New%20Reach/new-reach-loop.mp4"></video>

      </div>

 
{/* Middle - Text */}

      <div className="md:w-1/3 w-full  ">
        <p className="md:text-[23px] text-[21px] font-semibold text-[#161616] leading-7.5 mb-4.25">
          We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar.
          Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie.
          Nooit meer content zonder resultaat.
        </p>
        <button className="flex items-center gap-2 border border-[#161616] rounded-lg px-4 py-1.5 text-[15px] font-semibold text-[#161616] bg-transparent cursor-pointer group hover:-rotate-4 hover:scale-105 transition-transform duration-300 ease-in-out">
          Leer ons kennen
          <span className="flex items-center justify-center w-7 h-7 bg-[#161616] rounded-md group-hover:-rotate-4 group-hover:scale-105 ease-in-out  transition-all duration-300">
            <svg className=" text-white transition-all duration-300" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </button>
      </div>

        
 
      <div className="w-1/3 md:flex items-center justify-end pr-20 hidden ">
        <button className="w-10 h-10 rounded-xl border border-black flex items-center justify-center cursor-pointer bg-transparent overflow-hidden group relative">
          {/* arrow 1 - default visible */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20} height={20}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#fa5424] absolute transition-all duration-300 ease-in-out group-hover:translate-y-8 group-hover:opacity-0"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>

          {/* arrow 2 - comes from top on hover */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20} height={20}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#fa5424] absolute -translate-y-8 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </button>
      </div>
    </div>

        </section>
    );
};

export default About;