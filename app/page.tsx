'use client';

import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';
import { 
  ArrowRight, 
  ChevronDown, 
  Target, 
  Server, 
  GraduationCap, 
  Mail,
  Mic,
  MicOff,
  Bot,
  MessageCircle,
  FileText
} from 'lucide-react';

const workletCode = `
class RecorderProcessor extends AudioWorkletProcessor {
  process(inputs, outputs, parameters) {
    const input = inputs[0];
    if (input.length > 0) {
      this.port.postMessage(input[0]);
    }
    return true;
  }
}
registerProcessor('recorder-processor', RecorderProcessor);
`;

export default function InfocyleLandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const [isLiveActive, setIsLiveActive] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [liveTranscript, setLiveTranscript] = useState("Say 'Hi' to learn about Infocyle...");
  
  const aiSessionPromiseRef = useRef<Promise<any> | null>(null);
  const inputAudioContextRef = useRef<AudioContext | null>(null);
  const outputAudioContextRef = useRef<AudioContext | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const nextStartTimeRef = useRef<number>(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const sourcesRef = useRef<Set<any>>(new Set());
  const aiRef = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const encodeAudio = (bytes: Uint8Array) => {
    let binary = '';
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const decodeAudioData = async (data: Uint8Array, ctx: any, sampleRate: number, numChannels: number) => {
    const dataInt16 = new Int16Array(data.buffer);
    const frameCount = dataInt16.length / numChannels;
    const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
    for (let channel = 0; channel < numChannels; channel++) {
      const channelData = buffer.getChannelData(channel);
      for (let i = 0; i < frameCount; i++) {
        channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
      }
    }
    return buffer;
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const createBlob = (data: any) => {
    const l = data.length;
    const int16 = new Int16Array(l);
    for (let i = 0; i < l; i++) {
      int16[i] = data[i] * 32768;
    }
    return {
      data: encodeAudio(new Uint8Array(int16.buffer)),
      mimeType: 'audio/pcm;rate=16000',
    };
  };

  const toggleLiveSession = async () => {
    if (isLiveActive) {
      if (aiSessionPromiseRef.current) {
         aiSessionPromiseRef.current.then((session: any) => session.close());
         aiSessionPromiseRef.current = null;
      }
      setIsLiveActive(false);
      setLiveTranscript("Say 'Hi' to learn about Infocyle...");
      return;
    }

    setIsConnecting(true);
    try {
      aiRef.current = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY as string }); 

      // Bypass TypeScript window object checks entirely
      const AudioCtx = (window as any).AudioContext || (window as any).webkitAudioContext;
      inputAudioContextRef.current = new AudioCtx({ sampleRate: 16000 });
      outputAudioContextRef.current = new AudioCtx();
      
      const workletBlob = new Blob([workletCode], { type: "application/javascript" });
      const workletUrl = URL.createObjectURL(workletBlob);
      await inputAudioContextRef.current!.audioWorklet.addModule(workletUrl);

      const outputNode = outputAudioContextRef.current!.createGain();
      outputNode.connect(outputAudioContextRef.current!.destination);

      const stream = await navigator.mediaDevices.getUserMedia({
        audio: { channelCount: 1, echoCancellation: true, noiseSuppression: true, autoGainControl: true }
      });

      aiSessionPromiseRef.current = aiRef.current!.live.connect({
        model: 'gemini-3.1-flash-live-preview',
        callbacks: {
          onopen: () => {
            const source = inputAudioContextRef.current!.createMediaStreamSource(stream);
            const recorder = new AudioWorkletNode(inputAudioContextRef.current!, 'recorder-processor');

            recorder.port.onmessage = (event: any) => {
              const pcmBlob = createBlob(event.data);
              if (aiSessionPromiseRef.current) {
                aiSessionPromiseRef.current.then((session: any) => {
                  session.sendRealtimeInput({ audio: pcmBlob });
                });
              }
            };

            source.connect(recorder);
            recorder.connect(inputAudioContextRef.current!.destination);
            setIsConnecting(false);
            setIsLiveActive(true);
            setLiveTranscript("Listening... Ask about our portfolio.");
          },
          onmessage: async (message: any) => {
            if (message.serverContent?.outputTranscription) {
              setLiveTranscript(message.serverContent.outputTranscription.text);
            }

            const base64Audio = message.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
            if (base64Audio) {
              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, outputAudioContextRef.current!.currentTime);
              const binaryString = atob(base64Audio);
              const bytes = new Uint8Array(binaryString.length);
              for (let i = 0; i < binaryString.length; i++) {
                bytes[i] = binaryString.charCodeAt(i);
              }

              const audioBuffer = await decodeAudioData(bytes, outputAudioContextRef.current!, 24000, 1);
              const source = outputAudioContextRef.current!.createBufferSource();
              source.buffer = audioBuffer;
              source.connect(outputNode);
              
              source.addEventListener('ended', () => sourcesRef.current.delete(source));
              source.start(nextStartTimeRef.current);
              nextStartTimeRef.current += audioBuffer.duration;
              sourcesRef.current.add(source);
            }

            if (message.serverContent?.interrupted) {
              for (const source of Array.from(sourcesRef.current)) {
                (source as any).stop();
                sourcesRef.current.delete(source);
              }
              nextStartTimeRef.current = 0;
            }
          },
          onerror: (e: any) => {
            console.error("Live API Error:", e);
            setIsConnecting(false);
          },
          onclose: () => {
            setIsLiveActive(false);
            setIsConnecting(false);
            setLiveTranscript("Session ended.");
          }
        },
        config: {
          responseModalities: ["AUDIO"],
          outputAudioTranscription: {},
          speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Charon' } } },
          systemInstruction: "You are an AI representative for Infocyle, a technology holding company. Keep your answers brief, professional, and focus on our core thesis of logical architecture, and our main venture: Vectra Labs (EdTech). We also have two other divisions coming soon: Infocyle Systems (Enterprise Architecture) and Infocyle Labs (Internal R&D)."
        }
      });

    } catch (err) {
      console.error("Failed to initialize Live API", err);
      setIsConnecting(false);
    }
  };

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
