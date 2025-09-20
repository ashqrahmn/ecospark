import { useEffect } from 'react';
import { assets } from './assets/assets'

import About from './components/About';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Service from './components/Service';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Work from './components/Work';
import Contact from './components/Contact';
import Faqs from './components/Faqs';
import Footer from './components/Footer';
import Brands from './components/Brands';

export default function App() {

   useEffect(() => {
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    
    link.type = 'image/svg+xml';
    link.rel = 'icon';
    link.href = assets.EcoSpark; 
    
    document.getElementsByTagName('head')[0].appendChild(link);
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <Service/>
      <Work />
      <About />
      <Team />
      <Testimonials/>
      <Contact />
      <Faqs />
      <Brands />
      <Footer />
    </>
  );
}