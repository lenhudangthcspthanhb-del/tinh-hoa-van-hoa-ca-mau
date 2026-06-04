import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const HIGHLIGHTS = [
  { icon: 'location_on', title: 'Cột mốc tọa độ', desc: 'Chạm tay vào cột mốc thiêng liêng hình tam giác với 3 mặt hướng về 3 phía Đông, Tây và Nam — biểu trưng cho sự vững chãi của đất nước.' },
  { icon: 'directions_boat', title: 'Biểu tượng con tàu', desc: 'Chiêm ngưỡng và chụp ảnh cùng biểu tượng con tàu — thể hiện ý chí kiên cường và khát vọng vươn ra biển lớn của dân tộc Việt Nam.' },
  { icon: 'forest', title: 'Vườn Quốc gia Mũi Cà Mau', desc: 'Khám phá hơn 41.000 ha rừng ngập mặn đặc trưng — nơi sinh sống của nhiều loài động, thực vật quý hiếm.' },
  { icon: 'sunny', title: 'Ngắm bình minh & hoàng hôn', desc: 'Nơi duy nhất trên đất liền Việt Nam có thể ngắm mặt trời mọc ở biển Đông và lặn ở biển Tây trong cùng một ngày.' },
]

const EXPERIENCES = [
  { icon: 'rowing', title: 'Tour xuyên rừng ngập mặn', desc: 'Tham gia các tour tham quan bằng xuồng, len lỏi qua những tán rừng đước xanh ngát, hòa mình vào thiên nhiên trong lành độc đáo.' },
  { icon: 'photo_camera', title: 'Check-in cột mốc quốc gia', desc: 'Chạm tay vào cột mốc tọa độ GPS 104°49\'E – 8°37\'N, chụp ảnh kỷ niệm tại điểm cực Nam thiêng liêng của Tổ quốc.' },
  { icon: 'eco', title: 'Quan sát động vật hoang dã', desc: 'Khám phá hệ sinh thái rừng ngập mặn phong phú — nơi trú ngụ của các loài chim, cá, tôm và nhiều sinh vật biển quý hiếm.' },
  { icon: 'sailing', title: 'Ngắm biển từ Đất Mũi', desc: 'Đứng ở điểm cuối cùng của đất liền, ngắm nhìn biển cả bao la, cảm nhận không khí trong lành và khung cảnh hùng vĩ nơi cực Nam.' },
]

const TIPS = [
  { icon: 'calendar_month', title: 'Thời điểm lý tưởng', desc: 'Tháng 12 đến tháng 4 (mùa khô) — thời tiết đẹp, ít mưa, thuận lợi nhất để tham quan và di chuyển.' },
  { icon: 'directions_boat', title: 'Cách di chuyển', desc: 'Từ TP Cà Mau: đi tàu cao tốc qua sông Đốc hoặc đường bộ đến cảng Năm Căn rồi đi tàu về Đất Mũi (~3–4 tiếng).' },
  { icon: 'local_activity', title: 'Giá vé tham khảo', desc: 'Vé vào cửa khu du lịch Đất Mũi: ~30.000 VNĐ/người. Tour xuồng xuyên rừng: ~50.000–100.000 VNĐ/người.' },
  { icon: 'luggage', title: 'Lưu ý khi đến', desc: 'Mang theo kem chống nắng, áo mưa nhẹ. Nên đặt tàu trước nếu đi vào mùa cao điểm (lễ, Tết).' },
]

