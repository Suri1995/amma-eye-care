"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "What services does your eye hospital offer?",
    answer: "We provide complete eye care including comprehensive eye checkups, cataract surgery with premium IOL implants, LASIK and laser vision correction, glaucoma treatment, retina services, pediatric eye care, and dry eye treatment. Our facility is equipped with the latest diagnostic and surgical equipment.",
  },
  {
    question: "How often should I visit the eye doctor?",
    answer: "We recommend visiting an eye doctor every 1-2 years for regular checkups. If you have diabetes, high blood pressure, or a family history of eye disease, more frequent visits may be needed. Children should have their first eye exam at 6 months, again at age 3, and before starting school.",
  },
  {
    question: "Is LASIK surgery safe?",
    answer: "Yes, LASIK surgery is one of the safest elective procedures when performed by a qualified surgeon using approved techniques. Our success rate is over 98% with minimal complications. We use the latest blade-free technology for enhanced precision and safety.",
  },
  {
    question: "What is the cost of cataract surgery?",
    answer: "Cataract surgery costs vary depending on the type of lens implant chosen (monofocal, multifocal, or toric). We offer packages starting from affordable rates with transparent pricing. Contact us for a detailed quote based on your specific needs.",
  },
  {
    question: "Is cataract surgery painful?",
    answer: "No, modern cataract surgery is mostly painless due to advanced topical anesthesia and micro-incision techniques. Most patients feel only slight pressure during the procedure. The surgery typically takes only 15-20 minutes and recovery is quick.",
  },
  {
    question: "What should I do in an eye emergency?",
    answer: "In case of severe eye pain, sudden vision loss, chemical exposure, or injury, contact us immediately at our emergency number. Do not rub your eyes or attempt to remove any foreign objects. We provide emergency eye care services and can guide you on immediate steps.",
  },
  {
    question: "Do you accept insurance?",
    answer: "Yes, we accept most major insurance plans including cashless facilities with several providers. Please contact our reception with your insurance details before your appointment, and our team will help verify your coverage and guide you through the process.",
  },
  {
    question: "How can I book an appointment?",
    answer: "You can book an appointment by calling us directly, sending a WhatsApp message, or filling out the online appointment form on this website. We typically confirm appointments within 24 hours and offer flexible scheduling to accommodate your needs.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4">
        {/* Section header */}
        <div className="mb-10 sm:mb-14 text-center">
          <span className="inline-block mb-3 sm:mb-4 px-4 py-1.5 rounded-full bg-[#3B2E8C]/10 text-[#3B2E8C] text-xs sm:text-sm font-semibold">
            FAQs
          </span>
          <h2 className="mb-2 sm:mb-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Frequently Asked <span className="text-[#F22233]">Questions</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 max-w-xl mx-auto">
            Find quick answers to common questions about our services and treatments.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-sm border transition-all duration-300 ${
                openIndex === index 
                  ? "border-[#F22233]/30 shadow-lg shadow-[#F22233]/5" 
                  : "border-gray-100 hover:border-gray-200 hover:shadow-md"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-4 sm:p-6 text-left"
              >
                <span className="flex items-start sm:items-center gap-3 sm:gap-4 pr-4">
                  <span className={`flex h-7 w-7 sm:h-9 sm:w-9 flex-shrink-0 items-center justify-center rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-colors ${
                    openIndex === index 
                      ? "bg-[#F22233] text-white" 
                      : "bg-[#3B2E8C]/10 text-[#3B2E8C]"
                  }`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={`text-sm sm:text-base font-semibold transition-colors ${
                    openIndex === index ? "text-[#F22233]" : "text-gray-900"
                  }`}>
                    {faq.question}
                  </span>
                </span>
                <div className={`flex h-7 w-7 sm:h-9 sm:w-9 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                  openIndex === index 
                    ? "bg-[#F22233] text-white rotate-180" 
                    : "bg-gray-100 text-gray-500"
                }`}>
                  <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-gray-100 px-4 sm:px-6 pb-4 sm:pb-6 pt-3 sm:pt-4">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-10 sm:pl-13">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional help */}
        <div className="mt-10 sm:mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-[#3B2E8C]/5 border border-[#3B2E8C]/10">
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-[#3B2E8C]">
              <HelpCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm sm:text-base font-medium text-gray-900">Still have questions?</p>
              <p className="text-xs sm:text-sm text-gray-600">
                Contact us at{" "}
                <a href="tel:+911234567890" className="text-[#F22233] font-semibold hover:underline">
                  +91 1234 567 890
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
