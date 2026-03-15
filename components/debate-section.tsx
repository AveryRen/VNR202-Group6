import { Flag, Globe } from "lucide-react"

const vietnamArguments = [
  "Mục tiêu chính là độc lập dân tộc và thống nhất đất nước",
  "Nhân dân Việt Nam là lực lượng chiến đấu chính",
  "Chiến thắng phụ thuộc chủ yếu vào quyết tâm và chiến lược nội bộ",
  "Sự lãnh đạo và tổ chức mang bản sắc Việt Nam",
]

const globalArguments = [
  "Sự hỗ trợ quốc tế mạnh mẽ từ các nước xã hội chủ nghĩa",
  "Phong trào phản chiến toàn cầu rộng lớn tại Mỹ, Châu Âu và Châu Á",
  "Việt Nam trở thành biểu tượng kháng chiến chống chủ nghĩa đế quốc",
  "Một phần của cuộc đấu tranh tư tưởng rộng lớn hơn trong Chiến tranh Lạnh",
]

export function DebateSection() {
  return (
    <section id="debate" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full mb-4">
            Thảo luận
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Chúng ta Nên Hiểu Cuộc Chiến Này Như Thế Nào?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Xét hai quan điểm về bản chất của Chiến tranh Việt Nam
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Vietnam's War Column */}
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="bg-primary p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                  <Flag className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-foreground">
                    Cuộc Chiến của Việt Nam
                  </h3>
                  <p className="text-primary-foreground/80 text-sm">
                    Cuộc đấu tranh giải phóng dân tộc
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {vietnamArguments.map((argument, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">
                        {index + 1}
                      </span>
                    </span>
                    <span className="text-foreground">{argument}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Global Movement Column */}
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="bg-accent p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent-foreground/20 rounded-lg flex items-center justify-center">
                  <Globe className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-accent-foreground">
                    Phần của Phong trào Toàn cầu
                  </h3>
                  <p className="text-accent-foreground/80 text-sm">
                    Một sự nghiệp cách mạng quốc tế
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {globalArguments.map((argument, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-accent">
                        {index + 1}
                      </span>
                    </span>
                    <span className="text-foreground">{argument}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
