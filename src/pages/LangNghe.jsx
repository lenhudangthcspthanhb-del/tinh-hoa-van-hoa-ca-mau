import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function LangNghe() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full min-h-screen" style={{ background: '#f8fafc', color: '#1a2e1a' }}>
        {/* Hero */}
        <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center px-6 mx-auto mb-20">
          <div className="absolute inset-0 z-0">
            <img
              alt="Artisan hands"
              className="w-full h-full object-cover brightness-110"
              src="https://dltm-cdn.vnptit3.vn/resources/portal//Images/VLG/adminportal_vlg/tin_tuc/a77_638277738732063185_287236366.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent"></div>
          </div>
          <div className="relative z-10 text-center max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-red-500 text-white font-bold text-xs mb-4 uppercase tracking-wider">Tinh Hoa Sông Nước</span>
            <h1 className="text-white text-4xl md:text-7xl font-black mb-6 drop-shadow-2xl">Làng Nghề Truyền Thống</h1>

          </div>
        </section>

        {/* Featured Crafts Bento Grid */}
        <section className="max-w-[1200px] mx-auto px-6 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6" style={{ gridAutoRows: '400px' }}>
            {/* Tan Duyet */}
            <div className="md:col-span-8 rounded-xl overflow-hidden relative group border border-green-100 shadow-sm">
              <img
                alt="Mat weaving"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://cvdvn.net/wp-content/uploads/2020/12/6a744-chieu_ca_mau.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a0c] via-[#0f1a0c]/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h2 className="text-white text-2xl md:text-5xl font-extrabold mb-2">Nghề dệt chiếu Tân Duyệt</h2>
                <p className="text-green-500 text-base mb-4 max-w-xl">
                  Từng sợi lác được nhuộm màu rực rỡ, đan xen khéo léo tạo nên những manh chiếu bền bỉ, mang đậm nét văn hóa sinh hoạt của người dân Nam Bộ.
                </p>

              </div>
            </div>

            {/* U Minh Honey */}
            <div className="md:col-span-4 rounded-xl overflow-hidden relative group border border-green-100 shadow-sm bg-[#f0fdf4]">
              <img
                alt="Honey gathering"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 mix-blend-luminosity group-hover:mix-blend-normal"
                src="https://thamhiemmekong.com/wp-content/uploads/2020/07/nghegackeoonguminhha9.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2e3729] via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="w-10 h-10 rounded-full bg-[#2e3729] flex items-center justify-center mb-3 border border-[#86957c]/30">
                  <span className="material-symbols-outlined text-primary text-lg">hive</span>
                </div>
                <h3 className="text-white text-2xl font-bold mb-2">Gác kèo ong U Minh</h3>
                <p className="text-green-500 text-sm">Nghề rừng độc đáo thu hoạch mật ong tinh khiết từ hoa tràm rùng rạp.</p>
              </div>
            </div>

            {/* Dried Shrimp - full width */}
            <div className="md:col-span-12 rounded-xl border border-green-100 bg-green-200 flex flex-col md:flex-row overflow-hidden shadow-sm" style={{ height: 'auto', minHeight: '300px', gridRow: 'auto' }}>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <span className="inline-block bg-orange-500/80 text-white text-xs font-bold px-2 py-1 rounded-md mb-2">Đặc sản trứ danh</span>
                <h3 className="text-[#1a2e1a] text-3xl md:text-4xl font-extrabold mb-4">Làm tôm khô Rạch Gốc</h3>
                <p className="text-green-500 text-base mb-6">
                  Tôm đất sống được luộc ngay khi vừa bắt lên, phơi dưới cái nắng gắt của miệt biển. Từng mẻ tôm đỏ au, vị ngọt lịm là kết tinh của sự cần mẫn và công thức truyền thống lâu đời.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <span className="inline-flex items-center gap-1 bg-primary px-3 py-1 rounded-full text-xs text-[#dbe6d5]">
                    <span className="material-symbols-outlined text-[16px]">sunny</span> Phơi nắng tự nhiên
                  </span>
                  <span className="inline-flex items-center gap-1 bg-primary px-3 py-1 rounded-full text-xs text-[#dbe6d5]">
                    <span className="material-symbols-outlined text-[16px]">restaurant</span> Không chất bảo quản
                  </span>
                </div>
              </div>
              <div className="md:w-1/2 relative min-h-[250px]">
                <img
                  alt="Dried shrimp"
                  className="absolute inset-0 w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbsAJ3W_C5-l7Xd0bkLTs3pP6Xlr6-HRk_IvI1kcURuYuNfZQH069IzwgriiOzS6014Zb14bWeLhhzphaNMi5Erpr_nAbGZHDuye91nD0tOBSGFquK_XdkoKI8s5kJM4yZXbaeiIoPLAnb0hUwnJVVKmdu0mKOieYN8_1FhAIbLZ7WYDASITQaujFc01rEQgykQY9wynBg05XHjOw8SWiOy064i1clnCxtGCjKEXkYZbiK9_nP_7IjVvXqtZH237wxom3ZDADWNyE"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== 4 Nghề Mới ===== */}
        <section className="max-w-[1200px] mx-auto px-6 mb-20">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider mb-4">Di Sản Nghề Thủ Công</span>
            <h2 className="text-[#1a2e1a] text-3xl md:text-4xl font-bold">Các Làng Nghề Truyền Thống Khác</h2>
            <p className="text-[#4b6351] mt-3 max-w-2xl mx-auto">Bên cạnh dệt chiếu và gác kèo ong, Cà Mau còn sở hữu nhiều nghề thủ công lâu đời gắn liền với cuộc sống sông nước và biển khơi.</p>
          </div>

          {/* Nghề làm muối */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16 bg-white rounded-2xl overflow-hidden border border-green-100">
            <div className="relative h-[320px] lg:h-full min-h-[280px]">
              <img
                src="https://muoibaclieu.com.vn/wp-content/uploads/2023/05/trai-nghiem-lang-nghe-lam-muoi-o-bac-lieu-di-san-van-hoa-phi-vat-the-quoc-gia-3044-1.jpg"
                alt="Nghề làm muối Bạc Liêu"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-transparent to-[#151e11] hidden lg:block" />
              <div className="absolute inset-0 bg-transparent from-[#151e11] to-transparent lg:hidden" />
              <div className="absolute top-4 left-4">
                <span className="bg-orange-500/80 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">Nghề biển</span>
              </div>
            </div>
            <div className="p-8 lg:pl-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-2xl">water_drop</span>
                </div>
                <h3 className="text-primary text-2xl md:text-3xl font-extrabold">Nghề Làm Muối</h3>
              </div>
              <p className="text-[#4b6351] leading-relaxed mb-5">
                Nghề Muối Bạc Liêu – Di Sản Văn Hóa Đặc Sắc Của Việt Nam. Dưới cái nắng chói chang của miền Tây, những diêm dân cần mẫn dẫn nước biển vào ruộng muối, phơi khô rồi thu hoạch từng hạt muối trắng tinh khiết.
              </p>
              <p className="text-[#4b6351] leading-relaxed mb-6">
                Muối Bạc Liêu nổi tiếng với vị mặn đậm đà, ít tạp chất, được dùng trong chế biến hải sản, làm mắm và xuất khẩu. Mỗi vụ muối kéo dài từ <span className="text-primary font-semibold">tháng 12 đến tháng 4</span> năm sau.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Muối biển tự nhiên', 'Phơi nắng thủ công', 'Diêm dân 3 thế hệ', 'Xuất khẩu sang châu Á'].map(t => (
                  <span key={t} className="bg-primary text-white text-xs px-3 py-1 rounded-full border border-green-200">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Nghề đan đát */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16 bg-white rounded-2xl overflow-hidden border border-green-100">
            <div className="p-8 lg:pr-4 order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-2xl">category</span>
                </div>
                <h3 className="text-primary text-2xl md:text-3xl font-extrabold">Nghề Đan Đát</h3>
              </div>
              <p className="text-[#4b6351] leading-relaxed mb-5">
                Nghề đan đát từ <strong className="text-[#14532d]">tre, mây, lục bình</strong> là nét đẹp văn hóa đặc trưng của người dân vùng sông nước Cà Mau. Từ những chiếc giỏ, rổ, thúng, nia đến bàn ghế tre tinh xảo — mỗi sản phẩm đều được đan tay hoàn toàn theo kỹ thuật truyền từ đời này sang đời khác.
              </p>
              <p className="text-[#4b6351] leading-relaxed mb-6">
                Làng nghề đan đát tập trung ở <span className="text-primary font-semibold">huyện Thới Bình, Cái Nước</span>. Hiện nay nghề đan đát lục bình được khuyến khích phát triển do nguồn nguyên liệu dồi dào và thân thiện với môi trường.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Tre, mây, lục bình', 'Hàng thủ công mỹ nghệ', 'Xuất khẩu châu Âu', 'Thân thiện môi trường'].map(t => (
                  <span key={t} className="bg-primary text-white text-xs px-3 py-1 rounded-full border border-green-200">{t}</span>
                ))}
              </div>
            </div>
            <div className="relative h-[320px] lg:h-full min-h-[280px] order-1 lg:order-2">
              <img
                src="https://mtg.1cdn.vn/2025/01/02/nghe-dan-dat.jpg"
                alt="Nghề đan đát Bạc Liêu"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-transparent to-[#151e11] hidden lg:block" />
              <div className="absolute inset-0 bg-transparent from-[#151e11] to-transparent lg:hidden" />
              <div className="absolute top-4 right-4">
                <span className="bg-orange-500/80 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">Thủ công mỹ nghệ</span>
              </div>
            </div>
          </div>

          {/* Nghề mộc + Nghề đan lưới - 2 cột */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Nghề mộc */}
            <div className="bg-white rounded-2xl overflow-hidden border border-green-100 group hover:border-[#aaff8c]/30 transition-colors">
              <div className="relative h-[240px] overflow-hidden">
                <img
                  src="https://langngheviet.com.vn/stores/news_dataimages/langnghevietcomvn/022023/24/15/lang-nghe-moc-cho-thu-noi-tieng-vung-tay-nam-bo-19-.4473.jpg"
                  alt="Nghề mộc Bạc Liêu"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151e11] via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500/80 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">Nghề gỗ</span>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                    <span className="material-symbols-outlined text-primary text-xl">carpenter</span>
                  </div>
                  <h3 className="text-white text-xl font-extrabold">Nghề Mộc</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#4b6351] text-sm leading-relaxed mb-4">
                  Nghề mộc tại Cà Mau nổi tiếng với kỹ thuật đóng <strong className="text-[#14532d]">ghe, xuồng gỗ</strong> phục vụ đời sống sông nước. Các làng thợ mộc ở <span className="text-primary font-semibold">huyện Ngọc Hiển, Năm Căn</span> có truyền thống hàng trăm năm, tạo ra những chiếc ghe chài, tắc ráng chắc bền nổi tiếng khắp vùng đồng bằng.
                </p>
                <p className="text-[#4b6351] text-sm leading-relaxed mb-5">
                  Bên cạnh đóng thuyền, nghề mộc Cà Mau còn sản xuất đồ nội thất từ gỗ đước, gỗ tràm — loại gỗ cứng chắc đặc trưng của rừng ngập mặn.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Đóng ghe xuồng', 'Gỗ đước, tràm', 'Đồ nội thất', 'Truyền thống 100+ năm'].map(t => (
                    <span key={t} className="bg-primary text-white text-xs px-2.5 py-1 rounded-full border border-green-200">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Nghề đan lưới */}
            <div className="bg-white rounded-2xl overflow-hidden border border-green-100 group hover:border-[#aaff8c]/30 transition-colors">
              <div className="relative h-[240px] overflow-hidden">
                <img
                  src="https://langngheviet.com.vn/stores/news_dataimages/langnghevietcomvn/092022/23/10/lang-nghe-dan-luoi-thom-rom-45-.0034.jpg"
                  alt="Nghề đan lưới Bạc Liêu"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151e11] via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500/80 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">Nghề biển</span>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                    <span className="material-symbols-outlined text-primary text-xl">set_meal</span>
                  </div>
                  <h3 className="text-white text-xl font-extrabold">Nghề Đan Lưới</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#4b6351] text-sm leading-relaxed mb-4">
                  Với đường bờ biển dài và hàng ngàn hộ ngư dân, nghề đan lưới là một trong những nghề truyền thống lâu đời nhất Cà Mau. Người dân ở <span className="text-primary font-semibold">Sông Đốc, Khánh Hội, Đất Mũi</span> đan lưới bằng tay từ sợi nylon, tạo ra các loại lưới bắt tôm, cua, cá phù hợp địa hình sông nước và biển khơi.
                </p>
                <p className="text-[#4b6351] text-sm leading-relaxed mb-5">
                  Mỗi tấm lưới mất từ 3–7 ngày đan thủ công tỉ mỉ. Kỹ thuật chọn sợi, thắt mắt lưới đều đỏi hỏi kinh nghiệm nhiều năm. Đây là nghề giữ vai trò quan trọng trong kinh tế hộ gia đình ngư dân.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Đan tay thủ công', 'Lưới tôm, cua, cá', 'Sông Đốc - Khánh Hội', 'Kinh tế ngư dân'].map(t => (
                    <span key={t} className="bg-primary text-white text-xs px-2.5 py-1 rounded-full border border-green-200">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Placeholder to balance grid */}
        <div className="md:col-span-2 relative group rounded-xl overflow-hidden border border-green-200 bg-[#f0fdf4] flex items-center justify-center min-h-[300px]">
          <div className="text-center px-8">
            <span className="material-symbols-outlined text-primary text-5xl mb-4 block">explore</span>
            <h3 className="text-green-500 text-xl font-bold mb-2">Còn nhiều hơn nữa các nghề truyền thống</h3>
            <p className="text-green-500 text-sm">Đang chờ bạn khám phá.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
