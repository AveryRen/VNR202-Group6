"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const [votes, setVotes] = useState({ vietnam: 0, global: 0 })
  const [hasVoted, setHasVoted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useState(() => {
    setTimeout(() => setIsVisible(true), 100)
  })

  const handleVote = (type: "vietnam" | "global") => {
    if (!hasVoted) {
      setVotes((prev) => ({ ...prev, [type]: prev[type] + 1 }))
      setHasVoted(true)
    }
  }

  const totalVotes = votes.vietnam + votes.global

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-muted/30 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-6 animate-fadeInUp">
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full backdrop-blur-sm border border-primary/20">
            Báo cáo Trường Đại học
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight text-balance mb-6 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          Chiến Tranh Việt Nam <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">(1954–1975)</span>:{" "}
          <br className="hidden sm:block" />
          <span className="text-primary">Cuộc chiến của Việt Nam</span> hay một{" "}
          <span className="text-accent">Cuộc đấu tranh Toàn cầu</span>?
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed text-pretty animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          Hoa Kỳ là cường quốc quân sự mạnh nhất thế giới, nhưng lại thất bại ở Việt Nam. Đây đơn giản chỉ là cuộc chiến giữa Việt Nam và Mỹ, hay là một phần của phong trào toàn cầu rộng lớn hơn cho độc lập và hòa bình?
        </p>

        {/* Interactive Voting */}
        <div className="mb-8 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <p className="text-sm text-muted-foreground mb-4 font-medium">
            Bạn nghĩ sao? Hãy bỏ phiếu:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => handleVote("vietnam")}
              variant={hasVoted ? "outline" : "default"}
              size="lg"
              className="min-w-[200px] text-base group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              disabled={hasVoted}
            >
              <span className="group-hover:scale-110 transition-transform">🇻🇳</span>
              <span className="ml-2">Cuộc chiến của Việt Nam</span>
            </Button>
            <Button
              onClick={() => handleVote("global")}
              variant={hasVoted ? "outline" : "secondary"}
              size="lg"
              className="min-w-[200px] text-base group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              disabled={hasVoted}
            >
              <span className="group-hover:scale-110 transition-transform">🌍</span>
              <span className="ml-2">Phần của Phong trào Toàn cầu</span>
            </Button>
          </div>
        </div>

        {/* Vote Results */}
        {hasVoted && totalVotes > 0 && (
          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto border border-border shadow-2xl animate-fadeInUp">
            <p className="text-sm font-medium text-foreground mb-4 flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Kết quả hiện tại:
            </p>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <span>🇻🇳</span> Cuộc chiến của Việt Nam
                  </span>
                  <span className="font-medium text-foreground">
                    {Math.round((votes.vietnam / totalVotes) * 100)}%
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-500 relative"
                    style={{ width: `${(votes.vietnam / totalVotes) * 100}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <span>🌍</span> Phần của Phong trào Toàn cầu
                  </span>
                  <span className="font-medium text-foreground">
                    {Math.round((votes.global / totalVotes) * 100)}%
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-accent to-accent/70 transition-all duration-500 relative"
                    style={{ width: `${(votes.global / totalVotes) * 100}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#context" className="text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  )
}
