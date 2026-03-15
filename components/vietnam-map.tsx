"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface MapEvent {
  id: number
  year: string
  title: string
  location: string
  description: string
  category: "military" | "diplomatic" | "strategic"
  isImportant: boolean
}

interface VietnamMapProps {
  events: MapEvent[]
  selectedEvent: number | null
  onSelectEvent: (id: number | null) => void
}

// SVG coordinates for locations (relative to viewBox)
const locationCoordinates: Record<string, { x: number; y: number }> = {
  "Hà Nội": { x: 168, y: 95 },
  "Huế": { x: 175, y: 175 },
  "Đà Nẵng": { x: 182, y: 190 },
  "Buôn Ma Thuột": { x: 185, y: 255 },
  "Sài Gòn": { x: 175, y: 320 },
  "Biển Đông": { x: 280, y: 160 }, // Hoang Sa
  "Biển Đông 2": { x: 320, y: 290 }, // Truong Sa
}

// Get marker color based on category
const getMarkerColor = (category: string) => {
  switch (category) {
    case "military": return { fill: "#3b82f6", stroke: "#1d4ed8", bg: "bg-blue-500" }
    case "diplomatic": return { fill: "#10b981", stroke: "#059669", bg: "bg-emerald-500" }
    case "strategic": return { fill: "#ef4444", stroke: "#dc2626", bg: "bg-red-500" }
    default: return { fill: "#64748b", stroke: "#475569", bg: "bg-slate-500" }
  }
}

