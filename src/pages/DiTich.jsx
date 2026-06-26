import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEOHead from '../components/SEOHead'

export default function DiTich() {
  return (
    <>
      <SEOHead
        title="Di Tích Lịch Sử Cà Mau"
        description="Hành trình về nguồn - Khám phá các di tích lịch sử Cà Mau: Khu tưởng niệm Bác Hồ, Chùa Monivongsa, Nhà dây thép, Tháp cổ Vĩnh Hưng và nhiều di tích quốc gia."
        path="/di-tich"
        image="https://images2.thanhnien.vn/528068263637045248/2024/2/12/du-lich-1707727394310920045876.jpg"
      />
      <Navbar />
      <main className="flex flex-col w-full min-h-screen" style={{ background: '#f8fafc', color: '#1a2e1a' }}>

        {/* Hero */}
        <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">

          <div className="absolute inset-0 z-0">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6" style={{ gridAutoRows: '400px' }}></div>
            <img
              alt="Historical temple in Vietnam"
              className="w-full h-full object-cover brightness-110"
              src="https://images2.thanhnien.vn/528068263637045248/2024/2/12/du-lich-1707727394310920045876.jpg"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(8,16,5,0.05) 0%, rgba(8,16,5,0.45) 100%)' }}></div>
          </div>
          <div className="relative h-full flex flex-col justify-center items-center px-6 max-w-[1200px] text-center">
            <span className="text-white text-xs font-bold mb-4 tracking-widest uppercase inline-block bg-red-500 backdrop-blur-md px-3 py-1 rounded-full w-max">Di Tích Lịch Sử</span>
            <h1 className="text-white text-4xl md:text-7xl font-black mb-6 max-w-4xl">Hành Trình Về Nguồn</h1>

          </div>
        </section>

        <div className="px-6 max-w-[1200px] mx-auto my-10 space-y-10">

          {/* Feature: Khu tưởng niệm Bác Hồ + Chùa Monivongsa */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <article className="md:col-span-8 relative rounded-xl overflow-hidden group min-h-[400px]">
              <Link to="/di-tich/khu-tuong-niem-BH-CM" className="block relative rounded-xl overflow-hidden group h-full min-h-[400px]">
                <img
                  alt="Chùa Monivongsa Bopharam"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="/images/khuluuniemchutichhochiminhcamau1_244113314.jpg"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,16,5,0.9) 0%, rgba(8,16,5,0) 60%)' }}></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-block bg-orange-500/80 text-white text-xs font-bold px-2 py-1 rounded-md mb-2">Di tích quốc gia</span>
                  <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-3">Khu tưởng niệm Bác Hồ</h2>
                  <div className="flex items-center gap-2 text-white text-sm">
                    <span className="material-symbols-outlined text-primary text-base">location_on</span>
                    Phường An Xuyên, tỉnh Cà Mau
                  </div>
                </div>
              </Link>
            </article>
            <div className="md:col-span-4">
              <Link to="/di-tich/chua-monivongsa-bopharam" className="block relative rounded-xl overflow-hidden group h-full min-h-[400px]">
                <img
                  alt="Chùa Monivongsa Bopharam"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://dltm-cdn.vnptit3.vn/resources/portal/Images/CMU/adminportal/1/hinhanh_1124_x_562_px_11_955444714.png"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,16,5,0.9) 0%, rgba(8,16,5,0) 60%)' }}></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block bg-orange-500/80 text-white text-xs font-bold px-2 py-1 rounded-md mb-2">Văn hóa Khmer</span>
                  <h3 className="text-white text-xl font-bold">Chùa Monivongsa Bopharam</h3>
                  <p className="text-green-500 text-sm mt-1">Ngôi chùa Khmer lớn nhất trung tâm TP. Cà Mau với kiến trúc Angkor rực rỡ.</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-yellow-300 text-sm font-bold group-hover:gap-2 transition-all">
                    Xem chi tiết <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Nhà Dây Thép - Glassmorphism */}
          <section className="rounded-2xl p-8 md:p-12 border border-white relative overflow-hidden" style={{ background: 'rgba(116, 235, 83, 0.95)', backdropFilter: 'blur(12px)' }}>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-orange-500/80 text-white text-xs font-bold px-2 py-1 rounded-md mb-2">Di tích quốc gia</span>
                <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-6">Nhà dây thép</h2>
                <p className="text-green-900 text-base mb-6">
                  Di tích lịch sử cấp quốc gia, nơi ghi dấu những chiến công thầm lặng mà oanh liệt của các chiến sĩ giao bưu trong thời kỳ kháng chiến. Minh chứng sống động cho tinh thần thép của quân và dân Cà Mau.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-white">
                    <span className="material-symbols-outlined text-primary text-base">schedule</span>
                    <span><strong className="text-[#14532d]">Giờ mở cửa:</strong> 07:30 – 17:00 (Thứ 3 – Chủ nhật)</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-white">
                    <span className="material-symbols-outlined text-primary text-base">location_on</span>
                    <span><strong className="text-[#14532d]">Địa chỉ:</strong> Phường An Xuyên, tỉnh Cà Mau</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-white">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5">info</span>
                    <span><strong className="text-[#14532d]">Lưu ý:</strong> Trang phục lịch sự, không chụp ảnh tại khu vực cấm.</span>
                  </li>
                </ul>
              </div>
              <div className="relative rounded-lg overflow-hidden h-80">
                <Link to="/di-tich/Nha-day-thep" className="block relative rounded-xl overflow-hidden group h-full min-h-[400px]">
                  <img
                    alt="Nhà dây thép"
                    className="w-full h-full object-cover"
                    src="/images/nha-day-thep.jpeg"
                  />
                </Link>
              </div>
            </div>
          </section>

          {/* ===== 5 Di Tích Mới ===== */}
          <div>
            <div className="text-center mb-10">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-3">Khám phá thêm</span>
              <h2 className="text-[#1a2e1a] text-3xl md:text-4xl font-bold">Các Di Tích Nổi Bật Khác</h2>
              <p className="text-[#4b6351] mt-2 max-w-xl mx-auto text-sm">Hành trình về với lịch sử, văn hóa và tâm linh của vùng đất cực Nam Tổ quốc.</p>
            </div>

            {/* Row 1: Tháp Vĩnh Hưng (lớn) + Căn cứ Cái Chanh */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
              <article className="md:col-span-7 relative rounded-2xl overflow-hidden group min-h-[340px] border border-green-100">
                <img
                  alt="Tháp cổ Vĩnh Hưng"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/479249Efp/anh-mo-ta.png"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,16,5,0.92) 0%, rgba(8,16,5,0.1) 60%)' }}></div>
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-primary text-xl">fort</span>
                    <span className="inline-block bg-orange-500/80 text-white text-xs font-bold px-2 py-1 rounded-md mb-2">Kiến trúc cổ</span>
                    <span className="inline-block bg-orange-500/80 text-white text-xs font-bold px-2 py-1 rounded-md mb-2">• Di tích quốc gia đặc biệt</span>
                  </div>
                  <h3 className="text-white text-2xl md:text-3xl font-extrabold mb-2">Tháp cổ Vĩnh Hưng</h3>
                  <p className="text-green-500 text-sm leading-relaxed line-clamp-3">
                    Công trình kiến trúc Phật giáo Nam Tông Khmer cổ nhất vùng ĐBSCL, có niên đại hơn 1.000 năm. Được xây bằng gạch nung không có mạch vữa theo kỹ thuật độc đáo của người Khmer cổ.
                  </p>
                  <div className="flex items-center gap-1 mt-3 text-white text-xs">
                    <span className="material-symbols-outlined text-primary text-sm">location_on</span>
                    Xã Châu Thới, tỉnh Cà Mau
                  </div>
                </div>
              </article>

              <article className="md:col-span-5 relative rounded-2xl overflow-hidden group min-h-[340px] border border-green-100">
                <img
                  alt="Khu căn cứ Cái Chanh"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://file3.qdnd.vn/data/images/0/2025/08/26/upload_2080/cccaichanh116294446am.jpg?dpi=150&quality=100&w=870"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,16,5,0.92) 0%, rgba(8,16,5,0.1) 55%)' }}></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-primary text-lg">shield</span>
                    <span className="inline-block bg-orange-500/80 text-white text-xs font-bold px-2 py-1 rounded-md mb-2">Căn cứ cách mạng</span>
                  </div>
                  <h3 className="text-white text-2xl font-extrabold mb-2">Khu căn cứ Cái Chanh</h3>
                  <p className="text-green-500 text-sm leading-relaxed line-clamp-3">
                    Khu Di tích lịch sử Quốc gia đặc biệt Căn cứ Cái Chanh toạ lạc tại ấp Cây Cui, xã Ninh Thạnh Lợi, tỉnh Cà Mau, là một trong những di tích mang đậm dấu ấn lịch sử của cách mạng tỉnh Bạc Liêu (cũ) nói riêng và của cách mạng miền Nam Việt Nam nói chung trong suốt hai cuộc kháng chiến chống Pháp và chống Mỹ cứu nước.
                  </p>
                  <div className="flex items-center gap-1 mt-3 text-white text-xs">
                    <span className="material-symbols-outlined text-primary text-sm">location_on</span>
                    xã Ninh Thạnh Lợi, tỉnh Cà Mau
                  </div>
                </div>
              </article>
            </div>

            {/* Row 2: Đồng Nọc Nạng + Chùa Xiêm Cán + Quán Âm Phật Đài */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Đồng Nọc Nạng */}
              <article className="relative rounded-2xl overflow-hidden group min-h-[300px] border border-green-100">
                <img
                  alt="Khu di tích Đồng Nọc Nạng"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://media.baobinhphuoc.com.vn/Content/UploadFiles/EditorFiles/images/GocAnh/dongngocnang5.jpg"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,16,5,0.93) 0%, rgba(8,16,5,0.1) 55%)' }}></div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="material-symbols-outlined text-primary text-base">agriculture</span>
                    <span className="inline-block bg-orange-500/80 text-white text-xs font-bold px-2 py-1 rounded-md mb-2">Di tích lịch sử</span>
                  </div>
                  <h3 className="text-white text-lg font-extrabold mb-1.5">Khu di tích Đồng Nọc Nạng</h3>
                  <p className="text-green-500 text-xs leading-relaxed line-clamp-3">
                    Nơi ghi lại cuộc khởi nghĩa nông dân 1928 của gia đình Mười Chức — biểu tượng tinh thần bất khuất của người nông dân Nam Bộ. Xếp hạng di tích quốc gia năm 1991.
                  </p>
                  <div className="flex items-center gap-1 mt-2 text-white text-xs">
                    <span className="material-symbols-outlined text-primary text-sm">location_on</span>
                    Phường Giá Rai, tỉnh Cà Mau
                  </div>
                </div>
              </article>

              {/* Chùa Xiêm Cán */}
              <article className="relative rounded-2xl overflow-hidden group min-h-[300px] border border-green-100">
                <img
                  alt="Chùa Xiêm Cán"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://ik.imagekit.io/tvlk/blog/2023/08/chua-xiem-can-cover.jpg"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,16,5,0.93) 0%, rgba(8,16,5,0.1) 55%)' }}></div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="material-symbols-outlined text-primary text-base">temple_buddhist</span>
                    <span className="bg-orange-500/80 text-white text-xs font-bold px-2 py-0.5 rounded-md">Văn hóa Khmer</span>
                  </div>
                  <h3 className="text-white text-lg font-extrabold mb-1.5">Chùa Xiêm Cán</h3>
                  <p className="text-green-500 text-xs leading-relaxed line-clamp-3">
                    Ngôi chùa Khmer Nam Tông lớn và đẹp nhất ĐBSCL, xây từ năm 1887. Kiến trúc Angkor cổ điển với mái cong nhiều tầng, phù điêu tinh xảo trên khuôn viên rộng 4 ha.
                  </p>

                </div>
              </article>

              {/* Quán Âm Phật Đài */}
              <article className="relative rounded-2xl overflow-hidden group min-h-[300px] border border-green-100">
                <img
                  alt="Quán Âm Phật Đài"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://chuaviettoancau.com/userfiles/2020/01/270-01-7542.jpg"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,16,5,0.93) 0%, rgba(8,16,5,0.1) 55%)' }}></div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="material-symbols-outlined text-primary text-base">self_improvement</span>
                    <span className="inline-block bg-orange-500/80 text-white text-xs font-bold px-2 py-1 rounded-md mb-2">Tâm linh</span>
                  </div>
                  <h3 className="text-white text-lg font-extrabold mb-1.5">Quán Âm Phật Đài</h3>
                  <p className="text-green-500 text-xs leading-relaxed line-clamp-3">
                    Tượng Phật Bà Quan Âm cao 18m hướng ra biển Tây, che chở ngư dân mỗi lần ra khơi. Từ đỉnh đài phóng tầm mắt bao quát toàn cảnh thị trấn Sông Đốc và biển cả bao la.
                  </p>
                  <div className="flex items-center gap-1 mt-2 text-white text-xs">
                    <span className="material-symbols-outlined text-primary text-sm">location_on</span>
                    Phường Hiệp Thành, tỉnh Cà Mau
                  </div>
                </div>
              </article>
            </div>
          </div>

        </div >
      </main >
      <Footer />
    </>
  )
}
