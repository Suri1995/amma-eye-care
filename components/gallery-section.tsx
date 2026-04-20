"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    title: "Modern Reception",
    description: "Welcoming and comfortable reception area",
    color: "from-[#3B2E8C] to-[#1F5AA6]",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    id: 2,
    title: "Diagnostic Center",
    description: "State-of-the-art eye examination equipment",
    color: "from-[#1F5AA6] to-[#3B2E8C]",
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
  },
  {
    id: 3,
    title: "Advanced Equipment",
    description: "Latest laser and imaging technology",
    color: "from-[#F22233] to-[#3B2E8C]",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
  },
  {
    id: 4,
    title: "Operation Theatre",
    description: "Ultra-modern sterile surgery suite",
    color: "from-[#3B2E8C] to-[#F22233]",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    id: 5,
    title: "Patient Lounge",
    description: "Comfortable waiting area with amenities",
    color: "from-[#F2B035] to-[#F22233]",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    id: 6,
    title: "Consultation Room",
    description: "Private and comfortable consultation spaces",
    color: "from-[#1F5AA6] to-[#F2B035]",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  return (
    <section id="gallery" className="bg-white py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section header */}
        <div className="mx-auto mb-10 sm:mb-16 max-w-2xl text-center">
          <span className="inline-block mb-3 sm:mb-4 px-4 py-1.5 rounded-full bg-[#1F5AA6]/10 text-[#1F5AA6] text-xs sm:text-sm font-semibold">
            Our Facility
          </span>
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Clinic <span className="text-[#F22233]">Gallery</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-600">
            Explore our advanced, hygienic, and patient-friendly facility designed for your comfort.
          </p>
        </div>

        {/* Gallery grid - Responsive */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(index)}
              className={`group relative cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-500 hover:shadow-2xl ${
                index === 0 
                  ? "col-span-2 row-span-2 aspect-square" 
                  : index === 3 
                    ? "col-span-2 sm:col-span-1 lg:col-span-2 aspect-video sm:aspect-square" 
                    : "aspect-square"
              }`}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${image.color} transition-transform duration-700 group-hover:scale-110`} />
              
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{ 
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '16px 16px'
                }} />
              </div>

              {/* Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <svg className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={image.icon} />
                  </svg>
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Title overlay */}
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <div className="rounded-lg sm:rounded-xl bg-white/95 backdrop-blur-sm p-2.5 sm:p-3 shadow-lg">
                  <h3 className="font-bold text-gray-900 text-xs sm:text-sm">{image.title}</h3>
                  <p className="text-[10px] sm:text-xs text-gray-600 line-clamp-1">{image.description}</p>
                </div>
              </div>

              {/* Expand icon */}
              <div className="absolute top-2 sm:top-3 right-2 sm:right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                  <Maximize2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-700" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button 
            className="absolute top-4 right-4 z-10 rounded-full bg-white/10 hover:bg-white/20 p-2.5 sm:p-3 text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Navigation arrows */}
          <button 
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/10 hover:bg-white/20 p-2.5 sm:p-3 text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button 
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/10 hover:bg-white/20 p-2.5 sm:p-3 text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Image content */}
          <div 
            className="max-w-4xl w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`w-full h-full bg-gradient-to-br ${galleryImages[selectedImage].color} flex items-center justify-center relative`}>
              {/* Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{ 
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '20px 20px'
                }} />
              </div>
              
              {/* Icon */}
              <div className="h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <svg className="h-12 w-12 sm:h-16 sm:w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={galleryImages[selectedImage].icon} />
                </svg>
              </div>

              {/* Info bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{galleryImages[selectedImage].title}</h3>
                <p className="text-white/80 text-sm sm:text-base">{galleryImages[selectedImage].description}</p>
              </div>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={(e) => { e.stopPropagation(); setSelectedImage(index); }}
                className={`h-2 rounded-full transition-all ${
                  index === selectedImage ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
