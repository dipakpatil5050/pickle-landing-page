"use client"

import { useRef, useEffect, useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started",
    features: ["Up to 3 boards", "Basic analytics", "Standard profile", "Community support"],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Creator Pro",
    price: "$19",
    period: "per month",
    description: "For serious creators",
    features: [
      "Unlimited boards",
      "Advanced analytics",
      "Custom profile URL",
      "Priority support",
      "Shoppable image tags",
      "Affiliate link tracking",
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Analytics Pro",
    price: "$49",
    period: "per month",
    description: "For data-driven creators",
    features: [
      "Everything in Creator Pro",
      "Real-time analytics",
      "Audience insights",
      "Revenue forecasting",
      "API access",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function PricingSection() {
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
    <section id="pricing" ref={sectionRef} className="relative py-12 lg:py-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-10">
          <span className="inline-block px-4 py-2 rounded-full bg-amber-100/80 text-amber-700 text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-foreground text-balance">
            Simple,{" "}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              transparent
            </span>{" "}
            pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Start for free, upgrade when you&apos;re ready. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative p-6 lg:p-8 rounded-2xl transition-all duration-500 ${
                plan.popular
                  ? "bg-gradient-to-b from-emerald-500 to-teal-600 text-white shadow-2xl shadow-emerald-500/25 scale-105"
                  : "bg-background/80 backdrop-blur-sm border border-border hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5"
              } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-background text-emerald-600 rounded-full text-sm font-semibold shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3
                  className={`text-xl font-bold font-heading mb-2 ${plan.popular ? "text-white" : "text-foreground"}`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-foreground"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.popular ? "text-white/80" : "text-muted-foreground"}`}>
                    /{plan.period}
                  </span>
                </div>
                <p className={`mt-2 text-sm ${plan.popular ? "text-white/80" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.popular ? "bg-white/20" : "bg-emerald-100"
                      }`}
                    >
                      <Check className={`w-3 h-3 ${plan.popular ? "text-white" : "text-emerald-600"}`} />
                    </div>
                    <span className={`text-sm ${plan.popular ? "text-white/90" : "text-muted-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                className={`w-full py-6 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? "bg-white text-emerald-600 hover:bg-white/90 shadow-lg"
                    : "bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 shadow-lg shadow-emerald-500/25"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
