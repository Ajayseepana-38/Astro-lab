'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Crown,
  Download,
  Globe2,
  Heart,
  PlayCircle,
  Share2,
  Sparkles,
  Star,
  Trophy,
  Users,
} from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { PublicNavbar } from '@/components/navbar/PublicNavbar'
import { PublicFooter } from '@/components/footer/PublicFooter'

const curriculum = [
  {
    title: 'Foundation & Mindset',
    lessons: 6,
    duration: '42 min',
    progress: 100,
    items: [
      { title: 'Welcome to the course', duration: '8 min', preview: true },
      { title: 'Scientific thinking framework', duration: '10 min', preview: true },
      { title: 'How to use your learning lab', duration: '7 min', preview: false },
    ],
  },
  {
    title: 'Core Concepts',
    lessons: 8,
    duration: '1h 12m',
    progress: 68,
    items: [
      { title: 'Core principles unpacked', duration: '12 min', preview: true },
      { title: 'Hands-on examples', duration: '15 min', preview: false },
      { title: 'Interactive reflection', duration: '9 min', preview: false },
    ],
  },
  {
    title: 'Applied Projects',
    lessons: 7,
    duration: '1h 05m',
    progress: 24,
    items: [
      { title: 'Build your first experiment', duration: '16 min', preview: true },
      { title: 'Project review', duration: '11 min', preview: false },
    ],
  },
]

const outcomes = [
  'Understand complex scientific concepts with clarity',
  'Apply concepts through hands-on projects',
  'Track your progress with structured milestones',
  'Earn a certificate and join a premium learning community',
]

const reviews = [
  {
    name: 'Mina R.',
    role: 'Verified learner',
    quote: 'This course made difficult ideas feel intuitive and inspiring.',
    rating: 5,
  },
  {
    name: 'Jordan T.',
    role: 'Verified learner',
    quote: 'The curriculum felt polished, practical, and genuinely rewarding.',
    rating: 5,
  },
]

const faqs = [
  {
    question: 'Is the course suitable for beginners?',
    answer: 'Yes. The lessons begin with fundamentals and gradually introduce advanced concepts.',
  },
  {
    question: 'Do I get lifetime access?',
    answer: 'Yes. Once you enroll, you retain access to the course and all future updates.',
  },
  {
    question: 'Is there a certificate?',
    answer: 'Yes. A certificate is included upon course completion.',
  },
]

const relatedCourses = [
  { title: 'Astrobiology Foundations', duration: '3 weeks', price: '$59' },
  { title: 'AI for Scientific Research', duration: '7 weeks', price: '$119' },
  { title: 'Biochemistry Lab', duration: '8 weeks', price: '$129' },
]

