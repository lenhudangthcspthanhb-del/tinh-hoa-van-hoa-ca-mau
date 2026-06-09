import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEOHead from '../components/SEOHead'

const FEATURES = [
  { name: 'Kiến trúc Angkor', icon: 'temple_buddhist', desc: 'Phong cách kiến trúc Angkor Campuchia với mái cong nhiều tầng, màu vàng rực rỡ đặc trưng của văn hóa Khmer.' },
  { name: 'Tháp Chính Điện', icon: 'domain', desc: 'Chính điện cao vút với tháp nhọn dát vàng, bên trong thờ Đức Phật Thích Ca bằng đồng mạ vàng uy nghi.' },
  { name: 'Bức bích họa', icon: 'palette', desc: 'Hàng chục bức tranh tường miêu tả cuộc đời Đức Phật và các câu chuyện Phật giáo vô cùng tinh xảo.' },
  { name: 'Khuôn viên xanh mát', icon: 'park', desc: 'Sân chùa rộng rãi với hàng cây xanh mát, tạo không gian thanh tịnh và yên bình giữa lòng thành phố.' },
  { name: 'Lễ hội Ok Om Bok', icon: 'celebration', desc: 'Lễ hội cúng trăng của người Khmer diễn ra vào tháng 10 âm lịch hàng năm với nhiều nghi lễ đặc sắc.' },
  { name: 'Cộng đồng Khmer', icon: 'groups', desc: 'Trung tâm sinh hoạt cộng đồng Phật giáo Nam tông Khmer, nơi lưu giữ văn hóa truyền thống quý giá.' },
]

const TIPS = [
  { icon: 'checkroom', title: 'Trang phục', desc: 'Mặc lịch sự, kín đáo khi vào chùa. Không mặc quần đùi, áo hở vai. Có thể mượn khăn choàng tại cổng.' },
  { icon: 'schedule', title: 'Thời gian tham quan', desc: 'Chùa mở cửa hàng ngày từ 6h – 21h. Nên đến vào buổi sáng sớm để tránh nóng và có ánh sáng đẹp chụp ảnh.' },
  { icon: 'celebration', title: 'Lễ hội', desc: 'Tháng 10 âm lịch (Ok Om Bok) và Tết Chol Chnam Thmay (tháng 4) là thời điểm chùa tổ chức lễ lớn nhất.' },
  { icon: 'photo_camera', title: 'Chụp ảnh', desc: 'Được phép chụp ảnh bên ngoài và trong khuôn viên. Xin phép trước khi chụp ảnh bên trong chính điện.' },
]

const HISTORY_STEPS = [
  { year: '1840s', title: 'Xây dựng ban đầu', desc: 'Chùa được xây dựng bởi cộng đồng người Khmer định cư tại Cà Mau, ban đầu có kiến trúc đơn giản bằng gỗ.' },
  { year: '1940s', title: 'Trùng tu lớn', desc: 'Chùa được trùng tu và mở rộng quy mô theo phong cách kiến trúc Khmer truyền thống, xây dựng thêm chính điện.' },
  { year: '1990s', title: 'Tôn tạo và phát triển', desc: 'Tỉnh Cà Mau đầu tư tôn tạo, bổ sung các công trình phụ trợ và bích họa, nâng tầm thành điểm du lịch tâm linh.' },
  { year: 'Hiện tại', title: 'Di tích văn hóa', desc: 'Là ngôi chùa Khmer lớn nhất trung tâm TP. Cà Mau, thu hút hàng nghìn phật tử và du khách mỗi năm.' },
]

