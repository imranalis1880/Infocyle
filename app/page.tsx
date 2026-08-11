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
      
      {/* Import Poppins Medium (500) font */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; font-weight: 500; }
      `}} />

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
                src="data:image/png;base64,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" 
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
      <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[85vh]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-teal-50 rounded-full py-1.5 px-4 mb-8 border border-teal-100 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700">Technology Holding Company</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-8">
            Engineering the <br />
            <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">Future of Systems.</span>
          </h1>
          
          <p className="max-w-2xl text-lg md:text-xl text-slate-500 mx-auto mb-12 leading-relaxed font-medium">
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
              <a href="#" className="inline-flex items-center justify-center w-full bg-slate-50 hover:bg-teal-50 text-[#0f172a] hover:text-teal-700 font-bold py-3 rounded-xl transition-colors border border-slate-200 hover:border-teal-200 text-sm">
                Explore Vectra
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
          <div className="flex items-center space-x-2">
            <img 
              src="data:image/png;base64,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" 
                alt="Infocyle Footer Logo"
                className="h-14 md:h-16 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
              />
              <span className="text-[#0f172a] text-2xl tracking-tight font-poppins mt-1">infocyle</span>
            </Link>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-medium text-slate-500">
              <Link href="/privacy" className="hover:text-teal-600 transition-colors">Privacy Policy</Link>
              <span className="hidden sm:block text-slate-300">•</span>
              <Link href="/terms" className="hover:text-teal-600 transition-colors">Terms and Conditions</Link>
            </div>
          </div>
          <p className="text-slate-500 text-xs mt-4 font-medium">© {new Date().getFullYear()} Infocyle Technologies. All rights reserved.</p>
        </footer>
  
      </div>
    );
  }
