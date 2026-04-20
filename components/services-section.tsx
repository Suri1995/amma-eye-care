"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Eye, Scan, Activity, Glasses, Zap, Sparkles, ChevronRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Eye,
    title: "Cataract Surgery",
    description: "Get clear vision restored with advanced phacoemulsification and premium IOL implants.",
    highlight: "Painless & Quick Recovery",
    color: "from-[#F22233] to-[#F22233]/70",
    bgColor: "bg-gradient-to-br from-[#F22233]/5 to-[#F22233]/10",
    borderColor: "border-[#F22233]/20",
  },
  {
    icon: Scan,
    title: "LASIK Surgery",
    description: "Blade-free laser vision correction for freedom from glasses and contacts.",
    highlight: "20/20 Vision Results",
    color: "from-[#3B2E8C] to-[#1F5AA6]",
    bgColor: "bg-gradient-to-br from-[#3B2E8C]/5 to-[#1F5AA6]/10",
    borderColor: "border-[#3B2E8C]/20",
  },
  {
    icon: Activity,
    title: "Glaucoma Treatment",
    description: "Early detection and advanced treatment to protect your vision from silent damage.",
    highlight: "Preserve Your Sight",
    color: "from-[#1F5AA6] to-[#1F5AA6]/70",
    bgColor: "bg-gradient-to-br from-[#1F5AA6]/5 to-[#1F5AA6]/10",
    borderColor: "border-[#1F5AA6]/20",
  },
  {
    icon: Glasses,
    title: "Pediatric Eye Care",
    description: "Specialized care for children including vision screening and squint correction.",
    highlight: "Child-Friendly Environment",
    color: "from-[#F2B035] to-[#F2B035]/70",
    bgColor: "bg-gradient-to-br from-[#F2B035]/5 to-[#F2B035]/10",
    borderColor: "border-[#F2B035]/20",
  },
  {
    icon: Zap,
    title: "Retina Services",
    description: "Expert treatment for diabetic retinopathy, macular degeneration, and retinal issues.",
    highlight: "Advanced Diagnostics",
    color: "from-[#F22233] to-[#3B2E8C]",
    bgColor: "bg-gradient-to-br from-[#F22233]/5 to-[#3B2E8C]/10",
    borderColor: "border-[#F22233]/20",
  },
  {
    icon: Sparkles,
    title: "Dry Eye Treatment",
    description: "Comprehensive solutions for chronic dry eye with personalized care plans.",
    highlight: "Long-lasting Relief",
    color: "from-[#3B2E8C] to-[#F22233]",
    bgColor: "bg-gradient-to-br from-[#3B2E8C]/5 to-[#F22233]/10",
    borderColor: "border-[#3B2E8C]/20",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-16 sm:py-20 md:py-28 pb-24 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section header */}
        <div className="mx-auto mb-10 sm:mb-16 max-w-2xl text-center">
          <span className="inline-block mb-3 sm:mb-4 px-4 py-1.5 rounded-full bg-[#F22233]/10 text-[#F22233] text-xs sm:text-sm font-semibold">
            Our Services
          </span>
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Complete Eye Care for a Healthy,{" "}
            <span className="text-[#F22233]">Clear Vision</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-600">
            Advanced treatments with experienced specialists and affordable pricing for all your eye care needs.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className={`group relative overflow-hidden border ${service.borderColor} ${service.bgColor} shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer hover:-translate-y-2`}
            >
              <CardContent className="p-5 sm:p-6">
                {/* Icon */}
                <div className={`mb-4 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                
                {/* Content */}
                <h3 className="mb-2 text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#F22233] transition-colors">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Highlight badge */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-[#3B2E8C] shadow-sm border border-gray-100">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F22233] animate-pulse" />
                    {service.highlight}
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-300 group-hover:text-[#F22233] group-hover:translate-x-1 transition-all" />
                </div>
              </CardContent>
              
              {/* Animated bottom border */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#F22233] to-[#3B2E8C] transition-all duration-500 group-hover:w-full" />
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-12 text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-[#3B2E8C] text-[#3B2E8C] hover:bg-[#3B2E8C] hover:text-white px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base transition-all duration-300 hover:scale-105"
            asChild
          >
            <Link href="#contact">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
