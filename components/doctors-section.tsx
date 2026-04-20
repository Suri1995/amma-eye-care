"use client"

import { Award, Star, Users, GraduationCap, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const specializations = [
  "Phaco Surgery Expert",
  "Laser Vision Correction", 
  "Pediatric Ophthalmology",
  "Cornea & Refractive Surgery",
  "Glaucoma Management",
  "Retinal Diseases"
]

export function DoctorsSection() {
  return (
    <section id="doctor" className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section header */}
        <div className="mx-auto mb-10 sm:mb-16 max-w-2xl text-center">
          <span className="inline-block mb-3 sm:mb-4 px-4 py-1.5 rounded-full bg-[#3B2E8C]/10 text-[#3B2E8C] text-xs sm:text-sm font-semibold">
            Meet The Expert
          </span>
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Your <span className="text-[#F22233]">Doctor</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-600">
            Meet the experienced specialist behind your perfect vision journey.
          </p>
        </div>

        {/* Doctor card */}
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#F22233]/5 blur-3xl" />
            <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-[#3B2E8C]/5 blur-3xl" />
            
            <div className="grid md:grid-cols-5">
              {/* Image side */}
              <div className="relative md:col-span-2 bg-gradient-to-br from-[#3B2E8C] via-[#3B2E8C] to-[#1F5AA6] p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="relative aspect-square max-w-[200px] sm:max-w-[250px] md:max-w-full mx-auto">
                  {/* Decorative rings */}
                  <div className="absolute inset-0 rounded-full border-2 border-white/10 animate-[spin_20s_linear_infinite]" />
                  <div className="absolute inset-3 sm:inset-4 rounded-full border-2 border-white/20 animate-[spin_15s_linear_infinite_reverse]" />
                  <div className="absolute inset-6 sm:inset-8 rounded-full border-2 border-white/30" />
                  
                  {/* Doctor avatar */}
                  <div className="absolute inset-8 sm:inset-10 md:inset-12 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                    <div className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 rounded-full bg-gradient-to-br from-[#F2B035] to-[#F22233] flex items-center justify-center text-3xl sm:text-4xl md:text-5xl font-bold text-white shadow-2xl">
                      DA
                    </div>
                  </div>
                </div>

                {/* Stats overlay - Mobile: horizontal, Desktop: bottom */}
                <div className="flex justify-center gap-3 mt-6 md:absolute md:bottom-6 md:left-6 md:right-6 md:mt-0">
                  {[
                    { value: "25+", label: "Years" },
                    { value: "50K+", label: "Patients" },
                    { value: "4.9", label: "Rating", hasStar: true },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-lg sm:rounded-xl bg-white/15 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-3 text-center flex-1 md:flex-none">
                      <div className="flex items-center justify-center gap-1 text-lg sm:text-xl md:text-2xl font-bold text-white">
                        {stat.value}
                        {stat.hasStar && <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-[#F2B035] text-[#F2B035]" />}
                      </div>
                      <div className="text-[10px] sm:text-xs text-white/80">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Info side */}
              <div className="md:col-span-3 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="inline-block rounded-full bg-[#F22233]/10 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold text-[#F22233]">
                    Chief Eye Surgeon & Founder
                  </span>
                </div>
                
                <h3 className="mb-2 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                  Dr. Amma Lakshmi
                </h3>
                <p className="mb-4 sm:mb-6 text-base sm:text-lg text-[#3B2E8C] font-medium">
                  MS, DNB (Ophthalmology), FICO (London)
                </p>

                {/* Qualifications */}
                <div className="mb-6 space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-[#3B2E8C]/10">
                      <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-[#3B2E8C]" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">Education</div>
                      <div className="text-xs sm:text-sm text-gray-600">MS Ophthalmology (AIIMS), DNB, FICO Fellow (London)</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-[#F22233]/10">
                      <Award className="h-4 w-4 sm:h-5 sm:w-5 text-[#F22233]" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">Experience</div>
                      <div className="text-xs sm:text-sm text-gray-600">25+ years of excellence in comprehensive eye care</div>
                    </div>
                  </div>
                </div>

                {/* Specializations */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="h-4 w-4 text-[#3B2E8C]" />
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">Specializations</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {specializations.map((skill) => (
                      <span 
                        key={skill}
                        className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium text-gray-700 hover:bg-[#3B2E8C]/10 hover:text-[#3B2E8C] transition-colors"
                      >
                        <CheckCircle className="h-3 w-3 text-[#F22233]" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  className="w-full sm:w-auto bg-[#F22233] text-white hover:bg-[#d91e2c] shadow-lg shadow-[#F22233]/20 h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base"
                  asChild
                >
                  <Link href="#contact">
                    Book Consultation
                    <Award className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
