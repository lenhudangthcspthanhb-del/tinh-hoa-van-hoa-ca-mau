import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEOHead from '../components/SEOHead'

const FACTS = [
  { icon: 'history_edu', title: 'Di sản quốc gia', desc: 'Năm 2019, nghề muối ba khía Rạch Gốc được công nhận là Di sản văn hóa phi vật thể cấp quốc gia.' },
  { icon: 'location_on', title: 'Vùng đất Rạch Gốc', desc: 'Xã Rạch Gốc, huyện Ngọc Hiển, tỉnh Cà Mau — nơi ba khía ăn lá mắm trắng nên gạch son, thịt chắc đặc biệt.' },
  { icon: 'eco', title: 'Môi trường sinh thái', desc: 'Vùng Rạch Gốc nhiều phù sa, cây mắm trắng phát triển — tạo nên con ba khía gạch son béo ngậy hơn hẳn nơi khác.' },
  { icon: 'family_restroom', title: 'Nghề cha truyền con nối', desc: 'Thế hệ trước truyền nghề cho thế hệ sau từ khi người dân đến Cà Mau khai hoang lập ấp.' },
  { icon: 'water', title: 'Phân bố tự nhiên', desc: 'Ba khía sống nhiều ở các huyện Năm Căn, Đầm Dơi, Phú Tân, Ngọc Hiển — nhưng ngon nhất là vùng Rạch Gốc.' },
  { icon: 'star', title: 'Danh tiếng khắp nơi', desc: 'Nhắc đến ba khía muối là nghĩ ngay đến vùng Rạch Gốc — thương hiệu lan rộng khắp miền sông nước Cửu Long.' },
]

const PROCESS = [
  { step: '01', title: 'Chọn ba khía tươi', desc: 'Ba khía được thu hoạch từ rừng ngập mặn vùng Rạch Gốc, chọn con chắc, đầy gạch son.' },
  { step: '02', title: 'Rửa sạch & phân loại', desc: 'Rửa sạch bùn đất, qua công đoạn phân loại kỹ lưỡng rồi phơi lên cho ráo nước trước khi muối.' },
  { step: '03', title: 'Pha nước muối', desc: 'Dùng muối đen từ vựa Tân Thuận, Bạc Liêu. Thả cơm nguội vào nước muối — hạt cơm nổi là đạt độ mặn yêu cầu.' },
  { step: '04', title: 'Ngâm trong lu/khạp', desc: 'Ngâm ba khía trong lu, khạp với nước muối theo tỷ lệ riêng của từng hộ — tạo nên hương vị đặc trưng riêng.' },
  { step: '05', title: 'Ủ 7–10 ngày', desc: 'Sau 7–10 ngày ủ muối, ba khía đạt độ chín, thịt chắc thơm, vị mặn vừa phải, ăn kèm cơm trắng rất đưa miệng.' },
  { step: '06', title: 'Thành phẩm', desc: 'Thịt ba khía muối chắc, thơm, gạch son béo ngậy — thành phẩm đặc trưng của nghề truyền thống Rạch Gốc.' },
]

