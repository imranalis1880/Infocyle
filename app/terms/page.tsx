import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsAndConditions() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 px-6 lg:px-8 text-slate-600 font-sans">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
        <Link href="/" className="inline-flex items-center text-teal-600 font-bold hover:text-teal-700 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] mb-6">Terms and Conditions</h1>
        <p className="text-sm text-slate-400 mb-8">Last Updated: August 10, 2026</p>

        <div className="space-y-6 text-sm md:text-base leading-relaxed font-medium">
          <p>
            Welcome to Infocyle and Vectra Labs. By accessing our website, purchasing our courses, or using our AI tools, you agree to be bound by these Terms and Conditions.
          </p>

          <h2 className="text-xl font-bold text-[#0f172a] mt-8">1. Account Registration</h2>
          <p>
            You must provide accurate information during registration. If you are under 18, a parent or legal guardian must create the account and agree to these terms on your behalf.
          </p>

          <h2 className="text-xl font-bold text-[#0f172a] mt-8">2. Intellectual Property Rights</h2>
          <p>
            All content, including but not limited to the 1-Month Foundation Track syllabus, videos, code labs, UI/UX designs, and logic architectures, are the exclusive intellectual property of Infocyle Technologies.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-red-600 bg-red-50 p-4 rounded-xl mt-4">
            <li>You may not reproduce, redistribute, record, or resell any course materials.</li>
            <li>Account sharing is strictly prohibited and will result in immediate termination without refund.</li>
          </ul>

          <h2 className="text-xl font-bold text-[#0f172a] mt-8">3. Pricing & Payments</h2>
          <p>
            The fee for our Foundation Track is ₹499. This is a one-time payment. By providing a payment method, you represent that you are authorized to use it. All payments are securely processed through our authorized payment gateways.
          </p>

          <h2 className="text-xl font-bold text-[#0f172a] mt-8">4. Refund and Cancellation Policy</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Because our curriculum provides immediate access to proprietary digital assets, <strong>all sales are final and non-refundable</strong> once the course is accessed.</li>
            <li>If you experience technical issues accessing the platform, you must contact support within 48 hours of purchase for assistance.</li>
          </ul>

          <h2 className="text-xl font-bold text-[#0f172a] mt-8">5. Use of AI Voice Agent</h2>
          <p>
            The Infocyle AI Representative is provided for informational purposes regarding our portfolio and thesis. You agree not to abuse, spam, or attempt to reverse-engineer the prompt architecture of the AI agent.
          </p>

          <h2 className="text-xl font-bold text-[#0f172a] mt-8">6. Limitation of Liability</h2>
          <p>
            Infocyle and Vectra Labs shall not be held liable for any indirect, incidental, or consequential damages arising from the use of our educational platforms or systems architecture.
          </p>
          
          <h2 className="text-xl font-bold text-[#0f172a] mt-8">7. Contact Us</h2>
          <p>For any queries regarding these terms, contact us at: <strong>infocyle.tech@gmail.com</strong></p>
        </div>
      </div>
    </div>
  );
}