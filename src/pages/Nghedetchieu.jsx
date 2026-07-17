import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEOHead from '../components/SEOHead'



export default function Nghedetchieu() {
  return (
    <>

      <Navbar />
      <main className="pt-[72px]" style={{ background: '#f8fafc', color: '#1a2e1a' }}>

        {/* Hero */}
        <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
          <img
            src="/images/nghe det chieu.jpg"
            alt="Nghề dệt chiếu Tân Duyệt"
            className="w-full h-full object-cover scale-105"
            style={{ filter: 'brightness(0.75)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />

          {/* Breadcrumb */}
          <div className="absolute top-6 left-6 flex items-center gap-2 text-sm text-white/70">
            <Link to="/di-tich" className="hover:text-primary transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-base">arrow_back</span> Làng nghề
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">Nghề dệt chiếu Tân Duyệt</span>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-14 max-w-5xl mx-auto">
            <span className="inline-flex items-center gap-1 px-3 py-1 mb-4 rounded-full bg-yellow-500/20 border border-yellow-400/30 text-yellow-200 text-xs font-bold uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">temple_buddhist</span> Làng nghề
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-2xl leading-tight">
              Nghề dệt chiếu Tân Duyệt
            </h1>
            <div className="flex flex-wrap gap-4 mt-6">

            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">

          {/* Intro */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <p className="text-[#4b6351] leading-relaxed text-base">
                Năm 1994, Đảng bộ, chính quyền và nhân dân tỉnh Cà Mau xây dựng Khu tưởng niệm Bác Hồ với ngôi nhà sàn theo nguyên mẫu ngôi nhà sàn của Chủ tịch Hồ Chí Minh ở Thủ đô Hà Nội. Theo thời gian, công trình bị xuống cấp nên năm 2011, tỉnh Cà Mau tiến hành trùng tu, tôn tạo Khu tưởng niệm Bác Hồ với quy mô lớn, trên diện tích khoảng 6,7ha. Đầu tháng 1-2014, UBND tỉnh Cà Mau khánh thành công trình, chính thức đưa vào sử dụng, phục vụ nhu cầu tham quan của người dân Cà Mau nói riêng, du khách trong và ngoài nước nói chung.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-3xl blur-xl opacity-60"></div>
              <img
                src="/images/BH1.gif"
                className="relative w-full h-[280px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </section>
          {/* Đoạn 2:  */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-3 bg-gradient-to-r from-[#2c4823]/30 to-primary/20 rounded-3xl blur-xl opacity-60"></div>
              <img
                src="/images/BH2.gif"
                className="relative w-full h-[260px] object-cover rounded-2xl shadow-2xl"
                onError={e => { e.target.src = 'https://ik.imagekit.io/tvlk/blog/2024/03/go-and-share-du-lich-hon-da-bac-ca-mau-3-1024x527.webp?tr=q-70,c-at_max,w-1000,h-600' }}
              />
            </div>
            <div className="space-y-5 order-1 lg:order-2">
              <p className="text-[#4b6351] leading-relaxed text-base">
                Gian thờ Bác Hồ là một trong các công trình trọng điểm của khu tưởng niệm, được hoàn thành vào năm 2012. Tổng thể gian thờ được thiết kế với lối kiến trúc đặc trưng của mái đình Nam Bộ, kết cấu không gian từ ngoài cổng vào bên trong gian thờ gắn chặt với những sự kiện liên quan đến cuộc đời, quá trình hoạt động cách mạng của Chủ tịch Hồ Chí Minh.
              </p>
            </div>
          </section>
          {/* Đoạn 3:  */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <p className="text-[#4b6351] leading-relaxed">
                Không gian nhà truyền thống nằm trong Khu tưởng niệm Chủ tịch Hồ Chí Minh (phường An Xuyên, tỉnh Cà Mau) rộng 60.700 m², nơi lưu giữ và trưng bày nhiều hình ảnh, tư liệu quý về cuộc đời, sự nghiệp của Bác Hồ và tình cảm của nhân dân Cà Mau đối với Người.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-3xl blur-xl opacity-60"></div>
              <img
                src="/images/BH3.gif"
                className="relative w-full h-[280px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </section>
          {/* Đoạn 4:  */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-3 bg-gradient-to-r from-[#2c4823]/30 to-primary/20 rounded-3xl blur-xl opacity-60"></div>
              <img
                src="/images/BH4.gif"
                className="relative w-full h-[280px] object-cover rounded-2xl shadow-2xl"
                onError={e => { e.target.src = 'https://ik.imagekit.io/tvlk/blog/2024/03/go-and-share-du-lich-hon-da-bac-ca-mau-3-1024x527.webp?tr=q-70,c-at_max,w-1000,h-600' }}
              />
            </div>
            <div className="space-y-5 order-1 lg:order-2">
              <p className="text-[#4b6351] leading-relaxed text-base">
                Công trình Nhà sàn Bác Hồ trong khu tưởng niệm. Nhà sàn được làm bằng gỗ, theo đúng nguyên mẫu Nhà sàn Bác Hồ ở Hà Nội. Nhà sàn này được khánh thành vào dịp kỷ niệm 105 năm Ngày sinh Chủ tịch Hồ Chí Minh (19/5/1890 - 19/5/1995). Nhà sàn có 2 tầng, tầng trên có phòng ngủ và phòng làm việc; tầng dưới là nơi Bác Hồ thường làm việc, hội họp, tiếp khách. Khuôn viên cây xanh, ao cá được tái hiện theo nguyên mẫu khuôn viên Nhà sàn Bác Hồ ở Hà Nội.
              </p>

            </div>
          </section>
          {/* Đoạn 5:  */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <p className="text-[#4b6351] leading-relaxed">
                Dọc lối vào gian thờ Bác Hồ có nhiều phù điêu tái hiện cuộc đời, sự nghiệp cách mạng và những sự kiện liên quan đến Người. Trong ảnh là phù điêu khắc lại hình ảnh khu mộ cụ Phó Bảng Nguyễn Sinh Sắc - thân sinh Bác Hồ ở TP Cao Lãnh, tỉnh Đồng Tháp (cũ) và khu mộ cụ Hoàng Thị Loan - thân mẫu Bác Hồ ở huyện Nam Đàn, tỉnh Nghệ An (cũ).
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-3xl blur-xl opacity-60"></div>
              <img
                src="/images/BH5.gif"
                className="relative w-full h-[280px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </section>
          {/* Đoạn 6:  */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="/images/BH6.gif"
                className="relative w-full h-[280px] object-cover rounded-2xl"
                onError={e => { e.target.src = 'https://ik.imagekit.io/tvlk/blog/2024/03/go-and-share-du-lich-hon-da-bac-ca-mau-3-1024x527.webp?tr=q-70,c-at_max,w-1000,h-600' }}

              />
              <p className="text-[#4b6351] leading-relaxed">
                Học sinh Cà Mau đến tham quan, sinh hoạt truyền thống tại khu tưởng niệm.
              </p>
            </div>
            <div className="relative order-2 lg:order-1">

              <img
                src="/images/BH7.gif"
                className="relative w-full h-[280px] object-cover rounded-2xl"
                onError={e => { e.target.src = 'https://ik.imagekit.io/tvlk/blog/2024/03/go-and-share-du-lich-hon-da-bac-ca-mau-3-1024x527.webp?tr=q-70,c-at_max,w-1000,h-600' }}
              />
              <p className="text-[#4b6351] leading-relaxed">
                Nơi đây, Bảo tàng tỉnh Cà Mau thường xuyên tổ chức các hoạt động triển lãm, trưng bày phục vụ khách tham quan.
              </p>
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
