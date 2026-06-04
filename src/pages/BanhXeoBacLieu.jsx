import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const INGREDIENTS = [
  { icon: 'grain', name: 'Bột gạo', desc: 'Bột gạo xay mịn tạo nên lớp vỏ bánh mỏng, giòn tan và vàng óng.' },
  { icon: 'water_drop', name: 'Nước cốt dừa', desc: 'Thêm vào bột bánh để tạo hương thơm béo ngậy đặc trưng của miền Tây.' },
  { icon: 'set_meal', name: 'Thịt ba chỉ', desc: 'Thịt lợn ba chỉ thái mỏng, xào chín, thơm đậm đà là linh hồn của nhân bánh.' },
  { icon: 'cruelty_free', name: 'Tôm nhỏ', desc: 'Tôm tươi ngọt giòn, hòa quyện cùng thịt lợn tạo nên nhân bánh hấp dẫn.' },
  { icon: 'eco', name: 'Rau sống', desc: 'Xà lách, rau thơm, giá đỗ ăn kèm tạo sự tươi mát và cân bằng vị giác.' },
  { icon: 'local_fire_department', name: 'Lửa than hồng', desc: 'Bí quyết tạo lớp vỏ giòn vàng đặc trưng — bánh được nướng trực tiếp trên than hồng.' },
]

const HIGHLIGHTS = [
  { icon: 'no_food', title: 'Chiên không dầu', desc: 'Quán Bánh Xèo A Mật chiên bánh mà không dùng dầu, giữ nguyên hương vị tự nhiên, không gây cảm giác ngán.' },
  { icon: 'local_fire_department', title: 'Nướng than hồng', desc: 'Bánh được nướng trên lửa than hồng truyền thống, tạo lớp vỏ vàng giòn rụm, thơm phức đặc trưng.' },
  { icon: 'star', title: 'Hương vị độc đáo', desc: 'Sự kết hợp giữa vỏ bánh giòn, nhân thơm ngon và rau sống mát lành tạo nên món ăn không thể quên.' },
  { icon: 'restaurant_menu', title: 'Nhiều món kèm', desc: 'Ngoài bánh xèo, quán A Mật còn phục vụ các đặc sản Bạc Liêu phong phú khác để thực khách lựa chọn.' },
]

const RESTAURANTS = [
  {
    name: 'Quán Bánh Xèo A Mật',
    desc: 'Địa điểm nổi tiếng bậc nhất Bạc Liêu, nơi khởi nguồn của phong cách bánh xèo chiên không dầu, than hồng trứ danh.',
    tag: 'Nổi tiếng nhất',
  },
  {
    name: 'Chợ đêm Bạc Liêu',
    desc: 'Nhiều gánh bánh xèo vỉa hè phục vụ tận đêm khuya, giá bình dân, đậm chất ẩm thực đường phố địa phương.',
    tag: 'Bình dân',
  },
  {
    name: 'Khu ẩm thực Hồ Bạc Liêu',
    desc: 'Tập trung nhiều quán ăn đặc sản Bạc Liêu, bao gồm bánh xèo, bún bò, và hải sản tươi sống ven hồ.',
    tag: 'Du lịch',
  },
]

