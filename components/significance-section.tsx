"use client"

import { Flag, TrendingUp, Users, Award, Globe, Sparkles } from "lucide-react"

export function SignificanceSection() {
  return (
    <section id="significance" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full mb-4">
            Phần 3: 30/4/1975
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ý Nghĩa Lịch Sử của Cuộc Kháng Chiến
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thắng lợi vĩ đại để lại những giá trị to lớn, vượt xa phạm vi một quốc gia
          </p>
        </div>

        {/* Hero Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl p-6 border-2 border-red-500/20">
            <div className="text-4xl mb-2">📅</div>
            <div className="text-3xl font-bold text-foreground mb-1">21 năm</div>
            <div className="text-sm text-muted-foreground">Kháng chiến chống Mỹ</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-6 border-2 border-blue-500/20">
            <div className="text-4xl mb-2">⚔️</div>
            <div className="text-3xl font-bold text-foreground mb-1">30 năm</div>
            <div className="text-sm text-muted-foreground">Chiến tranh giải phóng</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border-2 border-green-500/20">
            <div className="text-4xl mb-2">🔗</div>
            <div className="text-3xl font-bold text-foreground mb-1">117 năm</div>
            <div className="text-sm text-muted-foreground">Ách thống trị chấm dứt</div>
          </div>
        </div>

        {/* For Vietnam */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
              <Flag className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Đối với Việt Nam</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    Kết thúc Vẻ vang
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Chấm dứt 21 năm kháng chiến chống Mỹ và 30 năm chiến tranh giải phóng dân tộc, 
                    kết thúc ách thống trị của chủ nghĩa thực dân, đế quốc kéo dài 117 năm.
                  </p>
                </div>
              </div>
              <div className="space-y-2 mt-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span>Độc lập hoàn toàn</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span>Thống nhất đất nước</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span>Chủ quyền toàn vẹn</span>
                </div>
              </div>
            </div>

            <div className="group bg-card rounded-2xl p-8 border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Sparkles className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    Mở ra Kỷ nguyên Mới
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Kỷ nguyên độc lập, thống nhất và cả nước cùng đi lên chủ nghĩa xã hội, 
                    nhân dân lao động làm chủ vận mệnh của mình.
                  </p>
                </div>
              </div>
              <div className="space-y-2 mt-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  <span>Tự do và độc lập</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  <span>Nhân dân làm chủ</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  <span>Xây dựng CNXH</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* For The World */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <Globe className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Đối với Thế giới</h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl p-6 border-2 border-blue-500/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-4">💥</div>
              <h4 className="text-lg font-bold text-foreground mb-3">
                Phá sản Chiến lược Mỹ
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Làm phá sản các chiến lược chiến tranh của đế quốc Mỹ, làm suy yếu trận địa 
                của chủ nghĩa đế quốc, phá vỡ hệ thống thuộc địa mới.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl p-6 border-2 border-green-500/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-4">✊</div>
              <h4 className="text-lg font-bold text-foreground mb-3">
                Cổ vũ Phong trào
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Cổ vũ mạnh mẽ phong trào đấu tranh vì hòa bình, độc lập dân tộc, 
                dân chủ và tiến bộ xã hội của nhân dân thế giới.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-2xl p-6 border-2 border-red-500/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-4">📉</div>
              <h4 className="text-lg font-bold text-foreground mb-3">
                Thất bại Lớn nhất
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Được đánh giá là "thất bại lớn nhất trong lịch sử nước Mỹ", 
                làm đảo lộn chiến lược toàn cầu của đế quốc Mỹ.
              </p>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-12 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-2xl p-8 border-2 border-primary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 text-[200px] leading-none text-primary/5 font-bold select-none">"</div>
          <div className="relative">
            <div className="flex items-start gap-4">
              <Users className="h-10 w-10 text-primary shrink-0" />
              <div>
                <p className="text-lg text-foreground font-medium leading-relaxed mb-4">
                  "Thắng lợi ngày 30/4/1975 là một mốc son chói lọi trong lịch sử dân tộc, 
                  khẳng định ý chí kiên cường và sức mạnh to lớn của nhân dân Việt Nam 
                  dưới sự lãnh đạo sáng suốt của Đảng."
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
                  <span className="text-sm text-muted-foreground font-medium">Ý nghĩa lịch sử</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
