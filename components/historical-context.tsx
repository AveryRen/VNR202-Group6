import { FileText, Users, Flame } from "lucide-react"

const contextItems = [
  {
    icon: FileText,
    title: "Hiệp định Geneve (1954)",
    description:
      "Việt Nam tạm thời bị chia cắt ở vĩ tuyến 17 sau Hiệp định Geneve, với kế hoạch tổ chức bầu cử thống nhất.",
  },
  {
    icon: Users,
    title: "Sự can thiệp của Mỹ tăng dần",
    description:
      "Hoa Kỳ liên tục tăng cường sự hiện diện quân sự và hỗ trợ cho chính phủ miền Nam Việt Nam suốt cuối những năm 1950 và đầu những năm 1960.",
  },
  {
    icon: Flame,
    title: "Leo thang thành Chiến tranh Toàn diện",
    description:
      "Đến năm 1965, những gì bắt đầu như sự hỗ trợ tư vấn đã leo thang thành một cuộc can thiệp quân sự lớn với hàng trăm nghìn lính Mỹ được triển khai.",
  },
]

export function HistoricalContext() {
  return (
    <section id="context" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full mb-4">
            Bối cảnh
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Bối Cảnh Lịch Sử
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hiểu về tình hình sau năm 1954 dẫn đến Chiến tranh Việt Nam
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {contextItems.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
