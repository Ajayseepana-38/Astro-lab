'use client'

import { motion } from 'framer-motion'
import { Award, Download, ExternalLink, Linkedin, ShieldCheck, Search, Filter } from 'lucide-react'
import Link from 'next/link'

const certificates = [
  {
    id: 'CERT-8472-X9A',
    course: 'Quantum Mechanics Essentials',
    instructor: 'Dr. Maya Chen',
    date: 'August 14, 2026',
    grade: '98%',
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=900&q=80',
    color: 'from-amber-400 to-yellow-600',
  },
  {
    id: 'CERT-3391-B7C',
    course: 'Astrobiology Foundations',
    instructor: 'Prof. Marcus Chen',
    date: 'June 22, 2026',
    grade: '95%',
    image: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?auto=format&fit=crop&w=900&q=80',
    color: 'from-amber-300 to-orange-500',
  }
]

export default function CertificatesPage() {
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-sm font-medium text-amber-200">
              <Award className="h-4 w-4" />
              <span>Verifiable Credentials</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Your Certificates
            </h1>
            <p className="mt-2 text-slate-400">
              Showcase your mastery. All certificates are cryptographically signed and verifiable.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative flex items-center">
              <Search className="absolute left-3 h-4 w-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search certificates..." 
                className="rounded-xl border border-white/10 bg-white/5 pl-9 pr-4 py-2 text-sm text-white placeholder:text-slate-500 focus:border-amber-400/50 focus:outline-none"
              />
            </div>
            <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10">
              <Filter className="h-4 w-4" />
              Filter
            </button>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/50 p-1 shadow-[0_20px_60px_rgba(2,6,23,0.4)] backdrop-blur-xl hover:border-amber-400/30 transition-all duration-500"
            >
              {/* Premium Background Glow */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/10 blur-[80px]" />
              
              <div className="relative flex flex-col h-full rounded-[28px] border border-white/5 bg-slate-950 p-6 sm:p-8">
                
                {/* Certificate Visual Mockup */}
                <div className="relative mb-8 aspect-[1.414/1] w-full overflow-hidden rounded-[16px] border border-white/10 shadow-2xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-20`} />
                  <img src={cert.image} alt="Certificate Background" className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-overlay" />
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center border-[8px] border-white/5 m-4">
                    <Award className="h-12 w-12 text-amber-400 mb-4" />
                    <p className="text-[10px] uppercase tracking-widest text-amber-200/80 mb-2">Certificate of Completion</p>
                    <h3 className="text-xl font-serif font-bold text-white leading-tight mb-4">{cert.course}</h3>
                    <p className="text-xs text-slate-300">Awarded to Mina Chen</p>
                    
                    <div className="absolute bottom-6 left-8 text-left">
                      <p className="text-[8px] text-slate-400">Date</p>
                      <p className="text-[10px] text-slate-200">{cert.date}</p>
                    </div>
                    <div className="absolute bottom-6 right-8 text-right">
                      <p className="text-[8px] text-slate-400">ID</p>
                      <p className="text-[10px] text-slate-200">{cert.id}</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">{cert.course}</h3>
                      <p className="mt-1 text-sm text-slate-400">Instructor: {cert.instructor}</p>
                    </div>
                    <div className="rounded-lg bg-amber-400/10 px-3 py-1 text-sm font-bold text-amber-400">
                      {cert.grade}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 rounded-2xl bg-white/5 p-4 text-sm">
                    <div>
                      <p className="text-slate-400">Issued On</p>
                      <p className="mt-0.5 font-medium text-slate-200">{cert.date}</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Certificate ID</p>
                      <p className="mt-0.5 font-medium text-slate-200">{cert.id}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200">
                    <Download className="h-4 w-4" />
                    Download PDF
                  </button>
                  <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#0A66C2]/30 bg-[#0A66C2]/10 px-4 py-2.5 text-sm font-semibold text-[#0A66C2] transition hover:bg-[#0A66C2]/20">
                    <Linkedin className="h-4 w-4" />
                    Add to Profile
                  </button>
                  <button className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2.5 text-slate-300 transition hover:bg-white/10 hover:text-white sm:w-12">
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
                
                <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-emerald-400">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Verified by Astro Lab Auth
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
