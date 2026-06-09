import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEOHead from '../components/SEOHead'

export default function VuonQuocGiaUMinhHa() {
  return (
    <>
      <SEOHead
        title="Vườn Quốc Gia U Minh Hạ - Di Sản Sinh Quyển UNESCO"
        description="Vườn Quốc gia U Minh Hạ - lá phổi xanh ĐBSCL, UNESCO công nhận 2009. Hơn 8.500 ha rừng tràm, 200+ loài động vật quý hiếm."
        path="/dia-diem/vuon-quoc-gia-u-minh-ha"
        image="https://file.hstatic.net/1000217270/article/vuon_quoc_gia_u_minh_ha_1_5ef9d0a96e724e1f9be29f4cb7b2aea5.jpg"
        type="place"
      />
      <Navbar />
      <main className="pt-[100px]" style={{ background: '#f8fafc', color: '#ffffffff' }}>

        {/* Hero */}
        <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
          <img
            src="https://file.hstatic.net/1000217270/article/vuon_quoc_gia_u_minh_ha_1_5ef9d0a96e724e1f9be29f4cb7b2aea5.jpg"
            alt="Vườn Quốc gia U Minh Hạ"
            className="w-full h-full object-cover scale-105"
            style={{ filter: 'brightness(0.7)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />
          <div className="absolute top-6 left-6 flex items-center gap-2 text-sm text-white/70">
            <Link to="/dia-diem" className="hover:text-primary transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-base">arrow_back</span> Điểm đến
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">Vườn Quốc gia U Minh Hạ</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-14 max-w-5xl mx-auto">
            <span className="inline-flex items-center gap-1 px-3 py-1 mb-4 rounded-full bg-green-500 border border-primary/30 text-white text-xs font-bold uppercase tracking-widest">
              <span className="material-symbols-outlined text-white">forest</span> Di sản sinh quyển UNESCO
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-orange-500 mb-4 drop-shadow-2xl leading-tight">
              Vườn Quốc gia U Minh Hạ
            </h1>
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl leading-relaxed">
              Lá phổi xanh của Đồng bằng sông Cửu Long — nơi hệ sinh thái rừng tràm ngập nước
              độc đáo được UNESCO công nhận là vùng lõi khu dự trữ sinh quyển thế giới.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              {[
                { icon: 'verified', label: 'UNESCO 2009' },
                { icon: 'forest', label: 'Hơn 8.500 ha' },
                { icon: 'pets', label: 'Gần 200 loài động vật' },
              ].map(s => (
                <span key={s.label} className="flex items-center gap-1.5 bg-orange-500 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-1.5 text-white text-sm font-medium">
                  <span className="material-symbols-outlined text-primary text-base">{s.icon}</span>
                  {s.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">

          {/* Đoạn 1: Lá phổi xanh */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary inline-block"></span> Tầm quan trọng
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e1a]">Lá phổi xanh miền Tây</h2>
              <p className="text-[#4b6351] leading-relaxed text-base">
                Tỉnh Cà Mau có diện tích hơn <span className="text-primary font-semibold">94.000 ha rừng</span>, chủ yếu là rừng ngập nước. Đây không chỉ là lá phổi xanh của riêng tỉnh mà còn là của khu vực Đồng bằng sông Cửu Long.
              </p>
              <p className="text-[#4b6351] leading-relaxed text-base">
                Trước sự tác động của biến đổi khí hậu ngày càng rõ rệt, công tác quản lý, bảo vệ rừng là cần thiết và được ưu tiên hơn bao giờ hết. Trong đó, việc <strong className="text-[#14532d]">bảo tồn đa dạng sinh học tại Vườn Quốc gia U Minh Hạ</strong> là một trong những nhiệm vụ quan trọng được lãnh đạo tỉnh Cà Mau quan tâm thường xuyên.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 to-[#2c4823]/30 rounded-3xl blur-xl opacity-60"></div>
              <img
                src="https://images.vietnamtourism.gov.vn/vn//images/2022/thang_11/1011.ca_mau_vuon_quoc_gia_u_minh_ha1.jpg"
                alt="Rừng tràm U Minh Hạ"
                className="relative w-full h-[360px] object-cover rounded-2xl shadow-2xl"
                onError={e => { e.target.src = 'https://lh3.googleusercontent.com/aida-public/AB6AXuASntBlhKG7-zz-z0ZHaj9YEUvJxn37FM4Lv25W8VfRzaGbddGWn8_L00JmW-wYdSRbLOaqPQWvsuuWx9A_uCUiAeNmcK06fiM_MNlXE1yDydnRo1ZdymM-W6Qag0KtUzFa6eF9G028_m5Rsbg47N_21kv09O9zYNM8ZAABsXySCnwbaS8IXFRrNasdZ7unmIEFSHfztjve7bVN32VIyhKAGBQCF1B4JVhy6ErtQgaRPNlBYhI5V9b4SLgPSCpxRxvpEVCgNC0j8u0' }}
              />
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-2xl border border-green-100 shadow-xl">
                <p className="text-primary text-xl font-black">94.000 ha</p>
                <p className="text-gray-400 text-xs">Diện tích rừng Cà Mau</p>
              </div>
            </div>
          </section>

          {/* Ảnh toàn cảnh rừng */}
          <section>
            <div className="relative rounded-2xl overflow-hidden h-[500px] shadow-2xl">
              <img
                src="https://mekongasean.vn/stores/news_dataimages/2024/112024/11/16/rung-tram-u-minh-ha-ca-mau-anh-vgp20241111161830.jpg?rt=20241111161844"
                alt="Toàn cảnh Vườn Quốc gia U Minh Hạ"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-white text-lg font-bold">Hệ sinh thái rừng tràm ngập nước đặc trưng</p>
                <p className="text-gray-300 text-sm">Vùng lõi khu dự trữ sinh quyển thế giới Mũi Cà Mau</p>
              </div>
            </div>
          </section>

          {/* Đoạn 2: UNESCO & đặc điểm */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-3 bg-gradient-to-r from-[#2c4823]/30 to-primary/20 rounded-3xl blur-xl opacity-60"></div>
              <img
                src="https://images.vietnamtourism.gov.vn/vn//images/2022/thang_11/1011.ca_mau_vuon_quoc_gia_u_minh_ha2.jpg"
                alt="Vườn Quốc gia U Minh Hạ UNESCO"
                className="relative w-full h-[360px] object-cover rounded-2xl shadow-2xl"
                onError={e => { e.target.src = 'https://lh3.googleusercontent.com/aida-public/AB6AXuASntBlhKG7-zz-z0ZHaj9YEUvJxn37FM4Lv25W8VfRzaGbddGWn8_L00JmW-wYdSRbLOaqPQWvsuuWx9A_uCUiAeNmcK06fiM_MNlXE1yDydnRo1ZdymM-W6Qag0KtUzFa6eF9G028_m5Rsbg47N_21kv09O9zYNM8ZAABsXySCnwbaS8IXFRrNasdZ7unmIEFSHfztjve7bVN32VIyhKAGBQCF1B4JVhy6ErtQgaRPNlBYhI5V9b4SLgPSCpxRxvpEVCgNC0j8u0' }}
              />
            </div>
            <div className="space-y-5 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary inline-block"></span> Công nhận quốc tế
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e1a]">Vùng lõi sinh quyển thế giới</h2>
              <p className="text-[#4b6351] leading-relaxed text-base">
                Vườn Quốc gia U Minh Hạ có diện tích hơn <span className="text-primary font-semibold">8.500 ha</span>, là một trong 2 vườn Quốc gia của tỉnh Cà Mau và là một trong 03 điểm bảo tồn đất ngập nước tại Đồng bằng sông Cửu Long.
              </p>
              <p className="text-[#4b6351] leading-relaxed text-base">
                Ngày 25/06/2009, Vườn Quốc gia U Minh Hạ được <strong className="text-[#14532d]">UNESCO công nhận là 1 trong 3 vùng lõi</strong> của khu dự trữ sinh quyển thế giới Mũi Cà Mau.
              </p>
              <p className="text-[#4b6351] leading-relaxed text-base">
                Nơi đây có hệ sinh thái rừng tràm hình thành trong điều kiện ngập nước, úng phèn, trên đất than bùn với độ dày từ <span className="text-primary font-semibold">0,5m đến 1,5m trên diện tích 2.658 ha</span>, chiếm 31%.
              </p>
            </div>
          </section>

          {/* Ảnh đa dạng sinh học */}
          <section>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden h-[280px]">
                <img
                  src="https://baocantho.com.vn/image/fckeditor/upload/2017/20171022/images/u-minh.jpg"
                  alt="Tour xuyên rừng U Minh Hạ"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white font-bold text-sm">Khám phá rừng U Minh Hạ</p>
              </div>
              <div className="relative rounded-2xl overflow-hidden h-[280px]">
                <img
                  src="https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/08_2019/1_20.jpg"
                  alt="Chim quý tại U Minh Hạ"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white font-bold text-sm">Trải nghiệm tuyệt vời cho những ai yêu thích thiên nhiên</p>
              </div>
            </div>
          </section>

          {/* Đoạn 3: Đa dạng sinh học & bảo tồn */}
          <section className="bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary inline-block"></span> Đa dạng sinh học
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a2e1a]">Kho báu sinh vật học quý giá</h2>
              <p className="text-[#4b6351] leading-relaxed text-base max-w-3xl">
                Nơi đây có sự đa dạng sinh học đặc trưng của vùng rừng ngập lợ, là nơi cư trú của nhiều loài chim, thú quý hiếm, có giá trị khoa học được ghi vào <span className="text-primary font-semibold">sách đỏ Việt Nam</span> cùng nhiều loài chim đang bị đe dọa tuyệt chủng trên thế giới và nhiều loài động vật thông thường.
              </p>
              <p className="text-[#4b6351] leading-relaxed text-base max-w-3xl">
                Theo ghi nhận tại rừng có hơn <strong className="text-[#14532d]">100 loài thực vật</strong>, gần <strong className="text-[#14532d]">200 loài động vật</strong> gồm thú, chim, bò sát, lưỡng cư và cá nước ngọt.
              </p>
              <p className="text-[#4b6351] leading-relaxed text-base max-w-3xl">
                Từ trước đến nay, công tác bảo tồn sự đa dạng sinh học của Vườn Quốc gia U Minh Hạ được lãnh đạo tỉnh Cà Mau quan tâm chỉ đạo, các ngành, các cấp thực hiện xuyên suốt, bằng nhiều hoạt động cụ thể. Xác định nhiệm vụ trọng tâm là <span className="text-primary font-semibold">nâng cao ý thức của cộng đồng dân cư</span>.
              </p>
            </div>
          </section>

          {/* Stats */}
          <section>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: '8.500+', label: 'Ha diện tích', icon: 'forest' },
                { value: '100+', label: 'Loài thực vật', icon: 'eco' },
                { value: '200+', label: 'Loài động vật', icon: 'pets' },
                { value: '2009', label: 'Công nhận UNESCO', icon: 'verified' },
              ].map((s, i) => (
                <div key={i} className="flex flex-col items-center text-center bg-[#f0fdf4] p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all">
                  <span className="material-symbols-outlined text-primary text-3xl mb-3">{s.icon}</span>
                  <p className="text-primary text-3xl font-black mb-1">{s.value}</p>
                  <p className="text-[#4b6351] text-sm">{s.label}</p>
                </div>
              ))}
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
