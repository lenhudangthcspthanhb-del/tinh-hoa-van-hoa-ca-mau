import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const INGREDIENTS = [
  { icon: 'grain', name: 'Gạo một bụi đỏ', desc: 'Loại gạo ngon nức tiếng xứ Bạc Liêu, tạo nên hương vị riêng biệt mà không nơi nào có được.' },
  { icon: 'set_meal', name: 'Xíu mại thịt ba rọi', desc: 'Thịt ba rọi + gan heo + sắn củ băm nhuyễn, trộn đường, tỏi, tiêu, bột mì, hành phi, vo tròn rồi hấp chín.' },
  { icon: 'water_drop', name: 'Nước cốt dừa', desc: 'Chan lên đĩa bánh tằm, tạo vị béo ngậy đặc trưng hòa quyện cùng sợi bánh mềm dai.' },
  { icon: 'eco', name: 'Rau ăn kèm', desc: 'Dưa leo thái sợi, xà lách, rau thơm, giá đỗ trụng — tươi mát, cân bằng vị giác hoàn hảo.' },
  { icon: 'soup_kitchen', name: 'Nước mắm chua cay', desc: 'Chén nước mắm pha chua cay đậm đà là linh hồn của món — kích thích vị giác từ miếng đầu tiên.' },
  { icon: 'kitchen', name: 'Gan heo & sắn củ', desc: 'Nguyên liệu đặc biệt trong xíu mại tạo nên lớp nhân khác hẳn bánh tằm nơi khác.' },
]

const STEPS = [
  { step: '01', title: 'Xay bột gạo một bụi đỏ', desc: 'Gạo một bụi đỏ được xay mịn thành bột, đây là nguyên liệu cốt lõi tạo nên hương vị đặc trưng.' },
  { step: '02', title: 'Se sợi bánh bằng tay', desc: 'Bột được se thủ công thành từng sợi lớn hơn sợi bún trên mâm bột — hoàn toàn bằng tay, không dùng máy.' },
  { step: '03', title: 'Hấp bánh tằm', desc: 'Sợi bánh se xong được đem lên hấp, tạo ra từng sợi bánh tằm màu trắng ngà, mềm dai, thơm ngon.' },
  { step: '04', title: 'Làm xíu mại', desc: 'Thịt ba rọi + gan heo + sắn củ băm nhuyễn, trộn gia vị, vo tròn vừa tay rồi đem hấp chín.' },
]

const TASTES = [
  { icon: 'water_drop', label: 'Béo ngậy', desc: 'Nước cốt dừa' },
  { icon: 'restaurant', label: 'Đậm đà', desc: 'Xíu mại thơm' },
  { icon: 'local_fire_department', label: 'Chua cay', desc: 'Nước mắm đặc trưng' },
  { icon: 'eco', label: 'Tươi mát', desc: 'Rau sống ăn kèm' },
  { icon: 'grain', label: 'Dai giòn', desc: 'Sợi bánh tằm' },
  { icon: 'star', label: 'Không ngán', desc: 'Hương vị cân bằng' },
]

