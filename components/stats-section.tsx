"use client"

import { useEffect, useState } from "react"

interface Stat {
  value: string
  label: string
  icon: string
}

const stats: Stat[] = [
  {
    value: "📅 21 năm",
    label: "Thời gian",
    icon: "⏰",
  },
  {
    value: "⚔️ 2 Phe",
    label: "Phe phái chính",
    icon: "⚔️",
  },
  {
    value: "✊ 3+ triệu",
    label: "Thương vong",
    icon: "💔",
  },
  {
    value: "⭐ Thống nhất",
    label: "Kết quả",
    icon: "🇻🇳",
  },
]

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById("stats-section")
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  return (
    <section id="stats-section" className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-foreground mb-2 bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
