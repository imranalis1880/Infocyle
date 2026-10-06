import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Award, 
  CheckCircle2, 
  MessageCircle, 
  Mail, 
  ExternalLink 
} from 'lucide-react';
import type { Metadata } from 'next';
import EventPhotoSwitcher, { EventPhoto } from './EventPhotoSwitcher';

export const metadata: Metadata = {
  title: 'Events & Conducted Programs | Infocyle',
  description: 'Official archive and dossiers of launch ceremonies, executive assemblies, and computational education programs conducted under Infocyle.',
  alternates: {
    canonical: '/events',
  },
};

interface EventItem {
  id: string;
  badge: string;
  status: string;
  title: string;
  date: string;
  location: string;
  image?: string | null;
  images?: EventPhoto[];
  icon?: React.ComponentType<{ className?: string }>;
  certificateUrl?: string;
  summary: string;
  highlights: { label: string; value: string }[];
  details: string[];
}

export default function EventsPage() {
  const events: EventItem[] = [
    {
      id: 'ai-ignite',
      badge: 'School AI Camp • Milestone',
      status: 'Conducted Initiative',
      title: 'AI IGNITE: Empowering Young Minds at Lajnathul Muhammadiya HSS',
      date: '5th October 2026',
      location: 'Lajnathul Muhammadiya HSS, Alappuzha',
      images: [
        {
          src: '/images/ai-ignite.jpg',
          alt: 'AI Ignite Interactive Session at Lajnathul Muhammadiya HSS',
          caption: 'Interactive student seminar & AI awareness camp at Lajnathul Muhammadiya HSS',
          fit: 'cover',
        },
        {
          src: '/images/ai-ignite-poster.jpg',
          alt: 'AI Ignite Official Schedule & Program Poster',
          caption: 'Official program schedule, dignitaries, and event inauguration poster',
          fit: 'contain',
        },
      ],
      certificateUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdv08ES6T-6CgOA9gZbgax3R6cvGbN7ZcF_mF1EnmfBD7phPA/viewform?usp=publish-editor',
      summary: 'On October 5, 2026, Infocyle successfully hosted AI IGNITE, an exclusive 1.5-hour Artificial Intelligence Awareness Camp for high school students at Lajnathul Muhammadiya HSS. Driven by our core mission—Igniting Curiosity. Inspiring Tomorrow.—this interactive seminar was designed to demystify the rapidly evolving world of AI and technology.',
      highlights: [
        { label: 'Date & Time', value: 'Monday, 05 October 2026 • 10:30 AM (90 Mins)' },
        { label: 'Venue', value: 'Lajnathul Muhammadiya HSS, Alappuzha' },
        { label: 'Core Mission', value: 'Igniting Curiosity. Inspiring Tomorrow.' },
        { label: 'Target Audience', value: 'High School Students (Future Tech Creators)' },
      ],
      details: [
        'Over the course of 90 minutes, the Infocyle leadership team took students on an eye-opening journey to shift their mindset from being everyday tech consumers to becoming future tech creators.',
        'The session featured live demonstrations of modern AI tools, engaging discussions on how AI is shaping real-world industries, and an introduction to the foundational logic that powers intelligent systems.',
        'AI IGNITE served as a powerful launchpad, inspiring the next generation of innovators in Alappuzha to stop just using technology and start architecting tomorrow.',
      ],
    },
    {
      id: 'launch',
      badge: 'Official Launch • Milestone',
      status: 'Completed Milestone',
      title: 'Infocyle Logo Launch & Unveiling Ceremony',
      date: 'August 2026',
      location: 'Perumbavoor, Kerala',
      image: '/images/infocyle-logo-launch.jpg',
      summary: 'The formal public unveiling of Infocyle Technologies and its shared vision to engineer intelligent, scalable platforms and architect tomorrow.',
      highlights: [
        { label: 'Chief Guest', value: "Shri. Manoj Moothedan — Hon'ble MLA, Perumbavoor" },
        { label: 'Presided By', value: 'Haji KM Pareeeth — Chairman, IGGIS' },
        { label: 'Key Focus', value: 'Technology holding roadmap, regional innovation, and systemic empowerment' },
      ],
      details: [
        'Ceremonial unveiling of the official Infocyle corporate identity and logo mark before community leaders, educators, and technology advocates.',
        'Formal address highlighting the role of indigenous deep-tech architecture in solving systemic enterprise and educational challenges.',
        'Unveiling of the multi-division structure encompassing Vectra Labs, Infocyle Systems, and experimental R&D initiatives.',
      ],
    },
    {
      id: 'leadership',
      badge: 'Founding Team • Assembly',
      status: 'Executive Conclave',
      title: 'Executive Leadership & Strategic Foundation',
      date: 'August 2026',
      location: 'Infocyle Headquarters',
      image: '/images/infocyle-launch.jpg',
      summary: 'The core executive leadership team convening at the inaugural ceremony to formalize our computational thesis and long-term scaling charter.',
      highlights: [
        { label: 'Chief Executive Officer', value: 'Imran Ali S (CEO)' },
        { label: 'Chief Technology Officer', value: 'Sreerag PP (CTO)' },
        { label: 'Chief Operating Officer', value: 'Farhan A (COO)' },
      ],
      details: [
        'Presentation of the core technical thesis: prioritizing zero marginal cost scalability across all portfolio ventures.',
        'Commitment to decoupled, high-performance system architectures and privacy-centric data governance (compliant with DPDP Act, 2023).',
        'Establishment of operational benchmarks for curriculum development, student mentoring, and enterprise systems deployment.',
      ],
    },
  ];

  return (
    <div className="bg-[#f8f7f4] text-[#070d18] font-sans antialiased min-h-screen selection:bg-[#00f0ff] selection:text-[#070d18]">
      
      {/* Background Grid */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-25" 
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(7, 13, 24, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(7, 13, 24, 0.12) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Navigation Bar */}
      <nav className="fixed w-full z-50 bg-[#f8f7f4] border-b-2 border-[#070d18] shadow-[0px_4px_0px_0px_#070d18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 sm:h-24">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 shrink-0 group relative z-10">
              <img 
                src="/logo.png" 
                width={64} 
                height={64} 
                alt="Infocyle Logo"
                className="h-10 sm:h-12 md:h-14 w-auto object-contain border-2 border-[#070d18] bg-white p-1 shadow-[2px_2px_0px_0px_#070d18] sm:shadow-[3px_3px_0px_0px_#070d18] group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-[1px_1px_0px_0px_#070d18] transition-all"
              />
              <span className="text-[#070d18] text-lg sm:text-2xl font-poppins tracking-tight mt-0.5 sm:mt-1">infocyle</span>
            </Link>

            <div className="flex items-center space-x-2 sm:space-x-4 shrink-0">
              <Link 
                href="/#portfolio" 
                className="hidden md:inline-flex items-center border-2 border-[#070d18] bg-white text-[#070d18] hover:bg-[#00f0ff] px-3.5 py-2 font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[3px_3px_0px_0px_#070d18] hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#070d18] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
              >
                Portfolio
              </Link>
              <Link 
                href="/#events" 
                className="inline-flex items-center gap-1.5 sm:gap-2 border-2 border-[#070d18] bg-white text-[#070d18] hover:bg-[#070d18] hover:text-white px-2.5 sm:px-4 py-1.5 sm:py-2 font-black text-[11px] sm:text-sm uppercase tracking-wider shadow-[2px_2px_0px_0px_#070d18] sm:shadow-[3px_3px_0px_0px_#070d18] hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#070d18] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all whitespace-nowrap"
              >
                <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> <span className="hidden sm:inline">Back to </span>Overview
              </Link>
              <Link 
                href="/#contact" 
                className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#00f0ff] text-[#070d18] border-2 border-[#070d18] px-2.5 sm:px-5 py-1.5 sm:py-2 font-black text-[11px] sm:text-sm uppercase tracking-wider shadow-[2px_2px_0px_0px_#070d18] sm:shadow-[3px_3px_0px_0px_#070d18] hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#070d18] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all whitespace-nowrap"
              >
                <span className="sm:hidden">Partner</span>
                <span className="hidden sm:inline">Partner With Us</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Banner */}
      <header className="relative pt-32 pb-16 sm:pt-44 sm:pb-20 border-b-2 border-[#070d18] bg-[#f0efe9]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-block bg-[#00f0ff] text-[#070d18] border-2 border-[#070d18] px-4 py-1.5 font-mono text-xs font-black uppercase tracking-widest mb-6 shadow-[3px_3px_0px_0px_#070d18]">
            [ OFFICIAL ARCHIVES & CONVENTIONS ]
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#070d18] uppercase tracking-tight leading-tight mb-6">
            Conducted Events & Milestones
          </h1>
          <p className="max-w-2xl text-base sm:text-lg md:text-xl text-[#334155] mx-auto font-medium leading-relaxed">
            A verified chronological record of milestone ceremonies, curriculum unveilings, and executive assemblies conducted under Infocyle and its divisions.
          </p>
        </div>
      </header>

      {/* Main Events List */}
      <main className="max-w-6xl mx-auto px-6 lg:px-8 py-20 relative z-10 space-y-20">
        {events.map((evt, idx) => (
          <article 
            key={evt.id} 
            id={evt.id}
            className="bg-white border-2 border-[#070d18] p-6 sm:p-10 md:p-12 shadow-[8px_8px_0px_0px_#070d18] relative scroll-mt-28"
          >
            {/* Top Bar with Number & Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b-2 border-[#070d18] mb-8">
              <div className="flex items-center gap-3">
                <span className="bg-[#070d18] text-[#00f0ff] font-mono font-black text-sm px-3 py-1 border-2 border-[#070d18]">
                  EVENT 0{idx + 1}
                </span>
                <span className="bg-[#00f0ff] text-[#070d18] border-2 border-[#070d18] px-3 py-1 text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_#070d18]">
                  {evt.badge}
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono font-bold text-[#070d18]">
                <span className="flex items-center gap-1.5 bg-[#f0efe9] px-3 py-1 border-2 border-[#070d18]">
                  <Calendar className="w-3.5 h-3.5" /> {evt.date}
                </span>
                <span className="hidden sm:flex items-center gap-1.5 bg-[#f0efe9] px-3 py-1 border-2 border-[#070d18]">
                  <MapPin className="w-3.5 h-3.5" /> {evt.location}
                </span>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Visual or Feature Container */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                {evt.images && evt.images.length > 0 ? (
                  <EventPhotoSwitcher photos={evt.images} />
                ) : evt.image ? (
                  <EventPhotoSwitcher photos={[{ src: evt.image, alt: evt.title }]} />
                ) : (
                  <div className="border-2 border-[#070d18] bg-[#00f0ff]/10 p-8 shadow-[4px_4px_0px_0px_#070d18] flex flex-col items-center justify-center min-h-[260px] text-center">
                    <div className="w-16 h-16 bg-[#00f0ff] border-2 border-[#070d18] flex items-center justify-center mb-4 shadow-[3px_3px_0px_0px_#070d18]">
                      {evt.icon && <evt.icon className="w-8 h-8 text-[#070d18]" />}
                    </div>
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#070d18] bg-white border-2 border-[#070d18] px-3 py-1 shadow-[2px_2px_0px_0px_#070d18]">
                      {evt.status}
                    </span>
                  </div>
                )}

                {/* Highlights Table/Box */}
                <div className="border-2 border-[#070d18] bg-[#f8f7f4] p-5 shadow-[4px_4px_0px_0px_#070d18] space-y-3">
                  <h4 className="text-xs font-mono font-black text-[#070d18] uppercase tracking-wider border-b border-[#070d18]/20 pb-2">
                    Key Highlights & Participants
                  </h4>
                  {evt.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="text-xs space-y-0.5">
                      <span className="font-mono font-bold text-[#070d18] uppercase block text-[11px] text-slate-500">
                        {h.label}:
                      </span>
                      <span className="font-black text-[#070d18] text-xs">
                        {h.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Narrative & Detailed Breakdown */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#070d18] uppercase tracking-tight leading-tight mb-4">
                    {evt.title}
                  </h2>
                  <p className="text-base sm:text-lg text-[#334155] font-medium leading-relaxed mb-6">
                    {evt.summary}
                  </p>

                  <div className="space-y-3 pt-2">
                    <h3 className="text-xs font-mono font-black text-[#070d18] uppercase tracking-widest bg-[#f0efe9] inline-block px-2.5 py-1 border-2 border-[#070d18]">
                      Program Scope & Proceedings
                    </h3>
                    <ul className="space-y-3 pt-2">
                      {evt.details.map((d, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-3 text-sm sm:text-base text-[#334155] font-medium leading-relaxed">
                          <CheckCircle2 className="w-5 h-5 text-[#070d18] shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Row */}
                <div className="pt-6 border-t-2 border-[#070d18] flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                    Verified Infocyle Records
                  </span>
                  <div className="flex flex-wrap items-center gap-3">
                    {evt.certificateUrl && (
                      <a 
                        href={evt.certificateUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 bg-[#00f0ff] text-[#070d18] hover:bg-[#070d18] hover:text-[#00f0ff] px-5 py-2.5 border-2 border-[#070d18] text-xs font-black uppercase tracking-wider shadow-[3px_3px_0px_0px_#070d18] hover:shadow-[5px_5px_0px_0px_#070d18] active:translate-x-0.5 active:translate-y-0.5 transition-all"
                      >
                        <Award className="w-4 h-4 text-[#070d18]" /> Get Digital Participation Certificate <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <a 
                      href="https://chat.whatsapp.com/CkvIkAm2CKyJOmf0mjzKz8?s=cl&p=a&ilr=0" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 bg-[#070d18] text-white hover:bg-[#00f0ff] hover:text-[#070d18] px-5 py-2.5 border-2 border-[#070d18] text-xs font-black uppercase tracking-wider shadow-[3px_3px_0px_0px_#070d18] hover:shadow-[4px_4px_0px_0px_#070d18] transition-all"
                    >
                      Join Event Discussion <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </article>
        ))}

        {/* Future Events / Collaboration Callout */}
        <div className="bg-[#070d18] text-white border-2 border-[#070d18] p-8 sm:p-12 md:p-16 shadow-[8px_8px_0px_0px_#00f0ff] text-center">
          <div className="inline-block bg-[#00f0ff] text-[#070d18] border-2 border-white px-3.5 py-1 font-mono text-xs font-black uppercase tracking-widest mb-6 shadow-[3px_3px_0px_0px_#ffffff]">
            Host An Initiative
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Partner With Infocyle For Your Next Event
          </h2>
          <p className="max-w-2xl text-base sm:text-lg text-slate-300 font-medium mx-auto mb-8 leading-relaxed">
            Interested in organizing a computational logic workshop, K-12 mobile coding lab, or deep-tech symposium at your school or institution? Connect directly with our operations team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:infocyle.tech@gmail.com" 
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 bg-[#00f0ff] text-[#070d18] border-2 border-white font-black hover:bg-white transition-all text-sm uppercase tracking-wider shadow-[4px_4px_0px_0px_#ffffff]"
            >
              <Mail className="w-4 h-4 text-[#070d18]" /> Contact via Email
            </a>
            <a 
              href="https://chat.whatsapp.com/CkvIkAm2CKyJOmf0mjzKz8?s=cl&p=a&ilr=0" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 bg-[#25D366] text-[#070d18] border-2 border-white font-black hover:bg-white transition-all text-sm uppercase tracking-wider shadow-[4px_4px_0px_0px_#ffffff]"
            >
              <MessageCircle className="w-4 h-4 text-[#070d18]" /> WhatsApp Community
            </a>
          </div>
        </div>
      </main>

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
