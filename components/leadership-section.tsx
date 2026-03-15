"use client"

import { Target, TrendingUp, MapPin, Calendar } from "lucide-react"

const leadershipItems = [
  {
    icon: Target,
    title: "Quyết tâm Chiến lược",
    date: "Tháng 3/1965 - Tháng 12/1965",
    description: "Hội nghị Trung ương lần thứ 11 và 12 khẳng định quyết tâm 'đánh thắng giặc Mỹ xâm lược' trong mọi tình huống.",
    highlights: [
      "Nêu cao khẩu hiệu quyết chiến quyết thắng",
      "Kiên quyết đánh bại cuộc chiến tranh xâm lược",
      "Động viên toàn dân tộc kháng chiến",
    ],
    color: "from-red-500 to-orange-500",
  },
  {
    icon: MapPin,
    title: "Mối quan hệ Hai miền",
    date: "1965 - 1975",
    description: "Đảng xác định miền Nam là tiền tuyến lớn, miền Bắc là hậu phương lớn. Kháng chiến là nhiệm vụ thiêng liêng của cả dân tộc.",
    highlights: [
      "Miền Nam: Tiền tuyến lớn",
      "Miền Bắc: Hậu phương lớn",
      "Toàn dân tộc cùng kháng chiến",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "Phương châm Chiến lược",
    date: "1965 - 1973",
    description: "Kiên trì đấu tranh quân sự kết hợp chính trị, vận dụng ba mũi giáp công: quân sự, chính trị, binh vận.",
    highlights: [
      "Đấu tranh quân sự + chính trị",
      "Ba mũi giáp công hiệu quả",
      "Con đường bạo lực cách mạng",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Calendar,
    title: "Kế hoạch Giải phóng",
    date: "Cuối 1974 - Đầu 1975",
    description: "Bộ Chính trị đề ra kế hoạch giải phóng miền Nam, sẵn sàng nắm bắt thời cơ để giải phóng hoàn toàn trong năm 1975.",
    highlights: [
      "Kế hoạch 2 năm 1975-1976",
      "Linh hoạt nắm bắt thời cơ",
      "Quyết chiến chiến lược",
    ],
    color: "from-purple-500 to-pink-500",
  },
]

export function LeadershipSection() {
  return (
    <section id="leadership" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full mb-4">
            Phần 1: 1965–1975
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Đường Lối Lãnh Đạo Cách Mạng của Đảng
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trước sự leo thang chiến tranh của đế quốc Mỹ, Đảng đã đề ra những quyết sách chiến lược quan trọng
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {leadershipItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Gradient Background */}
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${item.color}`} />
              
              <div className="p-8">
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  {item.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-3 group/item">
                      <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-primary/20 transition-colors">
                        <span className="text-xs font-bold text-primary">✓</span>
                      </span>
                      <span className="text-sm text-foreground group-hover/item:text-primary transition-colors">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
            </div>
          ))}
        </div>

        {/* Key Takeaway */}
        <div className="mt-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0">
              <span className="text-2xl">💡</span>
            </div>
            <div>
              <h4 className="text-lg font-bold text-foreground mb-2">Điểm Nhấn Quan Trọng</h4>
              <p className="text-muted-foreground leading-relaxed">
                Đường lối lãnh đạo của Đảng trong giai đoạn 1965-1975 thể hiện sự sáng tạo, linh hoạt nhưng kiên định với mục tiêu giải phóng dân tộc. Việc kết hợp chặt chẽ giữa đấu tranh quân sự và chính trị, cùng với sự phối hợp đồng bộ giữa hai miền đã tạo nên sức mạnh tổng hợp, góp phần quyết định vào thắng lợi cuối cùng.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
