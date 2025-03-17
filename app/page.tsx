// "use client";
// import { useState, useEffect } from 'react';
// import Head from 'next/head';
// import DynamicHeroSection from './components/hero';
// import EnhancedAboutSection from './components/AboutUs';
// import ContactSection from './components/contactSection';

// export default function Home() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="bg-gray-900 text-gray-100 min-h-screen">
//       <Head>
//         <title>Fauzan Habib | Creative Developer</title>
//         <meta name="description" content="Freelance web developer specializing in interactive experiences" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {/* Animated background with mouse interaction */}
//       <div 
//         className="fixed inset-0 pointer-events-none z-0 opacity-30"
//         style={{
//           background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.4) 0%, rgba(5, 50, 35, 0.2) 30%, transparent 70%)`
//         }}
//       />

//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <header className="flex justify-between items-center py-6">
//           <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
//             Fauzan Habib
//           </h1>
//           <nav>
//             <ul className="flex space-x-6">
//               <li><a href="#about" className="hover:text-green-400 transition-colors">About</a></li>
//               <li><a href="#projects" className="hover:text-green-400 transition-colors">Projects</a></li>
//               <li><a href="#contact" className="hover:text-green-400 transition-colors">Contact</a></li>
//             </ul>
//           </nav>
//         </header>

//         <DynamicHeroSection scrollY={scrollY} />
//         <EnhancedAboutSection />

//         {/* Projects section */}
//         <section id="projects" className="py-24 relative overflow-hidden">
//           {/* Background elements for visual interest */}
//           <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl"></div>
//           <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"></div>
          
//           <div className="container mx-auto px-4">
//             <h2 className="text-3xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent inline-block relative">
//               Projects
//               <div className="h-1 w-3/4 bg-gradient-to-r from-green-400 to-emerald-600 absolute bottom-0 left-0"></div>
//             </h2>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
//               {/* Project 1 */}
//               <div 
//                 className="project-card relative overflow-hidden rounded-xl group"
//                 data-aos="fade-up"
//                 data-aos-delay="100"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 transform transition-transform duration-500 group-hover:scale-105"></div>
//                 <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 mix-blend-overlay"></div>
//                 <div className="relative p-8 z-10 h-full flex flex-col">
//                   <div className="flex items-center mb-6">
//                     <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500/10 mr-4">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                       </svg>
//                     </div>
//                     <h3 className="text-2xl font-bold">Order Management System</h3>
//                   </div>
                  
//                   <p className="text-gray-400 mb-6">A comprehensive order management solution with real-time tracking, inventory management, and customer communication tools.</p>
                  
//                   <div className="mt-auto">
//                     <div className="space-y-3">
//                       <div className="flex items-center text-sm group-hover:translate-x-2 transition-transform">
//                         <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
//                         <span className="text-gray-300">Next.js, React, Node.js</span>
//                       </div>
//                       <div className="flex items-center text-sm group-hover:translate-x-2 transition-transform delay-75">
//                         <span className="w-3 h-3 rounded-full bg-emerald-600 mr-2"></span>
//                         <span className="text-gray-300">Authentication & Authorization</span>
//                       </div>
//                       <div className="flex items-center text-sm group-hover:translate-x-2 transition-transform delay-100">
//                         <span className="w-3 h-3 rounded-full bg-green-400 mr-2"></span>
//                         <span className="text-gray-300">RESTful API Integration</span>
//                       </div>
//                     </div>
                    
//                     <div className="mt-8 overflow-hidden relative">
//                       <div className="h-1 w-full bg-gray-700"></div>
//                       <div className="h-1 bg-gradient-to-r from-green-400 to-emerald-600 w-0 group-hover:w-full transition-all duration-700 absolute top-0 left-0"></div>
//                     </div>
//                   </div>
                  
//                   <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full opacity-0 group-hover:opacity-10 transform scale-0 group-hover:scale-100 transition-all duration-500"></div>
//                 </div>
//               </div>
              