export default function CourseDetailsPage() {
  const [openModule, setOpenModule] = useState<number | null>(0)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),_transparent_26%),linear-gradient(135deg,_#020617_0%,_#0f172a_45%,_#111827_100%)] text-slate-50">
      <PublicNavbar />
      
      <main className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-24 sm:px-6 lg:px-8">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-500/20 via-slate-900/70 to-violet-500/20 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.45)] backdrop-blur-xl"
        >
          <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">Physics</span>
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">Intermediate</span>
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">Certificate Included</span>
              </div>
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Quantum Mechanics Essentials</h1>
                <p className="max-w-2xl text-sm leading-8 text-slate-300 sm:text-[15px]">
                  Build a deep, intuitive understanding of quantum mechanics through premium lessons, guided projects, and elegant visual explanations.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
                <span className="flex items-center gap-1"><Star className="h-4 w-4 text-amber-300" /> 4.9</span>
                <span className="flex items-center gap-1"><Users className="h-4 w-4 text-cyan-300" /> 12.4k learners</span>
                <span className="flex items-center gap-1"><Globe2 className="h-4 w-4 text-cyan-300" /> English</span>
                <span className="flex items-center gap-1"><Clock3 className="h-4 w-4 text-cyan-300" /> 6 weeks</span>
              </div>
              <div className="flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80" alt="Instructor" className="h-12 w-12 rounded-2xl object-cover" />
                <div>
                  <p className="font-semibold text-white">Dr. Maya Chen</p>
                  <p className="text-sm text-slate-400">Quantum Research Lead • Stanford</p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_20px_52px_rgba(2,6,23,0.38)] backdrop-blur-2xl">
              <div className="mb-4 overflow-hidden rounded-[22px] border border-white/10">
                <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80" alt="Course preview" className="h-44 w-full object-cover" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-semibold text-white">$89</p>
                    <p className="text-sm text-slate-400">Save 20% with annual plan</p>
                  </div>
                  <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">Best Seller</div>
                </div>
                <Link href="/checkout/c1" className="flex w-full items-center justify-center gap-2 rounded-[16px] bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 px-3 py-3 text-sm font-semibold text-white transition hover:scale-[1.01]">
                  Buy Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <div className="flex gap-2">
                  <button className="flex flex-1 items-center justify-center gap-2 rounded-[16px] border border-white/10 bg-white/10 px-3 py-2.5 text-sm text-slate-200"> <Heart className="h-4 w-4" /> Wishlist</button>
                  <button className="flex flex-1 items-center justify-center gap-2 rounded-[16px] border border-white/10 bg-white/10 px-3 py-2.5 text-sm text-slate-200"> <Share2 className="h-4 w-4" /> Share</button>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <section className="rounded-[28px] border border-white/10 bg-white/10 p-5 backdrop-blur-2xl">
              <div className="mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-cyan-300" />
                <h2 className="text-xl font-semibold text-white">Learning outcomes</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {outcomes.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-[18px] border border-white/10 bg-slate-950/55 p-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-white/10 p-5 backdrop-blur-2xl">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">Course curriculum</h2>
                <span className="text-sm text-slate-400">21 lessons</span>
              </div>
              <div className="space-y-3">
                {curriculum.map((module, index) => {
                  const isOpen = openModule === index
                  return (
                    <div key={module.title} className="overflow-hidden rounded-[18px] border border-white/10 bg-slate-950/55">
                      <button
                        onClick={() => setOpenModule(isOpen ? null : index)}
                        className="flex w-full items-center justify-between px-4 py-4 text-left"
                      >
                        <div>
                          <p className="font-semibold text-white">{module.title}</p>
                          <p className="mt-1 text-sm text-slate-400">{module.lessons} lessons · {module.duration}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-slate-300">{module.progress}%</span>
                          <ChevronDown className={cn('h-4 w-4 text-slate-400 transition', isOpen && 'rotate-180')} />
                        </div>
                      </button>
                      {isOpen ? (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="border-t border-white/10 px-4 py-3">
                          {module.items.map((item) => (
                            <div key={item.title} className="flex items-center justify-between rounded-[14px] border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-slate-300">
                              <span className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-cyan-300" /> {item.title}</span>
                              <div className="flex items-center gap-2">
                                {item.preview ? <span className="rounded-full bg-cyan-400/10 px-2 py-1 text-xs text-cyan-200">Preview</span> : null}
                                <span>{item.duration}</span>
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      ) : null}
                    </div>
                  )
                })}
              </div>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-white/10 p-5 backdrop-blur-2xl">
              <div className="mb-4 flex items-center gap-2">
                <PlayCircle className="h-5 w-5 text-cyan-300" />
                <h2 className="text-xl font-semibold text-white">Course preview</h2>
              </div>
              <div className="overflow-hidden rounded-[24px] border border-white/10 bg-slate-950/60 p-4">
                <div className="relative overflow-hidden rounded-[20px]">
                  <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80" alt="Course trailer" className="h-64 w-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-950/30">
                    <button className="rounded-full border border-white/20 bg-white/10 p-4 backdrop-blur-xl">
                      <PlayCircle className="h-10 w-10 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-white/10 p-5 backdrop-blur-2xl">
              <div className="mb-4 flex items-center gap-2">
                <Trophy className="h-5 w-5 text-cyan-300" />
                <h2 className="text-xl font-semibold text-white">About the instructor</h2>
              </div>
              <div className="flex flex-col gap-4 rounded-[24px] border border-white/10 bg-slate-950/55 p-4 md:flex-row md:items-start">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80" alt="Instructor" className="h-24 w-24 rounded-[20px] object-cover" />
                <div className="space-y-3">
                  <div>
                    <p className="text-lg font-semibold text-white">Dr. Maya Chen</p>
                    <p className="text-sm text-slate-400">Quantum Research Lead • Stanford University</p>
                  </div>
                  <p className="text-sm leading-7 text-slate-300">
                    Dr. Chen has spent over 12 years translating advanced physics into clear, practical lessons for ambitious learners.
                  </p>
                  <div className="flex flex-wrap gap-2 text-sm text-slate-300">
                    <span className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1">12 years experience</span>
                    <span className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1">Quantum Physics</span>
                    <span className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1">12 courses</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-white/10 p-5 backdrop-blur-2xl">
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 text-cyan-300" />
                <h2 className="text-xl font-semibold text-white">Reviews</h2>
              </div>
              <div className="rounded-[22px] border border-white/10 bg-slate-950/55 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-semibold text-white">4.9/5</p>
                    <p className="text-sm text-slate-400">Based on 1,240 reviews</p>
                  </div>
                  <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">Verified learners</div>
                </div>
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.name} className="rounded-[18px] border border-white/10 bg-white/5 p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-white">{review.name}</p>
                          <p className="text-sm text-slate-400">{review.role}</p>
                        </div>
                        <div className="flex items-center gap-1 text-amber-300">
                          {Array.from({ length: review.rating }).map((_, index) => <Star key={index} className="h-4 w-4" />)}
                        </div>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-slate-300">“{review.quote}”</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-white/10 p-5 backdrop-blur-2xl">
              <div className="mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-cyan-300" />
                <h2 className="text-xl font-semibold text-white">FAQ</h2>
              </div>
              <div className="space-y-3">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index
                  return (
                    <div key={faq.question} className="overflow-hidden rounded-[18px] border border-white/10 bg-slate-950/55">
                      <button onClick={() => setOpenFaq(isOpen ? null : index)} className="flex w-full items-center justify-between px-4 py-4 text-left">
                        <span className="font-medium text-white">{faq.question}</span>
                        <ChevronDown className={cn('h-4 w-4 text-slate-400 transition', isOpen && 'rotate-180')} />
                      </button>
                      {isOpen ? <div className="border-t border-white/10 px-4 py-3 text-sm leading-7 text-slate-300">{faq.answer}</div> : null}
                    </div>
                  )
                })}
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="sticky top-6 rounded-[28px] border border-white/10 bg-white/10 p-5 backdrop-blur-2xl">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">Enroll now</h2>
                <Crown className="h-5 w-5 text-cyan-300" />
              </div>
              <div className="space-y-4">
                <div className="rounded-[20px] border border-white/10 bg-slate-950/55 p-4">
                  <p className="text-3xl font-semibold text-white">$89</p>
                  <p className="mt-1 text-sm text-slate-400">Lifetime access</p>
                </div>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-300" /> Certificate included</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-300" /> Downloadable resources</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-300" /> Community access</div>
                </div>
                <Link href="/checkout/c1" className="flex w-full items-center justify-center gap-2 rounded-[16px] bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 px-3 py-3 text-sm font-semibold text-white transition hover:scale-[1.01]">
                  Buy Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            <section className="rounded-[28px] border border-white/10 bg-white/10 p-5 backdrop-blur-2xl">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">Related courses</h2>
                <button className="text-sm text-cyan-300">See all</button>
              </div>
              <div className="space-y-3">
                {relatedCourses.map((course) => (
                  <div key={course.title} className="rounded-[18px] border border-white/10 bg-slate-950/55 p-3">
                    <p className="font-semibold text-white">{course.title}</p>
                    <div className="mt-2 flex items-center justify-between text-sm text-slate-400">
                      <span>{course.duration}</span>
                      <span className="font-semibold text-white">{course.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </main>

      <PublicFooter />
    </div>
  )
}
