import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const DISHES = [
  { name: 'Cua hấp bia', icon: 'local_bar', desc: 'Cua tươi hấp với bia vàng, gừng và sả, giữ nguyên vị ngọt tự nhiên của thịt cua.' },
  { name: 'Cua rang muối', icon: 'restaurant', desc: 'Lớp muối tiêu vàng giòn bọc quanh cua, thơm lừng vị tỏi ớt đậm đà.' },
  { name: 'Cua nấu cháo', icon: 'soup_kitchen', desc: 'Cháo gạo thơm nấu với thịt cua và gạch son, món sáng kinh điển người Cà Mau.' },
  { name: 'Gỏi cua tươi', icon: 'eco', desc: 'Thịt cua sống trộn cùng rau thơm, đậu phộng rang, nước mắm me chua ngọt.' },
  { name: 'Cua sốt me', icon: 'dinner_dining', desc: 'Nước sốt me chua ngọt sánh quyện, quyến rũ và kích thích vị giác.' },
  { name: 'Cua lột chiên bơ', icon: 'egg_alt', desc: 'Cua lột mềm chiên vàng với bơ tỏi, món nhậu số một tại các quán hải sản Cà Mau.' },
]

const TIPS = [
  { icon: 'calendar_month', title: 'Mùa cua ngon nhất', desc: 'Tháng 9 – 12 âm lịch là mùa cua gạch son béo ngậy nhất trong năm.' },
  { icon: 'location_on', title: 'Chợ đầu mối', desc: 'Chợ Cà Mau, Chợ Đầm, khu vực sông Gành Hào là nơi mua cua tươi sống giá tốt nhất.' },
  { icon: 'payments', title: 'Giá tham khảo', desc: 'Cua thịt: 250.000 – 400.000 đ/kg. Cua gạch son: 500.000 – 700.000 đ/kg.' },
  { icon: 'check_circle', title: 'Chọn cua ngon', desc: 'Chọn cua còn sống, càng chắc, yếm dày, gõ nhẹ yếm nghe đặc = nhiều gạch béo.' },
]

export default function CuaCaMau() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]" style={{ background: '#f8fafc', color: '#1a2e1a' }}>

        {/* Hero */}
        <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
          <img
            src="https://product.hstatic.net/1000166699/product/2_1e271b7804174354ae02c17816bbaf13_master.png"
            alt="Cua Cà Mau"
            className="w-full h-full object-cover scale-105"
            style={{ filter: 'brightness(0.8)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />
          {/* Breadcrumb */}
          <div className="absolute top-6 left-6 flex items-center gap-2 text-sm text-white/70">
            <Link to="/am-thuc" className="hover:text-primary transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-base">arrow_back</span> Ẩm thực
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">Cua Cà Mau</span>
          </div>
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-14 max-w-5xl mx-auto">
            <span className="inline-flex items-center gap-1 px-3 py-1 mb-4 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">water</span> Hải Sản Đặc Sản
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 drop-shadow-2xl leading-tight">
              Cua Cà Mau
            </h1>
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl leading-relaxed">
              Đặc sản số 1 của xứ Đất Mũi — thịt chắc ngọt, gạch son béo ngậy,
              được nuôi dưỡng từ hệ sinh thái rừng ngập mặn độc nhất vô nhị.
            </p>
            {/* Quick stats */}
            <div className="flex flex-wrap gap-4 mt-6">
              {[
                { icon: 'star', label: 'Đặc sản số 1 Cà Mau' },
                { icon: 'eco', label: 'Rừng ngập mặn tự nhiên' },
                { icon: 'schedule', label: 'Ngon nhất T9–T12 âm lịch' },
              ].map(s => (
                <span key={s.label} className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-white text-sm font-medium">
                  <span className="material-symbols-outlined text-primary text-base">{s.icon}</span>
                  {s.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Main content */}
        <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">

          {/* Intro */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary inline-block"></span> Câu chuyện
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e1a]">Hương vị từ rừng ngập mặn</h2>
              <p className="text-[#4b6351] leading-relaxed text-lg">
                Cua Cà Mau sinh sống trong hệ sinh thái rừng đước ngập mặn rộng lớn — nơi nguồn thức ăn phong phú giúp cua phát triển tự nhiên. Chính môi trường đặc biệt này tạo nên thịt cua <span className="text-primary font-semibold">chắc, ngọt</span> và gạch <span className="text-primary font-semibold">béo ngậy</span> không nơi nào sánh được.
              </p>
              <p className="text-[#4b6351] leading-relaxed">
                Cua được chia làm hai loại chính: <strong className="text-[#14532d]">cua thịt</strong> (con đực, nhiều thịt, càng to) và <strong className="text-[#14532d]">cua gạch son</strong> (con cái đang mang trứng, gạch đỏ cam béo ngậy). Cả hai đều là thực phẩm cao cấp xuất khẩu sang nhiều quốc gia châu Á.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 to-[#2c4823]/30 rounded-3xl blur-xl opacity-60"></div>
              <img
                src="https://file.hstatic.net/200000474947/file/bi_quyet_chon_cua_bien_ca_mau_ngon_b82354eb6bee46359cc7f88d73c35537_grande.jpg"
                alt="Cua Cà Mau tươi"
                className="relative w-full h-[350px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-2xl border border-green-100 shadow-xl">
                <p className="text-primary text-2xl font-black">~250k</p>
                <p className="text-gray-400 text-xs">VNĐ / kg cua thịt</p>
              </div>
            </div>
          </section>

          {/* Dishes grid */}
          <section>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-2">Các món chế biến từ Cua</h2>
              <p className="text-[#4b6351]">Mỗi cách chế biến mang đến một trải nghiệm ẩm thực khác nhau</p>
            </div>h
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {DISHES.map((d, i) => (
                <div key={i} className="bg-[#f0fdf4] rounded-2xl p-6 border border-white/5 hover:border-primary/30 transition-all group cursor-pointer hover:bg-[#1f2e18]">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-primary text-2xl">{d.icon}</span>
                  </div>
                  <h3 className="text-green-500 font-bold text-lg mb-2">{d.name}</h3>
                  <p className="text-[#4b6351] text-sm leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </section>



          {/* Back button */}
          <div className="text-center pb-4">
            <Link
              to="/am-thuc"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-white transition-colors shadow-lg shadow-primary/20"
            >
              <span className="material-symbols-outlined text-base">arrow_back</span>
              Quay lại Ẩm thực
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
