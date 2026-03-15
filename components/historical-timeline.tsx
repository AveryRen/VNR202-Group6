"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Play,
  Calendar,
  FileText,
  Target,
  MapPin,
  Lightbulb,
  Flame
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"

// Timeline data structure - with Phase Framework (overview) + Event Details
const historicalTimeline: PhaseData[] = [
  {
    period: "1965 – 1968",
    title: "Đánh thắng chiến lược \"Chiến tranh cục bộ\"",
    color: "blue",
    framework: [
      {
        label: "Bối cảnh",
        icon: <MapPin className="w-5 h-5" />,
        content: "Mỹ đổ quân trực tiếp vào Đà Nẵng (8/3/1965) và đánh phá miền Bắc bằng không quân, hải quân nhằm ngăn chặn sự chi viện.",
        color: "blue"
      },
      {
        label: "Đường lối",
        icon: <Target className="w-5 h-5" />,
        content: "Hội nghị Trung ương 11, 12 hạ quyết tâm chiến lược: Động viên lực lượng cả nước, kiên quyết đánh bại cuộc chiến tranh xâm lược của đế quốc Mỹ.",
        color: "blue"
      },
      {
        label: "Phương châm",
        icon: <Lightbulb className="w-5 h-5" />,
        content: "Kháng chiến toàn dân, toàn diện, lâu dài, dựa vào sức mình. Kết hợp quân sự với chính trị, thực hiện 'ba mũi giáp công'.",
        color: "blue"
      },
      {
        label: "Bước ngoặt",
        icon: <Flame className="w-5 h-5" />,
        content: "Tết Mậu Thân 1968: Phá sản chiến lược 'Chiến tranh cục bộ', buộc Mỹ đàm phán tại Paris (13/5/1968).",
        color: "blue"
      }
    ],
    events: [
      {
        year: "8/3/1965",
        title: "Mỹ đổ bộ Đà Nẵng",
        description:
          "Mỹ đưa lính thủy đánh bộ vào Đà Nẵng, chính thức mở rộng chiến tranh trực tiếp tại miền Nam và leo thang đánh phá miền Bắc.",
        links: [
          {
            title: "Ảnh lính Mỹ đổ bộ Đà Nẵng",
            url: "https://viettimes.vn/chum-anh-doc-linh-thuy-danh-bo-my-do-bo-len-da-nang-50-nam-truoc-post1982.html"
          }
        ],
        images: [
          {
            url: "https://cdn.viettimes.vn/images/0b161dfe49358bedb9434586e69c88e54ffd823e980c7f77a1cfb5255a4674c6fa95dbce1c372bf3bf0e1c94a89f1a9d0af3943b89e727ce30bb33292160eb54/danang02_1032015.jpg",
            caption: "Lính Mỹ đổ bộ vào bãi biển Đà Nẵng ngày 8/3/1965",
            relatedLink: "https://viettimes.vn/chum-anh-doc-linh-thuy-danh-bo-my-do-bo-len-da-nang-50-nam-truoc-post1982.html"
          }
        ]
      },
      {
        year: "1965",
        title: "Hội nghị Trung ương 11 và 12",
        description:
          "Trung ương Đảng xác định quyết tâm chiến lược đánh bại cuộc chiến tranh xâm lược của Mỹ trong bất cứ tình huống nào.",
        policy:
          "Quyết tâm chiến lược: \"Động viên lực lượng của cả nước, kiên quyết đánh bại cuộc chiến tranh xâm lược của đế quốc Mỹ trong bất cứ tình huống nào\".",
        strategy:
          "Phương châm chiến lược là kháng chiến toàn dân, toàn diện, lâu dài, dựa vào sức mình là chính. Đảng chủ trương kết hợp đấu tranh quân sự và chính trị, thực hiện \"ba mũi giáp công\" trên cả ba vùng chiến lược.",
        links: [
          {
            title: "Hội nghị lần thứ 12 BCH TW - Thời gian và ý nghĩa",
            url: "https://thuvienphapluat.vn/phap-luat-nha-dat/hoi-nghi-lan-thu-12-ban-chap-hanh-trung-uong-dang-khoa-iii-hop-vao-thoi-gian-nao-1305.html"
          },
          {
            title: "Hội nghị lần thứ 12 BCH TW Đảng",
            url: "https://thuvienphapluat.vn/hoi-dap-phap-luat/hoi-nghi-lan-thu-12-ban-chap-hanh-trung-uong-dang-khoa-iii-khang-dinh-nhiem-vu-chong-my-cuu-nuoc-hi-138045459.html"
          }
        ],
        images: [
          {
            url: "https://cdn.thuvienphapluat.vn/uploads/nhadat/2025/NVT/dai-hoi-iii.jpg",
            caption: "Hội nghị Trung ương Đảng Khóa III",
            relatedLink: "https://thuvienphapluat.vn/phap-luat-nha-dat/hoi-nghi-lan-thu-12-ban-chap-hanh-trung-uong-dang-khoa-iii-hop-vao-thoi-gian-nao-1305.html"
          },
          {
            url: "https://cdn.thuvienphapluat.vn//uploads/Hoidapphapluat/2025/TTTT/250316/BCH-TW-dang-III.jpg",
            caption: "Hội nghị lần thứ 12 Ban Chấp hành Trung ương Đảng Khóa III khẳng định: 'Nhiệm vụ chống Mỹ, cứu nước là nhiệm vụ thiêng liêng của cả dân tộc'",
            relatedLink: "https://thuvienphapluat.vn/hoi-dap-phap-luat/hoi-nghi-lan-thu-12-ban-chap-hanh-trung-uong-dang-khoa-iii-khang-dinh-nhiem-vu-chong-my-cuu-nuoc-hi-138045459.html"
          }
        ]
      },
      {
        year: "1968",
        title: "Tổng tiến công và nổi dậy Tết Mậu Thân",
        description:
          "Cuộc tổng tiến công trên toàn miền Nam đã tạo bước ngoặt chiến lược buộc Mỹ phải xuống thang chiến tranh.",
        turningPoint: "Phá sản chiến lược \"Chiến tranh cục bộ\" của Mỹ và buộc Mỹ ký Hiệp định Paris ngày 13/5/1968.",
        links: [
          {
            title: "Tầm vóc và ý nghĩa lịch sử",
            url: "https://www.qdnd.vn/quoc-phong-an-ninh/nghe-thuat-quan-su-vn/cuoc-tong-tien-cong-va-noi-day-tet-mau-than-1968-tam-voc-va-y-nghia-lich-su-717338"
          }
        ],
        images: [
          {
            url: "https://file3.qdnd.vn/data/images/0/2023/01/26/trinhdung/16012018tcq01.jpg?dpi=150&quality=100&w=870",
            caption: "Đội võ trang Ban Tuyên huấn đặc khu Sài Gòn - Gia Định (T4) trước giờ xuất kích tham gia chiến dịch Tết Mậu Thân 1968",
            relatedLink: "https://www.qdnd.vn/quoc-phong-an-ninh/nghe-thuat-quan-su-vn/cuoc-tong-tien-cong-va-noi-day-tet-mau-than-1968-tam-voc-va-y-nghia-lich-su-717338"
          }
        ],
        video: "https://www.youtube.com/embed/6lolRxPcxro"
      }
    ]
  },
  {
    period: "1969 – 1972",
    title: "Đánh bại chiến lược \"Việt Nam hóa chiến tranh\"",
    color: "emerald",
    framework: [
      {
        label: "Bối cảnh",
        icon: <MapPin className="w-5 h-5" />,
        content: "Tổng thống Nixon thực hiện 'Việt Nam hóa chiến tranh' (dùng người Việt đánh người Việt) và mở rộng sang Lào, Campuchia.",
        color: "emerald"
      },
      {
        label: "Đường lối",
        icon: <Target className="w-5 h-5" />,
        content: "Hội nghị Trung ương 18 (1/1970) và Bộ Chính trị (6/1970) quyết định đẩy mạnh kháng chiến trên 3 mặt trận: quân sự, chính trị, ngoại giao.",
        color: "emerald"
      },
      {
        label: "Thắng lợi quân sự",
        icon: <Lightbulb className="w-5 h-5" />,
        content: "Phối hợp với Lào và Campuchia đánh bại hành quân 'Lam Sơn 719' (1971) và mở cuộc tiến công chiến lược 1972.",
        color: "emerald"
      },
      {
        label: "Đỉnh cao",
        icon: <Flame className="w-5 h-5" />,
        content: "'Điện Biên Phủ trên không' (12 ngày cuối 1972): Đập tan tập kích B.52, buộc Mỹ ký Hiệp định Paris (27/1/1973).",
        color: "emerald"
      }
    ],
    events: [
      {
        year: "1969",
        title: "Việt Nam hóa chiến tranh",
        description:
          "Chính quyền Tổng thống Nixon thực hiện chiến lược \"Việt Nam hóa chiến tranh\", dùng quân đội Sài Gòn làm lực lượng chủ yếu.",
        context:
          "Chính quyền Tổng thống Nixon thực hiện chiến lược \"Việt Nam hóa chiến tranh\", dùng quân đội Sài Gòn làm lực lượng chủ yếu, đồng thời mở rộng chiến tranh sang Lào và Campuchia, hình thành \"Đông Dương hóa chiến tranh\".",
        policy:
          "Hội nghị Trung ương 18 (1/1970) và quyết định của Bộ Chính trị (6/1970) xác định cần đẩy mạnh kháng chiến trên ba mặt trận: quân sự, chính trị và ngoại giao. Đảng chủ trương tăng cường liên minh chiến đấu giữa Việt Nam, Lào và Campuchia nhằm chống lại chiến lược mở rộng chiến tranh của Mỹ."
      },
      {
        year: "1971",
        title: "Chiến dịch Đường 9 – Nam Lào",
        description:
          "Quân giải phóng phối hợp với Lào đánh bại cuộc hành quân Lam Sơn 719 của quân đội Sài Gòn.",
        strategy:
          "Quân và dân Việt Nam phối hợp với lực lượng cách mạng Lào và Campuchia đánh bại nhiều cuộc hành quân lớn của Mỹ và chính quyền Sài Gòn. Đặc biệt là thất bại của chiến dịch Lam Sơn 719 năm 1971.",
        links: [
          {
            title: "Bài học cho sự nghiệp bảo vệ Tổ quốc",
            url: "https://www.qdnd.vn/quoc-phong-an-ninh/nghe-thuat-quan-su-vn/chien-thang-duong-9-nam-lao-1971-bai-hoc-cho-su-nghiep-xay-dung-va-bao-ve-to-quoc-hien-nay-654497"
          }
        ],
        images: [
          {
            url: "https://file.qdnd.vn/data/images/0/2021/03/18/thuthuytv/01%2010.jpg?dpi=150&quality=100&w=575",
            caption: "Đại tướng Võ Nguyên Giáp chủ trì bàn kế hoạch tác chiến, chuẩn bị Chiến dịch Đường 9-Nam Lào năm 1971. Ảnh tư liệu.",
            relatedLink: "https://www.qdnd.vn/quoc-phong-an-ninh/nghe-thuat-quan-su-vn/chien-thang-duong-9-nam-lao-1971-bai-hoc-cho-su-nghiep-xay-dung-va-bao-ve-to-quoc-hien-nay-654497"
          }
        ],
        video: "https://www.youtube.com/embed/lSn6doJCJwU"
      },
      {
        year: "1972",
        title: "Điện Biên Phủ trên không",
        description:
          "12 ngày đêm cuối năm 1972, quân dân miền Bắc đánh bại cuộc tập kích chiến lược bằng B52 của Mỹ.",
        turningPoint: "Chiến thắng \"Điện Biên Phủ trên không\" trong 12 ngày đêm cuối năm 1972 đã đập tan cuộc tập kích chiến lược bằng máy bay B52 của Mỹ, buộc Mỹ phải ký Hiệp định Paris ngày 27/1/1973.",
        links: [
          {
            title: "Hà Nội 12 ngày đêm",
            url: "https://nhandan.vn/special/HaNoi12ngaydem/index.html"
          }
        ],
        video: "https://www.youtube.com/embed/8rL4l5IG4xM"
      }
    ]
  },
  {
    period: "1973 – 1974",
    title: "Tạo thế và lực sau Hiệp định Paris",
    color: "amber",
    framework: [
      {
        label: "Ý nghĩa Hiệp định",
        icon: <MapPin className="w-5 h-5" />,
        content: "Đạt mục tiêu quan trọng hàng đầu: Buộc quân Mỹ và quân chư hầu rút hết khỏi miền Nam, thay đổi căn bản tương quan lực lượng.",
        color: "amber"
      },
      {
        label: "Đường lối",
        icon: <Target className="w-5 h-5" />,
        content: "Hội nghị Trung ương 21 (7/1973): 'Con đường cách mạng miền Nam là con đường bạo lực cách mạng', tích cực phản công.",
        color: "amber"
      },
      {
        label: "Chuẩn bị",
        icon: <Lightbulb className="w-5 h-5" />,
        content: "Các lực lượng cách mạng củng cố vùng giải phóng, tăng cường lực lượng quân sự và chuẩn bị cho các chiến dịch lớn.",
        color: "amber"
      },
      {
        label: "Đòn thăm dò",
        icon: <Flame className="w-5 h-5" />,
        content: "Chiến thắng Phước Long (6/1/1975) chứng minh khả năng tan rã quân Sài Gòn, Mỹ khó can thiệp trở lại.",
        color: "amber"
      }
    ],
    events: [
      {
        year: "1973",
        title: "Hiệp định Paris",
        description:
          "Mỹ cam kết rút toàn bộ quân đội và quân chư hầu khỏi miền Nam Việt Nam.",
        context:
          "Sau Hiệp định Paris, quân đội Mỹ và các lực lượng đồng minh buộc phải rút khỏi miền Nam Việt Nam, làm thay đổi căn bản tương quan lực lượng trên chiến trường.",
        impact: "Thay đổi tương quan lực lượng chiến lược có lợi cho cách mạng.",
        links: [
          {
            title: "Sự kiện người Mỹ cuối cùng rút khỏi Việt Nam",
            url: "https://vanhoavaphattrien.vn/su-kien-nguoi-my-cuoi-cung-rut-khoi-viet-nam-sau-hiep-dinh-paris-nam-1973-qua-loi-ke-cua-nghe-sy-uu-tu-tran-duy-hinh-a18191.html"
          },
          {
            title: "Hành trình đến Hiệp định Paris 1973",
            url: "https://www.qdnd.vn/tu-lieu-ho-so/ho-so/hanh-trinh-den-hiep-dinh-paris-1973-717204"
          },
          {
            title: "Phim tài liệu: Hội nghị Paris - Cuộc đàm phán lịch sử",
            url: "https://vtv.vn/video/phim-tai-lieu-hoi-nghi-paris-cuoc-dam-phan-lich-su-601336.htm"
          }
        ],
        images: [
          {
            url: "https://vanhoavaphattrien.vn/uploads/images/blog/photongbientap/2023/03/27/b2ah2-1679890279.jpg",
            caption: "Người Mỹ cuối cùng rút khỏi Việt Nam sau Hiệp định Paris năm 1973",
            relatedLink: "https://vanhoavaphattrien.vn/su-kien-nguoi-my-cuoi-cung-rut-khoi-viet-nam-sau-hiep-dinh-paris-nam-1973-qua-loi-ke-cua-nghe-sy-uu-tu-tran-duy-hinh-a18191.html"
          },
          {
            url: "https://vanhoavaphattrien.vn/uploads/images/2023/03/27/b3ahe3-1679890336.jpg",
            caption: "",
            relatedLink: "https://vanhoavaphattrien.vn/su-kien-nguoi-my-cuoi-cung-rut-khoi-viet-nam-sau-hiep-dinh-paris-nam-1973-qua-loi-ke-cua-nghe-sy-uu-tu-tran-duy-hinh-a18191.html"
          },
          {
            url: "https://file3.qdnd.vn/data/images/0/2023/01/21/vanduyen/kyhiepdinh.jpg?dpi=150&quality=100&w=870",
            caption: "Bộ trưởng Ngoại giao Chính phủ Việt Nam Dân chủ Cộng hòa Nguyễn Duy Trinh (giữa) ký Hiệp định Paris, ngày 27-1-1973, tại Trung tâm Hội nghị quốc tế ở thủ đô Paris (Pháp)",
            relatedLink: "https://www.qdnd.vn/tu-lieu-ho-so/ho-so/hanh-trinh-den-hiep-dinh-paris-1973-717204"
          }
        ]
      },
      {
        year: "1973",
        title: "Hội nghị Trung ương 21",
        description:
          "Khẳng định con đường cách mạng miền Nam là con đường bạo lực cách mạng.",
        policy:
          "Hội nghị Trung ương 21 (7/1973) khẳng định con đường của cách mạng miền Nam là con đường bạo lực cách mạng. Đảng chủ trương chủ động phản công, từng bước tạo thế và lực để tiến tới giải phóng hoàn toàn miền Nam.",
        strategy:
          "Các lực lượng cách mạng củng cố vùng giải phóng, tăng cường lực lượng quân sự và chuẩn bị cho các chiến dịch lớn.",
        links: [
          {
            title: "Nghị quyết 21 tiến tới thống nhất đất nước",
            url: "https://dantri.com.vn/thoi-su/nghi-quyet-21-tien-toi-thong-nhat-dat-nuoc-duoc-ban-thao-o-dau-khi-nao-20230428154740102.htm"
          }
        ],
        images: [
          {
            url: "https://cdnphoto.dantri.com.vn/F9y6DWgWXRzy9NvfmU1Qc74tYKg=/thumb_w/1360/2023/04/28/img-6053-1682671577227.jpg",
            caption: "Ông Hoàng Văn Thái (bên phải) và ông Đặng Quân Thụy (bên trái) chụp ảnh với Phái viên Bộ Tổng Tham mưu Võ Quang Hồ tại Hà Nội trước ngày ông Hồ vào Nam truyền đạt Nghị quyết 21, Khóa 3.",
            relatedLink: "https://dantri.com.vn/thoi-su/nghi-quyet-21-tien-toi-thong-nhat-dat-nuoc-duoc-ban-thao-o-dau-khi-nao-20230428154740102.htm"
          }
        ]
      },
      {
        year: "6/1/1975",
        title: "Chiến thắng Phước Long",
        description:
          "Đòn thăm dò chiến lược chứng minh quân đội Sài Gòn suy yếu và Mỹ khó can thiệp trở lại.",
        turningPoint:
          "Chiến thắng Phước Long ngày 6/1/1975 trở thành một đòn thăm dò chiến lược quan trọng, chứng minh khả năng tan rã của quân đội Sài Gòn và cho thấy Mỹ khó có khả năng can thiệp trở lại.",
        images: [
          {
            url: "https://cdn.dongnai.gov.vn/uploads/phuoclong/news/2025_12/image-20251222155158-1.png?t=1762423301",
            caption: "Chiến thắng Phước Long 6/1/1975 - Đòn thăm dò chiến lược",
            relatedLink: "https://phuoclong.dongnai.gov.vn/vi/news/thong-tin-tuyen-truyen/chien-thang-phuoc-long-6-1-1975-gop-phan-cung-co-vung-chac-quyet-tam-chien-luoc-cua-dang-giai-phong-hoan-toan-mien-nam-trong-nam-1975-305.html"
          },
          {
            url: "https://cdn.dongnai.gov.vn/uploads/phuoclong/news/2025_12/image-20251222155158-2.png?t=1762423301",
            caption: "",
            relatedLink: "https://phuoclong.dongnai.gov.vn/vi/news/thong-tin-tuyen-truyen/chien-thang-phuoc-long-6-1-1975-gop-phan-cung-co-vung-chac-quyet-tam-chien-luoc-cua-dang-giai-phong-hoan-toan-mien-nam-trong-nam-1975-305.html"
          },
          {
            url: "https://cdn.dongnai.gov.vn/uploads/phuoclong/news/2025_12/image-20251222155158-3.png?t=1762423301",
            caption: "",
            relatedLink: "https://phuoclong.dongnai.gov.vn/vi/news/thong-tin-tuyen-truyen/chien-thang-phuoc-long-6-1-1975-gop-phan-cung-co-vung-chac-quyet-tam-chien-luoc-cua-dang-giai-phong-hoan-toan-mien-nam-trong-nam-1975-305.html"
          }
        ],
        links: [
          {
            title: "Chiến thắng Phước Long 6/1/1975",
            url: "https://phuoclong.dongnai.gov.vn/vi/news/thong-tin-tuyen-truyen/chien-thang-phuoc-long-6-1-1975-gop-phan-cung-co-vung-chac-quyet-tam-chien-luoc-cua-dang-giai-phong-hoan-toan-mien-nam-trong-nam-1975-305.html"
          }
        ],
        video: "https://www.youtube.com/embed/EF_hAsR1Th4"
      }
    ]
  },
  {
    period: "1975",
    title: "Tổng tiến công và nổi dậy mùa Xuân",
    color: "red",
    framework: [
      {
        label: "Quyết sách",
        icon: <MapPin className="w-5 h-5" />,
        content: "Hội nghị Bộ Chính trị (cuối 1974 - đầu 1975) đề ra kế hoạch giải phóng 2 năm (1975-1976), nhưng nhấn mạnh nếu có thời cơ sẽ giải phóng ngay 1975.",
        color: "red"
      },
      {
        label: "Ba đòn tiến công",
        icon: <Target className="w-5 h-5" />,
        content: "Tây Nguyên (10/3) → Huế-Đà Nẵng (26-29/3) → Hồ Chí Minh (30/4), lập kỷ lục tiến công nhanh chóng liên tiếp.",
        color: "red"
      },
      {
        label: "Kết quả",
        icon: <Lightbulb className="w-5 h-5" />,
        content: "Quân giải phóng tiến vào Sài Gòn lúc 11h30 ngày 30/4/1975, chính quyền Sài Gòn sụp đổ, miền Nam hoàn toàn giải phóng.",
        color: "red"
      },
      {
        label: "Ý nghĩa",
        icon: <Flame className="w-5 h-5" />,
        content: "Kết thúc 21 năm kháng chiến chống Mỹ, 117 năm chống đế quốc xâm lược. Bước sang kỷ nguyên độc lập, thống nhất và xây dựng.",
        color: "red"
      }
    ],
    events: [
      {
        year: "1974-1975",
        title: "Quyết định chiến lược của Bộ Chính trị",
        description:
          "Bộ Chính trị đề ra kế hoạch giải phóng miền Nam trong hai năm 1975-1976, với phương án giải phóng ngay trong năm 1975 nếu thời cơ xuất hiện.",
        context:
          "Sau Hiệp định Paris 1973, quân đội Mỹ rút khỏi Việt Nam, làm thay đổi tương quan lực lượng chiến lược có lợi cho cách mạng. Chính quyền Sài Gòn ngày càng suy yếu trong khi lực lượng cách mạng ngày càng lớn mạnh.",
        policy:
          "Hội nghị Bộ Chính trị cuối năm 1974 và đầu năm 1975 đề ra kế hoạch giải phóng miền Nam trong hai năm 1975–1976. Tuy nhiên, Bộ Chính trị nhấn mạnh rằng nếu thời cơ chiến lược xuất hiện thì cần giải phóng miền Nam ngay trong năm 1975."
      },
      {
        year: "10/3/1975",
        title: "Chiến dịch Tây Nguyên",
        description: "Trận Buôn Ma Thuột mở đầu cuộc tổng tiến công chiến lược.",
        strategy:
          "Chiến dịch Tây Nguyên mở đầu bằng trận Buôn Ma Thuột ngày 10/3/1975, làm sụp đổ hệ thống phòng thủ của chính quyền Sài Gòn ở Tây Nguyên.",
        images: [
          {
            url: "https://file3.qdnd.vn/data/images/0/2024/12/16/upload_2164/giai-phong-buon-ma-thuot-1.jpg?dpi=150&quality=100&w=870",
            caption: "Bộ đội ta đánh chiếm sân bay Buôn Ma Thuột trong Chiến dịch Tây Nguyên - Mở đầu cho cuộc Tổng tiến công mùa Xuân năm 1975",
            relatedLink: "https://www.qdnd.vn/vung-buoc-duoi-quan-ky-quyet-thang/nghe-thuat-quan-su/chien-dich-tay-nguyen-mo-dau-cuoc-tong-tien-cong-va-noi-day-xuan-1975-807195"
          },
          {
            url: "https://file3.qdnd.vn/data/images/0/2024/12/16/upload_2164/tay%20nguyen%201.jpg?dpi=150&quality=100&w=870",
            caption: "Bộ đội truy kích địch trong Chiến dịch Tây Nguyên",
            relatedLink: "https://www.qdnd.vn/vung-buoc-duoi-quan-ky-quyet-thang/nghe-thuat-quan-su/chien-dich-tay-nguyen-mo-dau-cuoc-tong-tien-cong-va-noi-day-xuan-1975-807195"
          }
        ],
        video: "https://www.youtube.com/embed/mFd3j3PFKqo",
        links: [
          {
            title: "Chiến dịch Tây Nguyên mở đầu Tổng tiến công",
            url: "https://www.qdnd.vn/vung-buoc-duoi-quan-ky-quyet-thang/nghe-thuat-quan-su/chien-dich-tay-nguyen-mo-dau-cuoc-tong-tien-cong-va-noi-day-xuan-1975-807195"
          }
        ]
      },
      {
        year: "26-29/3/1975",
        title: "Chiến dịch Huế – Đà Nẵng",
        description:
          "Giải phóng hoàn toàn miền Trung, làm tan rã hệ thống phòng thủ của chính quyền Sài Gòn.",
        strategy:
          "Chiến dịch Huế – Đà Nẵng giải phóng toàn bộ miền Trung từ 26 đến 29/3/1975, làm tan rã hoàn toàn hệ thống phòng thủ của chính quyền Sài Gòn.",
        video: "https://www.youtube.com/embed/acRSApuOlkk",
        links: [
          {
            title: "Bước phát triển của Tổng tiến công",
            url: "https://quankhu3.vn/chien-dich-hue-da-nang-buoc-phat-trien-cua-cuoc-tong-tien-cong-8752"
          }
        ]
      },
      {
        year: "30/4/1975",
        title: "Chiến dịch Hồ Chí Minh",
        description:
          "Chiến dịch Hồ Chí Minh – quân giải phóng tiến vào Sài Gòn và lúc 11 giờ 30 phút ngày 30/4/1975 chính quyền Sài Gòn sụp đổ.",
        turningPoint: "Kết thúc thắng lợi cuộc kháng chiến chống Mỹ cứu nước.",
        impact:
          "Chiến thắng này kết thúc 21 năm kháng chiến chống Mỹ và hơn một thế kỷ đấu tranh chống chủ nghĩa thực dân và đế quốc, mở ra kỷ nguyên độc lập, thống nhất và xây dựng đất nước.",
        images: [
          {
            url: "https://cdn.nhandan.vn/images/bf7c77345e7b2180d6fdf6ad6bba9396418631884714de9fa5cbfe0d859dbb2782054d50eb4c1cf8c7d981caf5127ed8023557be2932c8a6f4b21a15a4f8e46886065cd71544c2c4d1ece7c48c9ee0d4e74d70f1eb41ab8be66324d7282f87c45cfacd5ee898d181029010948d9846a0/30-4-1975-xe-tang-huc-do-cong-dinh-doc-lap-3691-5224-8197-5157.jpg",
            caption: "Xe tăng của Lữ đoàn Tăng-Thiết giáp 203, Sư đoàn 304, Quân đoàn 2 tiến vào Dinh Độc Lập, trưa 30/4/1975",
            relatedLink: "https://nhandan.vn/ngay-3041975-chien-dich-ho-chi-minh-toan-thang-post876420.html"
          },
          {
            url: "https://cdn.nhandan.vn/images/b37ca2b0cafb2eee4cf340c387cceaea418631884714de9fa5cbfe0d859dbb273b7d1d600a4a5b4553e38307d7f3c22da88ad5c2b13aaceb3ed466710579c074c19dbace795a9bc1d6c41db0c2ce0a175cfacd5ee898d181029010948d9846a0/29-4-1975-xe-tang-trong-dinh-doc-lap-6660-1952.jpg",
            caption: "Xe tăng quân giải phóng chiếm phủ Tổng thống Việt Nam Cộng hòa, trưa 30/4/1975",
            relatedLink: "https://nhandan.vn/ngay-3041975-chien-dich-ho-chi-minh-toan-thang-post876420.html"
          }
        ],
        links: [
          {
            title: "Ngày 30/4/1975 - Chiến dịch Hồ Chí Minh toàn thắng",
            url: "https://nhandan.vn/ngay-3041975-chien-dich-ho-chi-minh-toan-thang-post876420.html"
          },
          {
            title: "Bộ ảnh về Sài Gòn ngày 30/4/1975",
            url: "https://tienphong.vn/bo-anh-ve-sai-gon-ngay-3041975-post1736347.tpo"
          }
        ],
        video: "https://www.youtube.com/embed/ecJSxFzvSKk"
      }
    ]
  }
]

