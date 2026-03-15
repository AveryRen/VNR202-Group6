import { Quote } from "lucide-react"

export function ConclusionSection() {
  return (
    <section id="conclusion" className="py-24 bg-foreground text-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Quote className="h-12 w-12 mx-auto text-primary opacity-50" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          Kết Luận
        </h2>

        <p className="text-xl sm:text-2xl leading-relaxed text-background/90 text-pretty mb-8">
          Cuộc kháng chiến chống Mỹ cơ bản là{" "}
          <span className="font-semibold text-primary">
            một cuộc đấu tranh giải phóng dân tộc
          </span>{" "}
          của nhân dân Việt Nam, nhưng nó cũng có{" "}
          <span className="font-semibold text-primary">
            ý nghĩa quốc tế
          </span>{" "}
          và trở thành một phần của phong trào cách mạng rộng lớn hơn trong thế kỷ 20.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-12">
          <span className="px-4 py-2 bg-background/10 rounded-full text-sm font-medium">
            Độc lập Dân tộc
          </span>
          <span className="px-4 py-2 bg-background/10 rounded-full text-sm font-medium">
            Đoàn kết Toàn cầu
          </span>
          <span className="px-4 py-2 bg-background/10 rounded-full text-sm font-medium">
            Tinh thần Cách mạng
          </span>
          <span className="px-4 py-2 bg-background/10 rounded-full text-sm font-medium">
            Di sản Lịch sử
          </span>
        </div>
      </div>
    </section>
  )
}
