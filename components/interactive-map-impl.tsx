"use client"

import { useEffect, useCallback, useRef } from "react"
import { MapContainer, TileLayer, CircleMarker, Popup, Tooltip, useMap } from "react-leaflet"
import L from "leaflet"
import { Badge } from "@/components/ui/badge"
import type { MapEvent } from "./interactive-map"

// Component to control map flyTo - cinematic presentation mode
function MapController({ 
  selectedEvent, 
  events,
  openPopupForEvent
}: { 
  selectedEvent: number | null
  events: MapEvent[]
  openPopupForEvent: (id: number) => void
}) {
  const map = useMap()

  // Disable all user interactions on mount
  useEffect(() => {
    map.dragging.disable()
    map.touchZoom.disable()
    map.doubleClickZoom.disable()
    map.scrollWheelZoom.disable()
    map.boxZoom.disable()
    map.keyboard.disable()
    if (map.tap) map.tap.disable()
  }, [map])

  // Fly to selected event with cinematic smooth animation
  useEffect(() => {
    if (selectedEvent !== null) {
      const event = events.find((e) => e.id === selectedEvent)
      if (event) {
        map.flyTo(event.coordinates, event.zoom, {
          duration: 2.5,
          easeLinearity: 0.25,
        })
        
        // Open popup after fly animation completes
        setTimeout(() => {
          openPopupForEvent(event.id)
        }, 2600)
      }
    }
  }, [selectedEvent, events, map, openPopupForEvent])

  return null
}

interface MapImplementationProps {
  selectedEvent: number | null
  onSelectEvent: (id: number | null) => void
  events: MapEvent[]
}

export function MapImplementation({ 
  selectedEvent, 
  onSelectEvent,
  events 
}: MapImplementationProps) {
  const markerRefs = useRef<Map<number, L.CircleMarker>>(new Map())

  const handleMarkerClick = useCallback((id: number) => {
    onSelectEvent(id)
  }, [onSelectEvent])

  const openPopupForEvent = useCallback((id: number) => {
    const marker = markerRefs.current.get(id)
    if (marker) {
      marker.openPopup()
    }
  }, [])

  return (
    <div className="w-full h-full relative">
      <style jsx global>{`
        .leaflet-container {
          font-family: inherit;
        }
        
        .pulse-marker {
          animation: pulse-animation 2s infinite;
        }
        
        @keyframes pulse-animation {
          0% {
            box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
          }
          70% {
            box-shadow: 0 0 0 20px rgba(239, 68, 68, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);
          }
        }
        
        .custom-popup .leaflet-popup-content-wrapper {
          border-radius: 12px;
          padding: 0;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.15);
        }
        
        .custom-popup .leaflet-popup-content {
          margin: 0;
          width: 280px !important;
        }
        
        .custom-popup .leaflet-popup-tip {
          background: white;
        }
        
        .leaflet-tooltip {
          background: #1e293b;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 8px 14px;
          font-size: 13px;
          font-weight: 500;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }
        
        .leaflet-tooltip-top:before {
          border-top-color: #1e293b;
        }
      `}</style>

      <MapContainer
        center={[21.1, 105.7]}
        zoom={9}
        style={{ height: "100%", width: "100%" }}
        className="z-0"
        dragging={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        boxZoom={false}
        keyboard={false}
        touchZoom={false}
        zoomControl={false}
        maxBounds={[[8.5, 102.0], [23.5, 110.0]]}
        maxBoundsViscosity={1.0}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <MapController selectedEvent={selectedEvent} events={events} openPopupForEvent={openPopupForEvent} />
        
        {events.map((event) => {
          const isSelected = selectedEvent === event.id
          const baseRadius = event.isImportant ? 12 : 9
          const radius = isSelected ? baseRadius + 4 : baseRadius
          const fillColor = event.isImportant ? "#ef4444" : "#3b82f6"
          
          return (
            <CircleMarker
              key={event.id}
              center={event.coordinates}
              radius={radius}
              pathOptions={{
                fillColor: fillColor,
                fillOpacity: isSelected ? 1 : 0.85,
                color: isSelected ? "#1e3a8a" : "#ffffff",
                weight: isSelected ? 4 : 3,
                className: event.isImportant ? "pulse-marker" : "",
              }}
              ref={(ref) => {
                if (ref) {
                  markerRefs.current.set(event.id, ref)
                }
              }}
              eventHandlers={{
                click: () => handleMarkerClick(event.id),
              }}
            >
              <Tooltip direction="top" offset={[0, -10]}>
                {event.title}
              </Tooltip>
              
              <Popup className="custom-popup">
                <div className="overflow-hidden">
                  <div 
                    className="w-full h-36 bg-slate-200 bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url(${event.image})`,
                    }}
                  >
                    <div className="w-full h-full bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                      <Badge className={`${event.isImportant ? 'bg-red-500' : 'bg-blue-500'} text-white text-xs`}>
                        {event.year}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-slate-800 text-base mb-2">
                      {event.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </Popup>
            </CircleMarker>
          )
        })}
      </MapContainer>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 z-[1000] bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-3 border border-slate-200">
        <p className="text-xs font-semibold text-slate-700 mb-2">Chú thích</p>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500" />
            <span className="text-xs text-slate-600">Sự kiện lịch sử</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs text-slate-600">Sự kiện quan trọng</span>
          </div>
        </div>
      </div>

      {/* Presentation mode indicator */}
      <div className="absolute top-4 right-4 z-[1000] bg-slate-800/90 backdrop-blur-sm rounded-lg shadow-lg px-3 py-2 border border-slate-700">
        <p className="text-xs text-slate-200 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Chế độ thuyết trình
        </p>
      </div>
    </div>
  )
}
