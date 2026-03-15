"use client"

import { useState } from "react"
import { FileText, Flag, Plane, Zap, RefreshCw, Shield, PenTool, Star } from "lucide-react"

const timelineEvents = [
  {
    year: "1954",
    title: "Hiệp định Geneve",
    description: "Việt Nam bị chia cắt thành Bắc và Nam tại vĩ tuyến 17, với kế hoạch tổ chức bầu cử thống nhất.",
    icon: FileText,
  },
  {
    year: "1960",
    title: "Mặt trận Dân tộc Giải phóng",
    description: "Thành lập Mặt trận Dân tộc Giải phóng miền Nam Việt Nam để điều phối kháng chiến.",
    icon: Flag,
  },
  {
    year: "1965",
    title: "Mỹ triển khai Lực lượng Chiến đấu",
    description: "Hoa Kỳ triển khai quân chiến đấu và bắt đầu can thiệp quân sự quy mô lớn tại Việt Nam.",
    icon: Plane,
  },
  {
    year: "1968",
    title: "Tổng tiến công Tết Mậu Thân",
    description: "Một loạt các cuộc tấn công điều phối đã gây sốc cho Mỹ và thay đổi căn bản quan điểm toàn cầu về cuộc chiến.",
    icon: Zap,
  },
  {
    year: "1969",
    title: "Việt Nam hóa",
    description: "Mỹ bắt đầu chiến lược 'Việt Nam hóa', dần dần chuyển vai trò chiến đấu cho lực lượng miền Nam Việt Nam.",
    icon: RefreshCw,
  },
  {
    year: "1972",
    title: "Điện Biên Phủ trên không",
    description: "Chiến thắng phòng không quyết định trước các chiến dịch đánh bom của Mỹ, chứng minh sức chịu đựng của Việt Nam.",
    icon: Shield,
  },
  {
    year: "1973",
    title: "Hiệp định Paris",
    description: "Hiệp định hòa bình Paris được ký kết, dẫn đến việc rút quân Mỹ khỏi Việt Nam.",
    icon: PenTool,
  },
  {
    year: "1975",
    title: "Thống nhất Đất nước",
    description: "Chiến dịch Hồ Chí Minh dẫn đến sự giải phóng Sài Gòn và thống nhất Việt Nam.",
    icon: Star,
  },
]

export function Timeline() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="timeline" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full mb-4">
            Sự kiện Chính
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Dòng Thời Gian Lịch Sử
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Các cốt mốc quan trọng trong Chiến tranh Việt Nam từ 1954 đến 1975
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <div className="absolute top-12 left-0 right-0 h-0.5 bg-border" />

          <div className="grid grid-cols-8 gap-4">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Year Marker */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all duration-300 cursor-pointer ${
                      activeIndex === index
                        ? "bg-primary scale-125"
                        : "bg-card border-2 border-border"
                    }`}
                  >
                    <event.icon
                      className={`h-5 w-5 ${
                        activeIndex === index ? "text-primary-foreground" : "text-primary"
                      }`}
                    />
                  </div>
                  <span className="mt-3 text-sm font-bold text-foreground">
                    {event.year}
                  </span>
                </div>

                {/* Tooltip */}
                {activeIndex === index && (
                  <div className="absolute top-24 left-1/2 -translate-x-1/2 w-64 bg-card border border-border rounded-lg p-4 shadow-xl z-20">
                    <h4 className="font-semibold text-foreground mb-2">{event.title}</h4>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6">
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className="flex gap-4 bg-card rounded-lg p-6 border border-border"
            >
              <div className="shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <event.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <span className="text-sm font-bold text-primary">{event.year}</span>
                <h4 className="font-semibold text-foreground mt-1">{event.title}</h4>
                <p className="text-sm text-muted-foreground mt-2">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
