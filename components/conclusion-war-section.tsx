"use client"

import { CheckCircle2, TrendingUp, Heart, Award } from "lucide-react"

const conclusions = [
  {
    icon: CheckCircle2,
    title: "Không phải Cuộc chiến Riêng",
    description: "Đây là một phần hữu cơ, là mũi nhọn tấn công của phong trào cách mạng thế giới thế kỷ XX.",
    points: [
      "Chiến đấu bằng sức mạnh dân tộc",
      "Được ủng hộ từ phe xã hội chủ nghĩa",
      "Nhân dân yêu chuộng hòa bình toàn cầu",
      "Phong trào phản chiến tại chính Mỹ",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "Biểu tượng của Thời đại",
    description: "Minh chứng cho việc một dân tộc nhỏ, kinh tế nghèo nhưng có đường lối đúng đắn và đoàn kết có thể chiến thắng.",
    points: [
      "Dân tộc nhỏ bé về diện tích",
      "Kinh tế còn nghèo nàn lạc hậu",
      "Đường lối đúng đắn, sáng tạo",
      "Đoàn kết toàn dân tộc",
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Heart,
    title: "Giá trị Hòa bình",
    description: "Bản chất là cuộc đấu tranh bảo vệ hòa bình bền vững - chỉ có độc lập thực sự mới mang lại hòa bình.",
    points: [
      "Hòa bình trên cơ sở độc lập",
      "Quyền tự quyết dân tộc",
      "Không chấp nhận ngoại xâm",
      "Hòa bình chân chính cho nhân dân",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
]

export function ConclusionWarSection() {
  return (
    <section id="conclusion" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full mb-4">
            Phần 4: Kết luận
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Nhận Định về Tính Chất và Tầm Vóc Cuộc Chiến
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Từ các dữ kiện lịch sử, đưa ra nhận định toàn diện về cuộc kháng chiến vĩ đại
          </p>
        </div>

        {/* Main Thesis */}
        <div className="mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl blur-2xl" />
          <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 border-2 border-primary/20">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shrink-0">
                <Award className="h-10 w-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Luận Điểm Trung Tâm
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Cuộc kháng chiến chống Mỹ, cứu nước của nhân dân Việt Nam (1965-1975) 
                  <span className="font-semibold text-primary"> không phải là một cuộc chiến tranh riêng lẻ </span>
                  của dân tộc Việt Nam, mà là{" "}
                  <span className="font-semibold text-accent">một phần không thể tách rời</span> của 
                  phong trào cách mạng thế giới, mang{" "}
                  <span className="font-semibold text-primary">tính chất quốc tế sâu sắc</span> và có{" "}
                  <span className="font-semibold text-accent">tầm vóc thời đại</span>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Three Main Points */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {conclusions.map((item, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl border-2 border-border hover:border-primary/50 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${item.gradient}`} />
              
              <div className="p-8">
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon className="h-7 w-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Points */}
                <div className="space-y-3">
                  {item.points.map((point, i) => (
                    <div key={i} className="flex items-start gap-3 group/item">
                      <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-primary/20 transition-colors">
                        <span className="text-xs font-bold text-primary">✓</span>
                      </span>
                      <span className="text-sm text-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final Summary */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border-2 border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🎯</span>
              <h4 className="text-xl font-bold text-foreground">Câu Trả Lời</h4>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Cuộc kháng chiến chống Mỹ vừa là{" "}
              <span className="font-semibold text-primary">cuộc chiến của dân tộc Việt Nam</span>, 
              vừa là{" "}
              <span className="font-semibold text-accent">một phần của phong trào giải phóng toàn cầu</span>.
              Đây không phải là hai yếu tố đối lập mà là sự kết hợp hữu cơ, làm nên sức mạnh và ý nghĩa to lớn của thắng lợi.
            </p>
          </div>

          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 border-2 border-accent/20">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">💫</span>
              <h4 className="text-xl font-bold text-foreground">Bài Học Lịch Sử</h4>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Thắng lợi là minh chứng cho sức mạnh của{" "}
              <span className="font-semibold text-primary">đoàn kết dân tộc</span> kết hợp với{" "}
              <span className="font-semibold text-accent">đoàn kết quốc tế</span>, 
              của ý chí kiên cường với đường lối sáng tạo, của chính nghĩa với lực lượng nhân dân.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full px-8 py-4 border-2 border-primary/20">
            <span className="text-2xl">🇻🇳</span>
            <p className="text-foreground font-semibold">
              Một dân tộc nhỏ bé đã viết nên trang sử vàng chói lọi
            </p>
            <span className="text-2xl">⭐</span>
          </div>
        </div>
      </div>
    </section>
  )
}
