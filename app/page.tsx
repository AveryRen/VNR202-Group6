"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Flag,
  Globe,
  Plane,
  Zap,
  Star,
  Shield,
  Scroll,
  Sword,
  Target,
  Award,
  Users,
  Heart,
  BookOpen,
  MapPin
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { InteractiveMap, mapEventsData } from "@/components/interactive-map"
import { EvaluationSection } from "@/components/evaluation-section"
import { HistoricalTimeline } from "../components/historical-timeline"

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

// Timeline Data - Data-driven approach as required
const timelinePhases = [
  {
    period: "1965-1968",
    title: "Đối đầu trực diện chiến tranh cục bộ",
    colorClass: "bg-blue-50 border-blue-200",
    badgeClass: "bg-blue-100 text-blue-800",
    dotClass: "bg-blue-500",
    events: [
      {
        year: "1965",
        content: "Mỹ đổ bộ vào Đà Nẵng và mở chiến tranh phá hoại miền Bắc",
        icon: Plane
      },
      {
        year: "1965",
        content: "Hội nghị Trung ương 11 và 12 xác định quyết tâm đánh thắng Mỹ",
        icon: Target
      },
      {
        year: "1968",
        content: "Tổng tiến công Tết Mậu Thân buộc Mỹ phải đàm phán",
        icon: Zap
      }
    ]
  },
  {
    period: "1969-1972",
    title: "Đánh bại chiến lược Việt Nam hóa chiến tranh",
    colorClass: "bg-emerald-50 border-emerald-200",
    badgeClass: "bg-emerald-100 text-emerald-800",
    dotClass: "bg-emerald-500",
    events: [
      {
        year: "1969",
        content: "Mỹ thực hiện Việt Nam hóa chiến tranh",
        icon: Shield
      },
      {
        year: "1971",
        content: "Chiến thắng Đường 9 - Nam Lào",
        icon: Sword
      },
      {
        year: "1972",
        content: 'Chiến thắng "Điện Biên Phủ trên không"',
        icon: Plane
      },
      {
        year: "1973",
        content: "Hiệp định Paris buộc Mỹ rút quân",
        icon: Scroll
      }
    ]
  },
  {
    period: "1973-1974",
    title: "Tạo thế và lực sau Hiệp định Paris",
    colorClass: "bg-amber-50 border-amber-200",
    badgeClass: "bg-amber-100 text-amber-800",
    dotClass: "bg-amber-500",
    events: [
      {
        year: "1973",
        content: "Hội nghị Trung ương 21 khẳng định con đường bạo lực cách mạng",
        icon: Target
      },
      {
        year: "1975",
        content: "Chiến thắng Phước Long chứng minh sự suy yếu của quân đội Sài Gòn",
        icon: Flag
      }
    ]
  },
  {
    period: "1975",
    title: "Tổng tiến công và nổi dậy mùa Xuân",
    colorClass: "bg-red-50 border-red-200",
    badgeClass: "bg-red-100 text-red-800",
    dotClass: "bg-red-500",
    events: [
      {
        year: "Tháng 3",
        content: "Chiến dịch Tây Nguyên",
        icon: Sword
      },
      {
        year: "Tháng 3",
        content: "Chiến dịch Huế - Đà Nẵng",
        icon: Sword
      },
      {
        year: "Tháng 4",
        content: "Chiến dịch Hồ Chí Minh",
        icon: Star
      },
      {
        year: "30/4/1975",
        content: "Giải phóng hoàn toàn miền Nam",
        icon: Flag
      }
    ]
  }
]

