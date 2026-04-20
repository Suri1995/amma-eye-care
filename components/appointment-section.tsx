"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Amma Eye Care Hospital", "Opp. General Hospital, Main Road", "Medical District - 500001"],
    color: "from-[#F22233] to-[#F22233]/70",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 1234 567 890", "+91 9876 543 210"],
    link: "tel:+911234567890",
    color: "from-[#3B2E8C] to-[#1F5AA6]",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@ammaeyecare.com", "appointments@ammaeyecare.com"],
    link: "mailto:info@ammaeyecare.com",
    color: "from-[#1F5AA6] to-[#3B2E8C]",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 10:30 AM – 8:00 PM", "Sunday: 10:30 AM – 1:00 PM"],
    color: "from-[#F2B035] to-[#F22233]",
  },
]

export function AppointmentSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="bg-white py-16 sm:py-20 md:py-28 pb-32 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section header */}
        <div className="mx-auto mb-10 sm:mb-16 max-w-2xl text-center">
          <span className="inline-block mb-3 sm:mb-4 px-4 py-1.5 rounded-full bg-[#F22233]/10 text-[#F22233] text-xs sm:text-sm font-semibold">
            Contact Us
          </span>
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Get In <span className="text-[#F22233]">Touch</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-600">
            Schedule your appointment or reach out with any questions. We&apos;re here to help!
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          {/* Appointment form */}
          <div className="lg:col-span-3">
            <Card className="overflow-hidden border-0 shadow-2xl shadow-gray-200/50">
              <div className="bg-gradient-to-r from-[#3B2E8C] to-[#1F5AA6] px-5 sm:px-6 py-4 sm:py-5">
                <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Book an Appointment
                </h3>
                <p className="text-white/80 text-xs sm:text-sm mt-1">Fill out the form and we&apos;ll get back to you within 24 hours</p>
              </div>
              <CardContent className="p-5 sm:p-6 md:p-8">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-8 sm:py-12 text-center animate-scale-in">
                    <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 text-green-600" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Thank You!</h4>
                    <p className="text-sm sm:text-base text-gray-600">Your appointment request has been submitted. We&apos;ll contact you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
                        <Input 
                          id="name" 
                          placeholder="Enter your name" 
                          required
                          className="h-11 sm:h-12 border-gray-200 focus:border-[#3B2E8C] focus:ring-[#3B2E8C]" 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium">Phone Number *</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="+91 98765 43210" 
                          required
                          className="h-11 sm:h-12 border-gray-200 focus:border-[#3B2E8C] focus:ring-[#3B2E8C]" 
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your@email.com" 
                        className="h-11 sm:h-12 border-gray-200 focus:border-[#3B2E8C] focus:ring-[#3B2E8C]" 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-sm font-medium">Select Service *</Label>
                      <Select required>
                        <SelectTrigger className="h-11 sm:h-12 border-gray-200 focus:border-[#3B2E8C] focus:ring-[#3B2E8C]">
                          <SelectValue placeholder="Choose a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Eye Examination</SelectItem>
                          <SelectItem value="cataract">Cataract Surgery Consultation</SelectItem>
                          <SelectItem value="lasik">LASIK Consultation</SelectItem>
                          <SelectItem value="glaucoma">Glaucoma Treatment</SelectItem>
                          <SelectItem value="retina">Retina Services</SelectItem>
                          <SelectItem value="pediatric">Pediatric Eye Care</SelectItem>
                          <SelectItem value="dryeye">Dry Eye Treatment</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="date" className="text-sm font-medium">Preferred Date *</Label>
                        <Input 
                          id="date" 
                          type="date" 
                          required
                          className="h-11 sm:h-12 border-gray-200 focus:border-[#3B2E8C] focus:ring-[#3B2E8C]" 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time" className="text-sm font-medium">Preferred Time *</Label>
                        <Select required>
                          <SelectTrigger className="h-11 sm:h-12 border-gray-200 focus:border-[#3B2E8C] focus:ring-[#3B2E8C]">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning (10:30 AM - 2:00 PM)</SelectItem>
                            <SelectItem value="evening">Evening (5:30 PM - 8:00 PM)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button 
                      type="submit"
                      className="w-full h-12 sm:h-14 bg-[#F22233] text-white hover:bg-[#d91e2c] text-sm sm:text-base font-semibold shadow-lg shadow-[#F22233]/25 btn-shine transition-all duration-300 hover:scale-[1.02]"
                    >
                      <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      Submit Appointment Request
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-5">
            {contactInfo.map((info) => (
              <div 
                key={info.title}
                className="flex gap-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-50 to-white p-4 sm:p-5 border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-gray-200 hover:-translate-y-1"
              >
                <div className={`flex h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br ${info.color} shadow-lg`}>
                  <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h4 className="mb-1 font-bold text-gray-900 text-sm sm:text-base">{info.title}</h4>
                  {info.details.map((detail, i) => (
                    info.link ? (
                      <a 
                        key={i}
                        href={info.link}
                        className="block text-xs sm:text-sm text-gray-600 hover:text-[#F22233] transition-colors truncate"
                      >
                        {detail}
                      </a>
                    ) : (
                      <p key={i} className="text-xs sm:text-sm text-gray-600">{detail}</p>
                    )
                  ))}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a 
              href="https://wa.me/911234567890?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-green-500 to-green-600 p-4 sm:p-5 text-white transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-white/20">
                <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base">Chat on WhatsApp</h4>
                <p className="text-xs sm:text-sm text-white/90">Quick response guaranteed</p>
              </div>
            </a>

            {/* Map placeholder */}
            <div className="overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#3B2E8C]/10 to-[#1F5AA6]/10 aspect-[4/3] sm:aspect-video border border-[#3B2E8C]/10">
              <div className="flex h-full items-center justify-center">
                <div className="text-center p-4">
                  <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-[#3B2E8C]/10 flex items-center justify-center mx-auto mb-3">
                    <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-[#3B2E8C]" />
                  </div>
                  <p className="text-gray-700 font-medium text-sm sm:text-base mb-2">Find Us on Map</p>
                  <a 
                    href="https://www.google.com/maps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs sm:text-sm text-[#F22233] hover:underline font-semibold"
                  >
                    Open in Google Maps
                    <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