// Color mapping
const colorMap = {
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-300",
    badge: "bg-blue-100 text-blue-800 border-blue-200",
    dot: "bg-blue-500",
    line: "bg-blue-300",
    accent: "text-blue-600",
    hover: "hover:bg-blue-100"
  },
  emerald: {
    bg: "bg-emerald-50",
    border: "border-emerald-300",
    badge: "bg-emerald-100 text-emerald-800 border-emerald-200",
    dot: "bg-emerald-500",
    line: "bg-emerald-300",
    accent: "text-emerald-600",
    hover: "hover:bg-emerald-100"
  },
  amber: {
    bg: "bg-amber-50",
    border: "border-amber-300",
    badge: "bg-amber-100 text-amber-800 border-amber-200",
    dot: "bg-amber-500",
    line: "bg-amber-300",
    accent: "text-amber-600",
    hover: "hover:bg-amber-100"
  },
  red: {
    bg: "bg-red-50",
    border: "border-red-300",
    badge: "bg-red-100 text-red-800 border-red-200",
    dot: "bg-red-500",
    line: "bg-red-300",
    accent: "text-red-600",
    hover: "hover:bg-red-100"
  }
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
}

interface PhaseFramework {
  label: string
  icon: React.ReactNode
  content: string
  color: string
}