//               {/* Project 2 */}
//               <div 
//                 className="project-card relative overflow-hidden rounded-xl group"
//                 data-aos="fade-up"
//                 data-aos-delay="200"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 transform transition-transform duration-500 group-hover:scale-105"></div>
//                 <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 mix-blend-overlay"></div>
//                 <div className="relative p-8 z-10 h-full flex flex-col">
//                   <div className="flex items-center mb-6">
//                     <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500/10 mr-4">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
//                       </svg>
//                     </div>
//                     <h3 className="text-2xl font-bold">E-Commerce Website</h3>
//                   </div>
                  
//                   <p className="text-gray-400 mb-6">A full-featured e-commerce platform with an intuitive admin panel leveraging Google Sheets as a database and Google Drive for storage.</p>
                  
//                   <div className="mt-auto">
//                     <div className="space-y-3">
//                       <div className="flex items-center text-sm group-hover:translate-x-2 transition-transform">
//                         <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
//                         <span className="text-gray-300">Next.js, Google API</span>
//                       </div>
//                       <div className="flex items-center text-sm group-hover:translate-x-2 transition-transform delay-75">
//                         <span className="w-3 h-3 rounded-full bg-emerald-600 mr-2"></span>
//                         <span className="text-gray-300">Google Sheets Integration</span>
//                       </div>
//                       <div className="flex items-center text-sm group-hover:translate-x-2 transition-transform delay-100">
//                         <span className="w-3 h-3 rounded-full bg-green-400 mr-2"></span>
//                         <span className="text-gray-300">Admin Dashboard & Analytics</span>
//                       </div>
//                     </div>
                    
//                     <div className="mt-8 overflow-hidden relative">
//                       <div className="h-1 w-full bg-gray-700"></div>
//                       <div className="h-1 bg-gradient-to-r from-green-400 to-emerald-600 w-0 group-hover:w-full transition-all duration-700 absolute top-0 left-0"></div>
//                     </div>
//                   </div>
                  
//                   <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full opacity-0 group-hover:opacity-10 transform scale-0 group-hover:scale-100 transition-all duration-500"></div>
//                 </div>
//               </div>
              
//               {/* Project 3 */}
//               <div 
//                 className="project-card relative overflow-hidden rounded-xl group"
//                 data-aos="fade-up"
//                 data-aos-delay="300"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 transform transition-transform duration-500 group-hover:scale-105"></div>
//                 <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 mix-blend-overlay"></div>
//                 <div className="relative p-8 z-10 h-full flex flex-col">
//                   <div className="flex items-center mb-6">
//                     <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500/10 mr-4">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                       </svg>
//                     </div>
//                     <h3 className="text-2xl font-bold">Challan Management</h3>
//                   </div>
                  
//                   <p className="text-gray-400 mb-6">An Android mobile application for efficient challan management, document handling, and payment processing with real-time updates.</p>
                  
//                   <div className="mt-auto">
//                     <div className="space-y-3">
//                       <div className="flex items-center text-sm group-hover:translate-x-2 transition-transform">
//                         <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
//                         <span className="text-gray-300">Android Studio, Kotlin</span>
//                       </div>
//                       <div className="flex items-center text-sm group-hover:translate-x-2 transition-transform delay-75">
//                         <span className="w-3 h-3 rounded-full bg-emerald-600 mr-2"></span>
//                         <span className="text-gray-300">Firebase Integration</span>
//                       </div>
//                       <div className="flex items-center text-sm group-hover:translate-x-2 transition-transform delay-100">
//                         <span className="w-3 h-3 rounded-full bg-green-400 mr-2"></span>
//                         <span className="text-gray-300">Document Generation & QR Code</span>
//                       </div>
//                     </div>
                    
//                     <div className="mt-8 overflow-hidden relative">
//                       <div className="h-1 w-full bg-gray-700"></div>
//                       <div className="h-1 bg-gradient-to-r from-green-400 to-emerald-600 w-0 group-hover:w-full transition-all duration-700 absolute top-0 left-0"></div>
//                     </div>
//                   </div>
                  
//                   <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full opacity-0 group-hover:opacity-10 transform scale-0 group-hover:scale-100 transition-all duration-500"></div>
//                 </div>
//               </div>
              
