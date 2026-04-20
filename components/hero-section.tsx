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
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
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
  
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50/50 to-[#3B2E8C]/5 min-h-[calc(100vh-140px)] flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#F22233]/10 to-transparent blur-3xl animate-pulse-slow" />
        <div className="absolute -left-32 bottom-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-[#3B2E8C]/10 to-transparent blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute left-1/2 top-1/4 h-[300px] w-[300px] rounded-full bg-[#1F5AA6]/5 blur-3xl animate-float-delayed" />
        
        {/* Decorative grid pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B2E8C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:py-12 md:py-16 lg:py-20 w-full">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Trust badges */}
            <div className="mb-6 sm:mb-8 flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
              <div className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#F2B035]/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-[#F2B035] border border-[#F2B035]/20 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-[#F2B035]" />
                <span>4.9 / 5 Rating</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-green-50 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-green-600 border border-green-200 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span>Available Today</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#3B2E8C]/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-[#3B2E8C] border border-[#3B2E8C]/20 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span>ISO Certified</span>
              </div>
            </div>

            {/* Main heading */}
            <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <span className="text-balance">Your Vision, Our </span>
              <span className="relative inline-block">
                <span className="text-gradient-primary">Expertise</span>
                <svg className="absolute -bottom-1 left-0 w-full h-2 sm:h-3" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C50 2 150 2 198 8" stroke="#F22233" strokeWidth="3" strokeLinecap="round" className="animate-draw" />
                </svg>
              </span>
            </h1>

            <p className="mb-6 sm:mb-8 max-w-lg text-base sm:text-lg text-gray-600 text-pretty animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              Experience world-class eye care with advanced treatments, experienced specialists, and compassionate service for the entire family.
            </p>

            {/* Feature list */}
            <div className="mb-6 sm:mb-8 grid grid-cols-2 gap-2 sm:gap-3 w-full max-w-md animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              {["Painless Procedures", "Quick Recovery", "Affordable Care", "Latest Technology"].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#F22233] flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-12 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
              <Button 
                size="lg" 
                className="bg-[#F22233] text-white hover:bg-[#d91e2c] shadow-xl shadow-[#F22233]/25 px-6 sm:px-8 text-sm sm:text-base h-12 sm:h-14 w-full sm:w-auto btn-shine transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="#contact">
                  Book Appointment
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-[#3B2E8C] text-[#3B2E8C] hover:bg-[#3B2E8C] hover:text-white h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base w-full sm:w-auto transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="tel:+911234567890">
                  <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Call Now
                </a>
              </Button>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 lg:gap-10 border-t border-gray-200 pt-6 sm:pt-8 w-full animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
              {[
                { value: 25, suffix: "+", label: "Years Experience" },
                { value: 50000, suffix: "+", label: "Happy Patients" },
                { value: 15, suffix: "+", label: "Treatments" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3B2E8C]">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual - Eye Illustration */}
          <div className="relative order-first lg:order-last">
            <div className="relative mx-auto aspect-square max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg">
              {/* Animated rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute h-full w-full rounded-full border-2 border-dashed border-[#3B2E8C]/20 animate-[spin_30s_linear_infinite]" />
                <div className="absolute h-[85%] w-[85%] rounded-full border-2 border-dashed border-[#F22233]/15 animate-[spin_25s_linear_infinite_reverse]" />
                <div className="absolute h-[70%] w-[70%] rounded-full border border-[#1F5AA6]/10 animate-[spin_20s_linear_infinite]" />
              </div>

              {/* Eye SVG */}
              <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-12 md:p-16">
                <svg viewBox="0 0 200 120" className="w-full drop-shadow-2xl animate-float">
                  {/* Eye outline */}
                  <ellipse cx="100" cy="60" rx="95" ry="55" fill="white" stroke="#3B2E8C" strokeWidth="3"/>
                  
                  {/* Gradients */}
                  <defs>
                    <radialGradient id="irisGradient" cx="40%" cy="40%" r="60%">
                      <stop offset="0%" stopColor="#1F5AA6" />
                      <stop offset="50%" stopColor="#3B2E8C" />
                      <stop offset="100%" stopColor="#2a2066" />
                    </radialGradient>
                    <radialGradient id="pupilGradient" cx="30%" cy="30%" r="60%">
                      <stop offset="0%" stopColor="#333" />
                      <stop offset="100%" stopColor="#0D0D0D" />
                    </radialGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Outer iris ring - gold */}
                  <circle cx="100" cy="60" r="42" fill="none" stroke="#F2B035" strokeWidth="4" filter="url(#glow)"/>
                  
                  {/* Iris */}
                  <circle cx="100" cy="60" r="38" fill="url(#irisGradient)"/>
                  
                  {/* Iris pattern */}
                  {[...Array(12)].map((_, i) => (
                    <line key={i} x1="100" y1="22" x2="100" y2="35" stroke="rgba(255,255,255,0.1)" strokeWidth="1" transform={`rotate(${i * 30} 100 60)`} />
                  ))}
                  
                  {/* Pupil */}
                  <circle cx="100" cy="60" r="16" fill="url(#pupilGradient)" className="animate-blink origin-center" style={{ transformBox: "fill-box" }}/>
                  
                  {/* Highlights */}
                  <circle cx="88" cy="48" r="8" fill="white" opacity="0.9"/>
                  <circle cx="112" cy="70" r="4" fill="white" opacity="0.5"/>
                  
                  {/* Red accent curves */}
                  <path d="M5 60 Q25 55 40 48" fill="none" stroke="#F22233" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M195 60 Q175 55 160 48" fill="none" stroke="#F22233" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>

              {/* Floating quick action buttons - Hidden on mobile, shown on larger screens */}
              <div className="hidden sm:flex absolute -left-2 sm:-left-4 top-1/4 flex-col gap-2 sm:gap-3">
                <a
                  href="#contact"
                  className="flex h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:scale-110"
                >
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-[#3B2E8C] group-hover:text-[#F22233] transition-colors" />
                </a>
                <a
                  href="https://wa.me/911234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-green-500 shadow-lg hover:shadow-xl transition-all duration-300 text-white hover:bg-green-600 hover:scale-110"
                >
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                </a>
                <a
                  href="#contact"
                  className="flex h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-[#F22233] shadow-lg hover:shadow-xl transition-all duration-300 text-white hover:bg-[#d91e2c] hover:scale-110"
                >
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                </a>
              </div>

              {/* Info card - Responsive positioning */}
              <div className="absolute -right-2 sm:-right-4 bottom-1/4 sm:bottom-1/3 rounded-xl sm:rounded-2xl bg-white p-3 sm:p-4 shadow-xl border border-gray-100 animate-float-delayed">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gradient-to-br from-[#3B2E8C] to-[#1F5AA6] flex items-center justify-center text-white text-xs sm:text-sm font-bold">
                    500+
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-900">Reviews</div>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-[#F2B035] text-[#F2B035]" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile quick actions - Fixed at bottom on mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white border-t border-gray-200 p-3 flex justify-around items-center gap-2 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <a href="tel:+911234567890" className="flex flex-col items-center gap-1 text-[#3B2E8C]">
          <div className="h-10 w-10 rounded-full bg-[#3B2E8C]/10 flex items-center justify-center">
            <Phone className="h-5 w-5" />
          </div>
          <span className="text-[10px] font-medium">Call</span>
        </a>
        <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-green-600">
          <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
            <MessageCircle className="h-5 w-5" />
          </div>
          <span className="text-[10px] font-medium">WhatsApp</span>
        </a>
        <Link href="#contact" className="flex flex-col items-center gap-1 text-[#F22233]">
          <div className="h-10 w-10 rounded-full bg-[#F22233]/10 flex items-center justify-center">
            <Calendar className="h-5 w-5" />
          </div>
          <span className="text-[10px] font-medium">Book</span>
        </Link>
        <a href="#contact" className="flex flex-col items-center gap-1 text-[#3B2E8C]">
          <div className="h-10 w-10 rounded-full bg-[#3B2E8C]/10 flex items-center justify-center">
            <MapPin className="h-5 w-5" />
          </div>
          <span className="text-[10px] font-medium">Location</span>
        </a>
      </div>
    </section>
  )
}
