"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import DynamicHeroSection from './components/hero';
import EnhancedAboutSection from './components/AboutUs';
import ContactSection from './components/contactSection';
import Projects from './components/Projects';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-white max-w-full text-gray-800 min-h-screen">
      <Head>
        <title>Fauzan Habib | Creative Developer</title>
        <meta name="description" content="Freelance web developer specializing in interactive experiences" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-6xl mx-auto px-4 sm:px-4  lg:px-8 relative z-10">
      {/* Header */}
        <header className="flex justify-between items-center py-7 relative">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-black via-gray-500 to-gray-900 bg-clip-text text-transparent">
            Fauzan Habib
          </h1>
          <nav>
          <div className="flex justify-center">
            <div className="rounded-full bg-gradient-to-r from-gray-800 via-gray-500 to-gray-900 p-1 shadow-lg relative overflow-hidden">
          
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-100 to-black opacity-50 blur-xl"></div>
              
              <div className="relative bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-full px-1 py-1 flex items-center">
                <ul className="flex space-x-1">
                  <li>
                    <a 
                      href="#about" 
                      className="px-6 py-2 rounded-full transition-all duration-300 block text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-500"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#projects" 
                      className="px-6 py-2 rounded-full transition-all duration-300 block text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-500"
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#contact" 
                      className="px-6 py-2 rounded-full transition-all duration-300 block text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-500"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        </header>

        <DynamicHeroSection scrollY={scrollY} />
        <EnhancedAboutSection />

        <Projects />
        <ContactSection />

        {/* Footer */}
        <footer className="py-12 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-gray-600">© 2025 Fauzan Habib. All rights reserved.</p>
            </div>
            
            <div className="mt-6 md:mt-0">
              <p className="text-gray-600">Made with <span className="text-purple-500">♥</span> and Next.js</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Scroll-to-top button */}
      <div 
        className="fixed bottom-8 right-8 z-40 flex flex-col items-center space-y-3"
        style={{
          opacity: scrollY > 300 ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
      >
        <a 
          href="#" 
          className="w-12 h-12 bg-transparent rounded-full flex items-center justify-center border border-black hover:bg-purple-50 transition-colors duration-300"
        >
          <svg className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
          </svg>
        </a>
      </div>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}