export default function PresentationPage() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-slate-50">
      {/* ========================================== */}
      {/* SECTION 1: TỔNG QUAN VẤN ĐỀ */}
      {/* ========================================== */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-blue-50 px-4 py-16">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight font-serif mb-6 text-balance"
          >
            Cuộc kháng chiến chống Mỹ cứu nước
            <span className="block text-blue-600 mt-2">(1954-1975)</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12 text-pretty"
          >
            Làm thế nào một dân tộc nhỏ bé lại có thể đánh bại cường quốc quân sự hàng đầu thế giới?
          </motion.p>

          {/* Debate Card */}
          <motion.div variants={scaleIn}>
            <Card className="max-w-3xl mx-auto border-2 border-blue-200 bg-white/80 backdrop-blur-sm shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                  <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">Câu hỏi tranh luận</span>
                </div>
                <p className="text-xl sm:text-2xl font-medium text-slate-800 leading-relaxed text-balance">
                  "Đây là cuộc chiến riêng của Việt Nam hay là một phần của phong trào cách mạng thế giới?"
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      <Separator className="bg-slate-200" />



      {/* ========================================== */}
      {/* SECTION: BẢN ĐỒ CÁC SỰ KIỆN LỊCH SỬ */}
      {/* ========================================== */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 font-serif text-balance">
              Bản đồ các sự kiện lịch sử (1965-1975)
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Click vào sự kiện bên phải để xem vị trí trên bản đồ với hiệu ứng chuyển động mượt mà
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-5 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {/* Leaflet Map - Left side (3 columns) */}
            <motion.div variants={fadeInUp} className="lg:col-span-3">
              <Card className="overflow-hidden border-2 border-blue-200 bg-white shadow-lg h-[500px] lg:h-[600px]">
                <InteractiveMap
                  events={mapEventsData}
                  selectedEvent={selectedEvent}
                  onSelectEvent={setSelectedEvent}
                />
              </Card>
            </motion.div>

            {/* Timeline Events - Right side (2 columns) */}
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <Card className="border-2 border-slate-200 bg-white h-[500px] lg:h-[600px] overflow-hidden">
                <CardHeader className="pb-2 border-b border-slate-100">
                  <CardTitle className="text-lg text-slate-700 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    Các sự kiện lịch sử
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 overflow-y-auto h-[calc(100%-60px)]">
                  <div className="divide-y divide-slate-100">
                    {mapEventsData.map((event) => {
                      const isSelected = selectedEvent === event.id

                      return (
                        <motion.div
                          key={event.id}
                          className={`p-4 cursor-pointer transition-all duration-200 ${isSelected
                            ? event.isImportant
                              ? "bg-red-50 border-l-4 border-red-500"
                              : "bg-blue-50 border-l-4 border-blue-500"
                            : "hover:bg-slate-50 border-l-4 border-transparent"
                            }`}
                          onClick={() => setSelectedEvent(event.id)}
                          whileHover={{ x: 4 }}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`w-3 h-3 rounded-full mt-1.5 shrink-0 ${event.isImportant ? "bg-red-500 animate-pulse" : "bg-blue-500"
                              }`} />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <Badge
                                  variant="outline"
                                  className={`text-xs ${event.isImportant
                                    ? "bg-red-50 text-red-700 border-red-200"
                                    : "bg-blue-50 text-blue-700 border-blue-200"
                                    }`}
                                >
                                  {event.year}
                                </Badge>
                                {event.isImportant && (
                                  <Badge
                                    variant="outline"
                                    className="text-xs bg-amber-50 text-amber-700 border-amber-200"
                                  >
                                    Sự kiện quan trọng
                                  </Badge>
                                )}
                              </div>
                              <p className={`font-medium ${isSelected ? (event.isImportant ? "text-red-800" : "text-blue-800") : "text-slate-700"}`}>
                                {event.title}
                              </p>
                              <p className="text-sm text-slate-500 mt-1 line-clamp-2">
                                {event.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Separator className="bg-slate-200" />

      {/* ========================================== */}
      {/* SECTION: DÒNG THỜI GIAN LỊCH SỬ CHI TIẾT */}
      {/* ========================================== */}
      <HistoricalTimeline />

      <Separator className="bg-slate-200" />

      {/* ========================================== */}
      {/* SECTION 3: BẢN CHẤT CUỘC KHÁNG CHIẾN */}
      {/* ========================================== */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 font-serif text-balance">
              Bản chất cuộc kháng chiến
            </h2>
          </motion.div>

          {/* Two-column layout: balanced 50-50 */}
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* LEFT COLUMN: Images + Historical Context */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {/* Image 1 */}
              <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://baokhanhhoa.vn/file/e7837c02857c8ca30185a8c39b582c03/082025/dh4_20250812204428.jpg?width=300&height=-&type=resize"
                  alt="Đại hội IV của Đảng (1976)"
                  className="w-full aspect-video object-cover"
                />
              </div>

              {/* Caption */}
              <p className="text-xs text-slate-500 text-center italic leading-relaxed">
                Đại hội IV của Đảng (1976) tổng kết thắng lợi của cuộc kháng chiến chống Mỹ cứu nước.
              </p>

              {/* Historical Context Box - Blue */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-3 space-y-2"
              >
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-blue-600" />
                  Bối cảnh lịch sử
                </h4>
                <div className="space-y-1.5 text-slate-700 text-xs leading-relaxed">
                  <p>
                    Cuộc kháng chiến (1954–1975) diễn ra trong bối cảnh Chiến tranh Lạnh, với Việt Nam trở thành điểm nóng của cuộc đấu tranh giữa lực lượng cách mạng và phản cách mạng.
                  </p>
                  <p>
                    Chiến thắng của Việt Nam có tác động lớn đến phong trào giải phóng dân tộc, hòa bình và tiến bộ xã hội trên toàn thế giới.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN: Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-5"
            >
              {/* Title & Description */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">
                  Chiến tranh giải phóng dân tộc và bảo vệ Tổ quốc chính nghĩa
                </h3>
                <div className="space-y-3 text-slate-700 text-base leading-relaxed">
                  <p>
                    Cuộc kháng chiến là cuộc chiến đấu nhằm <span className="font-semibold">bảo vệ thành quả Cách mạng Tháng Tám, bảo vệ miền Bắc xã hội chủ nghĩa, giải phóng miền Nam và thống nhất đất nước.</span>
                  </p>
                  <p>
                    Đường lối của Đảng là <span className="font-bold text-slate-900">giương cao ngọn cờ độc lập dân tộc gắn liền với chủ nghĩa xã hội</span>. Đường lối này phù hợp với thực tiễn cách mạng Việt Nam và bối cảnh quốc tế, qua đó phát huy <span className="font-semibold text-slate-900">sức mạnh tổng hợp của toàn dân tộc</span> và tranh thủ sự ủng hộ của các lực lượng tiến bộ trên thế giới.
                  </p>
                </div>
              </div>

              {/* Quote Box - Red */}
              <blockquote className="border-l-4 border-red-600 bg-red-50 pl-5 py-4 rounded-r-lg space-y-2">
                <div className="space-y-2">
                  <p className="text-slate-600 text-sm font-semibold">
                    Đại hội IV của Đảng (1976) khẳng định:
                  </p>
                  <p className="text-slate-800 italic leading-relaxed text-base">
                    "Thắng lợi của nhân dân ta trong cuộc kháng chiến chống Mỹ cứu nước đi vào lịch sử thế giới như một <span className="font-bold text-red-900">chiến công vĩ đại của thế kỷ XX</span>, một sự kiện có <span className="font-bold text-red-900">tầm quan trọng quốc tế to lớn</span> và có <span className="font-bold text-red-900">tính thời đại sâu sắc.</span>"
                  </p>
                </div>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      <Separator className="bg-slate-200" />


      <Separator className="bg-slate-200" />

      {/* ========================================== */}
      {/* SECTION 5: ĐÁNH GIÁ - Ý NGHĨA QUỐC TẾ */}
      {/* ========================================== */}
      <EvaluationSection />

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-100 border-t border-slate-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-500 text-sm">
            Thuyết trình Lịch sử Việt Nam - Cuộc kháng chiến chống Mỹ cứu nước (1954-1975)
          </p>
        </div>
      </footer>
    </main>
  )
}
