import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEOHead from '../components/SEOHead'

const INGREDIENTS = [
  { name: 'Mắm cá linh', icon: 'water', desc: 'Linh hồn của nồi lẩu — mắm cá linh U Minh ủ đủ tháng, sánh mịn, thơm nồng đặc trưng.' },
  { name: 'Cá lóc tươi', icon: 'set_meal', desc: 'Cá lóc đồng cắt khúc, thịt trắng chắc, ngọt thanh, không tanh, hòa quyện hoàn hảo với nước lẩu.' },
  { name: 'Tôm & Mực', icon: 'phishing', desc: 'Tôm càng xanh và mực tươi thêm vào tạo vị ngọt biển, nâng tầm hương vị của nồi lẩu.' },
  { name: 'Thịt ba chỉ', icon: 'restaurant', desc: 'Thịt heo ba chỉ thái lát mỏng, chần tái trong nước lẩu nóng hổi, béo ngậy.' },
  { name: 'Rau rừng U Minh', icon: 'eco', desc: 'Rau muống, bông súng, chuối non, bắp chuối, rau nhút, kèo nèo — hàng chục loại rau rừng độc đáo.' },
  { name: 'Bún tươi', icon: 'grain', desc: 'Bún gạo tươi dai mềm, thấm nước lẩu đậm đà là phần không thể thiếu để ăn no.' },
]

const TIPS = [
  { icon: 'calendar_month', title: 'Thời điểm thưởng thức', desc: 'Tháng 9 – 11 âm lịch là mùa cá linh về, nguyên liệu chính của lẩu mắm tươi ngon nhất.' },
  { icon: 'location_on', title: 'Địa chỉ ăn ngon', desc: 'Khu vực U Minh Hạ, Trần Văn Thời — nơi lẩu mắm được nấu theo đúng công thức truyền thống đậm đà nhất.' },
  { icon: 'payments', title: 'Giá tham khảo', desc: 'Lẩu mắm cho 2–3 người: 150.000 – 300.000 VNĐ, tùy quán và số lượng đồ ăn kèm.' },
  { icon: 'tips_and_updates', title: 'Bí quyết thưởng thức', desc: 'Ăn lẩu mắm ngon nhất khi thả rau từ từ, đừng để quá chín để giữ độ giòn và màu xanh của rau.' },
]

const GALLERY = [
  { src: 'https://focusasiatravel.vn/wp-content/uploads/2021/11/lau-mam-u-minh-ca-mau-1.jpg', alt: 'Nồi lẩu mắm U Minh đầy đủ' },
  { src: 'https://cdnv2.tgdd.vn/mwg-static/common/Common/H%C3%ACnh%20m%C3%B3n%20an%20t12%20%281200%20x%20676%20px%29%20%287%29.jpg', alt: 'Lẩu mắm hương vị đồng quê' },
  { src: 'https://bepmina.vn/wp-content/uploads/2023/05/so-che-rau-an-lau-mam-mien-tay.jpeg', alt: 'Rau rừng ăn kèm lẩu mắm' },
]