export default function MuiCaMau() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]" style={{ background: '#f8fafc', color: '#1a2e1a' }}>

        {/* Hero */}
        <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
          <img
            src="https://ik.imagekit.io/tvlk/blog/2023/03/go-and-share-du-lich-mui-ca-mau-17.jpg"
            alt="Mũi Cà Mau - Cực Nam Tổ quốc"
            className="w-full h-full object-cover scale-105"
            style={{ filter: 'brightness(0.75)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />

          {/* Breadcrumb */}
          <div className="absolute top-6 left-6 flex items-center gap-2 text-sm text-white/70">
            <Link to="/dia-diem" className="hover:text-primary transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-base">arrow_back</span> Điểm đến
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">Mũi Cà Mau</span>
          </div>

          {/* Hero content */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-14 max-w-5xl mx-auto">
            <span className="inline-flex items-center gap-1 px-3 py-1 mb-4 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">location_on</span> Cực Nam Tổ quốc
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 drop-shadow-2xl leading-tight">
              Mũi Cà Mau
            </h1>
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl leading-relaxed">
              Chạm chân đến Mũi Cà Mau — ngắm nhìn cực Nam Tổ quốc thiêng liêng, nơi trời biển gặp nhau
              và lịch sử dân tộc được khắc ghi qua từng cột mốc.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              {[
                { icon: 'public', label: 'Cực Nam Tổ quốc' },
                { icon: 'forest', label: 'Vườn Quốc gia 41.000 ha' },
                { icon: 'sunny', label: 'Ngắm bình minh & hoàng hôn' },
              ].map(s => (
                <span key={s.label} className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-white text-sm font-medium">
                  <span className="material-symbols-outlined text-primary text-base">{s.icon}</span>
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary inline-block"></span> Giới thiệu
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e1a]">Điểm cực Nam thiêng liêng của Tổ quốc</h2>
              <p className="text-[#4b6351] leading-relaxed text-base">
                Mũi Cà Mau, <span className="text-primary font-semibold">điểm cực Nam của Tổ quốc</span>, nơi đây không chỉ mang ý nghĩa lịch sử, mà còn sở hữu nhiều cảnh quan thiên nhiên độc đáo, hấp dẫn du khách trong và ngoài nước.
              </p>
              <p className="text-[#4b6351] leading-relaxed text-base">
                Đến với Mũi Cà Mau, du khách có thể <strong className="text-[#14532d]">chạm tay vào cột mốc tọa độ</strong>, cảm nhận niềm tự hào dân tộc. Công trình này được thiết kế hình tam giác với 3 mặt hướng về 3 phía: Đông, Tây và Nam, biểu trưng cho sự vững chãi của đất nước.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 to-[#2c4823]/30 rounded-3xl blur-xl opacity-60"></div>
              <img
                src="https://thudotravel.com/uploads/0000/8/2024/11/21/0120240122084915.jpg"
                alt="Cột mốc Mũi Cà Mau"
                className="relative w-full h-[360px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-2xl border border-green-100 shadow-xl">
                <p className="text-primary text-xl font-black">104°49'E</p>
                <p className="text-gray-400 text-xs">8°37'N – Cực Nam VN</p>
              </div>
            </div>
          </section>

          {/* Con tau & Vuon quoc gia */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-3 bg-gradient-to-r from-[#2c4823]/30 to-primary/20 rounded-3xl blur-xl opacity-60"></div>
              <img
                src="https://ik.imagekit.io/tvlk/blog/2023/03/go-and-share-du-lich-mui-ca-mau-1.jpg"
                alt="Rừng ngập mặn Vườn Quốc gia Mũi Cà Mau"
                className="relative w-full h-[360px] object-cover rounded-2xl shadow-2xl"
                onError={e => { e.target.src = 'https://ik.imagekit.io/tvlk/blog/2023/03/go-and-share-du-lich-mui-ca-mau-17.jpg' }}
              />
            </div>
            <div className="space-y-5 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary inline-block"></span> Biểu tượng & Thiên nhiên
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e1a]">Con tàu & Vườn Quốc gia</h2>
              <p className="text-[#4b6351] leading-relaxed text-base">
                Du khách còn được ngắm và chụp ảnh lưu niệm cùng <span className="text-primary font-semibold">biểu tượng con tàu</span>, thể hiện ý chí kiên cường và khát vọng vươn ra biển lớn của dân tộc Việt Nam.
              </p>
              <p className="text-[#4b6351] leading-relaxed text-base">
                Đặc biệt, du khách sẽ được trải nghiệm <strong className="text-[#14532d]">xuyên rừng Vườn Quốc gia Mũi Cà Mau</strong>. Với diện tích hơn <span className="text-primary font-semibold">41.000 ha</span>, đây là nơi bảo tồn hệ sinh thái rừng ngập mặn đặc trưng, nơi sinh sống của nhiều loài động, thực vật quý hiếm.
              </p>
              <p className="text-[#4b6351] leading-relaxed text-base">
                Du khách có thể tham gia các <strong className="text-[#14532d]">tour tham quan xuyên rừng</strong>, khám phá hệ sinh thái độc đáo và trải nghiệm cảm giác hòa mình vào thiên nhiên trong lành...
              </p>
            </div>
          </section>



          {/* Back button */}
          <div className="text-center pb-4">
            <Link
              to="/dia-diem"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-white transition-colors shadow-lg shadow-primary/20"
            >
              <span className="material-symbols-outlined text-base">arrow_back</span>
              Quay lại Điểm đến
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