//               {/* Project 4 */}
//               <div 
//                 className="project-card relative overflow-hidden rounded-xl group"
//                 data-aos="fade-up"
//                 data-aos-delay="400"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 transform transition-transform duration-500 group-hover:scale-105"></div>
//                 <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 mix-blend-overlay"></div>
//                 <div className="relative p-8 z-10 h-full flex flex-col">
//                   <div className="flex items-center mb-6">
//                     <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500/10 mr-4">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                       </svg>
//                     </div>
//                     <h3 className="text-2xl font-bold">Employee Task Manager</h3>
//                   </div>
                  
//                   <p className="text-gray-400 mb-6">A comprehensive task management application for teams with performance tracking, deadline management, and progress visualization.</p>
                  
//                   <div className="mt-auto">
//                     <div className="space-y-3">
//                       <div className="flex items-center text-sm group-hover:translate-x-2 transition-transform">
//                         <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
//                         <span className="text-gray-300">React, Express, MongoDB</span>
//                       </div>
//                       <div className="flex items-center text-sm group-hover:translate-x-2 transition-transform delay-75">
//                         <span className="w-3 h-3 rounded-full bg-emerald-600 mr-2"></span>
//                         <span className="text-gray-300">Task Assignment & Tracking</span>
//                       </div>
//                       <div className="flex items-center text-sm group-hover:translate-x-2 transition-transform delay-100">
//                         <span className="w-3 h-3 rounded-full bg-green-400 mr-2"></span>
//                         <span className="text-gray-300">Performance Analytics</span>
//                       </div>
//                     </div>
                    
//                     <div className="mt-8 overflow-hidden relative">
//                       <div className="h-1 w-full bg-gray-700"></div>
//                       <div className="h-1 bg-gradient-to-r from-green-400 to-emerald-600 w-0 group-hover:w-full transition-all duration-700 absolute top-0 left-0"></div>
//                     </div>
//                   </div>
                  
//                   <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full opacity-0 group-hover:opacity-10 transform scale-0 group-hover:scale-100 transition-all duration-500"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <ContactSection />

