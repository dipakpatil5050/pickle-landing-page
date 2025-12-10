"use client"

import { useRef, useEffect, useState } from "react"

export function MockupSection() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight))
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="templates" ref={sectionRef} className="relative py-12 lg:py-16 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-background to-violet-50/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-10">
          <span className="inline-block px-4 py-2 rounded-full bg-violet-100/80 text-violet-700 text-sm font-medium mb-4">
            Visual Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-foreground text-balance">
            See your{" "}
            <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
              revenue grow
            </span>{" "}
            in real time
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Beautiful dashboards and intuitive interfaces that make managing your creator business a joy.
          </p>
        </div>

        {/* Floating Mockups */}
        <div className="relative">
          {/* Main Dashboard Mockup */}
          <div className="relative mx-auto max-w-5xl" style={{ transform: `translateY(${scrollProgress * -20}px)` }}>
            <div className="bg-background/80 backdrop-blur-xl rounded-3xl border border-border shadow-2xl shadow-emerald-500/10 overflow-hidden">
              {/* Browser Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/30">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 bg-background rounded-lg text-xs text-muted-foreground">
                    pickle.app/dashboard
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="grid lg:grid-cols-3 gap-4 lg:gap-6">
                  {/* Stats Cards - responsive grid: 1 col mobile, 3 cols sm+ */}
                  <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-4 sm:p-5 text-white">
                      <p className="text-sm opacity-80">Total Revenue</p>
                      <p className="text-2xl sm:text-3xl font-bold mt-1">$48,294</p>
                      <p className="text-sm mt-2 opacity-80">+12.5% this month</p>
                    </div>
                    <div className="bg-background border border-border rounded-2xl p-4 sm:p-5">
                      <p className="text-sm text-muted-foreground">Total Clicks</p>
                      <p className="text-2xl sm:text-3xl font-bold mt-1 text-foreground">284K</p>
                      <p className="text-sm mt-2 text-emerald-600">+8.2% this week</p>
                    </div>
                    <div className="bg-background border border-border rounded-2xl p-4 sm:p-5">
                      <p className="text-sm text-muted-foreground">Conversion</p>
                      <p className="text-2xl sm:text-3xl font-bold mt-1 text-foreground">6.8%</p>
                      <p className="text-sm mt-2 text-emerald-600">+2.1% avg</p>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="bg-secondary/50 rounded-2xl p-4 sm:p-5">
                    <p className="font-semibold text-sm text-foreground mb-4">Quick Actions</p>
                    <div className="space-y-3">
                      <button className="w-full py-2 px-4 bg-background rounded-xl text-sm text-left hover:bg-emerald-50 transition-colors text-foreground">
                        + Create new board
                      </button>
                      <button className="w-full py-2 px-4 bg-background rounded-xl text-sm text-left hover:bg-emerald-50 transition-colors text-foreground">
                        + Add affiliate link
                      </button>
                      <button className="w-full py-2 px-4 bg-background rounded-xl text-sm text-left hover:bg-emerald-50 transition-colors text-foreground">
                        + Upload content
                      </button>
                    </div>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="mt-4 sm:mt-6 bg-background border border-border rounded-2xl p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 sm:mb-6">
                    <p className="font-semibold text-foreground">Revenue Overview</p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                        7 days
                      </span>
                      <span className="px-3 py-1 bg-secondary text-muted-foreground rounded-full text-xs">30 days</span>
                      <span className="px-3 py-1 bg-secondary text-muted-foreground rounded-full text-xs">90 days</span>
                    </div>
                  </div>
                  <div className="h-32 sm:h-48 flex items-end gap-1 sm:gap-2">
                    {[45, 62, 38, 75, 58, 82, 70, 90, 65, 85, 72, 95, 88, 78].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col justify-end">
                        <div
                          className="bg-gradient-to-t from-emerald-500 to-teal-400 rounded-t transition-all duration-500 hover:from-emerald-600 hover:to-teal-500"
                          style={{ height: `${h}%` }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-3 sm:mt-4 text-[10px] sm:text-xs text-muted-foreground">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Side Cards */}
          <div
            className="absolute -left-8 top-1/4 w-64 hidden xl:block"
            style={{ transform: `translateY(${scrollProgress * 40}px) rotate(-3deg)` }}
          >
            <div className="bg-background/90 backdrop-blur-xl rounded-2xl border border-border shadow-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-rose-500" />
                <div>
                  <p className="font-semibold text-sm text-foreground">New follower</p>
                  <p className="text-xs text-muted-foreground">Just now</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">@fashionista started following your boards</p>
            </div>
          </div>

          <div
            className="absolute -right-8 bottom-1/4 w-64 hidden xl:block"
            style={{ transform: `translateY(${scrollProgress * -30}px) rotate(3deg)` }}
          >
            <div className="bg-background/90 backdrop-blur-xl rounded-2xl border border-border shadow-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium text-muted-foreground">New sale!</span>
              </div>
              <p className="text-xl font-bold text-foreground">+$127.00</p>
              <p className="text-xs text-muted-foreground mt-1">Summer dress via your board</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
