import React from 'react';
 import { FiArrowRight } from "react-icons/fi";
import { IoMdArrowDown } from "react-icons/io";


const About = () => {

  return (
    <section className='max-w-360 mx-auto pb-12.25 md:pb-18 mt-20 md:mt-30.5 px-4.25 md:px-7.5'>
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

          <button className="flex items-center gap-2 border border-[#161616] rounded-lg p-1 text-[15px] font-semibold text-[#161616] bg-transparent cursor-pointer group hover:-rotate-4 hover:scale-105 transition-transform duration-300 ease-in-out">
            Leer ons kennen

            <span className="flex items-center justify-center w-7.5 h-7.5 bg-[#161616] rounded-md group-hover:-rotate-4 group-hover:scale-105 ease-in-out  transition-all duration-300">

                <FiArrowRight color='white' size={18} />
             
            </span>
          </button>
        </div>



        <div className="w-1/3 md:flex items-center justify-end pr-20 hidden ">
          <button className="w-10 h-10 rounded-xl hover:rounded-lg transition-all duration-300 ease-in-out hover:-rotate-1 border border-black flex items-center justify-center cursor-pointer bg-transparent overflow-hidden group relative">

            {/* arrow 1 - default visible */}

            <IoMdArrowDown size={20}  className='text-[#fa5424] absolute transition-all duration-300 ease-in-out group-hover:translate-y-8 group-hover:opacity-0'/>
           

            {/* arrow 2 - comes from top on hover */}
            <IoMdArrowDown size={20}   className="text-[#fa5424] absolute -translate-y-8 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100" />
           
          </button>
        </div>
      </div>

    </section>
  );
};

export default About;