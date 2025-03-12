// pages/index.js
"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import DynamicHeroSection from './components/hero';
import EnhancedAboutSection from './components/AboutUs';
import ContactSection from './components/contactSection';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "EcoTrack",
      description: "A sustainable living app that helps users track and reduce their carbon footprint.",
      status: "In development - 80% complete",
      tech: "React Native, Firebase, MongoDB",
      launchDate: "April 2025"
    },
    {
      id: 2,
      title: "CreativeMind",
      description: "AI-powered platform for creative professionals to collaborate and share ideas.",
      status: "Beta testing phase",
      tech: "Next.js, TensorFlow, AWS",
      launchDate: "June 2025"
    },
    {
      id: 3,
      title: "FinWizard",
      description: "Personal finance management tool with automated insights and recommendations.",
      status: "Early development - 30% complete",
      tech: "Vue.js, Python, PostgreSQL",
      launchDate: "September 2025"
    }
  ];

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <Head>
        <title>Fauzan Habib | Creative Developer</title>
        <meta name="description" content="Freelance web developer specializing in interactive experiences" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Animated background with mouse interaction */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.4) 0%, rgba(5, 50, 35, 0.2) 30%, transparent 70%)`
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="flex justify-between items-center py-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            Fauzan Habib
          </h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:text-green-400 transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-green-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-green-400 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </header>

        <DynamicHeroSection scrollY={scrollY} />
        <EnhancedAboutSection scrollY={scrollY} />

        
        {/* Projects section */}
<section id="projects" className="py-24 relative overflow-hidden">
  {/* Background elements for visual interest */}
  <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl"></div>
  <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"></div>
  
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent inline-block relative">
      Projects
      <div className="h-1 w-3/4 bg-gradient-to-r from-green-400 to-emerald-600 absolute bottom-0 left-0"></div>
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
      {/* Project 1 */}
      <div 
        className="project-card relative overflow-hidden rounded-xl group"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 transform transition-transform duration-500 group-hover:scale-105"></div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 mix-blend-overlay"></div>
        <div className="relative p-8 z-10 h-full flex flex-col">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500/10 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold">Order Management System</h3>
          </div>
          
          <p className="text-gray-400 mb-6">A comprehensive order management solution with real-time tracking, inventory management, and customer communication tools.</p>
          
          <div className="mt-auto">
            <div className="space-y-3">
              <div className="flex items-center text-sm group-hover:translate-x-2 transition-transform">
                <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                <span className="text-gray-300">Next.js, React, Node.js</span>
              </div>
              <div className="flex items-center text-sm group-hover:translate-x-2 transition-transform delay-75">
                <span className="w-3 h-3 rounded-full bg-emerald-600 mr-2"></span>
                <span className="text-gray-300">Authentication & Authorization</span>
              </div>
              <div className="flex items-center text-sm group-hover:translate-x-2 transition-transform delay-100">
                <span className="w-3 h-3 rounded-full bg-green-400 mr-2"></span>
                <span className="text-gray-300">RESTful API Integration</span>
              </div>
            </div>
            
            <div className="mt-8 overflow-hidden relative">
              <div className="h-1 w-full bg-gray-700"></div>
              <div className="h-1 bg-gradient-to-r from-green-400 to-emerald-600 w-0 group-hover:w-full transition-all duration-700 absolute top-0 left-0"></div>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full opacity-0 group-hover:opacity-10 transform scale-0 group-hover:scale-100 transition-all duration-500"></div>
        </div>
      </div>
      
      {/* Project 2 */}
      <div 
        className="project-card relative overflow-hidden rounded-xl group"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 transform transition-transform duration-500 group-hover:scale-105"></div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 mix-blend-overlay"></div>
        <div className="relative p-8 z-10 h-full flex flex-col">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500/10 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold">E-Commerce Website</h3>
          </div>
          
          <p className="text-gray-400 mb-6">A full-featured e-commerce platform with an intuitive admin panel leveraging Google Sheets as a database and Google Drive for storage.</p>
          
          <div className="mt-auto">
            <div className="space-y-3">
              <div className="flex items-center text-sm group-hover:translate-x-2 transition-transform">
                <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                <span className="text-gray-300">Next.js, Google API</span>
              </div>
              <div className="flex items-center text-sm group-hover:translate-x-2 transition-transform delay-75">
                <span className="w-3 h-3 rounded-full bg-emerald-600 mr-2"></span>
                <span className="text-gray-300">Google Sheets Integration</span>
              </div>
              <div className="flex items-center text-sm group-hover:translate-x-2 transition-transform delay-100">
                <span className="w-3 h-3 rounded-full bg-green-400 mr-2"></span>
                <span className="text-gray-300">Admin Dashboard & Analytics</span>
              </div>
            </div>
            
            <div className="mt-8 overflow-hidden relative">
              <div className="h-1 w-full bg-gray-700"></div>
              <div className="h-1 bg-gradient-to-r from-green-400 to-emerald-600 w-0 group-hover:w-full transition-all duration-700 absolute top-0 left-0"></div>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full opacity-0 group-hover:opacity-10 transform scale-0 group-hover:scale-100 transition-all duration-500"></div>
        </div>
      </div>
      
      {/* Project 3 */}
      <div 
        className="project-card relative overflow-hidden rounded-xl group"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 transform transition-transform duration-500 group-hover:scale-105"></div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 mix-blend-overlay"></div>
        <div className="relative p-8 z-10 h-full flex flex-col">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500/10 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold">Challan Management</h3>
          </div>
          
          <p className="text-gray-400 mb-6">An Android mobile application for efficient challan management, document handling, and payment processing with real-time updates.</p>
          
          <div className="mt-auto">
            <div className="space-y-3">
              <div className="flex items-center text-sm group-hover:translate-x-2 transition-transform">
                <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                <span className="text-gray-300">Android Studio, Kotlin</span>
              </div>
              <div className="flex items-center text-sm group-hover:translate-x-2 transition-transform delay-75">
                <span className="w-3 h-3 rounded-full bg-emerald-600 mr-2"></span>
                <span className="text-gray-300">Firebase Integration</span>
              </div>
              <div className="flex items-center text-sm group-hover:translate-x-2 transition-transform delay-100">
                <span className="w-3 h-3 rounded-full bg-green-400 mr-2"></span>
                <span className="text-gray-300">Document Generation & QR Code</span>
              </div>
            </div>
            
            <div className="mt-8 overflow-hidden relative">
              <div className="h-1 w-full bg-gray-700"></div>
              <div className="h-1 bg-gradient-to-r from-green-400 to-emerald-600 w-0 group-hover:w-full transition-all duration-700 absolute top-0 left-0"></div>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full opacity-0 group-hover:opacity-10 transform scale-0 group-hover:scale-100 transition-all duration-500"></div>
        </div>
      </div>
      
      {/* Project 4 */}
      <div 
        className="project-card relative overflow-hidden rounded-xl group"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 transform transition-transform duration-500 group-hover:scale-105"></div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 mix-blend-overlay"></div>
        <div className="relative p-8 z-10 h-full flex flex-col">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500/10 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold">Employee Task Manager</h3>
          </div>
          
          <p className="text-gray-400 mb-6">A comprehensive task management application for teams with performance tracking, deadline management, and progress visualization.</p>
          
          <div className="mt-auto">
            <div className="space-y-3">
              <div className="flex items-center text-sm group-hover:translate-x-2 transition-transform">
                <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                <span className="text-gray-300">React, Express, MongoDB</span>
              </div>
              <div className="flex items-center text-sm group-hover:translate-x-2 transition-transform delay-75">
                <span className="w-3 h-3 rounded-full bg-emerald-600 mr-2"></span>
                <span className="text-gray-300">Task Assignment & Tracking</span>
              </div>
              <div className="flex items-center text-sm group-hover:translate-x-2 transition-transform delay-100">
                <span className="w-3 h-3 rounded-full bg-green-400 mr-2"></span>
                <span className="text-gray-300">Performance Analytics</span>
              </div>
            </div>
            
            <div className="mt-8 overflow-hidden relative">
              <div className="h-1 w-full bg-gray-700"></div>
              <div className="h-1 bg-gradient-to-r from-green-400 to-emerald-600 w-0 group-hover:w-full transition-all duration-700 absolute top-0 left-0"></div>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full opacity-0 group-hover:opacity-10 transform scale-0 group-hover:scale-100 transition-all duration-500"></div>
        </div>
      </div>
    </div>
  </div>
  
  {/* Add scroll initialization */}
  <script dangerouslySetInnerHTML={{
    __html: `
      document.addEventListener('DOMContentLoaded', function() {
        // Initialize AOS
        AOS.init({
          duration: 800,
          easing: 'ease-out',
          once: true
        });
        
        // Parallax effect on scroll
        window.addEventListener('scroll', function() {
          const cards = document.querySelectorAll('.project-card');
          const scrollY = window.scrollY;
          
          cards.forEach((card, index) => {
            const speed = 0.03 * ((index % 2) + 1);
            card.style.transform = 'translateY(' + (scrollY * speed) + 'px)';
          });
        });
      });
    `
  }}></script>
</section>
        <ContactSection scrollY={scrollY} />
        {/* Footer */}
        <footer className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">© 2025 Fauzan Habib. All rights reserved.</p>
            </div>
            <div>
              <p className="text-gray-400">Made with <span className="text-green-500">♥</span> and Next.js</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