export default function LauMamUMinh() {
  return (
    <>
      <SEOHead
        title="Lẩu Mắm U Minh - Đặc Sản Đồng Quê Cà Mau"
        description="Lẩu Mắm U Minh - hương vị đậm đà từ mắm cá linh, rau rừng xanh mướt. Cách nấu truyền thống và địa chỉ ăn ngon nhất."
        path="/am-thuc/lau-mam-u-minh"
        image="https://cdn.pastaxi-manager.onepas.vn/content/uploads/articles/Ngoc%20Diep/c%C3%A0%20mau/lau-mam-ca-mau-3.png"
      />
      <Navbar />
      <main className="pt-[72px]" style={{ background: '#f8fafc', color: '#1a2e1a' }}>

        {/* Hero */}
        <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
          <img
            src="https://cdn.pastaxi-manager.onepas.vn/content/uploads/articles/Ngoc%20Diep/c%C3%A0%20mau/lau-mam-ca-mau-3.png"
            alt="Lẩu Mắm U Minh"
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
            <span className="text-white font-semibold">Lẩu Mắm U Minh</span>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-14 max-w-5xl mx-auto">
            <span className="inline-flex items-center gap-1 px-3 py-1 mb-4 rounded-full bg-green-500 border border-amber-400/30 text-white text-xs font-bold uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">soup_kitchen</span> Đặc Sản Đồng Quê
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 drop-shadow-2xl leading-tight">
              Lẩu Mắm U Minh
            </h1>
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl leading-relaxed">
              Hương vị đặc trưng của vùng U Minh Hạ — nồi lẩu mắm đậm đà từ mắm cá linh, rau rừng
              xanh mướt và hải sản tươi sống hòa quyện thành một kiệt tác ẩm thực khó quên.
            </p>
            {/* Quick stats */}
            <div className="flex flex-wrap gap-4 mt-6">
              {[
                { icon: 'eco', label: 'Rau rừng U Minh đặc trưng' },
                { icon: 'star', label: 'Đặc sản trứ danh miền Tây' },
                { icon: 'schedule', label: 'Ngon nhất T9 – T11 âm lịch' },
              ].map(s => (
                <span key={s.label} className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-white text-sm font-medium">
                  <span className="material-symbols-outlined text-amber-300 text-base">{s.icon}</span>
                  {s.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Main content */}
        <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">

          {/* Intro */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-amber-500 inline-block"></span> Câu chuyện
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e1a]">Linh hồn của ẩm thực U Minh</h2>
              <p className="text-[#4b6351] leading-relaxed text-lg">
                Lẩu mắm U Minh ra đời từ văn hóa "ăn rừng" của người dân vùng U Minh Hạ — nơi thiên nhiên
                ban tặng vô số cá tôm và rau rừng. Nền tảng của món là{' '}
                <span className="text-amber-600 font-semibold">mắm cá linh</span>, loài cá đặc trưng của
                vùng Đồng bằng sông Cửu Long, được ủ nhiều tháng đến khi dậy mùi thơm đặc trưng.
              </p>
              <p className="text-[#4b6351] leading-relaxed">
                Điều làm Lẩu Mắm U Minh khác biệt chính là{' '}
                <strong className="text-[#14532d]">hàng chục loại rau rừng</strong> ăn kèm: bông súng,
                kèo nèo, rau muống, chuối non, bắp chuối, rau nhút... Mỗi loại mang một hương vị và
                kết cấu riêng, cộng hưởng với nước lẩu đậm đà tạo nên trải nghiệm ẩm thực không thể
                nào quên.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-amber-400/20 to-orange-500/20 rounded-3xl blur-xl opacity-60"></div>
              <img
                src="https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/05_2021/lau-mam-ca-mau-min.jpg"
                alt="Lẩu mắm U Minh thơm ngon"
                className="relative w-full h-[380px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-2xl border border-amber-100 shadow-xl">
                <p className="text-amber-500 text-2xl font-black">~200k</p>
                <p className="text-gray-400 text-xs">VNĐ / nồi (2–3 người)</p>
              </div>
            </div>
          </section>

          {/* How to cook — timeline style */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e1a] mb-3">Cách nấu truyền thống</h2>
              <p className="text-[#4b6351]">Quy trình làm nên nồi lẩu mắm đúng điệu theo người U Minh</p>
            </div>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[22px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-300 via-amber-500 to-amber-300 md:-translate-x-px" />
              <div className="space-y-10">
                {[
                  { step: '01', title: 'Sơ chế mắm', desc: 'Mắm cá linh được cho vào nồi, thêm nước vừa đủ, nấu sôi rồi lọc bỏ xương. Phần nước mắm sánh mịn chính là nền tảng của nồi lẩu.', icon: 'filter_alt' },
                  { step: '02', title: 'Phi thơm & tạo màu', desc: 'Sả, tỏi, ớt phi vàng thơm. Thêm sả băm, ớt tươi và một ít sa tế vào nước mắm đã lọc, nêm nếm ngọt — mặn hài hòa với đường và nước mắm nguyên chất.', icon: 'local_fire_department' },
                  { step: '03', title: 'Thêm nguyên liệu', desc: 'Cho cà tím, thơm (dứa) vào hầm cùng để nước lẩu có vị ngọt tự nhiên và cân bằng độ mặn của mắm. Khứa cá lóc, tôm và các loại hải sản sẵn sàng.', icon: 'add_circle' },
                  { step: '04', title: 'Hoàn thiện & thưởng thức', desc: 'Bày đĩa rau rừng đầy ắp, bún tươi, chấm mắm me chua ngọt. Đặt nồi lẩu sôi sùng sục giữa bàn và thưởng thức cùng gia đình, bạn bè.', icon: 'dining' },
                ].map((item, i) => (
                  <div key={i} className={`relative flex items-start gap-6 ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                    <div className="flex-shrink-0 w-11 h-11 rounded-full bg-amber-500 flex items-center justify-center text-white font-black text-sm z-10 shadow-lg shadow-amber-500/40 md:mx-auto">
                      {item.step}
                    </div>
                    <div className={`bg-white rounded-2xl p-6 shadow-sm border border-amber-100 flex-1 ${i % 2 === 1 ? 'md:mr-10' : 'md:ml-10'}`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center">
                          <span className="material-symbols-outlined text-amber-500 text-xl">{item.icon}</span>
                        </div>
                        <h3 className="text-[#1a2e1a] font-bold text-lg">{item.title}</h3>
                      </div>
                      <p className="text-[#4b6351] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Ingredients */}
          <section>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e1a] mb-2">Nguyên liệu chính</h2>
              <p className="text-[#4b6351]">Những thành phần tạo nên linh hồn của nồi lẩu mắm U Minh</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {INGREDIENTS.map((d, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-amber-100 hover:border-amber-300 transition-all group cursor-pointer hover:shadow-lg hover:shadow-amber-100">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors">
                    <span className="material-symbols-outlined text-amber-500 text-2xl">{d.icon}</span>
                  </div>
                  <h3 className="text-[#1a2e1a] font-bold text-lg mb-2">{d.name}</h3>
                  <p className="text-[#4b6351] text-sm leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Gallery */}
          <section>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e1a] mb-2">Hình ảnh</h2>
              <p className="text-[#4b6351]">Nét đẹp của nồi lẩu mắm U Minh qua từng khoảnh khắc</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {GALLERY.map((g, i) => (
                <div key={i} className={`relative overflow-hidden rounded-2xl group ${i === 0 ? 'md:row-span-2 h-[500px]' : 'h-[230px]'}`}>
                  <img
                    src={g.src}
                    alt={g.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white text-sm font-medium">{g.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tips */}
          <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12 border border-amber-100">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#1a2e1a] mb-2">Mẹo thưởng thức</h2>
              <p className="text-[#4b6351]">Để tận hưởng trọn vẹn hương vị Lẩu Mắm U Minh</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TIPS.map((t, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-amber-100 shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-amber-500 text-2xl">{t.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-[#1a2e1a] font-bold mb-1">{t.title}</h3>
                    <p className="text-[#4b6351] text-sm leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Banner */}
          <section className="relative rounded-3xl overflow-hidden">
            <img
              src="https://cdn.pastaxi-manager.onepas.vn/content/uploads/articles/Ngoc%20Diep/c%C3%A0%20mau/lau-mam-ca-mau-3.png"
              alt="Lẩu mắm U Minh"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'brightness(0.3)' }}
            />
            <div className="relative z-10 text-center p-12 md:p-16">
              <h2 className="text-white text-3xl md:text-4xl font-black mb-4">Đã sẵn sàng thưởng thức?</h2>
              <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
                Đến U Minh Hạ và trải nghiệm nồi lẩu mắm đích thực giữa khung cảnh rừng tràm bạt ngàn.
              </p>
              <Link
                to="/dia-diem/vuon-quoc-gia-u-minh-ha"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-4 rounded-full transition-colors shadow-lg shadow-amber-500/30"
              >
                <span className="material-symbols-outlined text-base">forest</span>
                Khám phá Vườn Quốc Gia U Minh Hạ
              </Link>
            </div>
          </section>

          {/* Back button */}
          <div className="text-center pb-4">
            <Link
              to="/am-thuc"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-[#15803d] transition-colors shadow-lg shadow-primary/20"
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
