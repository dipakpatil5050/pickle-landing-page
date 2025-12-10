"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is Pickle?",
    answer:
      "Pickle is your digital lifestyle hub — a place to curate fashion, links, posts, and recommendations into a beautiful profile that your followers can explore.",
  },
  {
    question: "Who is Pickle for?",
    answer:
      "Pickle is built for creators, influencers, and brands who want to showcase their lifestyle, fashion, and curated recommendations in one place.",
  },
  {
    question: "Can I import my Instagram photos?",
    answer:
      "Yes. You can securely import your Instagram posts and reels through Instagram's official APIs, with your permission.",
  },
  {
    question: "What types of content can I add?",
    answer:
      "You can add product links, posts, shoppable looks, travel updates, book recommendations, tools you use, and more. Pickle is flexible and evolving.",
  },
  {
    question: "How does link analytics work?",
    answer:
      "Every link and post tracks clicks, top devices, locations, and campaigns so you know what's performing best with your audience.",
  },
  {
    question: "How much does Pickle cost?",
    answer:
      "Pickle has a free plan for starters. Creator and Brand plans unlock advanced analytics, theming, shoppable boards, and custom domains.",
  },
  {
    question: "Can I connect my LinkedIn profile?",
    answer:
      "Yes! You can connect your LinkedIn account to showcase your professional content and recommendations. This is great for creators who share career advice, tools, and business insights.",
  },
  {
    question: "What social media platforms can I connect?",
    answer:
      "Pickle supports Instagram, LinkedIn, TikTok, YouTube, Twitter/X, and Pinterest integrations. Connect your accounts to import content and track affiliate performance across all platforms.",
  },
  {
    question: "How do affiliate links work with social media?",
    answer:
      "When you connect your social accounts, Pickle helps you track which platforms drive the most affiliate revenue. You can create platform-specific shoppable boards and optimize your content strategy based on real performance data.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="relative py-12 lg:py-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-violet-50/20 to-background" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 rounded-full bg-violet-100/80 text-violet-700 text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-foreground text-balance">
            Frequently asked{" "}
            <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
              questions
            </span>
          </h2>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background/80 backdrop-blur-sm border border-border rounded-2xl px-6 data-[state=open]:border-emerald-200 data-[state=open]:shadow-lg data-[state=open]:shadow-emerald-500/5 transition-all"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-emerald-600 py-5 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
