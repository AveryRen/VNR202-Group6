"use client"

import { useState, useEffect } from "react"
import { Menu, X, BookOpen, Gamepad2 } from "lucide-react"

export function Navigation({ onTabChange }: { onTabChange: (tab: "content" | "game") => void }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"content" | "game">("content")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleTabChange = (tab: "content" | "game") => {
    setActiveTab(tab)
    onTabChange(tab)
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-bold text-lg text-foreground">
            Chiến Tranh Việt Nam 1954–1975
          </a>

          {/* Desktop Tab Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => handleTabChange("content")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition-all ${
                activeTab === "content"
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              <BookOpen className="h-4 w-4" />
              <span>Lý thuyết</span>
            </button>
            <button
              onClick={() => handleTabChange("game")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition-all ${
                activeTab === "game"
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              <Gamepad2 className="h-4 w-4" />
              <span>Game</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex gap-2">
              <button
                onClick={() => handleTabChange("content")}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === "content"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                <BookOpen className="h-4 w-4" />
                <span>Lý thuyết</span>
              </button>
              <button
                onClick={() => handleTabChange("game")}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === "game"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                <Gamepad2 className="h-4 w-4" />
                <span>Game</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
