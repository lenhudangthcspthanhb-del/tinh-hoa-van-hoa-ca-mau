import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEOHead from '../components/SEOHead'



export default function Nhadaythep() {
  return (
    <>

      <Navbar />
      <main className="pt-[72px]" style={{ background: '#f8fafc', color: '#1a2e1a' }}>

        {/* Hero */}
        <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
          <img
            src="/images/nha-day-thep.jpeg"
            alt="Nhà dây thép"
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
            <span className="text-white font-semibold">Nhà dây thép</span>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-14 max-w-5xl mx-auto">
            <span className="inline-flex items-center gap-1 px-3 py-1 mb-4 rounded-full bg-yellow-500/20 border border-yellow-400/30 text-yellow-200 text-xs font-bold uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">temple_buddhist</span> Di tích
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-2xl leading-tight">
              Nhà dây thép
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
                Nhà Dây Thép được thực dân Pháp xây dựng nhằm phục vụ mục đích giữ thông tin nội bộ với chính quyền thuộc địa vào năm 1910.
              </p>
              <p className="text-[#4b6351] leading-relaxed text-base">
                Vào năm 1930 tổ chức Đảng được tổ chức tại Cà Mau. Lúc này hệ thống liên lạc vẫn còn nhiều khó khăn giữa cơ sở xứ ủy với Nam Kỳ. Trước tình hình này, những chiến sĩ cách mạng đã sử dụng Nhà Dây Thép là nơi tiếp nhận và trao đổi thông tin liên lạc của Đảng đến đảng viên, cán bộ và nhân dân.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-3xl blur-xl opacity-60"></div>
              <img
                src="/images/nha-day-thep1.jpeg"
                className="relative w-full h-[280px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </section>
          {/* Đoạn 2:  */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-3 bg-gradient-to-r from-[#2c4823]/30 to-primary/20 rounded-3xl blur-xl opacity-60"></div>
              <img
                src="/images/nha-day-thep2.png"
                className="relative w-full h-[260px] object-cover rounded-2xl shadow-2xl"
                onError={e => { e.target.src = 'https://ik.imagekit.io/tvlk/blog/2024/03/go-and-share-du-lich-hon-da-bac-ca-mau-3-1024x527.webp?tr=q-70,c-at_max,w-1000,h-600' }}
              />
            </div>
            <div className="space-y-5 order-1 lg:order-2">
              <p className="text-[#4b6351] leading-relaxed text-base">
                Khi thông tin liên lạc được hanh thông, đã giúp cho cơ sở Đảng Cà Mau hoạt động gặp nhiều thuận lợi hơn trong cuộc kháng chiến. Vào khoảng cuối năm 1939, quân dân Cà Mau phát triển thêm những chi bộ mới cùng số lượng Đảng viên được gia tăng. Trong đó phải kể tới: Hội Phụ nữ Dân Chủ, Đoàn Thanh niên Tân Tiến cùng những đoàn thợ bạc, thợ làm tóc, thợ may... Khi nhiều đoàn thể được thành lập đã tạo sự vững mạnh về tổ chức cách mạng và góp phần đưa cuộc chiến giành thắng lợi di tích lịch sử quốc gia Nhà Dây Thép Cà Mau.
              </p>
            </div>
          </section>
          {/* Đoạn 3:  */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <p className="text-[#4b6351] leading-relaxed">
                Người có công lao to lớn trong việc tận dụng nơi làm việc của thực dân Pháp thành cứ điểm thông tin liên lạc phục vụ cách mạng chính là đồng chí Lê Tồn Khuyên. Dưới vỏ bọc một nhân viên của Nhà Dây Thép, đồng chí Lê Tồn Khuyên đã đảm bảo thông tin liên lạc giữa những cơ sở Đảng ở Cà Mau với Xứ ủy Nam Kỳ, Đặc ủy Hậu Giang được liên tục và kịp thời chuyển giao các chỉ thị từ cấp trên xuống. Với vai trò đầu mối liên lạc, di tích lịch sử quốc gia Nhà Dây Thép đã đảm bảo an toàn cho rất nhiều hoạt động, góp phần củng cố, phát triển lực lượng và mở rộng ảnh hưởng chính trị, gây được tiếng vang lớn trong dư luận, tạo tiền đề cho những phong trào cách mạng sau này như Khởi nghĩa Nam Kỳ năm 1940 và Cách mạng Tháng Tám năm 1945.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-3xl blur-xl opacity-60"></div>
              <img
                src="/images/nha-day-thep3.jpg"
                className="relative w-full h-[280px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </section>
          {/* Đoạn 4:  */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-3 bg-gradient-to-r from-[#2c4823]/30 to-primary/20 rounded-3xl blur-xl opacity-60"></div>
              <img
                src="/images/nha-day-thep4.jpg"
                className="relative w-full h-[280px] object-cover rounded-2xl shadow-2xl"
                onError={e => { e.target.src = 'https://ik.imagekit.io/tvlk/blog/2024/03/go-and-share-du-lich-hon-da-bac-ca-mau-3-1024x527.webp?tr=q-70,c-at_max,w-1000,h-600' }}
              />
            </div>
            <div className="space-y-5 order-1 lg:order-2">
              <p className="text-[#4b6351] leading-relaxed text-base">
                <p className="text-[#4b6351] leading-relaxed text-base">
                  Vào tháng 4 năm 1937 hơn 2 nhìn dân tại các xã ở Cà Mau bị bắt trên đường đi đắp đường mở rộng khu vực Năm Căn. Cùng với những cuộc đấu tranh đòi địa chủ trả lại đất cho nông dân. Nổi bật phải kể tới cuộc biểu tình của hơn 800 nông dân tại thị trấn Cà Mau. Mục đích của biểu tình nhằm phản đối bỏ thuế thân và giải quyết việc làm.
                </p>
              </p>
              <p className="text-[#4b6351] leading-relaxed text-base">
                Di tích hoạt động bí mật nên hiện tại nhiều di vật không còn được lưu giữ. Tại bảo tàng tỉnh Cà Mau hiện có những hình ảnh, tài liệu và hiện vật về di tích Nhà Dây Thép. Hiện nay, di tích được Viễn thông Cà Mau quản lý và là nơi tổ chức buổi lễ kết nạp đoàn viên, ngày kỷ niệm... Di tích cũng được mở cửa đón du khách tham quan và tìm hiểu về truyền thống yêu nước dân tộc.
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
