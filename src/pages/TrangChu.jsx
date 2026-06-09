import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEOHead from '../components/SEOHead'

export default function TrangChu() {
  const scrollRef = useRef(null)
  return (
    <>
      <SEOHead
        title="Khám Phá Cà Mau"
        description="Khám phá vẻ đẹp hoang sơ của Cà Mau - Đất Mũi tận cùng Tổ quốc với rừng ngập mặn, ẩm thực đặc sắc và làng nghề truyền thống. Hướng dẫn du lịch Cà Mau chi tiết."
        path="/"
        image="https://www.peacetour.com.vn/Upload/Article/8f89c83b-c860-4339-b0cc-0989c4adb593/1.jpg"
      />
      <Navbar />
      <main className="flex flex-col w-full min-h-screen">
        {/* Hero Section */}
        <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Aerial view of lush green mangrove forest and winding rivers in Ca Mau"
              className="w-full h-full object-cover brightness-110"
              src="https://www.peacetour.com.vn/Upload/Article/8f89c83b-c860-4339-b0cc-0989c4adb593/1.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/15 to-black/50"></div>
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-5xl mx-auto">
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-[-0.033em] drop-shadow-lg mb-6">
              Khám phá Đất Mũi Cà Mau <br />

            </h1>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/dia-diem" className="flex items-center justify-center rounded-full h-12 px-8 bg-red-500 hover:bg-[#15803d] text-white text-base font-bold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/30">
                Bắt đầu hành trình
              </Link>
              <Link to="/am-thuc" className="flex items-center justify-center rounded-full h-12 px-8 bg-red-500 hover:bg-[#15803d] backdrop-blur-sm border border-white/20 text-white text-base font-bold transition-all duration-300">
                <span className="material-symbols-outlined mr-2">restaurant</span>
                Khám phá ẩm thực
              </Link>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 md:py-24 px-4 md:px-20 lg:px-40 bg-gray-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-200-to-l from-primary/5 to-transparent pointer-events-none"></div>
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                <span className="size-2 rounded-full bg-gray-200"></span>
                Trang chủ
              </div>
              <h2 className="text-[#1a2e1a] text-3xl md:text-4xl font-bold leading-tight">Vùng đất tận cùng <br />phía Nam Tổ quốc</h2>
              <p className="text-[#4b6351] text-base md:text-lg leading-relaxed">
                Cà Mau là mảnh đất thiêng liêng nơi đầu sóng ngọn gió, nổi tiếng với hệ sinh thái rừng ngập mặn đa dạng, Khu dự trữ sinh quyển thế giới và sự giao thoa văn hóa độc đáo giữa ba dân tộc Kinh - Hoa - Khmer.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <h3 className="text-primary text-3xl font-bold">300+</h3>
                  <p className="text-[#4b6351] text-sm">Loài động vật quý hiếm</p>
                </div>
                <div>
                  <h3 className="text-primary text-3xl font-bold">254km</h3>
                  <p className="text-[#4b6351] text-sm">Đường bờ biển bao quanh</p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-2 bg-gray-200-to-r from-primary to-[#4ade80] rounded-[2rem] opacity-20 blur-lg group-hover:opacity-40 transition duration-500"></div>
              <img
                alt="Wooden boat on a river in Ca Mau during sunset"
                className="relative w-full h-[400px] object-cover rounded-[2rem] shadow-2xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfOgMCi9oBz6ZheqTctuYlr6DU5au2ZbXg-K-sSjsuQ04qV5t46P9B7pn0MYI3wcrWLlZIhw5zUqzzGQrsFMaiLTmpaTKfv3KUwSXxXetymrhcfQ1bOdyR16CkBgnBvF7Xed8SlSTd3G7GWisX2YBN7xvQEj2n0ChTVVlijYn6nD1EJmKmlUur_eM1ToWuTZmYiezCP-Y0FsGNl7qVqOlDhwa7xqSOEc5T-rEvJSm7szNwxsoas8QzBOs57sqESSG_b4r8xWws08k"
              />
              <div className="absolute -bottom-6 -left-6 bg-gray-200 p-4 rounded-2xl border border-green-100 shadow-xl hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-full text-primary">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <p className="text-[#1a2e1a] text-sm font-bold">Mũi Cà Mau</p>
                    <p className="text-[#4b6351] text-xs">Điểm cực Nam</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Destinations */}
        <section className="py-16 bg-[#f0fdf4] relative">
          <div className="px-4 md:px-10 lg:px-40 mb-10 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <h2 className="text-[#1a2e1a] text-3xl font-bold mb-2">Điểm đến nổi bật</h2>
              <p className="text-[#4b6351]">Những địa danh không thể bỏ qua khi đến Cà Mau</p>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => scrollRef.current?.scrollBy({ left: -360, behavior: 'smooth' })}
                className="w-10 h-10 rounded-full bg-white border border-green-200 shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button onClick={() => scrollRef.current?.scrollBy({ left: 360, behavior: 'smooth' })}
                className="w-10 h-10 rounded-full bg-white border border-green-200 shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
              <Link to="/dia-diem" className="text-primary hover:text-[#15803d] flex items-center gap-2 text-sm font-bold transition-colors ml-2">
                Xem tất cả <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div ref={scrollRef} className="flex overflow-x-auto gap-6 px-4 md:px-10 lg:px-40 pb-8 snap-x scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            {[
              { img: 'https://ik.imagekit.io/tvlk/blog/2023/03/go-and-share-du-lich-mui-ca-mau-17.jpg', icon: 'park', cat: 'Du lịch sinh thái', name: 'Mũi Cà Mau', desc: 'Nơi duy nhất trên đất liền ngắm được cả mặt trời mọc ở biển Đông và lặn ở biển Tây.', to: '/dia-diem/mui-ca-mau' },
              { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYl-8of1zF9xfYqO35sHo5GTjPzdJna5EJ_17hanyZKkii-jnClOCIcHudLgC2OuHKBXB55qiZPOe9GeDBZTrD5jiKj4uvnzR3JdxtBk1LblYPGihxHZRJU0CbNZKGXuBpVkqly1aNSFN8F0-ONLtFVZNSD1VztnMyPI3pX-aAiqAzbGd31a-vy7htcmsZwW0K_4Te9QK8YMLuF3azPdBmN5WBVXhOt2VbP2awiK0QxU2xREVNYVy5_42nPL14wVB6nDaZ9ZgPfGY', icon: 'forest', cat: 'Rừng quốc gia', name: 'Rừng U Minh Hạ', desc: 'Khám phá hệ sinh thái đất ngập nước đặc trưng với rừng tràm bạt ngàn và các loài chim quý.', to: '/dia-diem/vuon-quoc-gia-u-minh-ha' },
              { img: 'https://mia.vn/media/uploads/blog-du-lich/cho-noi-ca-mau-net-doc-dao-cua-mien-tay-song-nuoc-3-1663303247.jpg', icon: 'storefront', cat: 'Văn hóa', name: 'Chợ Nổi Cà Mau', desc: 'Trải nghiệm nét văn hóa giao thương độc đáo trên sông nước của người dân miền Tây Nam Bộ.', to: '/dia-diem/cho-noi-ca-mau' },
              { img: 'https://dltm-cdn.vnptit3.vn/resources/portal/Images/CMU/adminportal/1/hinhanh_1124_x_562_px_11_955444714.png', icon: 'temple_buddhist', cat: 'Tâm linh', name: 'Chùa Monivongsa Bopharam', desc: 'Ngôi chùa Khmer lớn nhất trung tâm thành phố với kiến trúc Angkor độc đáo và rực rỡ.', to: '/di-tich/chua-monivongsa-bopharam' },
            ].map((item, i) => (
              <Link key={i} to={item.to} className="min-w-[280px] md:min-w-[340px] snap-center group relative h-[420px] rounded-xl overflow-hidden cursor-pointer flex-shrink-0 block">
                <img alt={item.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={item.img} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase mb-2">
                    <span className="material-symbols-outlined text-base">{item.icon}</span>
                    {item.cat}
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.desc}</p>
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-lg">arrow_outward</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Cuisine Section */}
        <section className="py-16 px-4 md:px-20 lg:px-40 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-[#1a2e1a] text-3xl md:text-4xl font-bold mb-4">Hương vị Đất Mũi</h2>
              <p className="text-[#4b6351] max-w-2xl mx-auto">Ẩm thực Cà Mau mang đậm hương vị của rừng và biển, dân dã nhưng đậm đà khó quên.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/am-thuc/cua-ca-mau" className="md:col-span-2 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden group block">
                <img alt="Fresh red crab dish" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://product.hstatic.net/1000166699/product/2_1e271b7804174354ae02c17816bbaf13_master.png" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-2xl font-bold">Cua Cà Mau</h3>
                  <p className="text-gray-300 text-sm mt-2">Nổi tiếng nhất Việt Nam với thịt chắc, ngọt và gạch béo ngậy.</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-primary text-sm font-bold group-hover:gap-2 transition-all">
                    Xem chi tiết <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">Đặc sản số 1</div>
              </Link>
              <Link to="/am-thuc/lau-mam-u-minh" className="relative h-[300px] md:h-auto rounded-2xl overflow-hidden group block">
                <img alt="Lau mam U Minh" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://cdn.pastaxi-manager.onepas.vn/content/uploads/articles/Ngoc%20Diep/c%C3%A0%20mau/lau-mam-ca-mau-3.png" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-xl font-bold">Lẩu mắm U Minh</h3>
                  <p className="text-gray-300 text-sm mt-1">Hương vị đồng quê đậm đà.</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-amber-300 text-sm font-bold group-hover:gap-2 transition-all">
                    Xem chi tiết <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#16a34a] to-[#14532d] rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden border border-white/10">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4ade80 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
            <h2 className="text-white text-3xl md:text-5xl font-black mb-6 relative z-10">Sẵn sàng cho chuyến đi?</h2>
            <p className="text-gray-200 text-lg mb-8 max-w-xl mx-auto relative z-10">Đăng ký để nhận thông tin ưu đãi tour du lịch Cà Mau mới nhất và cẩm nang du lịch miễn phí.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative z-10">
              <input className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-primary backdrop-blur-sm" placeholder="Địa chỉ email của bạn" type="email" />
              <button type="submit" className="px-8 py-4 bg-white hover:bg-[#f0fdf4] text-[#14532d] font-bold rounded-full transition-colors shadow-lg">Đăng ký ngay</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
