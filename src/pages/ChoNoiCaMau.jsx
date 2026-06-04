import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ACTIVITIES = [
  { name: 'Mua sắm trên thuyền', icon: 'shopping_bag', desc: 'Trực tiếp mua hàng từ các thương hồ, từ rau củ quả tươi đến hải sản, trái cây miệt vườn.' },
  { name: 'Thưởng thức ẩm thực', icon: 'soup_kitchen', desc: 'Ăn sáng ngay trên sông với bún bò, hủ tiếu, bánh mì thuyền — hương vị đậm chất miền Tây.' },
  { name: 'Chụp ảnh bình minh', icon: 'photo_camera', desc: 'Khung cảnh bình minh trên chợ nổi với hàng trăm chiếc thuyền và ánh đèn le lói cực kỳ ấn tượng.' },
  { name: 'Dạo thuyền ngắm cảnh', icon: 'sailing', desc: 'Thuê xuồng máy dạo quanh chợ, len lỏi qua các con kênh nhỏ để cảm nhận nhịp sống sông nước.' },
  { name: 'Tìm hiểu văn hóa', icon: 'groups', desc: 'Giao lưu với người dân địa phương, nghe chuyện về cuộc đời thương hồ gắn bó với sông nước.' },
  { name: 'Mua đặc sản về làm quà', icon: 'redeem', desc: 'Mắm ba khía, tôm khô, cá khô Cà Mau — những món quà ý nghĩa mang hương vị Đất Mũi.' },
]

const TIPS = [
  { icon: 'schedule', title: 'Thời điểm lý tưởng', desc: 'Đến chợ từ 4h – 7h sáng để trải nghiệm không khí nhộn nhịp nhất. Sau 9h chợ bắt đầu vắng dần.' },
  { icon: 'directions_boat', title: 'Di chuyển', desc: 'Thuê xuồng máy từ bến Phường 8 (TP. Cà Mau), giá khoảng 100.000 – 200.000 VNĐ/chuyến.' },
  { icon: 'payments', title: 'Giá cả', desc: 'Mặc cả nhẹ nhàng, thân thiện. Hàng hóa thường có giá tốt hơn chợ đất do không có chi phí mặt bằng.' },
  { icon: 'wb_sunny', title: 'Thời tiết', desc: 'Mang theo áo khoác mỏng vào buổi sáng sớm, kem chống nắng nếu ở lâu trên sông.' },
]

