import { Users2, Target, Globe2 } from "lucide-react"

const strategies = [
  {
    icon: Users2,
    title: "Chiến lược Chiến tranh Nhân dân",
    description:
      "Toàn bộ nhân dân tham gia kháng chiến thông qua đấu tranh quân sự, chính trị và ngoại giao. Cách tiếp cận toàn diện này đoàn kết tất cả các tầng lớp trong xã hội Việt Nam.",
    highlights: ["Kháng chiến quân sự", "Đấu tranh chính trị", "Nỗ lực ngoại giao"],
  },
  {
    icon: Target,
    title: "Hai Nhiệm vụ Chiến lược",
    description:
      "Phương pháp tiếp cận kép tối đa hóa hiệu quả trên khắp quốc gia bị chia cắt.",
    highlights: [
      "Miền Bắc: Xây dựng Chủ nghĩa xã hội & hỗ trợ miền Nam",
      "Miền Nam: Đấu tranh cách mạng chống chính phủ do Mỹ hậu thuẫn",
    ],
  },
  {
    icon: Globe2,
    title: "Đoàn kết Quốc gia và Quốc tế",
    description:
      "Việt Nam hụy động cả sức mạnh nội bộ và các phong trào đoàn kết toàn cầu, kết hợp quyết tâm yêu nước với sự hỗ trợ quốc tế.",
    highlights: ["Hụy động nội bộ", "Đoàn kết quốc tế", "Mạng lưới hỗ trợ toàn cầu"],
  },
]

export function RevolutionaryStrategy() {
  return (
    <section id="strategy" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full mb-4">
            1965–1975
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Chiến Lược Lãnh Đạo Cách Mạng
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Các phương pháp chiến lược chính hình thành phong trào kháng chiến
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {strategies.map((strategy, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <strategy.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {strategy.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {strategy.description}
              </p>
              <ul className="space-y-2">
                {strategy.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                    <span className="text-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
