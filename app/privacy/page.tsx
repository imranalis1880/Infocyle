import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 px-6 lg:px-8 text-slate-600 font-sans">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
        <Link href="/" className="inline-flex items-center text-teal-600 font-bold hover:text-teal-700 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] mb-6">Privacy Policy</h1>
        <p className="text-sm text-slate-400 mb-8">Last Updated: August 10, 2026</p>

        <div className="space-y-6 text-sm md:text-base leading-relaxed font-medium">
          <p>
            Infocyle and its educational division, Vectra Labs ("we," "our," or "us"), are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, store, and protect your personal data in compliance with the Digital Personal Data Protection (DPDP) Act, 2023 of India.
          </p>

          <h2 className="text-xl font-bold text-[#0f172a] mt-8">1. Information We Collect</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Personal Identification Data:</strong> Name, email address, phone number, and student grade/class level collected via Google Forms or account registration.</li>
            <li><strong>Voice & Audio Data:</strong> When utilizing the Infocyle AI Representative (powered by Gemini Live API), we process real-time audio inputs.</li>
            <li><strong>Payment Information:</strong> Transaction IDs and billing details (We do not store your full debit/credit card numbers; these are handled securely by our payment gateway).</li>
          </ul>

          <h2 className="text-xl font-bold text-[#0f172a] mt-8">2. How We Use Your Data</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>To provide, maintain, and improve our EdTech curriculum and systems.</li>
            <li>To process your ₹499 Foundation Track payments and generate completion certificates.</li>
            <li>To generate real-time parent progress dashboards.</li>
            <li><strong>AI Voice Processing:</strong> Audio queries are processed strictly for generating conversational responses regarding our portfolio. We do not use your voice data to train our internal AI models.</li>
          </ul>

          <h2 className="text-xl font-bold text-[#0f172a] mt-8">3. Data Sharing & Third-Party Services</h2>
          <p>We do not sell your personal data. We only share necessary data with trusted DPDP-compliant partners, including:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Google (for AI Voice API and Form collection)</li>
            <li>Our secure payment gateway providers</li>
            <li>Cloud hosting providers (e.g., AWS, Supabase) for database and portfolio hosting</li>
          </ul>

          <h2 className="text-xl font-bold text-[#0f172a] mt-8">4. Protection of Minors</h2>
          <p>
            As an EdTech platform catering to K-12 students, we require parental or guardian consent for users under the age of 18. All payments and registrations must be completed by a legal guardian.
          </p>

          <h2 className="text-xl font-bold text-[#0f172a] mt-8">5. Your Rights (DPDP Act)</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Access the personal data we hold about you.</li>
            <li>Request correction of inaccurate data.</li>
            <li>Withdraw your consent and request the deletion of your data (Right to be Forgotten).</li>
          </ul>

          <h2 className="text-xl font-bold text-[#0f172a] mt-8">6. Contact & Grievance Officer</h2>
          <p>If you have any questions or wish to exercise your data rights, please contact our Data Protection Grievance Officer:</p>
          <div className="bg-slate-100 p-4 rounded-xl mt-4">
            <p><strong>Email:</strong> infocyle.tech@gmail.com</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}