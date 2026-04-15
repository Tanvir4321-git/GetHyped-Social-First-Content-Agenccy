import React from 'react';

const About = () => {
    return (
        <section className='max-w-345 mx-auto mt-20 md:mt-30.5 px-4.25 md:px-7.5'>
            {/* Text */}

            <h2 className='font-semibold md:w-287.5 text-[30px] md:text-[57px]  leading-8.75 md:leading-14.25  mb-17 text-[#161616] mx-0 md:ml-27.25 pr-0  md:pr-60'>Wij maken content die opvalt. Die  blijft hangen. Die jouw doelgroep  raakt en jouw merk in beweging  brengt. Snel, krachtig en energiek.</h2>

 <div className="flex items-center justify-between bg-[#faf4ec] px-10 py-12 rounded-3xl">

      {/* Left - Image */}
      <div className="w-[220px] h-[260px] rounded-2xl overflow-hidden flex-shrink-0">
        <img src="/images/about.jpg" alt="about" className="w-full h-full object-cover" />
      </div>

      {/* Middle - Text */}
      <div className="flex-1 px-16">
        <p className="text-[22px] font-semibold text-[#161616] leading-relaxed mb-6">
          We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar.
          Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie.
          Nooit meer content zonder resultaat.
        </p>
        <button className="flex items-center gap-2 border border-[#161616] rounded-lg px-4 py-2.5 text-[15px] font-semibold text-[#161616] bg-transparent cursor-pointer hover:bg-[#161616] hover:text-white transition-all duration-300 group">
          Leer ons kennen
          <span className="flex items-center justify-center w-7 h-7 bg-[#161616] rounded-md group-hover:bg-white transition-all duration-300">
            <svg className="group-hover:text-[#161616] text-white transition-all duration-300" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </button>
      </div>

      {/* Right - Down Arrow Button */}
      <div className="flex-shrink-0">
        <button className="w-12 h-12 rounded-xl border border-[#161616]/20 flex items-center justify-center cursor-pointer bg-transparent overflow-hidden group relative">
          {/* arrow 1 - default visible */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18} height={18}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#161616] absolute transition-all duration-300 ease-in-out group-hover:translate-y-8 group-hover:opacity-0"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>

          {/* arrow 2 - comes from top on hover */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18} height={18}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#161616] absolute -translate-y-8 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100"
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