export default function ChoNoiCaMau() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]" style={{ background: '#f8fafc', color: '#1a2e1a' }}>

        {/* Hero */}
        <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
          <img
            src="https://mia.vn/media/uploads/blog-du-lich/cho-noi-ca-mau-net-doc-dao-cua-mien-tay-song-nuoc-3-1663303247.jpg"
            alt="Chợ Nổi Cà Mau"
            className="w-full h-full object-cover scale-105"
            style={{ filter: 'brightness(0.75)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />
          <div className="absolute top-6 left-6 flex items-center gap-2 text-sm text-white/70">
            <Link to="/dia-diem" className="hover:text-primary transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-base">arrow_back</span> Địa điểm
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">Chợ Nổi Cà Mau</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-14 max-w-5xl mx-auto">
            <span className="inline-flex items-center gap-1 px-3 py-1 mb-4 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-bold uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">storefront</span> Văn Hóa Sông Nước
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 drop-shadow-2xl leading-tight">
              Chợ Nổi Cà Mau
            </h1>
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl leading-relaxed">
              Nét văn hóa giao thương độc đáo trên sông nước — nơi hàng trăm chiếc thuyền tụ họp mỗi sáng sớm, tạo nên bức tranh sống động của miền Tây Nam Bộ.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              {[
                { icon: 'schedule', label: 'Họp chợ từ 4h sáng' },
                { icon: 'location_on', label: 'Sông Gành Hào, TP. Cà Mau' },
                { icon: 'photo_camera', label: 'Thiên đường check-in' },
              ].map(s => (
                <span key={s.label} className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-white text-sm font-medium">
                  <span className="material-symbols-outlined text-blue-300 text-base">{s.icon}</span>
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span> Giới thiệu
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e1a]">Linh hồn sông nước miền Tây</h2>
              <p className="text-[#4b6351] leading-relaxed text-lg">
                Chợ Nổi Cà Mau họp trên sông Gành Hào — một trong những chợ nổi lớn nhất vùng Đồng bằng sông Cửu Long. Nơi đây là <span className="text-blue-600 font-semibold">biểu tượng văn hóa</span> đặc trưng của người dân Nam Bộ.
              </p>
              <p className="text-[#4b6351] leading-relaxed">
                Từ tờ mờ sáng, hàng trăm chiếc thuyền lớn nhỏ tụ họp, treo <strong className="text-[#14532d]">bẹo hàng</strong> — cây sào treo mẫu nông sản muốn bán — tạo nên khu chợ trên mặt nước đầy màu sắc và âm thanh sống động.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-400/20 to-cyan-500/20 rounded-3xl blur-xl opacity-60"></div>
              <img
                src="https://boothquangcao.com/elfinder/connector?_token=nTVFv2nONTRwdPwj6mlyElLQ9Wz2Z7gXLgaaofDn&cmd=file&target=fls2_Ym9vdGgvYm9vdGggMTg1L2NobyBub2kuanBn"
                alt="Chợ nổi Cà Mau buổi sáng"
                className="relative w-full h-[380px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-2xl border border-blue-100 shadow-xl">
                <p className="text-blue-500 text-2xl font-black">4h–9h</p>
                <p className="text-gray-400 text-xs">Sáng mỗi ngày</p>
              </div>
            </div>
          </section>

          {/* Beo hang */}
          <section className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 border border-blue-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
                  <span className="material-symbols-outlined text-sm">info</span> Nét độc đáo
                </div>
                <h2 className="text-3xl font-bold text-[#1a2e1a] mb-4">Tục "Bẹo Hàng" độc nhất vô nhị</h2>
                <p className="text-[#4b6351] leading-relaxed mb-4">
                  <strong className="text-blue-600">"Bẹo hàng"</strong> là phong tục đặc trưng của chợ nổi miền Tây: người bán treo mẫu hàng hóa lên cây sào dựng trên mũi thuyền. Người mua chỉ cần nhìn vào cây sào là biết thuyền đó bán gì.
                </p>
                <p className="text-[#4b6351] leading-relaxed">
                  Trái cây, rau củ, cá mắm... tất cả đều được "bẹo" lên cây sào, tạo nên cách trưng bày hàng hóa vô cùng thú vị mang đậm bản sắc văn hóa sông nước.
                </p>
              </div>
              <div className="relative h-[280px] rounded-2xl overflow-hidden">
                <img
                  src="https://cdnv2.tgdd.vn/bhx-static/bhx/News/Images/2024/10/03/1570695/image-82_202410031545488504.jpg"
                  alt="Bẹo hàng chợ nổi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Activities */}
          <section>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e1a] mb-2">Trải nghiệm tại chợ nổi</h2>
              <p className="text-[#4b6351]">Những hoạt động thú vị không thể bỏ lỡ khi ghé thăm</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {ACTIVITIES.map((d, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-blue-100 hover:border-blue-300 transition-all group hover:shadow-lg hover:shadow-blue-100">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                    <span className="material-symbols-outlined text-blue-500 text-2xl">{d.icon}</span>
                  </div>
                  <h3 className="text-[#1a2e1a] font-bold text-lg mb-2">{d.name}</h3>
                  <p className="text-[#4b6351] text-sm leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tips */}
          <section className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 border border-blue-100">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#1a2e1a] mb-2">Lưu ý khi tham quan</h2>
              <p className="text-[#4b6351]">Chuẩn bị tốt để có chuyến đi trọn vẹn</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TIPS.map((t, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-blue-100 shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-blue-500 text-2xl">{t.icon}</span>
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
              <span className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                <span className="material-symbols-outlined text-blue-500">location_on</span>
              </span>
              Thông tin địa điểm
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: 'location_on', label: 'Địa chỉ', value: 'Sông Gành Hào, Phường 8, TP. Cà Mau' },
                { icon: 'schedule', label: 'Giờ họp chợ', value: '4:00 – 9:00 sáng (hàng ngày)' },
                { icon: 'directions_boat', label: 'Phương tiện', value: 'Xuồng máy – thuê tại bến Phường 8' },
              ].map((info, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                  <span className="material-symbols-outlined text-blue-500 text-xl mt-0.5">{info.icon}</span>
                  <div>
                    <p className="text-blue-700 text-xs font-bold uppercase tracking-wide mb-1">{info.label}</p>
                    <p className="text-[#1a2e1a] font-medium text-sm">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Back button */}
          <div className="text-center pb-4">
            <Link to="/dia-diem" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-[#15803d] transition-colors shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-base">arrow_back</span>
              Quay lại Địa điểm
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
