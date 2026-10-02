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
  const [gridOffset, setGridOffset] = useState(0);

  // Smooth scroll handler for header navigation buttons
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
    }
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  // Parallax glide effect for background grid & scroll state
  useEffect(() => {
    let animationFrameId: number;
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setGridOffset(window.scrollY * 0.15);
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // IntersectionObserver to trigger smooth gliding entrance for grids and boxes
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const elements = document.querySelectorAll('.glide-box');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#f8f7f4] text-[#070d18] font-sans antialiased overflow-x-hidden min-h-screen selection:bg-[#00f0ff] selection:text-[#070d18] pb-24">

      {/* Technical Editorial Grid Background with gliding motion */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-25 will-change-transform" 
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(7, 13, 24, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(7, 13, 24, 0.12) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          transform: `translateY(${gridOffset % 40}px)`
        }}
      ></div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 bg-[#f8f7f4] border-b-2 border-[#070d18] ${scrolled ? 'shadow-[0px_4px_0px_0px_#070d18]' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <Link href="/" className="flex items-center space-x-3 group relative z-10">
              <img 
                src="/logo.png" 
                width={64} 
                height={64} 
                alt="Infocyle Logo"
                className="h-12 md:h-14 w-auto object-contain border-2 border-[#070d18] bg-white p-1 shadow-[3px_3px_0px_0px_#070d18] group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-[1px_1px_0px_0px_#070d18] transition-all"
              />
              <span className="text-[#070d18] text-2xl font-poppins tracking-tight mt-1">infocyle</span>
            </Link>

            <div className="hidden md:flex space-x-8 items-center relative z-10">
              <a 
                href="#thesis" 
                onClick={(e) => scrollToSection(e, 'thesis')}
                className="text-sm font-bold text-[#070d18] hover:text-[#070d18] uppercase tracking-wider px-3 py-1.5 border-2 border-transparent hover:border-[#070d18] hover:bg-[#00f0ff] transition-all cursor-pointer"
              >
                Thesis
              </a>
              <a 
                href="#portfolio" 
                onClick={(e) => scrollToSection(e, 'portfolio')}
                className="text-sm font-bold text-[#070d18] hover:text-[#070d18] uppercase tracking-wider px-3 py-1.5 border-2 border-transparent hover:border-[#070d18] hover:bg-[#00f0ff] transition-all cursor-pointer"
              >
                Portfolio
              </a>
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="text-sm font-black text-[#070d18] bg-[#00f0ff] border-2 border-[#070d18] px-5 py-2.5 shadow-[4px_4px_0px_0px_#070d18] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[6px_6px_0px_0px_#070d18] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#070d18] transition-all uppercase tracking-wider flex items-center gap-2 cursor-pointer"
              >
                Partner With Us <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="flex md:hidden relative z-10">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                className="text-[#070d18] bg-[#00f0ff] border-2 border-[#070d18] p-2 shadow-[3px_3px_0px_0px_#070d18] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#f8f7f4] border-b-2 border-[#070d18] px-6 pt-3 pb-6 space-y-3 shadow-[0px_6px_0px_0px_#070d18]">
            <a 
              href="#thesis" 
              onClick={(e) => scrollToSection(e, 'thesis')}
              className="text-[#070d18] block px-4 py-2.5 border-2 border-[#070d18] bg-white font-bold uppercase tracking-wider shadow-[3px_3px_0px_0px_#070d18]"
            >
              Thesis
            </a>
            <a 
              href="#portfolio" 
              onClick={(e) => scrollToSection(e, 'portfolio')}
              className="text-[#070d18] block px-4 py-2.5 border-2 border-[#070d18] bg-white font-bold uppercase tracking-wider shadow-[3px_3px_0px_0px_#070d18]"
            >
              Portfolio
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="text-[#070d18] block px-4 py-2.5 border-2 border-[#070d18] bg-[#00f0ff] font-black uppercase tracking-wider shadow-[3px_3px_0px_0px_#070d18]"
            >
              Partner With Us
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-36 pb-16 sm:pt-44 sm:pb-24 lg:pt-52 lg:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[85vh]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
          
          {/* Stark Tag */}
          <div className="inline-flex items-center space-x-2.5 bg-white text-[#070d18] border-2 border-[#070d18] px-4 py-1.5 mb-6 sm:mb-8 shadow-[4px_4px_0px_0px_#070d18] max-w-full">
            <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full bg-[#00f0ff] opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 bg-[#00f0ff] border border-[#070d18]"></span>
            </span>
            <span className="text-[11px] sm:text-xs font-mono font-black uppercase tracking-wider sm:tracking-widest text-[#070d18] truncate">Technology Holding Company</span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-[#070d18] tracking-tight leading-[1.08] mb-6 sm:mb-8 break-words uppercase">
            Engineering the <br className="hidden sm:inline" />
            <span className="bg-[#00f0ff] text-[#070d18] border-2 sm:border-[3px] border-[#070d18] px-3 sm:px-5 py-1 inline-block shadow-[4px_4px_0px_0px_#070d18] sm:shadow-[6px_6px_0px_0px_#070d18] mt-2">Future of Systems.</span>
          </h1>
          
          {/* Description */}
          <p className="max-w-2xl text-base sm:text-lg md:text-xl text-[#1e293b] mx-auto mb-8 sm:mb-12 leading-relaxed font-semibold px-2 sm:px-0">
            Infocyle builds and scales intelligent platforms at the intersection of computational logic, education, and full-stack architecture.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full glide-box">
            <a 
              href="https://chat.whatsapp.com/CkvIkAm2CKyJOmf0mjzKz8?s=cl&p=a&ilr=0" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto bg-[#25D366] text-[#070d18] font-black py-4 px-8 border-2 border-[#070d18] shadow-[5px_5px_0px_0px_#070d18] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[7px_7px_0px_0px_#070d18] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all text-sm md:text-base uppercase tracking-wider"
            >
              <MessageCircle className="w-5 h-5 text-[#070d18]" />
              Join WhatsApp Community
            </a>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSen36nAwOcNWqsP8H57Tec2Avb54UJU7HxKVemW6WZXUrBB_g/viewform?usp=header" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto bg-[#00f0ff] text-[#070d18] font-black py-4 px-8 border-2 border-[#070d18] shadow-[5px_5px_0px_0px_#070d18] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[7px_7px_0px_0px_#070d18] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all text-sm md:text-base uppercase tracking-wider"
            >
              <FileText className="w-5 h-5 text-[#070d18]" />
              Pre-Register Now
            </a>
          </div>

          {/* Photo Carousel (Preserved 100% Intact) */}
          <PhotoCarousel />
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#070d18]">
          <a
            href="#thesis"
            onClick={(e) => scrollToSection(e, 'thesis')}
            className="border-2 border-[#070d18] bg-white p-2 shadow-[3px_3px_0px_0px_#070d18] hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#070d18] transition-all cursor-pointer"
            aria-label="Scroll to thesis"
          >
            <ChevronDown className="w-5 h-5 animate-bounce text-[#070d18]" />
          </a>
        </div>
      </section>

      {/* Thesis Section */}
      <section id="thesis" className="py-28 relative z-10 border-t-2 border-b-2 border-[#070d18] bg-[#f0efe9]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-8 md:p-14 border-2 border-[#070d18] shadow-[8px_8px_0px_0px_#070d18] relative overflow-hidden glide-box">
            
            <h2 className="text-xs font-mono font-black text-[#070d18] tracking-widest uppercase mb-5 relative z-10 bg-[#00f0ff] inline-block px-3 py-1 border-2 border-[#070d18] shadow-[3px_3px_0px_0px_#070d18]">Our Thesis</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#070d18] leading-tight mb-6 relative z-10 uppercase tracking-tight">
              Complex problems require elegant, logic-driven architecture.
            </h3>
            <p className="text-[#334155] text-lg md:text-xl leading-relaxed font-medium relative z-10 max-w-3xl">
              We operate as the central nervous system for a focused portfolio of deep-tech and ed-tech initiatives. We engineer fundamental shifts in how systems operate, prioritizing zero marginal cost scalability.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-28 relative z-10 bg-[#f8f7f4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center glide-box">
            <h2 className="text-xs font-mono font-black text-[#070d18] bg-[#00f0ff] border-2 border-[#070d18] px-3.5 py-1 tracking-widest uppercase mb-4 inline-block shadow-[3px_3px_0px_0px_#070d18]">Active & Upcoming Ventures</h2>
            <h3 className="text-3xl md:text-5xl font-black text-[#070d18] uppercase tracking-tight">Our Divisions</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Active Division: Vectra Labs */}
            <div className="group bg-white border-2 border-[#070d18] p-8 relative flex flex-col justify-between shadow-[6px_6px_0px_0px_#070d18] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#070d18] transition-all glide-box glide-delay-1">
              <div className="absolute top-0 right-0 bg-[#00f0ff] text-[#070d18] border-b-2 border-l-2 border-[#070d18] text-[11px] font-black px-3.5 py-1 uppercase tracking-wider">Live</div>
              <div>
                <div className="w-14 h-14 bg-[#00f0ff] border-2 border-[#070d18] flex items-center justify-center mb-8 shadow-[3px_3px_0px_0px_#070d18]">
                  <GraduationCap className="text-[#070d18] w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-[#070d18] mb-1">Vectra Labs</h3>
                <span className="text-xs font-mono font-bold text-[#070d18] tracking-widest uppercase mb-4 block">EdTech Flagship</span>
                <p className="text-[#334155] text-sm leading-relaxed mb-8 font-medium">
                  Democratizing technology education through a 100% mobile-first, syllabus-mapped computational curriculum for K-12 students.
                </p>
              </div>
              <a 
                href="https://chat.whatsapp.com/CkvIkAm2CKyJOmf0mjzKz8?s=cl&p=a&ilr=0" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 w-full bg-[#070d18] text-white hover:bg-[#00f0ff] hover:text-[#070d18] font-black py-3.5 px-4 transition-colors border-2 border-[#070d18] shadow-[3px_3px_0px_0px_#070d18] hover:shadow-[4px_4px_0px_0px_#070d18] text-sm uppercase tracking-wider"
              >
                Explore Vectra <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Coming Soon: Infocyle Systems */}
            <div className="bg-[#edece6] border-2 border-[#070d18] p-8 relative flex flex-col justify-between shadow-[6px_6px_0px_0px_#070d18] min-h-[380px] glide-box glide-delay-2">
              <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                <span className="bg-[#070d18] text-[#00f0ff] font-black px-5 py-2.5 border-2 border-[#070d18] shadow-[4px_4px_0px_0px_#00f0ff] uppercase tracking-widest text-xs font-mono">Coming Soon</span>
              </div>
              <div className="flex-grow flex flex-col opacity-40 select-none grayscale">
                <div className="w-14 h-14 bg-white border-2 border-[#070d18] flex items-center justify-center mb-8 shadow-[2px_2px_0px_0px_#070d18]">
                  <Server className="text-[#070d18] w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-[#070d18] mb-1">Infocyle Systems</h3>
                <span className="text-xs font-mono font-bold text-[#070d18] tracking-widest uppercase mb-4 block">Enterprise Architecture</span>
                <p className="text-[#334155] text-sm leading-relaxed mb-8 font-medium">
                  Designing full-stack infrastructures, resilient databases, and secure data environments for enterprise-scale applications.
                </p>
              </div>
            </div>

            {/* Coming Soon: Infocyle Labs */}
            <div className="bg-[#edece6] border-2 border-[#070d18] p-8 relative flex flex-col justify-between shadow-[6px_6px_0px_0px_#070d18] min-h-[380px] glide-box glide-delay-3">
              <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                <span className="bg-[#070d18] text-[#00f0ff] font-black px-5 py-2.5 border-2 border-[#070d18] shadow-[4px_4px_0px_0px_#00f0ff] uppercase tracking-widest text-xs font-mono">Coming Soon</span>
              </div>
              <div className="flex-grow flex flex-col opacity-40 select-none grayscale">
                <div className="w-14 h-14 bg-white border-2 border-[#070d18] flex items-center justify-center mb-8 shadow-[2px_2px_0px_0px_#070d18]">
                  <Target className="text-[#070d18] w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-[#070d18] mb-1">Infocyle Labs</h3>
                <span className="text-xs font-mono font-bold text-[#070d18] tracking-widest uppercase mb-4 block">Internal R&D</span>
                <p className="text-[#334155] text-sm leading-relaxed mb-8 font-medium">
                  Experimental division focused on AI integration and developing next-generation computational tools to optimize our portfolio.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-28 relative z-10 bg-[#070d18] text-white border-t-2 border-b-2 border-[#070d18]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center glide-box">
          <div className="inline-block bg-[#00f0ff] text-[#070d18] border-2 border-white px-3.5 py-1 font-mono text-xs font-black uppercase tracking-widest mb-6 shadow-[3px_3px_0px_0px_#ffffff]">Direct Communications</div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tight">Partner With Infocyle</h2>
          <p className="text-[#cbd5e1] text-lg md:text-xl mb-12 max-w-xl mx-auto font-medium leading-relaxed">
            Connect with our leadership team for investment opportunities, EdTech partnerships, or systems architecture consulting.
          </p>
          <a 
            href="mailto:infocyle.tech@gmail.com" 
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#00f0ff] text-[#070d18] border-2 border-white font-black hover:bg-white transition-all text-sm md:text-base shadow-[6px_6px_0px_0px_#ffffff] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[8px_8px_0px_0px_#ffffff] active:translate-x-1 active:translate-y-1 active:shadow-none uppercase tracking-wider"
          >
            <Mail className="w-5 h-5 text-[#070d18]" /> infocyle.tech@gmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f0efe9] py-14 border-t-2 border-[#070d18] text-center relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 mb-4">
          <Link href="/" className="flex items-center space-x-3 group">
            <img 
              src="/logo.png" 
              width={64} 
              height={64} 
              alt="Infocyle Footer Logo"
              className="h-12 w-auto object-contain border-2 border-[#070d18] bg-white p-1 shadow-[2px_2px_0px_0px_#070d18] group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none transition-all"
            />
            <span className="text-[#070d18] text-2xl font-poppins tracking-tight mt-1">infocyle</span>
          </Link>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-bold text-[#070d18]">
            <Link className="hover:bg-[#00f0ff] px-2.5 py-1 border border-transparent hover:border-[#070d18] transition-all uppercase tracking-wider text-xs font-mono font-black" href="/privacy">Privacy Policy</Link>
            <span className="hidden sm:block text-[#070d18]">•</span>
            <Link className="hover:bg-[#00f0ff] px-2.5 py-1 border border-transparent hover:border-[#070d18] transition-all uppercase tracking-wider text-xs font-mono font-black" href="/terms">Terms and Conditions</Link>
          </div>
        </div>
        <p className="text-[#475569] text-xs font-mono font-medium mt-6 uppercase tracking-wider">© {new Date().getFullYear()} Infocyle Technologies. All rights reserved.</p>
      </footer>

    </div>
  );
}
