import React from 'react';
import Navbar from './Component/Navbar';
import HeroSection from './Component/HeroSection';
import About from './Component/About';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main className='bg-[#faf4ec]'>
<HeroSection></HeroSection>
<About></About>
      </main>
    </div>
  );
};

export default App;