import Link from 'next/link';
import { Home } from 'lucide-react';
import React from 'react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f8f7f4] text-[#070d18] flex flex-col items-center justify-center px-6 py-24 text-center font-sans">
      <div className="inline-flex items-center space-x-2 bg-[#00f0ff] text-[#070d18] border-2 border-[#070d18] py-1 px-4 mb-6 shadow-[3px_3px_0px_0px_#070d18]">
        <span className="text-xs font-mono font-black uppercase tracking-wider">Error 404</span>
      </div>
      <h1 className="text-5xl sm:text-7xl font-black text-[#070d18] tracking-tight mb-4 uppercase">
        Page Not Found
      </h1>
      <p className="max-w-md text-base sm:text-lg text-[#334155] mb-8 font-medium">
        The page you are looking for does not exist or has been relocated to another address.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-[#070d18] text-white hover:bg-[#00f0ff] hover:text-[#070d18] font-black py-4 px-8 border-2 border-[#070d18] shadow-[5px_5px_0px_0px_#070d18] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[7px_7px_0px_0px_#070d18] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all text-sm uppercase tracking-wider"
        >
          <Home className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
