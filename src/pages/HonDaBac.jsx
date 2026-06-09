import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEOHead from '../components/SEOHead'

export default function HonDaBac() {
  return (
    <>
      <SEOHead
        title="Hòn Đá Bạc - Cụm Đảo Huyền Bí Cà Mau"
        description="Hòn Đá Bạc - cụm đảo với đá granit kỳ vĩ có niên đại 180 triệu năm, nổi giữa biển xanh vùng cực Nam Tổ quốc."
        path="/dia-diem/hon-da-bac"
        image="https://ik.imagekit.io/tvlk/blog/2024/03/go-and-share-du-lich-hon-da-bac-ca-mau-3-1024x527.webp?tr=q-70,c-at_max,w-1000,h-600"
        type="place"
      />
      <Navbar />
      <main className="pt-[72px]" style={{ background: '#f8fafc', color: '#1a2e1a' }}>

        {/* Hero */}
        <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
          <img
            src="https://ik.imagekit.io/tvlk/blog/2024/03/go-and-share-du-lich-hon-da-bac-ca-mau-3-1024x527.webp?tr=q-70,c-at_max,w-1000,h-600"
            alt="Hòn Đá Bạc Cà Mau"
            className="w-full h-full object-cover scale-105"
            style={{ filter: 'brightness(0.75)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />
          <div className="absolute top-6 left-6 flex items-center gap-2 text-sm text-white/70">
            <Link to="/dia-diem" className="hover:text-primary transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-base">arrow_back</span> Điểm đến
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">Hòn Đá Bạc</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-14 max-w-5xl mx-auto">
            <span className="inline-flex items-center gap-1 px-3 py-1 mb-4 rounded-full bg-green-500 border border-primary/30 text-white text-xs font-bold uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">landscape</span> Kỳ quan thiên nhiên
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 drop-shadow-2xl leading-tight">
              Hòn Đá Bạc
            </h1>
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl leading-relaxed">
              Cụm đảo huyền ảo nổi giữa biển xanh — nơi những khối đá granit kỳ vĩ hội tụ tạo nên
              cảnh quan thiên nhiên đẹp đến ngỡ ngàng ở vùng cực Nam Tổ quốc.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              {[
                { icon: 'terrain', label: 'Cao 50m so với mặt biển' },
                { icon: 'forest', label: 'Diện tích 6,5 ha' },
                { icon: 'water', label: 'Đá granit kỳ bí' },
              ].map(s => (
                <span key={s.label} className="flex items-center gap-1.5 bg-orange-500 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-white text-sm font-medium">
                  <span className="material-symbols-outlined text-primary text-base">{s.icon}</span>
                  {s.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">

          {/* Đoạn 1: Giới thiệu */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary inline-block"></span> Giới thiệu
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e1a]">Địa danh hòn Đá Bạc nao lòng</h2>
              <p className="text-[#4b6351] leading-relaxed text-base">
                Đến Cà Mau, ngắm dải cực Nam của Tổ quốc, du khách không khỏi ngỡ ngàng trước những cảnh đẹp miền sông nước và tấm lòng chân chất của những con người hồn hậu nơi đây. Nơi miền đất Mũi thiêng liêng ấy, bên cạnh việc thả hồn theo điệu <span className="text-primary font-semibold">"dạ cổ Hoài Lang"</span> trên dòng sông Gành Hào, thưởng thức những món ăn đồng quê trong rừng tràm U Minh, thì du khách chẳng ai bỏ qua những địa danh đẹp nao lòng làm thăng hoa cảm xúc.
              </p>
              <p className="text-[#4b6351] leading-relaxed text-base">
                Và địa danh <strong className="text-[#14532d]">hòn Đá Bạc</strong>, sẽ là một trong những gợi ý hết sức thú vị.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 to-[#2c4823]/30 rounded-3xl blur-xl opacity-60"></div>
              <img
                src="https://ik.imagekit.io/tvlk/blog/2024/03/go-and-share-du-lich-hon-da-bac-ca-mau-3-1024x527.webp?tr=q-70,c-at_max,w-1000,h-600"
                alt="Hòn Đá Bạc toàn cảnh"
                className="relative w-full h-[360px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-2xl border border-green-100 shadow-xl">
                <p className="text-primary text-xl font-black">6,5 ha</p>
                <p className="text-gray-400 text-xs">Tổng diện tích</p>
              </div>
            </div>
          </section>

          {/* Đoạn 2: Cụm hòn */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-3 bg-gradient-to-r from-[#2c4823]/30 to-primary/20 rounded-3xl blur-xl opacity-60"></div>
              <img
                src="https://mia.vn/media/uploads/blog-du-lich/kham-pha-hon-da-bac-voi-canh-dep-hoang-so-cuc-an-tuong-01-1663692474.jpg"
                alt="Cụm hòn Đá Bạc"
                className="relative w-full h-[360px] object-cover rounded-2xl shadow-2xl"
                onError={e => { e.target.src = 'https://ik.imagekit.io/tvlk/blog/2024/03/go-and-share-du-lich-hon-da-bac-ca-mau-3-1024x527.webp?tr=q-70,c-at_max,w-1000,h-600' }}
              />
            </div>
            <div className="space-y-5 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary inline-block"></span> Cụm đảo
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e1a]">Ba hòn liền nhau giữa biển</h2>
              <p className="text-[#4b6351] leading-relaxed text-base">
                Hòn Đá Bạc là một cụm hòn nằm nhô cao khoảng <span className="text-primary font-semibold">50 m so với mặt nước biển</span>, gồm các hòn liền nhau: <strong className="text-[#14532d]">hòn Trọi, hòn Ông Ngộ và hòn Đá Bạc</strong> với tổng diện tích khoảng 6,5 ha.
              </p>
              <p className="text-[#4b6351] leading-relaxed text-base">
                Ngoại trừ Hòn Trọi nhỏ bé nằm giữa hai Hòn Ông Ngộ và Hòn Đá Bạc, chỉ toàn đá là đá, còn lại hai hòn kia đều được <span className="text-primary font-semibold">phủ rợp bóng cây rừng xanh mướt</span>, cây cối mọc um tùm.
              </p>
            </div>
          </section>

          {/* Ảnh toàn cảnh giữa bài */}
          <section>
            <div className="relative rounded-2xl overflow-hidden h-[450px] shadow-2xl">
              <img
                src="https://ik.imagekit.io/tvlk/blog/2024/03/go-and-share-du-lich-hon-da-bac-ca-mau-30.webp"
                alt="Bờ đá granit Hòn Đá Bạc"
                className="w-full h-full object-cover"
                onError={e => { e.target.src = 'https://ik.imagekit.io/tvlk/blog/2024/03/go-and-share-du-lich-hon-da-bac-ca-mau-3-1024x527.webp?tr=q-70,c-at_max,w-1000,h-600' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-white text-lg font-bold">Bờ đá granit huyền bí bao quanh Hòn Đá Bạc</p>
                <p className="text-gray-300 text-sm">Những khối đá tự nhiên được sắp xếp như bàn tay huyền bí</p>
              </div>
            </div>
          </section>

          {/* Đoạn 3: Đặc điểm địa chất */}
          <section className="bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-primary inline-block"></span> Kỳ quan địa chất
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a2e1a]">Đá granit kỳ bí & thần tiên</h2>
                <p className="text-[#4b6351] leading-relaxed text-base">
                  Với bóng cây bàng, bồ đề che rợp, hòn Đá Bạc lúc nào cũng <span className="text-primary font-semibold">rì rào tiếng gió biển xa ru</span>. Điểm đặc biệt là bao quanh toàn bộ khu Hòn Đá Bạc đều là <strong className="text-[#14532d]">bờ đá granit chồng chất lên nhau</strong>.
                </p>
                <p className="text-[#4b6351] leading-relaxed text-base">
                  Tất cả như được bàn tay huyền bí nào đó nhào nặn thành những hình thù kỳ lạ, đẹp mắt, sắp xếp thành dãy, thành bãi trải dài vây tròn quanh bờ biển càng tăng thêm <span className="text-primary font-semibold">vẻ thần tiên của đảo</span>.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://file.hstatic.net/200000836389/file/hon-da-bac__2__9ee9bf859a0048689840edb023dbc0b3.jpg"
                  alt="Đá granit Hòn Đá Bạc"
                  className="w-full h-[280px] object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </section>

          {/* Điểm nổi bật */}
          <section>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-2">Điểm nổi bật</h2>
              <p className="text-[#4b6351]">Những điều làm nên sức hút của Hòn Đá Bạc</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { icon: 'terrain', title: 'Hòn Trọi', desc: 'Hòn nhỏ nằm giữa, toàn đá là đá, tạo nên điểm nhấn độc đáo giữa cụm đảo xanh mướt.' },
                { icon: 'park', title: 'Hòn Ông Ngộ', desc: 'Phủ kín bóng cây rừng xanh mướt, cây cối mọc um tùm — không khí trong lành và mát mẻ.' },
                { icon: 'water', title: 'Hòn Đá Bạc', desc: 'Bờ đá granit kỳ vĩ bao quanh, tiếng gió biển rì rào qua tán bàng, bồ đề như tiếng ru huyền bí.' },
              ].map((f, i) => (
                <div key={i} className="flex flex-col bg-[#f0fdf4] p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-primary text-2xl">{f.icon}</span>
                  </div>
                  <h3 className="text-green-500 font-bold text-lg mb-2">{f.title}</h3>
                  <p className="text-[#4b6351] text-sm leading-relaxed">{f.desc}</p>
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
