"use client"

import { Shield, Heart, Globe2, Scale } from "lucide-react"

const natureItems = [
  {
    icon: Shield,
    title: "Cuộc đụng đầu Lịch sử",
    description: "Cuộc chiến đấu không khoan nhượng giữa lực lượng cách mạng và phản cách mạng tiêu biểu nhất của thời đại.",
    details: [
      "Tập trung các mâu thuẫn cơ bản của thế giới",
      "Đại diện cho phong trào giải phóng dân tộc",
      "Cuộc đấu tranh giữa hai hệ tư tưởng",
    ],
    color: "bg-gradient-to-br from-red-500/20 to-orange-500/20",
    borderColor: "border-red-500/30",
  },
  {
    icon: Heart,
    title: "Tính Chính nghĩa và Nhân văn",
    description: "Cuộc đấu tranh vì độc lập, tự do và quyền sống của con người, phù hợp với lương tri nhân loại tiến bộ.",
    details: [
      "Bảo vệ quyền tự quyết dân tộc",
      "Đấu tranh cho quyền sống con người",
      "Phù hợp với tinh thần nhân đạo",
    ],
    color: "bg-gradient-to-br from-pink-500/20 to-rose-500/20",
    borderColor: "border-pink-500/30",
  },
  {
    icon: Globe2,
    title: "Nhiệm vụ Quốc tế",
    description: "Thắng lợi không chỉ cho dân tộc mình mà còn góp phần bảo vệ phe xã hội chủ nghĩa và phong trào giải phóng.",
    details: [
      "Bảo vệ phe xã hội chủ nghĩa",
      "Cổ vũ phong trào giải phóng dân tộc",
      "Góp phần bảo vệ hòa bình thế giới",
    ],
    color: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
  },
]

export function NatureSection() {
  return (
    <section id="nature" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full mb-4">
            Phần 2
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Bản Chất và Tính Chất của Cuộc Kháng Chiến
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Một cuộc chiến tranh giải phóng dân tộc và bảo vệ Tổ quốc mang tính chất quốc tế điển hình
          </p>
        </div>

        {/* Main Definition */}
        <div className="mb-12 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-8 border-2 border-primary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          
          <div className="relative flex items-start gap-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shrink-0">
              <Scale className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Bản Chất Cơ Bản
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cuộc kháng chiến chống Mỹ, cứu nước là một{" "}
                <span className="font-semibold text-primary">cuộc chiến tranh giải phóng dân tộc</span> và{" "}
                <span className="font-semibold text-accent">bảo vệ Tổ quốc</span>, 
                đồng thời mang{" "}
                <span className="font-semibold text-primary">tính chất quốc tế điển hình</span> trong bối cảnh 
                phong trào cách mạng thế giới thế kỷ XX.
              </p>
            </div>
          </div>
        </div>

        {/* Three Main Characteristics */}
        <div className="grid md:grid-cols-3 gap-8">
          {natureItems.map((item, index) => (
            <div
              key={index}
              className={`group relative ${item.color} rounded-2xl p-8 border-2 ${item.borderColor} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {item.description}
              </p>

              {/* Details */}
              <div className="space-y-3">
                {item.details.map((detail, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">{i + 1}</span>
                    </span>
                    <span className="text-sm text-foreground">{detail}</span>
                  </div>
                ))}
              </div>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all" />
            </div>
          ))}
        </div>

        {/* Conclusion Box */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-card border-2 border-primary/30 rounded-2xl p-6 hover:shadow-xl transition-all">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🎯</span>
              <h4 className="text-lg font-bold text-foreground">Mục Tiêu Chiến Lược</h4>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Giải phóng dân tộc, thống nhất đất nước, xây dựng chủ nghĩa xã hội, đồng thời góp phần vào cuộc đấu tranh chung của nhân dân thế giới.
            </p>
          </div>

          <div className="bg-card border-2 border-accent/30 rounded-2xl p-6 hover:shadow-xl transition-all">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🌟</span>
              <h4 className="text-lg font-bold text-foreground">Giá Trị Cốt Lõi</h4>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Độc lập dân tộc gắn liền với chủ nghĩa xã hội, quyền dân tộc kết hợp với quyền con người, lợi ích dân tộc hòa quyện với lợi ích quốc tế.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