export default function BanhXeoBacLieu() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]" style={{ background: '#f8fafc', color: '#1a2e1a' }}>

        {/* Hero */}
        <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
          <img
            src="https://topbaclieuaz.com/wp-content/uploads/2023/10/banh-xeo-bac-lieu_4.jpg"
            alt="Bánh xèo Bạc Liêu"
            className="w-full h-full object-cover scale-105"
            style={{ filter: 'brightness(0.75)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />

          {/* Breadcrumb */}
          <div className="absolute top-6 left-6 flex items-center gap-2 text-sm text-white/70">
            <Link to="/am-thuc" className="hover:text-primary transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-base">arrow_back</span> Ẩm thực
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">Bánh xèo Bạc Liêu</span>
          </div>

          {/* Hero content */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-14 max-w-5xl mx-auto">
            <span className="inline-flex items-center gap-1 px-3 py-1 mb-4 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">restaurant</span> Đặc sản Bạc Liêu
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 drop-shadow-2xl leading-tight">
              Bánh Xèo Bạc Liêu
            </h1>
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl leading-relaxed">
              Món ngon độc đáo với lớp vỏ giòn vàng nướng trên than hồng, nhân thơm ngon đậm đà,
              mang đậm hồn ẩm thực phương Nam.
            </p>
            {/* Quick stats */}
            <div className="flex flex-wrap gap-4 mt-6">
              {[
                { icon: 'local_fire_department', label: 'Nướng than hồng' },
                { icon: 'no_food', label: 'Chiên không dầu' },
                { icon: 'star', label: 'Đặc sản Bạc Liêu' },
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

          {/* Intro - Article content */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary inline-block"></span> Giới thiệu
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e1a]">Bánh xèo Bạc Liêu – Món ngon độc đáo</h2>
              <p className="text-[#4b6351] leading-relaxed text-base">
                Bánh xèo Bạc Liêu được làm từ các thành phần cơ bản như{' '}
                <span className="text-primary font-semibold">bột gạo, nước cốt dừa</span>, và một loại bánh giòn,
                mỏng, vàng óng. Nhân bánh xèo Bạc Liêu thường bao gồm{' '}
                <span className="text-primary font-semibold">thịt lợn ba chỉ, tôm nhỏ, và rau sống</span>.
              </p>
              <p className="text-[#4b6351] leading-relaxed text-base">
                Điều đặc biệt ở món bánh xèo Bạc Liêu chính là cách nướng bánh và cách chế biến nhân.
                Bánh xèo ở đây được <strong className="text-[#14532d]">nướng trên lửa than hồng</strong>, tạo nên
                lớp vỏ giòn, màu vàng hấp dẫn.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 to-[#2c4823]/30 rounded-3xl blur-xl opacity-60"></div>
              <img
                src="https://topbaclieuaz.com/wp-content/uploads/2023/10/banh-xeo-bac-lieu_4.jpg"
                alt="Bánh xèo Bạc Liêu vàng giòn"
                className="relative w-full h-[350px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-2xl border border-green-100 shadow-xl">
                <p className="text-primary text-xl font-black">Giòn • Thơm</p>
                <p className="text-gray-400 text-xs">Vàng óng • Đậm đà</p>
              </div>
            </div>
          </section>

          {/* Second article section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-3 bg-gradient-to-r from-[#2c4823]/30 to-primary/20 rounded-3xl blur-xl opacity-60"></div>
              <img
                src="https://topbaclieuaz.com/wp-content/uploads/2023/10/banh-xeo-bac-lieu_6.webp"
                alt="Bánh xèo nhân thơm ngon"
                className="relative w-full h-[350px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-5 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary inline-block"></span> Hương vị
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e1a]">Nhân bánh – Tinh hoa đậm đà</h2>
              <p className="text-[#4b6351] leading-relaxed text-base">
                Nhân bánh thơm ngon và hấp dẫn, khiến ai đã thử một lần sẽ không thể quên.{' '}
                <span className="text-primary font-semibold">Vị ngon đậm đà của thịt lợn ba chỉ</span>, hòa quyện
                với vị ngọt, giòn của tôm và hương thơm của rau sống tạo nên một món bánh ngon tuyệt.
              </p>
              <p className="text-[#4b6351] leading-relaxed text-base">
                Đặc biệt, ở quán <strong className="text-[#14532d]">Bánh Xèo A Mật</strong>, bánh xèo được chiên không dầu,
                giúp giữ nguyên hương vị mà không gây cảm giác ngán.
              </p>
            </div>
          </section>

          {/* Third article section - More dishes */}
          <section className="bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary inline-block"></span> Quán Bánh Xèo A Mật
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a2e1a]">Khám phá ẩm thực phường Bạc Liêu</h2>
              <p className="text-[#4b6351] leading-relaxed text-base max-w-3xl">
                Ngoài món bánh xèo, quán Bánh Xèo A Mật còn phục vụ nhiều món ẩm thực khác. Đây là điểm đặc biệt
                của quán, nơi bạn có thể thỏa sức thưởng thức các món ngon của Bạc Liêu.
              </p>
              <p className="text-[#4b6351] leading-relaxed text-base max-w-3xl">
                Từ các <span className="text-primary font-semibold">món nhậu thơm ngon, đưa miệng</span>, đến các{' '}
                <span className="text-primary font-semibold">món đặc sản độc đáo của phường Bạc Liêu</span>, bạn sẽ có
                cơ hội khám phá những hương vị mới lạ và độc đáo.
              </p>
            </div>
          </section>

          {/* Ingredients grid */}
          <section>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-2">Nguyên liệu & Bí quyết</h2>
              <p className="text-[#4b6351]">Những thành phần tạo nên hương vị bánh xèo Bạc Liêu đặc trưng</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {INGREDIENTS.map((item, i) => (
                <div key={i} className="bg-[#f0fdf4] rounded-2xl p-6 border border-white/5 hover:border-primary/30 transition-all group cursor-pointer hover:bg-[#1f2e18]">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-primary text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="text-green-500 font-bold text-lg mb-2">{item.name}</h3>
                  <p className="text-[#4b6351] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Highlights */}
          <section>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-2">Điểm nổi bật</h2>
              <p className="text-[#4b6351]">Điều gì làm nên sự khác biệt của bánh xèo Bạc Liêu?</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {HIGHLIGHTS.map((h, i) => (
                <div key={i} className="flex gap-4 bg-[#f0fdf4] p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-2xl">{h.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-green-500 font-bold mb-1">{h.title}</h3>
                    <p className="text-[#4b6351] text-sm leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Where to eat */}
          <section className="bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-green-500 mb-2">Ăn bánh xèo ở đâu ngon nhất?</h2>
              <p className="text-[#4b6351] mb-8">Những địa điểm tin cậy để thưởng thức bánh xèo Bạc Liêu chính gốc</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {RESTAURANTS.map((r) => (
                  <div key={r.name} className="bg-white/5 rounded-2xl p-5 border border-white/10 hover:border-primary/30 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-green-500 font-bold text-base leading-snug">{r.name}</h3>
                      <span className="ml-2 flex-shrink-0 bg-primary/20 text-primary text-xs font-bold px-2 py-0.5 rounded-full">{r.tag}</span>
                    </div>
                    <p className="text-[#4b6351] text-sm leading-relaxed">{r.desc}</p>
                  </div>
                ))}
              </div>
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
