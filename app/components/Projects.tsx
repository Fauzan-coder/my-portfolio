import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white font-['Arial']">
      <div className="container mx-auto px-4 max-w-7xl">
      <h1 className="text-5xl md:text-6xl font-medium mb-12 font-['Anton'] relative">
          <span className="bg-gradient-to-r from-black via-gray-500 to-gray-900 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
            Projects
          </span>
        </h1>
        <p className="text-gray-700 text-lg mb-10 max-w-3xl font-bold">
          I specialize in creating <span className="font-medium">custom software solutions</span> tailored 
          precisely to client requirements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-white border border-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6"> 
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-100 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 font-['Anton']">Order Management System</h3>
            </div>
            
            <p className="text-gray-600 mb-6">A comprehensive order management solution with real-time tracking, inventory management, and customer communication tools.</p>
            
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">Next.js</span>
              <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">React</span>
              <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">Node.js</span>
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="bg-white border border-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-100 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 font-['Anton']">E-Commerce Solutions</h3>
            </div>
            
            <p className="text-gray-600 mb-6">Flexible e-commerce platforms built to suit your budget and requirements, from custom builds to Shopify storefronts.</p>
            
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">Shopify</span>
              <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">Next.js</span>
              <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">Payment Gateways</span>
            </div>
          </div>
          
          {/* Project 3 */}
          <div className="bg-white border border-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-100 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 font-['Anton']">Challan Management</h3>
            </div>
            
            <p className="text-gray-600 mb-6">A mobile application for efficient challan management, document handling, and payment processing with real-time updates.</p>
            
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">Kotlin</span>
              <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">Firebase</span>
              <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">QR Codes</span>
            </div>
          </div>
          
          {/* Project 4 */}
          <div className="bg-white border border-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-100 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 font-['Anton']">Employee Task Manager</h3>
            </div>
            
            <p className="text-gray-600 mb-6">A comprehensive task management application for teams with performance tracking, deadline management, and progress visualization.</p>
            
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">React</span>
              <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">Express</span>
              <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">MongoDB</span>
            </div>
          </div>

          {/* CashSnap - Featured Product */}
          <div className="md:col-span-2 border border-gray-800 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-8 relative">
            <div className="absolute top-4 right-4">
              <span className="text-xs font-medium px-3 py-1 bg-gray-200 text-gray-700 rounded-full">
                Featured Product
              </span>
            </div>
            
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-gray-200 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 font-['Anton']">CashSnap</h3>
            </div>
            
            <p className="text-gray-600 mb-8 max-w-3xl">
              CashSnap is my proprietary finance tracker designed specifically for retailers. It features comprehensive report generation capabilities and an intuitive dashboard to visualize key financial statistics and metrics.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 bg-gray-200 text-gray-700 rounded-full">Financial tracking</span>
                <span className="text-xs px-3 py-1 bg-gray-200 text-gray-700 rounded-full">Sales analytics</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 bg-gray-200 text-gray-700 rounded-full">Report generation</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 bg-gray-200 text-gray-700 rounded-full">Various pricing</span>
                <span className="text-xs px-3 py-1 bg-gray-200 text-gray-700 rounded-full">Customization</span>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-flex items-center px-5 py-3 text-sm font-medium rounded-full bg-white text-black border border-black rounded-full hover:bg-white transition-all duration-300"
            >
              Contact for pricing
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;