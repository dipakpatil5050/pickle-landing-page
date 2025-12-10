"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      hero.style.setProperty("--mouse-x", `${x}%`)
      hero.style.setProperty("--mouse-y", `${y}%`)
    }

    hero.addEventListener("mousemove", handleMouseMove)
    return () => hero.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative flex items-center justify-center pt-20 pb-8 lg:pt-24 lg:pb-12 overflow-hidden"
      style={{ "--mouse-x": "50%", "--mouse-y": "50%" } as React.CSSProperties}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-background to-violet-50/30" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(16, 185, 129, 0.15) 0%, transparent 50%)",
        }}
      />

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-teal-400/15 rounded-full blur-3xl animate-pulse delay-500" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading leading-tight text-balance">
              <span className="text-foreground">Turn your links into </span>
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
                a lifestyle.
              </span>
            </h1>

            {/* Enhanced Subheadline */}
            <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-foreground/70 max-w-xl mx-auto lg:mx-0 text-pretty leading-relaxed font-medium tracking-wide">
              Pickle lets creators build <span className="text-foreground font-semibold">shoppable boards</span>, tag{" "}
              <span className="text-foreground font-semibold">products on images</span>, and track{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent font-semibold">
                conversions
              </span>{" "}
              — beautifully and effortlessly.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all text-base px-8 py-6 rounded-xl group"
              >
                Start Free
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 hover:bg-secondary/50 text-base px-8 py-6 rounded-xl bg-transparent"
              >
                Explore Templates
              </Button>
            </div>

            {/* Social Proof */}
            <div className="mt-12 flex items-center gap-6 justify-center lg:justify-start">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background bg-gradient-to-br from-emerald-200 to-teal-300 flex items-center justify-center text-xs font-medium text-emerald-800"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">10,000+ creators</p>
                <p className="text-xs text-muted-foreground">already monetizing</p>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Mockups */}
          <div className="relative h-[500px] lg:h-[600px]">
            {/* Main Dashboard Card */}
            <div className="absolute top-0 right-0 w-[320px] sm:w-[380px] animate-float">
              <div className="bg-background/80 backdrop-blur-xl rounded-2xl border border-border shadow-2xl shadow-emerald-500/10 p-4 hover:shadow-emerald-500/20 transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-rose-500" />
                  <div>
                    <p className="font-semibold text-sm text-foreground">@sarahcreates</p>
                    <p className="text-xs text-muted-foreground">Fashion & Lifestyle</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-secondary/50 rounded-xl p-3 text-center">
                    <p className="text-lg font-bold text-foreground">24.5K</p>
                    <p className="text-xs text-muted-foreground">Clicks</p>
                  </div>
                  <div className="bg-secondary/50 rounded-xl p-3 text-center">
                    <p className="text-lg font-bold text-emerald-600">$12.4K</p>
                    <p className="text-xs text-muted-foreground">Revenue</p>
                  </div>
                  <div className="bg-secondary/50 rounded-xl p-3 text-center">
                    <p className="text-lg font-bold text-foreground">8.2%</p>
                    <p className="text-xs text-muted-foreground">CTR</p>
                  </div>
                </div>
                <div className="h-24 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl flex items-end p-3 gap-1">
                  {[40, 60, 45, 80, 65, 90, 75, 85, 70, 95, 88, 92].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-emerald-500 to-teal-400 rounded-t"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Shoppable Image Card */}
            <div className="absolute bottom-20 left-0 w-[260px] sm:w-[300px] animate-float-delayed">
              <div className="bg-background/80 backdrop-blur-xl rounded-2xl border border-border shadow-2xl shadow-violet-500/10 overflow-hidden hover:shadow-violet-500/20 transition-shadow">
                <div className="relative h-40 bg-gradient-to-br from-violet-100 to-pink-100">
                  <img
                    src="/stylish-outfit-flatlay-fashion.jpg"
                    alt="Shoppable product"
                    className="w-full h-full object-cover"
                  />
                  {/* Product Tags */}
                  <div className="absolute top-8 left-12 w-6 h-6 bg-background rounded-full border-2 border-emerald-500 shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <span className="text-xs font-bold text-emerald-600">+</span>
                  </div>
                  <div className="absolute bottom-12 right-16 w-6 h-6 bg-background rounded-full border-2 border-emerald-500 shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <span className="text-xs font-bold text-emerald-600">+</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-sm text-foreground">Summer Essentials</p>
                      <p className="text-xs text-muted-foreground">3 products tagged</p>
                    </div>
                    <div className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                      $89 avg
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics Mini Card */}
            <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 w-[180px] animate-float-slow">
              <div className="bg-background/90 backdrop-blur-xl rounded-xl border border-border shadow-xl p-4 hover:shadow-2xl transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-medium text-muted-foreground">Live Revenue</span>
                </div>
                <p className="text-2xl font-bold text-foreground">$2,847</p>
                <p className="text-xs text-emerald-600 font-medium">+23% today</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
