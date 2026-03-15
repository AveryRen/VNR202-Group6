"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import dynamic from "next/dynamic"
import { Badge } from "@/components/ui/badge"

// Map Event type
export interface MapEvent {
  id: number
  year: string
  title: string
  coordinates: [number, number]
  zoom: number
  image: string
  description: string
  isImportant: boolean
}

// Map events data - Deep zoom levels (9-12) for cinematic battlefield view
export const mapEventsData: MapEvent[] = [
  {
    id: 1,
    year: "1965",
    title: "Mỹ đổ bộ vào Đà Nẵng",
    coordinates: [16.0544, 108.2022],
    zoom: 11,
    image: "https://nghiencuuquocte.org/wp-content/uploads/2020/03/08.jpg",
    description: "Ngày 8/3/1965, lính thủy đánh bộ Mỹ đổ bộ vào bãi biển Đà Nẵng, đánh dấu sự can thiệp quân sự trực tiếp của Mỹ vào Việt Nam.",
    isImportant: false,
  },
  {
    id: 2,
    year: "1968",
    title: "Tổng tiến công Tết Mậu Thân - Huế",
    coordinates: [16.4637, 107.5909],
    zoom: 11,
    image: "https://camau.gov.vn/Datafiles/camau-gov-vn/wps/wcm/connect/f5bb3f25-eff5-42e8-9be8-1a43cc735e7c/1/32-jpg-3fmod-3dajperes-26amp-3bcvid-3d.png",
    description: "Cuộc tổng tiến công và nổi dậy Tết Mậu Thân 1968 tại Huế kéo dài 26 ngày, làm thay đổi hoàn toàn cục diện chiến tranh.",
    isImportant: true,
  },
  {
    id: 3,
    year: "1972",
    title: "Điện Biên Phủ trên không - Hà Nội",
    coordinates: [21.0285, 105.8542],
    zoom: 11,
    image: "https://media.vov.vn/sites/default/files/styles/large/public/2020-12/Dien%20bien%201.jpg",
    description: "Chiến thắng 12 ngày đêm (18-29/12/1972) bắn rơi 81 máy bay Mỹ, trong đó có 34 B-52, buộc Mỹ ký Hiệp định Paris.",
    isImportant: true,
  },
  {
    id: 4,
    year: "1975",
    title: "Chiến dịch Tây Nguyên - Buôn Ma Thuột",
    coordinates: [12.6667, 108.0500],
    zoom: 11,
    image: "https://upload.wikimedia.org/wikipedia/vi/9/9e/BanMeThuot.jpg",
    description: "Ngày 10/3/1975, ta giải phóng Buôn Ma Thuột, mở màn Tổng tiến công và nổi dậy mùa Xuân 1975.",
    isImportant: false,
  },
  {
    id: 5,
    year: "1975",
    title: "Chiến dịch Hồ Chí Minh - Sài Gòn",
    coordinates: [10.8231, 106.6297],
    zoom: 12,
    image: "https://hcdc.vn/public/img/02bf8460bf0d6384849ca010eda38cf8e9dbc4c7/images/mod1/images/ngay-2641975-mo-man-chien-dich-ho-chi-minh-lich-su/images/image001.jpg",
    description: "11h30 ngày 30/4/1975, xe tăng quân giải phóng húc đổ cổng Dinh Độc Lập, kết thúc cuộc kháng chiến chống Mỹ cứu nước.",
    isImportant: true,
  },
]

interface InteractiveMapProps {
  selectedEvent: number | null
  onSelectEvent: (id: number | null) => void
  events?: MapEvent[]
}

// Dynamic import the actual map implementation to avoid SSR issues with Leaflet
const MapImplementation = dynamic(
  () => import("./interactive-map-impl").then((mod) => mod.MapImplementation),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full bg-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-slate-500 text-sm">Đang tải bản đồ...</p>
        </div>
      </div>
    )
  }
)

export function InteractiveMap({
  selectedEvent,
  onSelectEvent,
  events = mapEventsData
}: InteractiveMapProps) {
  return (
    <MapImplementation
      selectedEvent={selectedEvent}
      onSelectEvent={onSelectEvent}
      events={events}
    />
  )
}
