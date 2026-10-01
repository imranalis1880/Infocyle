import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';
import React from 'react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-24 text-center">
      <div className="inline-flex items-center space-x-2 bg-teal-50 rounded-full py-1 px-4 mb-6 border border-teal-100">
        <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Error 404</span>
      </div>
      <h1 className="text-5xl sm:text-7xl font-extrabold text-[#0f172a] tracking-tight mb-4">
        Page Not Found
      </h1>
      <p className="max-w-md text-base sm:text-lg text-slate-500 mb-8 font-medium">
        The page you are looking for does not exist or has been relocated to another address.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-[#0f172a] hover:bg-slate-800 text-white font-bold py-3.5 px-8 rounded-full transition-all text-sm shadow-xl shadow-slate-900/10"
        >
          <Home className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
