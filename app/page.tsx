'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ChevronDown, 
  Target, 
  Server, 
  GraduationCap, 
  Mail,
  MessageCircle,
  FileText
} from 'lucide-react';
import PhotoCarousel from './components/PhotoCarousel';

export default function InfocyleLandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white text-slate-600 font-sans antialiased overflow-x-hidden min-h-screen selection:bg-teal-500 selection:text-white pb-24">
      

      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40" style={{
        backgroundImage: 'linear-gradient(to right, rgba(20, 184, 166, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(20, 184, 166, 0.08) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>
      <div className="fixed top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-teal-400/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <Link href="/" className="flex items-center space-x-3 group relative z-10">
              <img 
                src="/logo.png" width={64} height={64} 
                alt="Infocyle Logo"
                className="h-14 md:h-16 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
              />
              <span className="text-[#0f172a] text-2xl tracking-tight font-poppins mt-1">infocyle</span>
            </Link>

            <div className="hidden md:flex space-x-10 items-center relative z-10">
              <a href="#thesis" className="text-sm font-semibold text-slate-500 hover:text-[#0f172a] transition-colors tracking-wide">Thesis</a>
              <a href="#portfolio" className="text-sm font-semibold text-slate-500 hover:text-[#0f172a] transition-colors tracking-wide">Portfolio</a>
              <a href="#contact" className="text-sm font-bold text-teal-600 hover:text-teal-700 transition-colors tracking-wide flex items-center gap-2">
                Partner With Us <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="flex md:hidden relative z-10">
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-500 hover:text-[#0f172a] p-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
            <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-2 shadow-lg">
                <a href="#thesis" className="text-slate-600 block px-3 py-2 rounded-md font-semibold" onClick={() => setMobileMenuOpen(false)}>Thesis</a>
                <a href="#portfolio" className="text-slate-600 block px-3 py-2 rounded-md font-semibold" onClick={() => setMobileMenuOpen(false)}>Portfolio</a>
                <a href="#contact" className="text-teal-600 block px-3 py-2 rounded-md font-bold" onClick={() => setMobileMenuOpen(false)}>Partner With Us</a>
            </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-56 lg:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[85vh]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
          <div className="inline-flex items-center space-x-2 bg-teal-50 rounded-full py-1.5 px-3.5 sm:px-4 mb-6 sm:mb-8 border border-teal-100 shadow-sm max-w-full">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-teal-700 truncate">Technology Holding Company</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#0f172a] tracking-tight leading-[1.15] mb-6 sm:mb-8 break-words">
            Engineering the <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent inline-block">Future of Systems.</span>
          </h1>
          
          <p className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-500 mx-auto mb-8 sm:mb-12 leading-relaxed font-medium px-2 sm:px-0">
            Infocyle builds and scales intelligent platforms at the intersection of computational logic, education, and full-stack architecture.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <a href="https://chat.whatsapp.com/CkvIkAm2CKyJOmf0mjzKz8?s=cl&p=a&ilr=0" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full sm:w-auto bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-3.5 px-8 rounded-full transition-all text-sm md:text-base shadow-lg shadow-[#25D366]/30 transform hover:-translate-y-0.5">
              <MessageCircle className="w-5 h-5" />
              Join WhatsApp Community
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSen36nAwOcNWqsP8H57Tec2Avb54UJU7HxKVemW6WZXUrBB_g/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full sm:w-auto bg-[#0f172a] hover:bg-slate-800 text-white font-bold py-3.5 px-8 rounded-full transition-all text-sm md:text-base shadow-xl shadow-slate-900/20 transform hover:-translate-y-0.5">
              <FileText className="w-5 h-5" />
              Pre-Register Now
            </a>
          </div>

          {/* Photo Carousel */}
          <PhotoCarousel />
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400">
            <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </section>

      {/* Thesis Section */}
      <section id="thesis" className="py-24 relative z-10 border-t border-slate-100 bg-slate-50/50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 blur-[80px] rounded-full"></div>
              
              <h2 className="text-xs font-bold text-teal-600 tracking-widest uppercase mb-4 relative z-10">Our Thesis</h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] leading-tight mb-6 relative z-10">
                Complex problems require elegant, logic-driven architecture.
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed font-medium relative z-10 max-w-3xl">
                We operate as the central nervous system for a focused portfolio of deep-tech and ed-tech initiatives. We engineer fundamental shifts in how systems operate, prioritizing zero marginal cost scalability.
              </p>
            </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-xs font-bold text-teal-600 tracking-widest uppercase mb-4">Active & Upcoming Ventures</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#0f172a]">Our Divisions</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Active Division: Vectra Labs */}
            <div className="group bg-white hover:bg-slate-50 border border-slate-200 hover:border-teal-500/50 rounded-3xl p-8 transition-all duration-300 relative overflow-hidden shadow-xl shadow-slate-200/50 hover:shadow-teal-500/10">
              <div className="absolute top-0 right-0 bg-teal-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg shadow-sm uppercase tracking-wider">Live</div>
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-8 border border-teal-100">
                  <GraduationCap className="text-teal-600 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0f172a] mb-2">Vectra Labs</h3>
              <span className="text-xs font-bold text-teal-600 tracking-widest uppercase mb-4 block">EdTech Flagship</span>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
                Democratizing technology education through a 100% mobile-first, syllabus-mapped computational curriculum for K-12 students.
              </p>
              <a href="https://chat.whatsapp.com/CkvIkAm2CKyJOmf0mjzKz8?s=cl&p=a&ilr=0" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full bg-slate-50 hover:bg-teal-50 text-[#0f172a] hover:text-teal-700 font-bold py-3 rounded-xl transition-colors border border-slate-200 hover:border-teal-200 text-sm">
                Explore Vectra <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Coming Soon: Infocyle Systems */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 relative flex flex-col overflow-hidden min-h-[350px]">
              <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                  <span className="bg-white/90 text-slate-800 font-bold px-5 py-2 rounded-full border border-slate-200 shadow-md uppercase tracking-widest text-xs backdrop-blur-sm">Coming Soon</span>
              </div>
              <div className="flex-grow flex flex-col blur-md select-none grayscale-[30%] opacity-40">
                  <div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center mb-8">
                      <Server className="text-slate-500 w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Infocyle Systems</h3>
                  <span className="text-xs font-bold text-slate-500 tracking-widest uppercase mb-4 block">Enterprise Architecture</span>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">
                    Designing full-stack infrastructures, resilient databases, and secure data environments for enterprise-scale applications.
                  </p>
              </div>
            </div>

            {/* Coming Soon: Infocyle Labs */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 relative flex flex-col overflow-hidden min-h-[350px]">
              <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                  <span className="bg-white/90 text-slate-800 font-bold px-5 py-2 rounded-full border border-slate-200 shadow-md uppercase tracking-widest text-xs backdrop-blur-sm">Coming Soon</span>
              </div>
              <div className="flex-grow flex flex-col blur-md select-none grayscale-[30%] opacity-40">
                  <div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center mb-8">
                      <Target className="text-slate-500 w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Infocyle Labs</h3>
                  <span className="text-xs font-bold text-slate-500 tracking-widest uppercase mb-4 block">Internal R&D</span>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">
                    Experimental division focused on AI integration and developing next-generation computational tools to optimize our portfolio.
                  </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative z-10 bg-[#0f172a]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Partner With Infocyle</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto font-medium">
            Connect with our leadership team for investment opportunities, EdTech partnerships, or systems architecture consulting.
          </p>
          <a href="mailto:infocyle.tech@gmail.com" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-teal-500 text-white rounded-full font-bold hover:bg-teal-400 transition-all text-sm md:text-base shadow-lg shadow-teal-500/20">
            <Mail className="w-5 h-5" /> infocyle.tech@gmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-10 border-t border-slate-200 text-center relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 mb-4">
          <Link href="/" className="flex items-center space-x-2">
            <img 
              src="/logo.png" width={64} height={64} 
                alt="Infocyle Footer Logo"
                className="h-14 md:h-16 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
              />
              <span className="text-[#0f172a] text-2xl tracking-tight font-poppins mt-1">infocyle</span>
            </Link>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-medium text-slate-500">
              <Link className="hover:text-teal-600 transition-colors" href="/privacy">Privacy Policy</Link>
              <span className="hidden sm:block text-slate-300">•</span>
              <Link className="hover:text-teal-600 transition-colors" href="/terms">Terms and Conditions</Link>
            </div>
          </div>
          <p className="text-slate-500 text-xs mt-4 font-medium">© {new Date().getFullYear()} Infocyle Technologies. All rights reserved.</p>
        </footer>
  
      </div>
    );
  }