interface PhaseData {
  period: string
  title: string
  color: "blue" | "emerald" | "amber" | "red"
  framework: PhaseFramework[]
  events: EventData[]
}

interface EventData {
  year: string
  title: string
  description: string
  context?: string
  policy?: string
  strategy?: string
  turningPoint?: string
  impact?: string
  images?: Array<{ url: string; caption: string; relatedLink?: string }>
  links?: { title: string; url: string }[]
  video?: string
}

interface EventCardProps {
  event: EventData
  color: keyof typeof colorMap
  index: number
}

// Phase Framework Component - Shows 4 key aspects clearly
function PhaseFrameworkSection({ framework, color }: { framework: PhaseFramework[]; color: keyof typeof colorMap }) {
  const colors = colorMap[color]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {framework.map((item, idx) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className={`${colors.bg} ${colors.border} border-2 rounded-xl h-full transition-all hover:shadow-lg hover:scale-105`}>
            <CardContent className="p-4">
              <div className="flex items-start gap-3 mb-2">
                <div className={`w-10 h-10 rounded-lg ${colors.dot} flex items-center justify-center flex-shrink-0 text-white`}>
                  {item.icon}
                </div>
                <h4 className={`text-sm font-bold ${colors.accent} leading-tight`}>
                  {item.label}
                </h4>
              </div>
              <p className="text-xs text-slate-700 line-clamp-4 leading-relaxed">
                {item.content}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

function EventCard({ event, color, index }: EventCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<{ url: string; caption: string; relatedLink?: string } | null>(null)
  const colors = colorMap[color]

  return (
    <motion.div
      variants={fadeInUp}
      className="relative pl-8 pb-6 last:pb-0"
    >
      {/* Timeline dot */}
      <motion.div
        className={`absolute left-0 top-2 w-5 h-5 rounded-full ${colors.dot} border-4 border-white shadow-md z-10`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
      />

      {/* Timeline line */}
      <div className={`absolute left-[9px] top-7 bottom-0 w-1 ${colors.line} last:hidden`} />

      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <Card className={`${colors.bg} ${colors.border} border-2 transition-all duration-300 overflow-hidden hover:shadow-md ${isOpen ? "shadow-lg" : "shadow-sm"}`}>
          <CollapsibleTrigger asChild>
            <CardHeader className={`cursor-pointer ${colors.hover} transition-all py-4 px-5`}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <Badge className={`${colors.badge} font-semibold text-xs`}>
                      <Calendar className="w-3 h-3 mr-1" />
                      {event.year}
                    </Badge>
                    {event.turningPoint && (
                      <Badge className="bg-red-100 text-red-700 border border-red-200 text-xs">
                        <Flame className="w-3 h-3 mr-1" />
                        Bước ngoặt
                      </Badge>
                    )}
                  </div>
                  <CardTitle className={`text-base ${colors.accent} font-bold line-clamp-2`}>
                    {event.title}
                  </CardTitle>
                  <p className="text-slate-600 mt-2 text-sm leading-relaxed line-clamp-2">
                    {event.description}
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-1">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </Button>
                </div>
              </div>
            </CardHeader>
          </CollapsibleTrigger>

          <CollapsibleContent>
            <CardContent className="border-t border-current/10 pt-4 space-y-4">
              {/* Images Section */}
              {event.images && event.images.length > 0 && (
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">📸 Hình ảnh</p>
                  <div className={event.images.length === 2 ? "grid grid-cols-1 md:grid-cols-2 gap-4" : "flex justify-center"}>
                    {event.images.map((imageData, idx) => (
                      <div key={idx} className={event.images.length === 2 ? "flex flex-col items-center" : "flex flex-col items-center"}>
                        <Dialog open={selectedImage?.url === imageData.url} onOpenChange={(open) => {
                          if (open) setSelectedImage(imageData)
                          else setSelectedImage(null)
                        }}>
                          <DialogTrigger asChild>
                            <button className={`relative rounded-lg overflow-hidden bg-slate-200 border-2 border-slate-300 hover:border-slate-400 transition-all cursor-pointer group hover:shadow-lg ${event.images.length === 2 ? "w-full md:h-72" : "w-full md:w-80 md:h-80"}`}>
                              <img
                                src={imageData.url}
                                alt={imageData.caption}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                              />
                              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-all" />
                            </button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl">
                            <DialogTitle className="sr-only">Hình ảnh chi tiết</DialogTitle>
                            <div className="space-y-4">
                              <div className="relative rounded-lg overflow-hidden bg-slate-200">
                                <img
                                  src={imageData.url}
                                  alt={imageData.caption}
                                  className="w-full h-auto"
                                />
                              </div>
                              <div className="space-y-3">
                                <p className="text-sm text-slate-700 italic font-medium">
                                  {imageData.caption}
                                </p>
                                {imageData.relatedLink && (
                                  <div className="flex justify-center">
                                    <a
                                      href={imageData.relatedLink}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-lg font-medium transition-all hover:shadow-lg"
                                    >
                                      <ExternalLink className="w-4 h-4" />
                                      Xem bài báo liên quan
                                    </a>
                                  </div>
                                )}
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <p className="text-xs text-slate-600 mt-2 text-center line-clamp-2 hover:line-clamp-none">
                          {imageData.caption}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Links Section */}
              {event.links && event.links.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide flex items-center gap-1">
                    <FileText className="w-3 h-3" />
                    📰 Tài liệu & Bài báo
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {event.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-lg hover:from-amber-100 hover:to-orange-100 hover:shadow-lg transition-all group"
                      >
                        <ExternalLink className="w-4 h-4 text-amber-600 group-hover:text-amber-700" />
                        <span className="text-amber-900 group-hover:text-amber-950">{link.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Video Section */}
              {event.video && (
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">🎬 Video tư liệu</p>
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                    <iframe
                      src={event.video}
                      title={event.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>
    </motion.div>
  )
}

export function HistoricalTimeline() {
  const [activeDocTab, setActiveDocTab] = useState("overview")

  return (
    <section className="py-20 px-4 bg-white border-y border-slate-100">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="mb-6 inline-block">
            <Badge className="px-4 py-2 bg-indigo-100 text-indigo-700 border-indigo-200">
              <Flame className="w-4 h-4 mr-2" />
              Lịch sử kháng chiến 1965-1975
            </Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 font-serif mb-4">
            Timeline lịch sử và đường lối lãnh đạo
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Cuộc kháng chiến chống Mỹ cứu nước qua các giai đoạn chiến lược<br/>
            <span className="text-lg text-slate-500">Sự lãnh đạo đúng đắn của Đảng Cộng sản Việt Nam</span>
          </p>
        </motion.div>

        {/* Timeline Phases */}
        <div className="space-y-16">
          {historicalTimeline.map((phase, phaseIndex) => {
            const colors = colorMap[phase.color as keyof typeof colorMap]
            const phaseNumber = phaseIndex + 1

            return (
              <motion.div
                key={phase.period}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="scroll-mt-20"
              >
                {/* Phase Header Card */}
                <div className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-6 lg:p-8 mb-8 shadow-lg hover:shadow-xl transition-all`}>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`flex-shrink-0 w-16 h-16 rounded-full ${colors.dot} flex items-center justify-center shadow-lg`}>
                          <span className="text-2xl font-bold text-white">{phaseNumber}</span>
                        </div>
                        <div>
                          <Badge className={`${colors.badge} mb-2`}>
                            <Calendar className="w-4 h-4 mr-1" />
                            {phase.period}
                          </Badge>
                          <h2 className={`text-2xl lg:text-3xl font-bold ${colors.accent}`}>
                            {phase.title}
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className={`hidden lg:flex items-center justify-center w-24 h-24 rounded-full ${colors.line} opacity-20`} />
                  </div>
                </div>

                {/* Phase Framework Overview - 4 Key Aspects */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <PhaseFrameworkSection framework={phase.framework} color={phase.color} />
                </motion.div>

                {/* Separator */}
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide px-3 bg-white">Sự kiện tiêu biểu</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
                </div>

                {/* Events Timeline */}
                <div className="relative">
                  <div className="space-y-4 lg:space-y-6">
                    {phase.events.map((event, eventIndex) => (
                      <motion.div
                        key={`${phase.period}-${event.title}`}
                        variants={fadeInUp}
                        transition={{ delay: eventIndex * 0.1 }}
                      >
                        <EventCard
                          event={event}
                          color={phase.color as keyof typeof colorMap}
                          index={eventIndex}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>


      </div>
    </section>
  )
}
