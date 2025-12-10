"use client"

import { useRef, useEffect, useState } from "react"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Chen",
    handle: "@sarahstyle",
    image: "/young-asian-woman-fashion-influencer-portrait.jpg",
    quote:
      "Pickle completely transformed how I monetize my content. My affiliate revenue increased by 340% in just 3 months!",
    metric: "340%",
    metricLabel: "Revenue increase",
    category: "Fashion",
  },
  {
    name: "Marcus Johnson",
    handle: "@marcusfit",
    image: "/athletic-black-man-fitness-coach-portrait.jpg",
    quote:
      "The shoppable image feature is a game-changer. My followers love being able to shop my looks directly from my photos.",
    metric: "12.4%",
    metricLabel: "Conversion rate",
    category: "Fitness",
  },
  {
    name: "Elena Rodriguez",
    handle: "@elenahome",
    image: "/latina-woman-interior-designer-portrait.jpg",
    quote:
      "Finally, a platform that understands creators. The analytics are beautiful and actually help me make better decisions.",
    metric: "$28K",
    metricLabel: "Monthly revenue",
    category: "Home Decor",
  },
  {
    name: "James Wilson",
    handle: "@jameseats",
    image: "/young-man-food-blogger-chef-portrait.jpg",
    quote:
      "My food content finally converts to real revenue. The product tagging is seamless and my audience loves it.",
    metric: "8.2K",
    metricLabel: "Products sold",
    category: "Food",
  },
  {
    name: "Aria Kim",
    handle: "@ariabeauty",
    image: "/korean-woman-beauty-influencer-portrait.jpg",
    quote: "Switched from three different tools to just Pickle. Everything I need in one beautiful dashboard.",
    metric: "$52K",
    metricLabel: "Monthly revenue",
    category: "Beauty",
  },
  {
    name: "David Park",
    handle: "@davidtech",
    image: "/asian-man-tech-reviewer-portrait.jpg",
    quote: "The affiliate link management alone saved me hours every week. Plus the analytics are incredibly detailed.",
    metric: "215%",
    metricLabel: "ROI increase",
    category: "Tech",
  },
  {
    name: "Maya Patel",
    handle: "@mayatravels",
    image: "/indian-woman-travel-blogger-portrait.jpg",
    quote:
      "My travel content now generates passive income even months after posting. Pickle changed everything for me.",
    metric: "$18K",
    metricLabel: "Passive income",
    category: "Travel",
  },
  {
    name: "Chris Anderson",
    handle: "@chrisoutdoors",
    image: "/man-outdoor-adventure-influencer-portrait.jpg",
    quote:
      "The gear recommendations I share actually convert now. My audience trusts the seamless shopping experience.",
    metric: "4.5K",
    metricLabel: "Monthly sales",
    category: "Outdoor",
  },
  {
    name: "Sophie Laurent",
    handle: "@sophiestyle",
    image: "/french-woman-fashion-blogger-portrait.jpg",
    quote: "From 500 followers to a full-time income. Pickle gave me the tools to turn my passion into a business.",
    metric: "$35K",
    metricLabel: "Monthly revenue",
    category: "Lifestyle",
  },
  {
    name: "Alex Thompson",
    handle: "@alexgaming",
    image: "/young-man-gamer-streamer-portrait.jpg",
    quote: "My gaming setup recommendations finally make money. The integration with my content is seamless.",
    metric: "620%",
    metricLabel: "Revenue growth",
    category: "Gaming",
  },
  {
    name: "Nina Costa",
    handle: "@ninawellness",
    image: "/woman-yoga-wellness-instructor-portrait.jpg",
    quote:
      "Pickle understands wellness creators. The product curation tools help me share only what I truly believe in.",
    metric: "9.8%",
    metricLabel: "Conversion rate",
    category: "Wellness",
  },
  {
    name: "Ryan Mitchell",
    handle: "@ryanbuilds",
    image: "/man-diy-home-improvement-portrait.jpg",
    quote: "Every tool recommendation I make now comes with easy purchase links. My audience loves the convenience.",
    metric: "$22K",
    metricLabel: "Monthly revenue",
    category: "DIY",
  },
]

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer || isPaused) return

    let animationId: number
    let scrollPosition = 0
    const speed = 0.5 // Slow scroll speed

    const scroll = () => {
      scrollPosition += speed
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationId)
  }, [isPaused])

  // Double the testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section id="creators" ref={sectionRef} className="relative py-12 lg:py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-emerald-50/30 to-background" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-10 px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-4 py-2 rounded-full bg-pink-100/80 text-pink-700 text-sm font-medium mb-4">
            Creator Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-foreground text-balance">
            Loved by{" "}
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              10,000+ creators
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            See how creators are building sustainable businesses with Pickle.
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className={`flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing pl-4 sm:pl-8 pr-4 sm:pr-8 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.handle}-${index}`}
                className="group relative flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[340px] p-4 sm:p-6 rounded-2xl bg-background/90 backdrop-blur-sm border border-border hover:border-emerald-300 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1"
              >
                {/* Quote icon */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500" />
                </div>

                {/* Category badge */}
                <span className="inline-block px-2 sm:px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium mb-3 sm:mb-4">
                  {testimonial.category}
                </span>

                {/* Stars */}
                <div className="flex gap-0.5 sm:gap-1 mb-2 sm:mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 line-clamp-3">{`"${testimonial.quote}"`}</p>

                {/* Metric */}
                <div className="mb-4 sm:mb-5 p-2.5 sm:p-3 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100/50">
                  <p className="text-lg sm:text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    {testimonial.metric}
                  </p>
                  <p className="text-xs text-muted-foreground">{testimonial.metricLabel}</p>
                </div>

                {/* Author with circular profile picture */}
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-2 ring-emerald-200 ring-offset-2 ring-offset-background">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Online indicator */}
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-emerald-500 rounded-full border-2 border-background" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-xs sm:text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.handle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 lg:w-20 bg-gradient-to-r from-background to-transparent pointer-events-none z-20" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 lg:w-20 bg-gradient-to-l from-background to-transparent pointer-events-none z-20" />
        </div>
      </div>
    </section>
  )
}