export default function BaKhiaRachGoc() {
  return (
    <>
      <SEOHead
        title="Ba Khía Rạch Gốc - Di Sản Văn Hóa Quốc Gia"
        description="Ba Khía Rạch Gốc - từ món ăn bình dân đến Di sản văn hóa phi vật thể quốc gia 2019. Nghề muối ba khía truyền thống Cà Mau."
        path="/am-thuc/ba-khia-rach-goc"
        image="https://cotucamau.com/wp-content/uploads/2023/05/Ba_khia_muoi.jpg"
      />
      <Navbar />
      <main className="pt-[72px]" style={{ background: '#f8fafc', color: '#1a2e1a' }}>

        {/* Hero */}
        <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
          <img
            src="https://cotucamau.com/wp-content/uploads/2023/05/Ba_khia_muoi.jpg"
            alt="Ba Khía Rạch Gốc Cà Mau"
            className="w-full h-full object-cover scale-105"
            style={{ filter: 'brightness(0.75)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />

          {/* Breadcrumb */}
          <div className="absolute top-6 left-6 flex items-center gap-2 text-sm text-white/70">
            <Link to="/am-thuc" className="hover:text-primary transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-base">arrow_back</span> Ẩm thực
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">Ba Khía Rạch Gốc</span>
          </div>

          {/* Hero content */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-14 max-w-5xl mx-auto">
            <span className="inline-flex items-center gap-1 px-3 py-1 mb-4 rounded-full bg-green-500 border border-primary/30 text-white text-xs font-bold uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">history_edu</span> Di sản văn hóa quốc gia
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 drop-shadow-2xl leading-tight">
              Ba Khía Rạch Gốc
            </h1>
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl leading-relaxed">
              Từ món ăn bình dân đến Di sản văn hóa phi vật thể quốc gia — nghề muối ba khía trứ danh
              của xứ Cà Mau, nức tiếng khắp miền sông nước Cửu Long.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              {[
                { icon: 'history_edu', label: 'Di sản quốc gia 2019' },
                { icon: 'location_on', label: 'Rạch Gốc, Ngọc Hiển' },
                { icon: 'eco', label: 'Gạch son đặc trưng' },
              ].map(s => (
                <span key={s.label} className="flex items-center gap-1.5 bg-orange-500 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-white text-sm font-medium">
                  <span className="material-symbols-outlined text-primary text-base">{s.icon}</span>
                  {s.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">

          {/* Intro - Di sản */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary inline-block"></span> Nguồn gốc
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e1a]">Từ món bình dân đến di sản quốc gia</h2>
              <p className="text-[#4b6351] leading-relaxed text-base">
                Từ món ăn bình dân, người dân ở xã Rạch Gốc, huyện Ngọc Hiển (tỉnh Cà Mau) phát triển thành <span className="text-primary font-semibold">nghề muối ba khía nổi tiếng</span> khắp miền sông nước Cửu Long.
              </p>
              <p className="text-[#4b6351] leading-relaxed text-base">
                Không chỉ vậy, năm 2019, nghề muối ba khía Rạch Gốc vinh dự được công nhận là <strong className="text-[#14532d]">Di sản văn hóa phi vật thể cấp quốc gia</strong>.
              </p>
              <p className="text-[#4b6351] leading-relaxed text-base">
                Thiên nhiên ưu ái cho vùng đất Nam Bộ nguồn thực phẩm đa dạng và phong phú. Nhắc đến <span className="text-primary font-semibold">ba khía muối</span> là nghĩ ngay đến vùng Rạch Gốc, huyện Ngọc Hiển, tỉnh Cà Mau.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 to-[#2c4823]/30 rounded-3xl blur-xl opacity-60"></div>
              <img
                src="https://cotucamau.com/wp-content/uploads/2023/05/Ba_khia_muoi.jpg"
                alt="Ba Khía muối Rạch Gốc"
                className="relative w-full h-[360px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-2xl border border-green-100 shadow-xl">
                <p className="text-primary text-xl font-black">Từ 2019</p>
                <p className="text-gray-400 text-xs">Di sản quốc gia</p>
              </div>
            </div>
          </section>

          {/* Nghề truyền thống */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-3 bg-gradient-to-r from-[#2c4823]/30 to-primary/20 rounded-3xl blur-xl opacity-60"></div>
              <img
                src="https://langngheviet.com.vn/stores/news_dataimages/langnghevietcomvn/042022/25/15/nghe-muoi-ba-khia-rach-goc-di-san-van-hoa-phi-vat-the-cap-quoc-gia-35-.8356.jpg"
                alt="Nghề muối ba khía truyền thống"
                className="relative w-full h-[360px] object-cover rounded-2xl shadow-2xl"
                style={{ objectPosition: 'center 40%' }}
              />
            </div>
            <div className="space-y-5 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary inline-block"></span> Nghề truyền thống
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e1a]">Nghề truyền thống nơi cực Nam tổ quốc</h2>
              <p className="text-[#4b6351] leading-relaxed text-base">
                Không ai rõ nghề này có từ thời điểm nào, do ai sáng tạo ra, chỉ biết rằng khi người dân đến Cà Mau khai hoang lập ấp, sau đó <span className="text-primary font-semibold">nghề muối ba khía cũng xuất hiện</span>. Theo thời gian, thế hệ trước truyền nghề cho thế hệ sau và trở thành nghề truyền thống của người dân vùng Rạch Gốc.
              </p>
              <p className="text-[#4b6351] leading-relaxed text-base">
                Ba khía là loài giáp xác tương tự cua nhưng nhỏ hơn, sống nhiều ở các huyện Năm Căn, Đầm Dơi, Phú Tân, Ngọc Hiển. Vùng Rạch Gốc với nhiều phù sa thuận lợi cho <strong className="text-[#14532d]">cây mắm trắng</strong> phát triển — ba khía ăn lá mắm trắng nên có <span className="text-primary font-semibold">gạch màu son, thịt chắc</span> và ngon hơn hẳn nơi khác.
              </p>
            </div>
          </section>

          {/* Nguyên liệu & bí quyết */}
          <section className="bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary inline-block"></span> Bí quyết
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a2e1a]">Nguyên liệu đơn giản, hương vị đặc biệt</h2>
              <p className="text-[#4b6351] leading-relaxed text-base max-w-3xl">
                Nguyên liệu làm ba khía muối cực kỳ đơn giản: chỉ cần <span className="text-primary font-semibold">ba khía và muối đen</span> mua tại vựa muối nổi tiếng như Tân Thuận, Bạc Liêu. Trước khi muối, ba khía được rửa sạch bùn đất, qua công phân loại và phơi cho khô nước.
              </p>
              <p className="text-[#4b6351] leading-relaxed text-base max-w-3xl">
                Mỗi hộ làm nghề có <strong className="text-[#14532d]">tỷ lệ pha nước muối khác nhau</strong>, dẫn đến hương vị sản phẩm cũng khác nhau. Để biết độ mặn đạt yêu cầu, người dân địa phương thường <span className="text-primary font-semibold">thả hạt cơm nguội</span> vào nước muối — hạt cơm nổi lên là đạt chuẩn. Ba khía muối khoảng <strong className="text-[#14532d]">7–10 ngày</strong> có thể ăn được, thịt chắc và có vị thơm, ăn kèm cơm trắng càng thêm đậm vị.
              </p>
            </div>
          </section>

          {/* Quy trình */}
          <section>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-2">Quy trình muối ba khía</h2>
              <p className="text-[#4b6351]">Sáu bước tạo nên hũ ba khía muối đúng chuẩn Rạch Gốc</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {PROCESS.map((s) => (
                <div key={s.step} className="flex flex-col bg-[#f0fdf4] p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-black text-xl">{s.step}</span>
                  </div>
                  <h3 className="text-green-500 font-bold text-base mb-2">{s.title}</h3>
                  <p className="text-[#4b6351] text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Facts */}
          <section>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-2">Điều thú vị về Ba Khía Rạch Gốc</h2>
              <p className="text-[#4b6351]">Những điều làm nên tên tuổi đặc sản trứ danh này</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {FACTS.map((f, i) => (
                <div key={i} className="flex gap-4 bg-[#f0fdf4] p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-2xl">{f.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-green-500 font-bold mb-1">{f.title}</h3>
                    <p className="text-[#4b6351] text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Heritage banner */}
          <section className="bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            <div className="relative z-10 text-center space-y-6">
              <span className="material-symbols-outlined text-primary text-5xl">history_edu</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a2e1a]">Di sản sống mãi với thời gian</h2>
              <p className="text-[#4b6351] text-base max-w-3xl mx-auto leading-relaxed">
                Năm 2019, Bộ Văn hóa, Thể thao và Du lịch chính thức công nhận <span className="text-primary font-semibold">nghề muối ba khía Rạch Gốc</span> là Di sản văn hóa phi vật thể cấp quốc gia. Đây là niềm tự hào của người dân Cà Mau, khẳng định giá trị văn hóa bền vững của nghề truyền thống cha truyền con nối qua nhiều thế hệ.
              </p>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3">
                <span className="material-symbols-outlined text-primary">verified</span>
                <span className="text-primary font-bold text-sm">Di sản văn hóa phi vật thể cấp quốc gia – 2019</span>
              </div>
            </div>
          </section>

          {/* Back button */}
          <div className="text-center pb-4">
            <Link
              to="/am-thuc"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-white transition-colors shadow-lg shadow-primary/20"
            >
              <span className="material-symbols-outlined text-base">arrow_back</span>
              Quay lại Ẩm thực
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
