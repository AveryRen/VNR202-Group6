"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ExternalLink } from "lucide-react"

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

// International support images data
const internationalImages = [
  {
    src: "https://upload.wikimedia.org/wikipedia/en/5/52/Flower_Power_by_Bernie_Boston.jpg",
    alt: "Phong trào phản chiến tại Mỹ"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Vietnam_War_protestors_at_the_March_on_the_Pentagon.jpg/960px-Vietnam_War_protestors_at_the_March_on_the_Pentagon.jpg",
    alt: "Biểu tình phản chiến"
  },
  {
    src: "https://cdn.nhandan.vn/images/a66ff20f6c1e5a179e007244f7bfd5c8093994b3a6fe68fa737ee3492873e0983333959ce676c445fcb98974f384e251feea9950fbfbff513813d4a38a660b53/img-0214-4550-1475.jpeg",
    alt: "Ủng hộ Việt Nam trên thế giới"
  },
  {
    src: "https://uploads.nguoidothi.net.vn/content/42c9a59b-9243-4570-9503-d3c2993e9a73.jpg",
    alt: "Phong trào phản chiến tại châu Âu"
  }
]

// Numbered arguments data
const argumentsData = [
  {
    number: 1,
    text: "Đây trước hết là cuộc chiến tranh giải phóng dân tộc của Việt Nam nhằm giành độc lập và thống nhất đất nước."
  },
  {
    number: 2,
    text: "Cuộc chiến gắn liền với phong trào cách mạng thế giới và nhận được sự ủng hộ rộng rãi từ các nước xã hội chủ nghĩa, phong trào giải phóng dân tộc và phong trào phản chiến."
  },
  {
    number: 3,
    text: "Chiến thắng của Việt Nam trở thành biểu tượng đấu tranh chống chủ nghĩa đế quốc trong thế kỷ XX."
  }
]