export function VietnamMap({ events, selectedEvent, onSelectEvent }: VietnamMapProps) {
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null)
  const activeEvent = hoveredEvent ?? selectedEvent

  // Group events by location for the map
  const locationEvents = events.reduce((acc, event) => {
    let locKey = event.location
    // Handle Truong Sa separately
    if (event.title.includes("Trường Sa")) {
      locKey = "Biển Đông 2"
    } else if (event.location === "Biển Đông") {
      locKey = "Biển Đông"
    }
    if (!acc[locKey]) acc[locKey] = []
    acc[locKey].push(event)
    return acc
  }, {} as Record<string, MapEvent[]>)

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-blue-50 via-slate-50 to-blue-50 rounded-xl overflow-hidden">
      {/* Map Title */}
      <div className="absolute top-4 left-4 z-10">
        <h3 className="text-sm font-semibold text-slate-700">Bản đồ Việt Nam</h3>
        <p className="text-xs text-slate-500">Các sự kiện lịch sử 1965-1975</p>
      </div>

      {/* SVG Map */}
      <svg
        viewBox="0 0 400 420"
        className="w-full h-full"
        style={{ maxHeight: "100%" }}
      >
        {/* Background Sea */}
        <rect x="0" y="0" width="400" height="420" fill="#e0f2fe" />
        
        {/* Grid lines for academic look */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#cbd5e1" strokeWidth="0.3" opacity="0.5" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="400" height="420" fill="url(#grid)" />

        {/* Compass Rose */}
        <g transform="translate(350, 50)">
          <circle cx="0" cy="0" r="18" fill="white" stroke="#94a3b8" strokeWidth="1" />
          <path d="M 0 -14 L 3 0 L 0 14 L -3 0 Z" fill="#1e3a5f" />
          <path d="M -14 0 L 0 -3 L 14 0 L 0 3 Z" fill="#94a3b8" />
          <text x="0" y="-20" textAnchor="middle" className="text-[8px] font-bold fill-slate-600">N</text>
        </g>

        {/* Vietnam Mainland - Simplified elegant shape */}
        <path
          d="M 155 60 
             Q 175 55 185 65
             Q 190 75 185 85
             Q 180 95 175 105
             Q 172 115 175 125
             Q 180 135 178 145
             Q 175 155 180 165
             Q 185 175 188 185
             Q 192 195 190 205
             Q 185 215 188 225
             Q 192 235 190 245
             Q 185 255 182 265
             Q 178 275 175 285
             Q 170 295 168 305
             Q 165 315 170 325
             Q 178 335 185 340
             Q 175 345 165 340
             Q 155 335 150 325
             Q 145 315 148 305
             Q 152 295 155 285
             Q 150 275 145 265
             Q 140 255 142 245
             Q 145 235 148 225
             Q 152 215 155 205
             Q 150 195 145 185
             Q 140 175 142 165
             Q 145 155 150 145
             Q 148 135 145 125
             Q 142 115 145 105
             Q 148 95 152 85
             Q 150 75 152 65
             Q 155 55 155 60
             Z"
          fill="#f8fafc"
          stroke="#1e3a5f"
          strokeWidth="2"
          className="drop-shadow-sm"
        />

        {/* Mekong Delta */}
        <path
          d="M 165 340 
             Q 175 350 185 355
             Q 180 360 170 365
             Q 160 360 155 350
             Q 160 345 165 340
             Z"
          fill="#f8fafc"
          stroke="#1e3a5f"
          strokeWidth="1.5"
        />

        {/* Hoang Sa Islands */}
        <g>
          <ellipse cx="280" cy="160" rx="25" ry="15" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" strokeDasharray="4,2" />
          <text x="280" y="140" textAnchor="middle" className="text-[9px] font-semibold fill-amber-700">Hoàng Sa</text>
          <text x="280" y="180" textAnchor="middle" className="text-[7px] fill-amber-600">(Paracel Islands)</text>
        </g>

        {/* Truong Sa Islands */}
        <g>
          <ellipse cx="320" cy="290" rx="30" ry="18" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" strokeDasharray="4,2" />
          <text x="320" y="270" textAnchor="middle" className="text-[9px] font-semibold fill-amber-700">Trường Sa</text>
          <text x="320" y="310" textAnchor="middle" className="text-[7px] fill-amber-600">(Spratly Islands)</text>
        </g>

        {/* South China Sea Label */}
        <text x="300" y="220" textAnchor="middle" className="text-[10px] italic fill-blue-400">Biển Đông</text>
        <text x="300" y="232" textAnchor="middle" className="text-[8px] italic fill-blue-300">(South China Sea)</text>

        {/* Cambodia & Laos outline (simplified) */}
        <path
          d="M 100 180 Q 120 200 115 230 Q 130 260 125 290 Q 140 310 150 325"
          fill="none"
          stroke="#cbd5e1"
          strokeWidth="1"
          strokeDasharray="3,3"
        />
        <text x="95" y="250" className="text-[8px] fill-slate-400">Campuchia</text>
        <text x="90" y="160" className="text-[8px] fill-slate-400">Lào</text>

        {/* China border */}
        <path
          d="M 155 60 Q 140 55 130 60 Q 145 50 160 45 Q 175 50 185 65"
          fill="none"
          stroke="#cbd5e1"
          strokeWidth="1"
          strokeDasharray="3,3"
        />
        <text x="145" y="40" className="text-[8px] fill-slate-400">Trung Quốc</text>

        {/* Animated Markers */}
        {Object.entries(locationCoordinates).map(([location, coords]) => {
          const locEvents = locationEvents[location] || []
          if (locEvents.length === 0) return null
          
          const primaryEvent = locEvents[0]
          const colors = getMarkerColor(primaryEvent.category)
          const isActive = locEvents.some(e => e.id === activeEvent)
          const isStrategic = primaryEvent.category === "strategic"

          return (
            <g key={location}>
              {/* Pulse animation for strategic locations */}
              {isStrategic && (
                <motion.circle
                  cx={coords.x}
                  cy={coords.y}
                  r="12"
                  fill={colors.fill}
                  opacity="0.3"
                  animate={{
                    r: [12, 20, 12],
                    opacity: [0.3, 0.1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}

              {/* Main marker */}
              <motion.circle
                cx={coords.x}
                cy={coords.y}
                r={isActive ? 10 : 7}
                fill={colors.fill}
                stroke={isActive ? "#1e3a5f" : colors.stroke}
                strokeWidth={isActive ? 3 : 2}
                className="cursor-pointer drop-shadow-md"
                whileHover={{ scale: 1.3 }}
                onMouseEnter={() => setHoveredEvent(primaryEvent.id)}
                onMouseLeave={() => setHoveredEvent(null)}
                onClick={() => onSelectEvent(primaryEvent.id)}
                animate={{
                  scale: isActive ? 1.2 : 1,
                }}
                transition={{ duration: 0.2 }}
              />

              {/* Location label */}
              <text
                x={coords.x}
                y={coords.y + 18}
                textAnchor="middle"
                className={`text-[8px] font-medium ${isActive ? "fill-slate-800" : "fill-slate-600"}`}
              >
                {location === "Biển Đông 2" ? "" : location === "Biển Đông" ? "" : location}
              </text>
            </g>
          )
        })}

        {/* Scale bar */}
        <g transform="translate(20, 390)">
          <line x1="0" y1="0" x2="60" y2="0" stroke="#64748b" strokeWidth="2" />
          <line x1="0" y1="-3" x2="0" y2="3" stroke="#64748b" strokeWidth="2" />
          <line x1="60" y1="-3" x2="60" y2="3" stroke="#64748b" strokeWidth="2" />
          <text x="30" y="12" textAnchor="middle" className="text-[7px] fill-slate-500">~200 km</text>
        </g>
      </svg>

      {/* Tooltip */}
      <AnimatePresence>
        {activeEvent && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-slate-200 p-4 z-20"
          >
            {events.filter(e => e.id === activeEvent).map(event => {
              const colors = getMarkerColor(event.category)
              return (
                <div key={event.id} className="flex items-start gap-3">
                  <div className={`w-3 h-3 rounded-full mt-1 shrink-0 ${colors.bg} ${event.category === "strategic" ? "animate-pulse" : ""}`} />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {event.year && (
                        <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                          {event.year}
                        </span>
                      )}
                      <span className="text-xs text-slate-400">{event.location}</span>
                    </div>
                    <h4 className="font-semibold text-slate-800 text-sm">{event.title}</h4>
                    <p className="text-xs text-slate-600 mt-1">{event.description}</p>
                  </div>
                </div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Legend */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-slate-200">
        <p className="text-[10px] font-semibold text-slate-600 mb-2">Chú thích</p>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <span className="text-[9px] text-slate-600">Quân sự</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-[9px] text-slate-600">Ngoại giao</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[9px] text-slate-600">Chủ quyền</span>
          </div>
        </div>
      </div>
    </div>
  )
}
