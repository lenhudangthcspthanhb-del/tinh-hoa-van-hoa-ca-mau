import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AmThuc() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full min-h-screen">
        {/* Hero */}
        <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6" style={{ gridAutoRows: '400px' }}></div>

            <div className="md:col-span-8 rounded-xl overflow-hidden relative group border border-green-100 shadow-sm"></div>
            <img
              className="w-full h-full object-cover brightness-110"
              alt="Floating market Ca Mau"
              src="https://mia.vn/media/uploads/blog-du-lich/danh-sach-quan-an-ngon-ca-mau-danh-cho-tin-do-am-thuc-phan-1--1663646708.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
          </div>
          <div className="relative z-10 text-center px-6 max-w-[1200px] mx-auto pb-16">
            <span className="inline-block px-4 py-1 mb-4 rounded-full bg-red-500 border border-primary-500 text-white text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
              HƯƠNG VỊ MIỀN TÂY
            </span>
            <h1 className="text-white text-4xl md:text-7xl font-black mb-6 drop-shadow-2xl">Tinh Hoa Ẩm Thực Cà Mau</h1>


          </div>
        </section>

        {/* Intro */}
        <section className="px-6 max-w-[1200px] mx-auto px-6 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-primary text-3xl md:text-5xl font-extrabold">Văn Hóa Sông Nước</h2>
              <p className="text-[#4b6351] text-lg leading-relaxed">
                Ẩm thực Cà Mau là sự kết tinh của thiên nhiên hoang sơ và bàn tay tài hoa của con người miệt thứ. Sự hòa quyện giữa hệ sinh thái mặn, ngọt và lợ đã tạo nên một bức tranh ẩm thực phong phú, đa dạng và không thể nhầm lẫn với bất kỳ đâu.
              </p>
              <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-[#7aff54] transition-colors">Tìm Hiểu Thêm</button>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <img className="rounded-xl w-full h-[300px] object-cover mt-8" alt="Seafood dish" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXhJ9XxTXCtguMaLJO4daO7Ai31N9_JuN2p0RNf8apiac96uqNp4bWfkto5kS5tVNFt6eGKVpgxW14CJvliLbITZN2BM1AjAvFzv_pRL6TE9hj_MLZefgXGTZUmfK3sDX8Wzqktzlwyvtpi9yKSY0YOx33nPUD4RV69VtuCWBO2bi_stB6UbYxclgrn9xDnd85CJR8pbp0H7fagKd51XBEdY4kD3QZBr88V0uZn8wKlW2qDuY7U3Skt06l-_1CFU_TxRUgghpa8OU" />
              <img className="rounded-xl w-full h-[300px] object-cover" alt="Grilled fish" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2a58d2o_-lmij0OqT2DGx8OMvTe6csHnXMZorIZUNF9VgOcjS2RY71leCsZa1aRhttDJadCLOxWgGxPz5_a5-qf2Ry4BAteWK7aPy3TdEwf48YFE2qBJ5FyM0BndJxVo94MRtRvuT5O02H5S5vj07CHiI9ecGaB6HOOETxRYqSd2-2Kz1nJE0m6qnemaLLox0GkkiWVnxjK1-eTXVxplD6As6t6fhRcDxat7WOc2BPqaGJBf02SMzTkuA55GLrKMAXkjgJL_V3e8" />
            </div>
          </div>
        </section>

        {/* Specialties Bento Grid */}
        <section className="px-6 max-w-[1200px] mx-auto mb-20">
          <h2 className="text-[#1a2e1a] text-3xl md:text-5xl font-extrabold mb-12 text-center">Đặc Sản Trứ Danh</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ gridAutoRows: '300px' }}>
            {/* Cua Ca Mau */}
            <Link to="/am-thuc/cua-ca-mau" className="md:col-span-2 relative group rounded-xl overflow-hidden cursor-pointer border border-green-100 block">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Ca Mau Crab" src="https://cdn.hstatic.net/products/1000182631/cua_ca_mau_9056710e5de14760bcbc958a88652259_master.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="inline-block bg-orange-500/80 text-white text-xs font-bold px-2 py-1 rounded-md mb-2">Hải Sản</span>
                <h3 className="text-white text-3xl font-bold mb-2">Cua Cà Mau</h3>
                <p className="text-green-500 text-base line-clamp-2">Nổi tiếng với thịt chắc, ngọt và gạch béo ngậy, cua Cà Mau là món quà tuyệt hảo từ rừng ngập mặn.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-primary text-sm font-bold group-hover:gap-2 transition-all">
                  Xem chi tiết <span className="material-symbols-outlined text-base">arrow_forward</span>
                </div>
              </div>
            </Link>
            {/* Lau Mam */}
            <Link to="/am-thuc/lau-mam-u-minh" className="relative group rounded-xl overflow-hidden cursor-pointer border border-green-100 block">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Lau Mam U Minh" src="https://cdn.pastaxi-manager.onepas.vn/content/uploads/articles/Ngoc%20Diep/c%C3%A0%20mau/lau-mam-ca-mau-3.png" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="inline-block bg-orange-500/80 text-white text-xs font-bold px-2 py-1 rounded-md mb-2">Đặc Sản Đồng Quê</span>
                <h3 className="text-white text-2xl font-bold mb-2">Lẩu Mắm U Minh</h3>
                <p className="text-amber-300 text-sm line-clamp-2">Đậm đà hương vị đồng quê với hàng chục loại rau rừng đặc trưng.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-amber-300 text-sm font-bold group-hover:gap-2 transition-all">
                  Xem chi tiết <span className="material-symbols-outlined text-base">arrow_forward</span>
                </div>
              </div>
            </Link>
            {/* banh xeo */}
            <Link to="/am-thuc/banh-xeo-bac-lieu" className="relative group rounded-xl overflow-hidden cursor-pointer border border-green-100 block">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="banh xeo" src="https://topbaclieuaz.com/wp-content/uploads/2023/10/banh-xeo-bac-lieu_4.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="inline-block bg-orange-500/80 text-white text-xs font-bold px-2 py-1 rounded-md mb-2">Đặc sản Bạc Liêu</span>
                <h3 className="text-white text-2xl font-bold mb-2">Bánh xèo Bạc Liêu</h3>
                <p className="text-green-500 text-sm line-clamp-2">Bánh xèo A Mật, quán bánh xèo Bạc Liêu ngon nức tiếng</p>
                <div className="mt-3 inline-flex items-center gap-1 text-primary text-sm font-bold group-hover:gap-2 transition-all">
                  Xem chi tiết <span className="material-symbols-outlined text-base">arrow_forward</span>
                </div>
              </div>
            </Link>

            {/* Ba Khia */}
            <Link to="/am-thuc/ba-khia-rach-goc" className="md:col-span-2 relative group rounded-xl overflow-hidden cursor-pointer border border-green-100 block">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Ba Khia Rach Goc" src="https://cotucamau.com/wp-content/uploads/2023/05/Ba_khia_muoi.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="inline-block bg-orange-500/80 text-white text-xs font-bold px-2 py-1 rounded-md mb-2">Di sản Quốc gia</span>
                <h3 className="text-white text-3xl font-bold mb-2">Ba Khía Rạch Gốc</h3>
                <p className="text-green-500 text-base line-clamp-2">Mặn mòi vị biển, chua cay kích thích vị giác — Di sản văn hóa phi vật thể cấp quốc gia từ năm 2019.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-primary text-sm font-bold group-hover:gap-2 transition-all">
                  Xem chi tiết <span className="material-symbols-outlined text-base">arrow_forward</span>
                </div>
              </div>
            </Link>
            {/* Banh Tam Ngan Dua */}
            <Link to="/am-thuc/banh-tam-ngan-dua" className="relative group rounded-xl overflow-hidden cursor-pointer border border-green-100 block">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Bánh tằm Ngan Dừa" src="https://bazantravel.com/cdn/medias/uploads/27/27757-banh-tam-ngan-dua-700x467.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="inline-block bg-orange-500/80 text-white text-xs font-bold px-2 py-1 rounded-md mb-2">Đặc sản Bạc Liêu</span>
                <h3 className="text-white text-2xl font-bold mb-2">Bánh tằm Ngan Dừa</h3>
                <p className="text-green-500 text-sm line-clamp-2">Sợi bánh se tay từ gạo một bụi đỏ, ăn kèm xíu mại và nước cốt dừa béo ngậy — món không bao giờ ngán.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-primary text-sm font-bold group-hover:gap-2 transition-all">
                  Xem chi tiết <span className="material-symbols-outlined text-base">arrow_forward</span>
                </div>
              </div>
            </Link>
            {/* Placeholder to balance grid */}
            <div className="md:col-span-2 relative group rounded-xl overflow-hidden border border-green-100 bg-[#f0fdf4] flex items-center justify-center min-h-[300px]">
              <div className="text-center px-8">
                <span className="material-symbols-outlined text-primary text-5xl mb-4 block">explore</span>
                <h3 className="text-green-500 text-xl font-bold mb-2">Còn nhiều hơn nữa...</h3>
                <p className="text-green-500 text-sm">Ẩm thực Cà Mau & Bạc Liêu còn vô vàn món ngon đang chờ bạn khám phá.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