export default function ChuaMonivongsa() {
  return (
    <>
      <SEOHead
        title="Chùa Monivongsa Bopharam - Kiến Trúc Khmer Cà Mau"
        description="Chùa Monivongsa Bopharam - ngôi chùa Khmer lớn nhất TP. Cà Mau với kiến trúc Angkor rực rỡ. Lịch sử, lễ hội Ok Om Bok và hướng dẫn tham quan."
        path="/di-tich/chua-monivongsa-bopharam"
        image="https://dltm-cdn.vnptit3.vn/resources/portal/Images/CMU/adminportal/1/hinhanh_1124_x_562_px_11_955444714.png"
        type="place"
      />
      <Navbar />
      <main className="pt-[72px]" style={{ background: '#f8fafc', color: '#1a2e1a' }}>

        {/* Hero */}
        <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
          <img
            src="https://dltm-cdn.vnptit3.vn/resources/portal/Images/CMU/adminportal/1/hinhanh_1124_x_562_px_11_955444714.png"
            alt="Chùa Monivongsa Bopharam"
            className="w-full h-full object-cover scale-105"
            style={{ filter: 'brightness(0.75)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />

          {/* Breadcrumb */}
          <div className="absolute top-6 left-6 flex items-center gap-2 text-sm text-white/70">
            <Link to="/di-tich" className="hover:text-primary transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-base">arrow_back</span> Di tích
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">Chùa Monivongsa Bopharam</span>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-14 max-w-5xl mx-auto">
            <span className="inline-flex items-center gap-1 px-3 py-1 mb-4 rounded-full bg-yellow-500/20 border border-yellow-400/30 text-yellow-200 text-xs font-bold uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">temple_buddhist</span> Tâm Linh · Văn Hóa Khmer
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-2xl leading-tight">
              Chùa Monivongsa Bopharam
            </h1>
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl leading-relaxed">
              Ngôi chùa Khmer lớn nhất trung tâm TP. Cà Mau — kiệt tác kiến trúc Angkor
              rực rỡ, linh thiêng, là trái tim của cộng đồng Phật giáo Nam tông miền Tây.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              {[
                { icon: 'temple_buddhist', label: 'Kiến trúc Angkor độc đáo' },
                { icon: 'location_on', label: 'Trung tâm TP. Cà Mau' },
                { icon: 'schedule', label: 'Mở cửa 6h – 21h hàng ngày' },
              ].map(s => (
                <span key={s.label} className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-white text-sm font-medium">
                  <span className="material-symbols-outlined text-yellow-300 text-base">{s.icon}</span>
                  {s.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">

          {/* Intro */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-700 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-yellow-500 inline-block"></span> Giới thiệu
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e1a]">Báu vật kiến trúc Khmer giữa lòng Cà Mau</h2>
              <p className="text-[#4b6351] leading-relaxed text-lg">
                Chùa Monivongsa Bopharam là biểu tượng của <span className="text-yellow-600 font-semibold">văn hóa Phật giáo Nam tông Khmer</span> tại Cà Mau — một trong ba dân tộc tạo nên bản sắc văn hóa phong phú của vùng đất cực Nam Tổ quốc.
              </p>
              <p className="text-[#4b6351] leading-relaxed">
                Kiến trúc theo phong cách <strong className="text-[#14532d]">Angkor Campuchia</strong> với mái cong nhiều tầng, tường dát vàng và hàng chục bức bích họa miêu tả cuộc đời Đức Phật tạo nên một không gian tâm linh tráng lệ và huyền bí.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-3xl blur-xl opacity-60"></div>
              <img
                src="https://dltm-cdn.vnptit3.vn/resources/portal/Images/CMU/adminportal/1/hinhanh_1124_x_562_px_11_955444714.png"
                alt="Chùa Monivongsa Bopharam"
                className="relative w-full h-[380px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-2xl border border-yellow-100 shadow-xl">
                <p className="text-yellow-500 text-lg font-black">Miễn phí</p>
                <p className="text-gray-400 text-xs">Vào tham quan</p>
              </div>
            </div>
          </section>

          {/* History timeline */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e1a] mb-3">Lịch sử hình thành</h2>
              <p className="text-[#4b6351]">Hành trình qua nhiều thế kỷ của ngôi chùa Khmer</p>
            </div>
            <div className="relative">
              <div className="absolute left-[22px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-300 via-yellow-500 to-yellow-300 md:-translate-x-px" />
              <div className="space-y-10">
                {HISTORY_STEPS.map((item, i) => (
                  <div key={i} className={`relative flex items-start gap-6 ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                    <div className="flex-shrink-0 w-11 h-11 rounded-full bg-yellow-500 flex items-center justify-center text-white font-black text-xs z-10 shadow-lg shadow-yellow-500/40 md:mx-auto">
                      {item.year.length > 5 ? '📍' : item.year.slice(0, 4)}
                    </div>
                    <div className={`bg-white rounded-2xl p-6 shadow-sm border border-yellow-100 flex-1 ${i % 2 === 1 ? 'md:mr-10' : 'md:ml-10'}`}>
                      <p className="text-yellow-600 text-xs font-bold uppercase tracking-widest mb-1">{item.year}</p>
                      <h3 className="text-[#1a2e1a] font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-[#4b6351] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features */}
          <section>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e1a] mb-2">Điểm nổi bật</h2>
              <p className="text-[#4b6351]">Những giá trị văn hóa và kiến trúc đặc sắc của ngôi chùa</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {FEATURES.map((d, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-yellow-100 hover:border-yellow-300 transition-all group hover:shadow-lg hover:shadow-yellow-100">
                  <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center mb-4 group-hover:bg-yellow-100 transition-colors">
                    <span className="material-symbols-outlined text-yellow-500 text-2xl">{d.icon}</span>
                  </div>
                  <h3 className="text-[#1a2e1a] font-bold text-lg mb-2">{d.name}</h3>
                  <p className="text-[#4b6351] text-sm leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Culture section */}
          <section className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 md:p-12 border border-yellow-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 border border-yellow-200 text-yellow-700 text-xs font-bold uppercase tracking-wider mb-4">
                  <span className="material-symbols-outlined text-sm">celebration</span> Lễ hội
                </div>
                <h2 className="text-3xl font-bold text-[#1a2e1a] mb-4">Ok Om Bok — Lễ Cúng Trăng</h2>
                <p className="text-[#4b6351] leading-relaxed mb-4">
                  Vào rằm tháng 10 âm lịch hàng năm, chùa Monivongsa tổ chức lễ hội <strong className="text-yellow-600">Ok Om Bok</strong> — lễ cúng trăng truyền thống của người Khmer. Đây là dịp để cảm tạ thần Mặt Trăng đã phù hộ cho mùa màng bội thu.
                </p>
                <p className="text-[#4b6351] leading-relaxed">
                  Lễ hội gồm các nghi thức cúng bái, đua ghe ngo, thả đèn nước và nhiều trò chơi dân gian đặc sắc thu hút hàng chục nghìn người tham dự mỗi năm.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: 'calendar_month', label: 'Thời gian', value: 'Rằm tháng 10 âm lịch' },
                  { icon: 'rowing', label: 'Đua ghe ngo', value: 'Môn thể thao truyền thống Khmer' },
                  { icon: 'local_fire_department', label: 'Thả đèn nước', value: 'Nghi lễ thả đèn trên sông đẹp lung linh' },
                  { icon: 'groups', label: 'Quy mô', value: 'Hàng chục nghìn người tham dự' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white rounded-xl p-4 border border-yellow-100 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-yellow-500 text-xl">{item.icon}</span>
                    </div>
                    <div>
                      <p className="text-yellow-700 text-xs font-bold">{item.label}</p>
                      <p className="text-[#1a2e1a] text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Tips */}
          <section className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#1a2e1a] mb-2">Lưu ý khi tham quan</h2>
              <p className="text-[#4b6351]">Tôn trọng không gian linh thiêng để có trải nghiệm trọn vẹn</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TIPS.map((t, i) => (
                <div key={i} className="flex items-start gap-4 bg-yellow-50 rounded-2xl p-6 border border-yellow-100">
                  <div className="w-12 h-12 rounded-2xl bg-yellow-100 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-yellow-500 text-2xl">{t.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-[#1a2e1a] font-bold mb-1">{t.title}</h3>
                    <p className="text-[#4b6351] text-sm leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Location info */}
          <section className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-[#1a2e1a] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-yellow-50 flex items-center justify-center">
                <span className="material-symbols-outlined text-yellow-500">location_on</span>
              </span>
              Thông tin địa điểm
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: 'location_on', label: 'Địa chỉ', value: 'Đường Phan Ngọc Hiển, TP. Cà Mau' },
                { icon: 'schedule', label: 'Giờ mở cửa', value: '6:00 – 21:00 (hàng ngày)' },
                { icon: 'payments', label: 'Vé vào cửa', value: 'Miễn phí tham quan' },
              ].map((info, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-yellow-50 rounded-xl">
                  <span className="material-symbols-outlined text-yellow-500 text-xl mt-0.5">{info.icon}</span>
                  <div>
                    <p className="text-yellow-700 text-xs font-bold uppercase tracking-wide mb-1">{info.label}</p>
                    <p className="text-[#1a2e1a] font-medium text-sm">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Back button */}
          <div className="text-center pb-4">
            <Link to="/di-tich" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-[#15803d] transition-colors shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-base">arrow_back</span>
              Quay lại Di tích
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
