import React from 'react';
import Navbar from './Component/Navbar';
import HeroSection from './Component/HeroSection';
import About from './Component/About';
import Slider from './Component/Slider';
import Content from './Component/Content';
import BrandHyped from './Component/BrandHyped';
import Footer from './Component/Footer';

const App = () => {
  return (
    <div className='bg-[#faf4ec]'>
      <Navbar></Navbar>
      <main className='bg-[#faf4ec]'>
        <HeroSection></HeroSection>
        <About></About>
        <Slider></Slider>
        <Content></Content>
        <BrandHyped></BrandHyped>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default App;