export default function BanhTamNganDua() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]" style={{ background: '#f8fafc', color: '#1a2e1a' }}>

        {/* Hero */}
        <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
          <img
            src="https://ticotravel.com.vn/wp-content/uploads/2024/09/banh-tam-ngan-dua-11.jpg"
            alt="Bánh tằm Ngan Dừa Bạc Liêu"
            className="w-full h-full object-cover scale-500"
            style={{ filter: 'brightness(0.75)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />
          <div className="absolute top-6 left-6 flex items-center gap-2 text-sm text-white/70">
            <Link to="/am-thuc" className="hover:text-primary transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-base">arrow_back</span> Ẩm thực
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">Bánh tằm Ngan Dừa</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-14 max-w-5xl mx-auto">
            <span className="inline-flex items-center gap-1 px-3 py-1 mb-4 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">restaurant</span> Ẩm thực Bạc Liêu
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 drop-shadow-2xl leading-tight">
              Bánh Tằm Ngan Dừa
            </h1>
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl leading-relaxed">
              Món ăn vặt trứ danh xứ Bạc Liêu — sợi bánh tằm se tay từ gạo một bụi đỏ,
              ăn kèm xíu mại, nước cốt dừa béo ngậy và nước mắm chua cay đậm đà.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              {[
                { icon: 'handyman', label: 'Làm thủ công' },
                { icon: 'grain', label: 'Gạo một bụi đỏ' },
                { icon: 'star', label: 'Không bao giờ ngán' },
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
                <span className="w-2 h-2 rounded-full bg-primary inline-block"></span> Nguồn gốc
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e1a]">Món ăn vặt nổi tiếng Bạc Liêu</h2>
              <p className="text-[#4b6351] leading-relaxed text-base">
                Bánh tằm vốn là một <span className="text-primary font-semibold">món ăn vặt Bạc Liêu nổi tiếng</span>. Dù thực khách cũng có thể tìm kiếm thấy món bánh tằm ở nhiều tỉnh miền Tây nhưng, bánh tằm chính gốc Ngan Dừa Bạc Liêu được xem là công phu, hương vị ngon nhất.
              </p>
              <p className="text-[#4b6351] leading-relaxed text-base">
                Bánh tằm Ngan Dừa là một loại bánh truyền thống <strong className="text-[#14532d]">có từ lâu đời</strong> của miền đất này. Bánh được làm từ <span className="text-primary font-semibold">gạo một bụi đỏ</span> — loại gạo ngon nức tiếng ở xứ Bạc Liêu, nên tạo ra một hương vị rất riêng biệt, khó nơi nào có được.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 to-[#2c4823]/30 rounded-3xl blur-xl opacity-60"></div>
              <img
                src="https://bazantravel.com/cdn/medias/uploads/27/27757-banh-tam-ngan-dua-700x467.jpg"
                alt="Bánh tằm Ngan Dừa"
                className="relative w-full h-[360px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-2xl border border-green-100 shadow-xl">
                <p className="text-primary text-xl font-black">Truyền thống</p>
                <p className="text-gray-400 text-xs">Bao đời hương vị</p>
              </div>
            </div>
          </section>

          {/* Cách làm */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-3 bg-gradient-to-r from-[#2c4823]/30 to-primary/20 rounded-3xl blur-xl opacity-60"></div>
              <img
                src="https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/11/12/am-thuc-bac-lieu4-16997816220201411201944.jpg"
                alt="Sợi bánh tằm se tay thủ công"
                className="relative w-full h-[360px] object-cover rounded-2xl shadow-2xl"
                style={{ objectPosition: 'center 30%' }}
              />
            </div>
            <div className="space-y-5 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary inline-block"></span> Cách làm
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e1a]">Thủ công từng sợi bánh</h2>
              <p className="text-[#4b6351] leading-relaxed text-base">
                Bánh tằm Ngan Dừa được <span className="text-primary font-semibold">làm thủ công</span>, làm thành từng sợi lớn hơn sợi bún, tất cả đều được <strong className="text-[#14532d]">se bằng tay trên mâm bột</strong>. Sau đó được đem lên hấp làm nên từng sợi bánh tằm màu trắng ngà.
              </p>
              <p className="text-[#4b6351] leading-relaxed text-base">
                Chưa hết, bánh tằm Ngan Dừa phải đi kèm với <span className="text-primary font-semibold">xíu mại</span> — phải được làm từ thịt ba rọi, gan heo kèm với sắn củ băm nhuyễn, trộn với đường, tỏi, tiêu, bột mì, hành phi, vo thành từng viên tròn vừa tay rồi đem đi hấp. Đây chính là công đoạn mà bánh tằm Ngan Dừa <strong className="text-[#14532d]">khác biệt so với những sợi bánh tằm từ nhiều vùng khác</strong>.
              </p>
            </div>
          </section>

          {/* Cách ăn */}
          <section className="bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary inline-block"></span> Cách thưởng thức
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a2e1a]">Trải nghiệm tại Ngan Dừa</h2>
              <p className="text-[#4b6351] leading-relaxed text-base max-w-3xl">
                Bánh tằm Ngan Dừa ăn kèm với một ít <span className="text-primary font-semibold">nước cốt dừa béo ngậy</span>, với một đĩa dưa leo thái sợi nhỏ, cùng với rau thơm, xà lách, giá đỗ trụng… Và cuối cùng là một <span className="text-primary font-semibold">chén nước mắm chua cay đậm đà</span>.
              </p>
              <p className="text-[#4b6351] leading-relaxed text-base max-w-3xl">
                Về thị trấn Ngan Dừa cũ (nay là xã Hồng Dân), đi đâu cũng thấy quán bán bánh tằm. Ngồi vào gọi một đĩa, chan xíu mại, thêm nước cốt, cho rau thơm rồi ít muỗng nước mắm chua cay trộn đều và thưởng thức. Những sợi bánh tằm nóng hổi, <strong className="text-[#14532d]">dai dai, giòn giòn</strong> thấm nước cốt dừa béo ngậy, thêm miếng xíu mại đậm đà, vị chua cay của nước mắm, vị dịu nhẹ của xà lách, thơm nồng của tiêu xay — tất cả làm nên một món ăn đầy hấp dẫn, khó quên.
              </p>
            </div>
          </section>

          {/* Steps */}
          <section>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-2">Quy trình chế biến</h2>
              <p className="text-[#4b6351]">Bốn bước thủ công tạo nên hương vị Ngan Dừa trứ danh</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {STEPS.map((s) => (
                <div key={s.step} className="flex gap-5 bg-[#f0fdf4] p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-all">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-black text-xl">{s.step}</span>
                  </div>
                  <div>
                    <h3 className="text-green-500 font-bold text-base mb-1">{s.title}</h3>
                    <p className="text-[#4b6351] text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Ingredients */}
          <section>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-2">Nguyên liệu đặc trưng</h2>
              <p className="text-[#4b6351]">Những thành phần tạo nên hương vị không thể nhầm lẫn</p>
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

          {/* Taste profile */}
          <section>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-2">Hương vị tổng hòa</h2>
              <p className="text-[#4b6351]">Trong từng miếng bánh có đầy đủ các loại hương vị độc đáo khác nhau</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {TASTES.map((t, i) => (
                <div key={i} className="flex flex-col items-center text-center bg-[#f0fdf4] p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-primary text-2xl">{t.icon}</span>
                  </div>
                  <h3 className="text-green-500 font-bold text-base mb-1">{t.label}</h3>
                  <p className="text-[#4b6351] text-xs">{t.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Quote */}
          <section className="bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            <div className="relative z-10 text-center space-y-6">
              <span className="material-symbols-outlined text-primary text-5xl">format_quote</span>
              <blockquote className="text-green-500 text-xl md:text-2xl font-bold leading-relaxed max-w-3xl mx-auto">
                "Bánh tằm Ngan Dừa ngày càng nổi tiếng, trước đến nay vẫn giữ được hương vị vốn có bao đời. Người dân nơi đây gọi món ăn này là món <span className="text-primary">không bao giờ ngán</span>."
              </blockquote>
              <p className="text-[#4b6351] text-sm max-w-2xl mx-auto">
                Phải thôi, bởi trong từng miếng bánh có đầy đủ các loại hương vị độc đáo khác nhau, luôn tạo vị đặc biệt mà thực khách thưởng thức sẽ chẳng cảm thấy ngán.
              </p>
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