export function EvaluationSection() {
  return (
    <div className="space-y-0">
      {/* ========================================== */}
      {/* SECTION 1: Ý NGHĨA QUỐC TẾ */}
      {/* ========================================== */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-blue-50/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <Badge className="mb-4 px-4 py-2 bg-blue-100 text-blue-800 border-blue-200">
              Đánh giá
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 font-serif text-balance">
              Ý nghĩa quốc tế của cuộc kháng chiến
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {/* LEFT CARD: Đối với Việt Nam */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full rounded-2xl border-2 border-slate-200 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 lg:p-8">
                  {/* Large image */}
                  <div className="relative w-full h-56 lg:h-64 mb-6 rounded-xl overflow-hidden shadow-md">
                    <Image
                      src="https://media-cdn-v2.laodong.vn/storage/newsportal/2019/4/30/730684/Bbwnygs.jpg"
                      alt="Chiến thắng 30/4/1975"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Heading */}
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">
                    Đối với Việt Nam
                  </h3>

                  {/* Bullet list */}
                  <ul className="space-y-4">
                    {[
                      "Kết thúc 21 năm kháng chiến chống Mỹ.",
                      "Hoàn thành thống nhất đất nước, mở ra kỷ nguyên độc lập và xây dựng đất nước.",
                      "Củng cố niềm tin vào sức mạnh đoàn kết toàn dân tộc."
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0" />
                        <span className="text-slate-600 text-lg leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* RIGHT CARD: Đối với thế giới */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full rounded-2xl border-2 border-slate-200 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 lg:p-8">
                  {/* 2x2 Image grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {internationalImages.map((img, index) => (
                      <a
                        key={index}
                        href={img.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative h-28 lg:h-32 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                          <ExternalLink className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Caption */}
                  <p className="text-sm text-slate-500 text-center italic mb-6">
                    Phong trào phản chiến và ủng hộ Việt Nam tại Mỹ, Thụy Điển và Pháp
                  </p>

                  {/* Heading */}
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">
                    Đối với thế giới
                  </h3>

                  {/* Bullet list */}
                  <ul className="space-y-4">
                    {[
                      "Làm thất bại một bộ phận quan trọng trong chiến lược toàn cầu của Mỹ.",
                      "Cổ vũ phong trào giải phóng dân tộc tại châu Á, châu Phi, Mỹ Latinh.",
                      "Góp phần làm suy yếu hệ thống thực dân mới và đẩy mạnh phong trào phản chiến."
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 shrink-0" />
                        <span className="text-slate-600 text-lg leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Separator className="bg-slate-200" />

      {/* ========================================== */}
      {/* SECTION 2: NHẬN ĐỊNH */}
      {/* ========================================== */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <Badge className="mb-4 px-4 py-2 bg-amber-100 text-amber-800 border-amber-200">
              Nhận định
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 font-serif text-balance">
              Cuộc chiến của Việt Nam hay của nhân loại?
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <Card className="rounded-2xl border-2 border-slate-200 bg-white shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2">
                  {/* LEFT: Historical image */}
                  <div className="relative p-6 lg:p-8">
                    <div className="relative w-full h-80 lg:h-full min-h-[320px] rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                      <Image
                        src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https%3A%2F%2Farc-anglerfish-washpost-prod-washpost.s3.amazonaws.com%2Fpublic%2FL2FXZDHL2FHPBP756ZEJUTEAXU.jpeg&w=1440"
                        alt="The Terror of War - Nick Ut (1972)"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                    <p className="text-sm text-slate-500 text-center italic mt-4">
                      Bức ảnh &ldquo;The Terror of War&rdquo; của Nick Ut (1972) - biểu tượng phản chiến toàn cầu.
                    </p>
                  </div>

                  {/* RIGHT: Numbered arguments */}
                  <div className="p-6 lg:p-8 flex flex-col justify-center bg-gradient-to-br from-slate-50 to-blue-50/50">
                    <div className="space-y-8">
                      {argumentsData.map((arg) => (
                        <motion.div
                          key={arg.number}
                          className="flex gap-5"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: arg.number * 0.15 }}
                        >
                          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-md">
                            {arg.number}
                          </div>
                          <p className="text-slate-700 text-lg leading-relaxed pt-2">
                            {arg.text}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Separator className="bg-slate-200" />

      {/* ========================================== */}
      {/* SECTION 3: KẾT LUẬN */}
      {/* ========================================== */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50/30 to-slate-50">
        <div className="max-w-[900px] mx-auto">
          <motion.div
            className="text-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 font-serif text-balance">
              Kết luận
            </h2>
          </motion.div>

          {/* Historical Image */}
          <motion.div
            className="mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <div className="flex flex-col items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://suckhoedoisong.qltns.mediacdn.vn/thumb_w/640/324455921873985536/2025/4/28/ttxvn2504chienthang1-17458303259792070848090.jpg"
                alt="Chiến sỹ Bùi Quang Thận cắm cờ trên nóc Dinh Độc Lập ngày 30/4/1975"
                className="w-full aspect-video object-cover rounded-xl shadow-lg"
              />
              <p className="text-sm text-slate-500 italic text-center mt-3">
                Chiến sỹ Bùi Quang Thận (cầm cờ, phía trước) cùng các chiến sỹ Quân đoàn 2 tiến vào cắm cờ trên nóc Dinh Độc Lập lúc 11 giờ 30 phút ngày 30/4/1975. (Ảnh: Vũ Tạo/TTXVN)
              </p>
            </div>
          </motion.div>

          {/* Conclusion Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <div className="space-y-6 text-center">
              <p className="text-lg lg:text-xl text-slate-700 leading-relaxed">
                Cuộc kháng chiến chống Mỹ cứu nước (1954-1975) không chỉ là cuộc chiến riêng của Việt Nam, mà còn là một bộ phận của phong trào đấu tranh vì độc lập dân tộc, hòa bình và tiến bộ của nhân loại.
              </p>

              <p className="text-lg lg:text-xl text-slate-800 leading-relaxed font-medium">
                Lịch sử khẳng định rằng một dân tộc nhỏ vẫn có thể chiến thắng siêu cường nếu có đường lối đúng đắn, sự đoàn kết dân tộc và sự đồng tình ủng hộ của bạn bè quốc tế.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
