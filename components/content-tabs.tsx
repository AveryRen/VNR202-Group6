"use client"

import { useState } from "react"
import { BookOpen, Gamepad2 } from "lucide-react"

interface TabsProps {
  children: React.ReactNode
}

export function ContentTabs({ children }: TabsProps) {
  const [activeTab, setActiveTab] = useState<"content" | "game">("content")

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveTab("content")}
              className={`flex items-center gap-2 px-6 py-4 font-semibold transition-all duration-300 border-b-2 ${
                activeTab === "content"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <BookOpen className="h-5 w-5" />
              <span className="hidden sm:inline">Nội dung Lý thuyết</span>
              <span className="sm:hidden">Lý thuyết</span>
            </button>
            <button
              onClick={() => setActiveTab("game")}
              className={`flex items-center gap-2 px-6 py-4 font-semibold transition-all duration-300 border-b-2 ${
                activeTab === "game"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <Gamepad2 className="h-5 w-5" />
              <span className="hidden sm:inline">🎮 Game Ô Chữ</span>
              <span className="sm:hidden">🎮 Game</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="w-full">
        {activeTab === "content" && (
          <div className="animate-fadeInUp">
            {children}
          </div>
        )}
        {activeTab === "game" && (
          <div className="animate-fadeInUp">
            <div id="game-container" />
          </div>
        )}
      </div>
    </div>
  )
}
