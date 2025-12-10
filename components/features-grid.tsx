"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"

const features = [
  {
    title: "Curated Boards",
    description: "Organize your favorite products into beautiful, shoppable collections that convert.",
    image: "/features/curated-boards.jpg",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
  },
  {
    title: "Shoppable Image Tagging",
    description: "Tag products directly on your images. Let your audience shop your looks instantly.",
    image: "/features/image-tagging.jpg",
    gradient: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-50 to-purple-50",
  },
  {
    title: "Creator Analytics",
    description: "Track clicks, conversions, and revenue in real-time with beautiful visual dashboards.",
    image: "/features/analytics.jpg",
    gradient: "from-pink-500 to-rose-500",
    bgGradient: "from-pink-50 to-rose-50",
  },
  {
    title: "Affiliate Links Tracking",
    description: "Manage all your affiliate links in one place. Never lose a commission again.",
    image: "/features/affiliate-links.jpg",
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50",
  },
  {
    title: "Social Media Integration",
    description: "Connect Instagram, TikTok, YouTube and more. Import content automatically.",
    image: "/features/social-integration.jpg",
    gradient: "from-cyan-500 to-blue-500",
    bgGradient: "from-cyan-50 to-blue-50",
  },
  {
    title: "Creator Profiles",
    description: "Your personal storefront. A stunning profile that showcases your style and products.",
    image: "/features/creator-profile.jpg",
    gradient: "from-emerald-500 to-emerald-600",
    bgGradient: "from-emerald-50 to-emerald-100",
  },
]

export function FeaturesGrid() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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

  return (
    <section id="features" ref={sectionRef} className="relative py-12 lg:py-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-10">
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-100/80 text-emerald-700 text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-foreground text-balance">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              monetize your influence
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Powerful tools designed for creators who want to turn their content into commerce.
          </p>
        </div>

        {/* Features Grid - Redesigned with image mockups */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative rounded-2xl bg-background border border-border overflow-hidden hover:border-emerald-200 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className={`relative h-44 sm:h-48 lg:h-52 bg-gradient-to-br ${feature.bgGradient} overflow-hidden`}>
                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-4 left-4 w-16 h-16 rounded-full bg-white/40 blur-xl" />
                  <div className="absolute bottom-4 right-4 w-20 h-20 rounded-full bg-white/30 blur-xl" />
                </div>

                {/* Feature mockup image */}
                <div className="absolute inset-3 sm:inset-4 rounded-xl overflow-hidden shadow-lg bg-white group-hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
              </div>

              {/* Content */}
              <div className="p-5 lg:p-6">
                {/* Title with gradient underline on hover */}
                <h3 className="text-lg lg:text-xl font-bold font-heading text-foreground mb-2 group-hover:text-emerald-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">{feature.description}</p>

                {/* Learn more link */}
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn more</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Accent bar at bottom */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
