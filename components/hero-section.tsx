"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Star, Calendar, Shield, Phone, MapPin, MessageCircle, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

function AnimatedCounter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [end, duration, isVisible])

  const display = end >= 1000 ? `${Math.round(count / 1000)}K` : count.toLocaleString()
  return <span ref={ref}>{display}{suffix}</span>
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50/30 to-[#3B2E8C]/5 min-h-[calc(100vh-140px)] flex items-center pb-16 sm:pb-0">

      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full bg-[#F22233]/8 blur-[120px] animate-pulse-slow" />
        <div className="absolute -left-40 bottom-0 h-[600px] w-[600px] rounded-full bg-[#3B2E8C]/8 blur-[120px] animate-pulse-slow [animation-delay:1.5s]" />
        <div className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#1F5AA6]/6 blur-[100px] animate-pulse-slow [animation-delay:3s]" />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.018]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%233B2E8C'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:py-14 md:py-18 lg:py-20 w-full">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">

          {/* ── LEFT: Content ── */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

            {/* Trust badges */}
            <div className="mb-7 flex flex-wrap justify-center lg:justify-start gap-2">
              {[
                { icon: <Star className="h-3.5 w-3.5 fill-[#E8A020] text-[#E8A020]" />, label: "4.9 / 5 rating", cls: "bg-[#FAEEDA] text-[#633806] border-[#FAC775]" },
                { icon: <Calendar className="h-3.5 w-3.5" />, label: "Available today", cls: "bg-[#EAF3DE] text-[#27500A] border-[#C0DD97]" },
                { icon: <Shield className="h-3.5 w-3.5" />, label: "ISO certified", cls: "bg-[#EEEDFE] text-[#3C3489] border-[#CECBF6]" },
              ].map((b, i) => (
                <span
                  key={b.label}
                  className={`flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium animate-fade-in-up ${b.cls}`}
                  style={{ animationDelay: `${(i + 1) * 100}ms` }}
                >
                  {b.icon} {b.label}
                </span>
              ))}
            </div>

            {/* Heading */}
            <h1
              className="mb-5 text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight text-gray-900 leading-[1.08] animate-fade-in-up"
              style={{ animationDelay: "300ms", fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Your vision,{" "}
              <span className="block">
                our{" "}
                <span className="relative inline-block text-[#D41A2B]">
                  expertise
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 10" fill="none" style={{ height: "10px" }}>
                    <path
                      d="M2 7 Q100 1 198 7"
                      stroke="#D41A2B"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                      className="animate-draw"
                    />
                  </svg>
                </span>
              </span>
            </h1>

            <p
              className="mb-7 max-w-md text-base sm:text-lg text-gray-500 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              Experience world-class eye care with advanced treatments, experienced specialists, and compassionate service for the entire family.
            </p>

            {/* Feature checklist */}
            <div
              className="mb-8 grid grid-cols-2 gap-x-6 gap-y-3 w-full max-w-sm animate-fade-in-up"
              style={{ animationDelay: "500ms" }}
            >
              {["Painless procedures", "Quick recovery", "Affordable care", "Latest technology"].map((f) => (
                <div key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-[#D41A2B] flex-shrink-0" />
                  {f}
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-10 animate-fade-in-up"
              style={{ animationDelay: "600ms" }}
            >
              <Button
                size="lg"
                className="relative overflow-hidden bg-[#D41A2B] text-white hover:bg-[#B8151F] shadow-xl shadow-[#D41A2B]/25 px-8 h-13 sm:h-14 text-sm sm:text-base w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#D41A2B]/35 btn-shine"
                asChild
              >
                <Link href="#contact">
                  Book appointment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#2B1E7A] text-[#2B1E7A] hover:bg-[#2B1E7A] hover:text-white h-13 sm:h-14 px-8 text-sm sm:text-base w-full sm:w-auto transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="tel:+911234567890">
                  <Phone className="mr-2 h-4 w-4" />
                  Call now
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div
              className="flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-10 border-t border-gray-200/80 pt-8 w-full animate-fade-in-up"
              style={{ animationDelay: "700ms" }}
            >
              {[
                { value: 25, suffix: "+", label: "Years experience" },
                { value: 50000, suffix: "+", label: "Happy patients" },
                { value: 15, suffix: "+", label: "Treatments" },
              ].map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <div
                    className="text-3xl sm:text-4xl font-bold text-[#2B1E7A] leading-none"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    <AnimatedCounter end={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-xs text-gray-400 font-medium mt-1.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Eye illustration ── */}
          <div className="relative order-first lg:order-last flex items-center justify-center">
            <div className="relative mx-auto w-[280px] sm:w-[340px] md:w-[380px] lg:w-[400px] aspect-square flex items-center justify-center">

              {/* Spinning rings */}
              <div className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-[#2B1E7A]/18 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-dashed border-[#D41A2B]/12 animate-[spin_22s_linear_infinite_reverse]" />
              <div className="absolute inset-8 rounded-full border-[0.5px] border-dashed border-[#1F5AA6]/10 animate-[spin_16s_linear_infinite]" />

              {/* Eye SVG */}
              <div className="absolute inset-0 flex items-center justify-center p-10 sm:p-14 md:p-16">
                <svg
                  viewBox="0 0 300 200"
                  className="w-full drop-shadow-2xl animate-[float_4s_ease-in-out_infinite]"
                  style={{ filter: "drop-shadow(0 12px 32px rgba(43,30,122,0.22))" }}
                >
                  <defs>
                    <radialGradient id="irisGradient" cx="38%" cy="38%" r="62%">
                      <stop offset="0%" stopColor="#1F5AA6" />
                      <stop offset="55%" stopColor="#2B1E7A" />
                      <stop offset="100%" stopColor="#1a1255" />
                    </radialGradient>
                    <radialGradient id="pupilGradient" cx="32%" cy="32%" r="68%">
                      <stop offset="0%" stopColor="#2a2a2a" />
                      <stop offset="100%" stopColor="#050505" />
                    </radialGradient>
                    <clipPath id="eyeClip">
                      <ellipse cx="150" cy="100" rx="142" ry="82" />
                    </clipPath>
                  </defs>
                  <ellipse cx="150" cy="100" rx="142" ry="82" fill="white" stroke="#2B1E7A" strokeWidth="2.5" />
                  <g clipPath="url(#eyeClip)">
                    <circle cx="150" cy="100" r="63" fill="#D4900A" opacity={0.9} />
                    <circle cx="150" cy="100" r="58" fill="url(#irisGradient)" />
                    {[...Array(12)].map((_, i) => (
                      <line
                        key={i}
                        x1="150" y1="42" x2="150" y2="58"
                        stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"
                        transform={`rotate(${i * 30} 150 100)`}
                      />
                    ))}
                    <circle
                      cx="150" cy="100" r="24"
                      fill="url(#pupilGradient)"
                      className="animate-blink origin-center"
                      style={{ transformBox: "fill-box" }}
                    />
                    <circle cx="134" cy="83" r="11" fill="white" opacity={0.92} />
                    <circle cx="162" cy="112" r="5" fill="white" opacity={0.5} />
                  </g>
                  <path d="M8 100 Q30 92 55 78" fill="none" stroke="#D41A2B" strokeWidth="3" strokeLinecap="round" />
                  <path d="M292 100 Q270 92 245 78" fill="none" stroke="#D41A2B" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>

              {/* Side quick-action buttons */}
              <div className="hidden sm:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 flex-col gap-3">
                {[
                  { href: "#contact", bg: "bg-[#EEEDFE]", icon: <Calendar className="h-5 w-5 text-[#3C3489]" /> },
                  { href: "https://wa.me/911234567890", bg: "bg-green-100", icon: <MessageCircle className="h-5 w-5 text-green-700" /> },
                  { href: "#contact", bg: "bg-[#FCEBEB]", icon: <MapPin className="h-5 w-5 text-[#791F1F]" /> },
                ].map((a, i) => (
                  <a
                    key={i}
                    href={a.href}
                    target={a.href.startsWith("https") ? "_blank" : undefined}
                    rel={a.href.startsWith("https") ? "noopener noreferrer" : undefined}
                    className={`flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-2xl ${a.bg} transition-all duration-200 hover:scale-110 hover:shadow-md`}
                  >
                    {a.icon}
                  </a>
                ))}
              </div>

              {/* Floating info cards */}
              <div className="absolute -right-2 sm:-right-6 top-6 sm:top-10 rounded-2xl bg-white border border-gray-100 p-3 sm:p-4 shadow-xl animate-[float-delayed_3.5s_ease-in-out_infinite]">
                <div className="text-[10px] text-gray-400 mb-1">Patient reviews</div>
                <div className="text-sm font-semibold text-gray-800">500+ reviews</div>
                <div className="flex items-center gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-2.5 w-2.5 fill-[#E8A020] text-[#E8A020]" />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Mobile sticky bottom bar ── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur border-t border-gray-200 px-2 py-2 grid grid-cols-4 gap-1 shadow-[0_-4px_24px_rgba(0,0,0,0.08)]">
        {[
          { href: "tel:+911234567890", bg: "bg-[#EEEDFE]", icon: <Phone className="h-5 w-5 text-[#3C3489]" />, label: "Call" },
          { href: "https://wa.me/911234567890", bg: "bg-green-100", icon: <MessageCircle className="h-5 w-5 text-green-700" />, label: "WhatsApp" },
          { href: "#contact", bg: "bg-[#FCEBEB]", icon: <Calendar className="h-5 w-5 text-[#791F1F]" />, label: "Book" },
          { href: "#contact", bg: "bg-[#EEEDFE]", icon: <MapPin className="h-5 w-5 text-[#3C3489]" />, label: "Location" },
        ].map((a) => (
          <a
            key={a.label}
            href={a.href}
            target={a.href.startsWith("https") ? "_blank" : undefined}
            rel={a.href.startsWith("https") ? "noopener noreferrer" : undefined}
            className="flex flex-col items-center gap-1.5 py-1.5 rounded-xl"
          >
            <div className={`h-10 w-10 rounded-full ${a.bg} flex items-center justify-center`}>
              {a.icon}
            </div>
            <span className="text-[10px] text-gray-500 font-medium">{a.label}</span>
          </a>
        ))}
      </div>

    </section>
  )
}