//         {/* Footer */}
//         <footer className="py-8 border-t border-gray-800">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="mb-4 md:mb-0">
//               <p className="text-gray-400">© 2025 Fauzan Habib. All rights reserved.</p>
//             </div>
//             <div>
//               <p className="text-gray-400">Made with <span className="text-green-500">♥</span> and Next.js</p>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import DynamicHeroSection from './components/hero';
import EnhancedAboutSection from './components/AboutUs';
import ContactSection from './components/contactSection';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [cursorSize, setCursorSize] = useState(30);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
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

  // Custom cursor effects


  interface HandleLinkHover {
    (isHover: boolean): void;
  }

  const handleLinkHover: HandleLinkHover = (isHover) => {
    setIsHovering(isHover);
    setCursorSize(isHover ? 50 : 30);
  };

  return (
    <div className="bg-black max-w-full text-gray-100 min-h-screen">
      <Head>
        <title>Fauzan Habib | Creative Developer</title>
        <meta name="description" content="Freelance web developer specializing in interactive experiences" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Custom cursor */}
      <div
        className="fixed rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          width: `${cursorSize}px`,
          height: `${cursorSize}px`,
          backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.3)',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.3s, height 0.3s, background-color 0.3s',
        }}
      />

      {/* Animated background with mouse interaction */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-40"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(138, 43, 226, 0.5) 0%, rgba(80, 20, 140, 0.3) 30%, transparent 70%)`
        }}
      />

      {/* Animated mesh background */}
      <div className="fixed inset-0 z-0 opacity-20 bg-[url('/mesh-purple.svg')] bg-cover pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.05}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <header className="flex justify-between items-center py-6 relative">
          <h1 
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent"
            onMouseEnter={() => handleLinkHover(true)}
            onMouseLeave={() => handleLinkHover(false)}
          >
            Fauzan Habib
          </h1>
          <nav>
            <ul className="flex space-x-8">
              <li>
                <a 
                  href="#about" 
                  className="hover:text-purple-400 transition-colors duration-300 relative group"
                  onMouseEnter={() => handleLinkHover(true)}
                  onMouseLeave={() => handleLinkHover(false)}
                >
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="hover:text-purple-400 transition-colors duration-300 relative group"
                  onMouseEnter={() => handleLinkHover(true)}
                  onMouseLeave={() => handleLinkHover(false)}
                >
                  Projects
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="hover:text-purple-400 transition-colors duration-300 relative group"
                  onMouseEnter={() => handleLinkHover(true)}
                  onMouseLeave={() => handleLinkHover(false)}
                >
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <DynamicHeroSection scrollY={scrollY} />
        <EnhancedAboutSection />

        {/* Projects section */}
        <section id="projects" className="py-24 relative overflow-hidden">
          {/* Background elements for visual interest */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4">
            <h2 
              className="text-3xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent inline-block relative"
              data-aos="fade-up"
            >
              Projects
              <div className="h-1 w-3/4 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600 absolute bottom-0 left-0"></div>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Project 1 */}
              <div 
                className="project-card relative overflow-hidden rounded-xl group"
                data-aos="fade-up"
                data-aos-delay="100"
                onMouseEnter={() => handleLinkHover(true)}
                onMouseLeave={() => handleLinkHover(false)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black transform transition-transform duration-700 group-hover:scale-110"></div>
                <div className="absolute inset-0 bg-[url('/noise-pattern.svg')] opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-purple-900/30 to-fuchsia-900/30"></div>
                <div className="relative p-8 z-10 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-500/10 mr-4 backdrop-blur-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Order Management System</h3>
                  </div>
                  
                  <p className="text-gray-400 mb-6 transform transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">A comprehensive order management solution with real-time tracking, inventory management, and customer communication tools.</p>
                  
                  <div className="mt-auto">
                    <div className="space-y-3">
                      <div className="flex items-center text-sm group-hover:translate-x-2 transition-transform duration-500">
                        <span className="w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
                        <span className="text-gray-300">Next.js, React, Node.js</span>
                      </div>
                      <div className="flex items-center text-sm group-hover:translate-x-2 transition-transform duration-500 delay-75">
                        <span className="w-3 h-3 rounded-full bg-fuchsia-600 mr-2"></span>
                        <span className="text-gray-300">Authentication & Authorization</span>
                      </div>
                      <div className="flex items-center text-sm group-hover:translate-x-2 transition-transform duration-500 delay-100">
                        <span className="w-3 h-3 rounded-full bg-purple-400 mr-2"></span>
                        <span className="text-gray-300">RESTful API Integration</span>
                      </div>
                    </div>
                    
                    <div className="mt-8 overflow-hidden relative">
                      <div className="h-1 w-full bg-gray-800"></div>
                      <div className="h-1 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600 w-0 group-hover:w-full transition-all duration-700 absolute top-0 left-0"></div>
                    </div>
                  </div>
                  
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-fuchsia-600 rounded-full opacity-0 group-hover:opacity-20 transform scale-0 group-hover:scale-100 transition-all duration-700"></div>
                </div>
              </div>
              
              {/* Project 2 */}
              <div 
                className="project-card relative overflow-hidden rounded-xl group"
                data-aos="fade-up"
                data-aos-delay="200"
                onMouseEnter={() => handleLinkHover(true)}
                onMouseLeave={() => handleLinkHover(false)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black transform transition-transform duration-700 group-hover:scale-110"></div>
                <div className="absolute inset-0 bg-[url('/noise-pattern.svg')] opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-purple-900/30 to-fuchsia-900/30"></div>
                <div className="relative p-8 z-10 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-500/10 mr-4 backdrop-blur-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">E-Commerce Website</h3>
                  </div>
                  
                  <p className="text-gray-400 mb-6 transform transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">A full-featured e-commerce platform with an intuitive admin panel leveraging Google Sheets as a database and Google Drive for storage.</p>
                  
                  <div className="mt-auto">
                    <div className="space-y-3">
                      <div className="flex items-center text-sm group-hover:translate-x-2 transition-transform duration-500">
                        <span className="w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
                        <span className="text-gray-300">Next.js, Google API</span>
                      </div>
                      <div className="flex items-center text-sm group-hover:translate-x-2 transition-transform duration-500 delay-75">
                        <span className="w-3 h-3 rounded-full bg-fuchsia-600 mr-2"></span>
                        <span className="text-gray-300">Google Sheets Integration</span>
                      </div>
                      <div className="flex items-center text-sm group-hover:translate-x-2 transition-transform duration-500 delay-100">
                        <span className="w-3 h-3 rounded-full bg-purple-400 mr-2"></span>
                        <span className="text-gray-300">Admin Dashboard & Analytics</span>
                      </div>
                    </div>
                    
                    <div className="mt-8 overflow-hidden relative">
                      <div className="h-1 w-full bg-gray-800"></div>
                      <div className="h-1 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600 w-0 group-hover:w-full transition-all duration-700 absolute top-0 left-0"></div>
                    </div>
                  </div>
                  
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-fuchsia-600 rounded-full opacity-0 group-hover:opacity-20 transform scale-0 group-hover:scale-100 transition-all duration-700"></div></div>
              </div>
              
              {/* Project 3 */}
              <div 
                className="project-card relative overflow-hidden rounded-xl group"
                data-aos="fade-up"
                data-aos-delay="300"
                onMouseEnter={() => handleLinkHover(true)}
                onMouseLeave={() => handleLinkHover(false)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black transform transition-transform duration-700 group-hover:scale-110"></div>
                <div className="absolute inset-0 bg-[url('/noise-pattern.svg')] opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-purple-900/30 to-fuchsia-900/30"></div>
                <div className="relative p-8 z-10 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-500/10 mr-4 backdrop-blur-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Challan Management</h3>
                  </div>
                  
                  <p className="text-gray-400 mb-6 transform transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">An Android mobile application for efficient challan management, document handling, and payment processing with real-time updates.</p>
                  
                  <div className="mt-auto">
                    <div className="space-y-3">
                      <div className="flex items-center text-sm group-hover:translate-x-2 transition-transform duration-500">
                        <span className="w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
                        <span className="text-gray-300">Android Studio, Kotlin</span>
                      </div>
                      <div className="flex items-center text-sm group-hover:translate-x-2 transition-transform duration-500 delay-75">
                        <span className="w-3 h-3 rounded-full bg-fuchsia-600 mr-2"></span>
                        <span className="text-gray-300">Firebase Integration</span>
                      </div>
                      <div className="flex items-center text-sm group-hover:translate-x-2 transition-transform duration-500 delay-100">
                        <span className="w-3 h-3 rounded-full bg-purple-400 mr-2"></span>
                        <span className="text-gray-300">Document Generation & QR Code</span>
                      </div>
                    </div>
                    
                    <div className="mt-8 overflow-hidden relative">
                      <div className="h-1 w-full bg-gray-800"></div>
                      <div className="h-1 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600 w-0 group-hover:w-full transition-all duration-700 absolute top-0 left-0"></div>
                    </div>
                  </div>
                  
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-fuchsia-600 rounded-full opacity-0 group-hover:opacity-20 transform scale-0 group-hover:scale-100 transition-all duration-700"></div>
                </div>
              </div>
              
              {/* Project 4 */}
              <div 
                className="project-card relative overflow-hidden rounded-xl group"
                data-aos="fade-up"
                data-aos-delay="400"
                onMouseEnter={() => handleLinkHover(true)}
                onMouseLeave={() => handleLinkHover(false)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black transform transition-transform duration-700 group-hover:scale-110"></div>
                <div className="absolute inset-0 bg-[url('/noise-pattern.svg')] opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-purple-900/30 to-fuchsia-900/30"></div>
                <div className="relative p-8 z-10 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-500/10 mr-4 backdrop-blur-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Employee Task Manager</h3>
                  </div>
                  
                  <p className="text-gray-400 mb-6 transform transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">A comprehensive task management application for teams with performance tracking, deadline management, and progress visualization.</p>
                  
                  <div className="mt-auto">
                    <div className="space-y-3">
                      <div className="flex items-center text-sm group-hover:translate-x-2 transition-transform duration-500">
                        <span className="w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
                        <span className="text-gray-300">React, Express, MongoDB</span>
                      </div>
                      <div className="flex items-center text-sm group-hover:translate-x-2 transition-transform duration-500 delay-75">
                        <span className="w-3 h-3 rounded-full bg-fuchsia-600 mr-2"></span>
                        <span className="text-gray-300">Task Assignment & Tracking</span>
                      </div>
                      <div className="flex items-center text-sm group-hover:translate-x-2 transition-transform duration-500 delay-100">
                        <span className="w-3 h-3 rounded-full bg-purple-400 mr-2"></span>
                        <span className="text-gray-300">Performance Analytics</span>
                      </div>
                    </div>
                    
                    <div className="mt-8 overflow-hidden relative">
                      <div className="h-1 w-full bg-gray-800"></div>
                      <div className="h-1 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600 w-0 group-hover:w-full transition-all duration-700 absolute top-0 left-0"></div>
                    </div>
                  </div>
                  
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-fuchsia-600 rounded-full opacity-0 group-hover:opacity-20 transform scale-0 group-hover:scale-100 transition-all duration-700"></div>
                </div>
              </div>
            </div>

            {/* View More Button */}
            <div className="flex justify-center mt-16">
              <a 
                href="#" 
                className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden rounded-lg bg-black border border-purple-400 transition-all duration-500"
                onMouseEnter={() => handleLinkHover(true)}
                onMouseLeave={() => handleLinkHover(false)}
              >
                <div className="absolute w-0 h-0 transition-all duration-500 ease-out bg-purple-600 rounded-full group-hover:w-full group-hover:h-56"></div>
                <span className="relative text-purple-400 group-hover:text-white transition-colors duration-300 flex items-center">
                  View More Projects
                  <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </section>

        <ContactSection />

        {/* Footer */}
        <footer className="py-12 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-gray-400">© 2025 Fauzan Habib. All rights reserved.</p>
            </div>
            
              <div className="mt-6 md:mt-0">
                <p className="text-gray-400">Made with <span className="text-purple-500">♥</span> and Next.js</p>
              </div>
            </div>
          </footer>
        </div>
  
        Floating scroll indicator
        <div 
          className="fixed bottom-8 right-8 z-40 flex flex-col items-center space-y-3"
          style={{
            opacity: scrollY > 300 ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}
        >
          <a 
            href="#" 
            className="w-12 h-12 bg-black bg-opacity-70 backdrop-blur-md rounded-full flex items-center justify-center border border-purple-400 hover:bg-purple-800 transition-colors duration-300"
            onMouseEnter={() => handleLinkHover(true)}
            onMouseLeave={() => handleLinkHover(false)}
          >
            <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
            </svg>
          </a>
        </div>
  
        {/* Animated particles */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div 
            className="absolute w-4 h-4 rounded-full bg-purple-600 opacity-20"
            style={{
              top: '20%',
              left: '10%',
              animation: 'float 15s infinite ease-in-out',
              animationDelay: '0s'
            }}
          ></div>
          <div 
            className="absolute w-6 h-6 rounded-full bg-fuchsia-500 opacity-15"
            style={{
              top: '60%',
              left: '85%',
              animation: 'float 18s infinite ease-in-out',
              animationDelay: '2s'
            }}
          ></div>
          <div 
            className="absolute w-5 h-5 rounded-full bg-purple-400 opacity-10"
            style={{
              top: '80%',
              left: '30%',
              animation: 'float 20s infinite ease-in-out',
              animationDelay: '4s'
            }}
          ></div>
          <div 
            className="absolute w-3 h-3 rounded-full bg-fuchsia-600 opacity-20"
            style={{
              top: '30%',
              left: '70%',
              animation: 'float 12s infinite ease-in-out',
              animationDelay: '1s'
            }}
          ></div>
        </div>
  
        <style jsx global>{`
          @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(50px, 50px) rotate(90deg); }
            50% { transform: translate(0, 100px) rotate(180deg); }
            75% { transform: translate(-50px, 50px) rotate(270deg); }
          }
          
          html {
            scroll-behavior: smooth;
          }
          
          body {
            cursor: none;
          }
          
          a, button {
            cursor: none;
          }
        `}</style>
      </div>
    );
  }