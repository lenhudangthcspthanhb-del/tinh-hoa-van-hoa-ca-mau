import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEOHead from '../components/SEOHead'

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
            <div className="flex flex-wrap gap-4 mt-6">

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
              <p className="text-[#4b6351] leading-relaxed text-base">
                Chùa Monivongsa Bopharam là biểu tượng của văn hóa Phật giáo Nam tông Khmer tại Cà Mau — một trong ba dân tộc tạo nên bản sắc văn hóa phong phú của vùng đất cực Nam Tổ quốc.
              </p>
              <p className="text-[#4b6351] leading-relaxed">
                Kiến trúc theo phong cách Angkor Campuchia với mái cong nhiều tầng, tường dát vàng và hàng chục bức bích họa miêu tả cuộc đời Đức Phật tạo nên một không gian tâm linh tráng lệ và huyền bí.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-3xl blur-xl opacity-60"></div>
              <img
                src="/images/chua-monivongsa-bopharam-ngoi-chua-khmer-doc-dao-cua-phat-giao-nam-tong-01-1663768729.jpg"
                className="relative w-full h-[280px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </section>
          {/* Đoạn 2:  */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-3 bg-gradient-to-r from-[#2c4823]/30 to-primary/20 rounded-3xl blur-xl opacity-60"></div>
              <img
                src="/images/hinhanh_1124_x_562_px_8_864937535.png"
                className="relative w-full h-[280px] object-cover rounded-2xl shadow-2xl"
                onError={e => { e.target.src = 'https://ik.imagekit.io/tvlk/blog/2024/03/go-and-share-du-lich-hon-da-bac-ca-mau-3-1024x527.webp?tr=q-70,c-at_max,w-1000,h-600' }}
              />
            </div>
            <div className="space-y-5 order-1 lg:order-2">
              <p className="text-[#4b6351] leading-relaxed text-base">
                Chùa Monivongsa Bopharam được xây dựng trên khuôn viên rộng khoảng 230m2, gồm chính điện, sala, nhà ở của các sư sãi, tháp để cốt, am thờ, ao sen...
              </p>
              <p className="text-[#4b6351] leading-relaxed text-base">
                Cổng chính của chùa quay về hướng đông. Bên trên là hình 3 ngọn tháp tượng trưng cho Tam giới hay Tam bảo, được trang trí bằng nhiều loại hoa văn tinh xảo. Cách cổng 100 mét là khuôn viên chùa với những hàng cây bao quanh. Một ngôi chùa Khmer thường có một cổng chính và nhiều cổng phụ thể hiện tư tưởng rộng cửa đón chào bước chân người hành hương, du khách. Đây cũng chính là nét đặc trưng chung của các ngôi chùa Khmer Nam Bộ.
              </p>
            </div>
          </section>
          {/* Đoạn 3:  */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <p className="text-[#4b6351] leading-relaxed">
                Kiến trúc theo phong cách Angkor Campuchia với mái cong nhiều tầng, tường dát vàng và hàng chục bức bích họa miêu tả cuộc đời Đức Phật tạo nên một không gian tâm linh tráng lệ và huyền bí.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-3xl blur-xl opacity-60"></div>
              <img
                src="/images/chua-monivongsa-bopharam-ngoi-chua-khmer-doc-dao-cua-phat-giao-nam-tong-01-1663768729.jpg"
                className="relative w-full h-[280px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </section>
          {/* Đoạn 4:  */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-3 bg-gradient-to-r from-[#2c4823]/30 to-primary/20 rounded-3xl blur-xl opacity-60"></div>
              <img
                src="/images/chanh-dien.png"
                className="relative w-full h-[280px] object-cover rounded-2xl shadow-2xl"
                onError={e => { e.target.src = 'https://ik.imagekit.io/tvlk/blog/2024/03/go-and-share-du-lich-hon-da-bac-ca-mau-3-1024x527.webp?tr=q-70,c-at_max,w-1000,h-600' }}
              />
            </div>
            <div className="space-y-5 order-1 lg:order-2">
              <p className="text-[#4b6351] leading-relaxed text-base">
                Chính điện cao vút với tháp nhọn dát vàng, bên trong thờ Đức Phật Thích Ca bằng đồng mạ vàng uy nghi.
              </p>
              <p className="text-[#4b6351] leading-relaxed text-base">
                Giữa chánh điện đặt một bàn thờ với một tượng Phật Thích Ca to lớn ngồi ở trung tâm, hai bên có trang trí thêm tượng rắn Naga bảo vệ Đức Phật tọa thiền. Bên dưới bàn thờ là các tượng Phật trong nhiều tư thế khác nhau thể hiện cho các hóa thân tiền kiếp của Đức Phật. Bàn thờ Phật được trang trí với nhiều hoa văn, điêu khắc tỉ mỉ.
              </p>
              <p className="text-[#4b6351] leading-relaxed text-base">
                Trên vách, trần và hàng cột trang trí bằng nhiều màu sắc sặc sỡ hoặc bằng các bích họa. Đặc biệt là các bích họa kể lại cuộc đời hành đạo của Đức Phật và chuyện Riêm-kê, tức sử thi Ramayana của Ấn Độ.
              </p>
            </div>
          </section>
          {/* Đoạn 5:  */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <p className="text-[#4b6351] leading-relaxed">
                Hàng năm lễ tắm Phật vào ngày 30/8 và 1/9 Âm lịch tại chùa Monivongsa Bopharam thu hút hàng nghìn lượt khách thập phương đến tham quan. Hay những dịp lễ hội của người Khmer như Chôl Chnăm Thmây, Sene Đolta, Ok Om Bok… người dân địa phương đến chùa cúng viếng, tổ chức vui chơi, thu hút đông đảo đồng bào ở tỉnh Cà Mau cùng tham dự.
              </p>
              <p className="text-[#4b6351] leading-relaxed text-base">
                Những dịp lễ hội như thế thường kéo dài nhiều ngày và diễn ra suốt đêm với các sinh hoạt sôi động như đá cầu, ném tạ, nhảy lưới, giấu khăn, bịt mắt bắt dê, đánh đáo, kéo co, thả đèn trời…
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-3xl blur-xl opacity-60"></div>
              <img
                src="https://dltm-cdn.vnptit3.vn/resources/portal/Images/CMU/adminportal/1/hinhanh_1124_x_562_px_10_617414015.png"
                className="relative w-full h-[280px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </section>
          {/* Đoạn 6:  */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-3 bg-gradient-to-r from-[#2c4823]/30 to-primary/20 rounded-3xl blur-xl opacity-60"></div>
              <img
                src="https://dltm-cdn.vnptit3.vn/resources/portal/Images/CMU/adminportal/1/hinhanh_1124_x_562_px_13_599941661.png"
                className="relative w-full h-[280px] object-cover rounded-2xl shadow-2xl"
                onError={e => { e.target.src = 'https://ik.imagekit.io/tvlk/blog/2024/03/go-and-share-du-lich-hon-da-bac-ca-mau-3-1024x527.webp?tr=q-70,c-at_max,w-1000,h-600' }}
              />
            </div>
            <div className="space-y-5 order-1 lg:order-2">
              <p className="text-[#4b6351] leading-relaxed text-base">
                Các dịp lễ hội cũng là lúc tổ chức nhiều đêm biểu diễn văn nghệ truyền thống của người Khmer như sân khấu truyền thống Dù kê, Rô-băm, biểu diễn các điệu múa dân gian. Ngôi chùa trở thành một trung tâm sinh hoạt văn hóa cộng đồng.
              </p>
              <p className="text-[#4b6351] leading-relaxed text-base">
                Du khách đến chùa vào các dịp lễ hội không chỉ được thưởng thức và tham dự các sinh hoạt văn hóa - văn nghệ truyền thống của người Khmer bản địa mà còn được trải nghiệm các món ăn mà người dân mang đến cúng chùa, trong không khí tưng bừng thâu đêm suốt sáng.
              </p>
              <p className="text-[#4b6351] leading-relaxed text-base">
                Với những nét văn hóa đặc trưng, có thể nói chùa Monivongsa Bopharam là nơi bảo tồn các giá trị văn hóa đặc sắc của người Khmer ở Cà Mau, ngôi chùa như một nét duyên của thành phố cực Nam luôn chào đón du khách.
              </p>
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
                { icon: 'location_on', label: 'Địa chỉ', value: 'Đường Đinh Tiên Hoàng, Phường An Xuyên, tỉnh Cà Mau' },
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
