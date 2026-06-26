import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEOHead from '../components/SEOHead'

export default function DiaDiem() {
  return (
    <>
      <SEOHead
        title="Địa Điểm Du Lịch Cà Mau"
        description="Khám phá các địa điểm du lịch nổi bật tại Cà Mau - Mũi Cà Mau, Vườn Quốc gia U Minh Hạ, Hòn Đá Bạc, Chợ Nổi và nhiều điểm đến hấp dẫn khác."
        path="/dia-diem"
        image="https://ik.imagekit.io/tvlk/blog/2023/03/go-and-share-du-lich-mui-ca-mau-17.jpg"
      />
      <Navbar />
      <main>
        {/* Hero */}
        <header className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Ca Mau Landscape"
              className="w-full h-full object-cover brightness-110"
              src="https://vuonqgmcm.camau.gov.vn//Datafiles/vuonqgmcm-camau-gov-vn/wps/wcm/connect/vuonquocgiamuicamau/194d34e6-80cb-4060-a8a4-37ce0b688c2c/29-2ba1-jpg-3fmod-3dajperes-26amp-3bcacheid-3droot.png"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
          </div>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h1 className="text-white text-4xl md:text-7xl font-black mb-6 drop-shadow-2xl">Khám Phá Cà Mau</h1>

          </div>
        </header>

        {/* Destination Bento Grid */}
        <section className="px-6 py-10 max-w-[1200px] mx-auto">
          <div>
            <div className="md:col-span-8 rounded-xl overflow-hidden relative group border border-green-100 shadow-sm"></div>
            <div className="mb-12 text-center md:text-center">
              <h2 className="text-[#1a2e1a] text-3xl md:text-5xl font-extrabold mb-4">Điểm Đến Nổi Bật</h2>
              <div className="w-16 h-1 bg-primary rounded-full mx-auto md:mx-0"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ gridAutoRows: '300px' }}>

              {/* Mui Ca Mau - large */}
              <Link to="/dia-diem/mui-ca-mau" className="md:col-span-2 md:row-span-2 relative rounded-xl overflow-hidden group block">
                <img alt="Mui Ca Mau" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://ik.imagekit.io/tvlk/blog/2023/03/go-and-share-du-lich-mui-ca-mau-17.jpg" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <span className="inline-block bg-orange-500/80 text-white text-xs font-bold px-2 py-1 rounded-md mb-2">Bí Ẩn &amp; Hùng Vĩ</span>
                  <h3 className="text-white text-3xl font-bold mb-2">Mũi Cà Mau</h3>
                  <p className="text-green-500 text-sm mt-1">Cực Nam Tổ quốc, nơi duy nhất trên đất liền Việt Nam có thể ngắm mặt trời mọc ở biển Đông và lặn ở biển Tây.</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-yellow-300 text-sm font-bold group-hover:gap-2 transition-all">
                    Xem chi tiết <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </div>
                </div>
              </Link>

              {/* Rung U Minh Ha */}
              <Link to="/dia-diem/vuon-quoc-gia-u-minh-ha" className="relative rounded-xl overflow-hidden group block">
                <img alt="U Minh Ha Forest" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASntBlhKG7-zz-z0ZHaj9YEUvJxn37FM4Lv25W8VfRzaGbddGWn8_L00JmW-wYdSRbLOaqPQWvsuuWx9A_uCUiAeNmcK06fiM_MNlXE1yDydnRo1ZdymM-W6Qag0KtUzFa6eF9G028_m5Rsbg47N_21kv09O9zYNM8ZAABsXySCnwbaS8IXFRrNasdZ7unmIEFSHfztjve7bVN32VIyhKAGBQCF1B4JVhy6ErtQgaRPNlBYhI5V9b4SLgPSCpxRxvpEVCgNC0j8u0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-2xl font-bold mb-1">Vườn Quốc gia U Minh Hạ</h3>
                  <p className="text-green-500 text-sm mt-1">Tăng cường bảo tồn đa dạng sinh học</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-yellow-300 text-sm font-bold group-hover:gap-2 transition-all">
                    Xem chi tiết <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </div>
                </div>
              </Link>

              {/* Hon Da Bac */}
              <Link to="/dia-diem/hon-da-bac" className="relative rounded-xl overflow-hidden group block">
                <img alt="Hon Da Bac" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://ik.imagekit.io/tvlk/blog/2024/03/go-and-share-du-lich-hon-da-bac-ca-mau-3-1024x527.webp?tr=q-70,c-at_max,w-1000,h-600" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-2xl font-bold mb-1">Hòn Đá Bạc</h3>
                  <p className="text-green-500 text-sm mt-1">Khám phá Hòn Đá Bạc - Cụm đảo có niên đại 180 triệu năm.</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-yellow-300 text-sm font-bold group-hover:gap-2 transition-all">
                    Xem chi tiết <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </div>
                </div>
              </Link>

              {/* Khu du lich dien gio Hoa Binh 1 - wide */}
              <div className="md:col-span-2 relative rounded-xl overflow-hidden group">
                <img alt="Khu du lịch điện gió Hòa Bình 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images2.thanhnien.vn/zoom/686_429/528068263637045248/2024/3/22/a3-1711017570469625654483-0-36-1140-1860-crop-1711074661171219101438.jpg" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <span className="inline-block bg-orange-500/80 text-white text-xs font-bold px-2 py-1 rounded-md mb-2">Năng lượng xanh</span>
                  <h3 className="text-white text-2xl font-bold mb-2">Khu du lịch sinh thái điện gió Hòa Bình 1</h3>
                  <p className="text-green-500 text-sm mt-1">Trải nghiệm khung cảnh hàng chục tuabin gió khổng lồ sừng sững giữa biển trời bao la — điểm check-in ấn tượng bậc nhất vùng Bạc Liêu.</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-yellow-300 text-sm font-bold group-hover:gap-2 transition-all">
                    Xem chi tiết <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </div>
                </div>
              </div>

              {/* Cho Noi Ca Mau */}
              <Link to="/dia-diem/cho-noi-ca-mau" className="relative rounded-xl overflow-hidden group block">
                <img alt="Chợ Nổi Cà Mau" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://mia.vn/media/uploads/blog-du-lich/cho-noi-ca-mau-net-doc-dao-cua-mien-tay-song-nuoc-3-1663303247.jpg" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-2xl font-bold mb-1">Chợ Nổi Cà Mau</h3>
                  <p className="text-green-500 text-sm mt-1">Văn hóa giao thương sông nước độc đáo của miền Tây Nam Bộ.</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-yellow-300 text-sm font-bold group-hover:gap-2 transition-all">
                    Xem chi tiết <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </div>
                </div>
              </Link>

              {/* Vuon nhan co Bac Lieu */}
              <div className="relative rounded-xl overflow-hidden group">
                <img alt="Vườn nhãn cổ Bạc Liêu" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://ik.imagekit.io/tvlk/blog/2023/08/Vuon-nhan-co-Bac-Lieu-2.jpg?tr=q-70,c-at_max,w-1000,h-600" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-2xl font-bold mb-1">Vườn nhãn cổ Bạc Liêu</h3>
                  <p className="text-green-500 text-sm mt-1">Vườn nhãn trăm tuổi xanh mát, nơi lưu giữ nét duyên dáng yên bình của xứ Bạc Liêu.</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-yellow-300 text-sm font-bold group-hover:gap-2 transition-all">
                    Xem chi tiết <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </div>
                </div>
              </div>

              {/* Vuon chim Bac Lieu */}
              <div className="relative rounded-xl overflow-hidden group">
                <img alt="Vườn chim Bạc Liêu" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://ik.imagekit.io/tvlk/blog/2023/08/vuon-chim-Bac-Lieu-1.jpg?tr=q-70,c-at_max,w-1000,h-600" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-2xl font-bold mb-1">Vườn chim Bạc Liêu</h3>
                  <p className="text-green-500 text-sm mt-1">Vùng đất ngập nước là ngôi nhà của hàng nghìn loài chim quý hiếm, thiên đường của những người yêu thiên nhiên.</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-yellow-300 text-sm font-bold group-hover:gap-2 transition-all">
                    Xem chi tiết <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </div>
                </div>

              </div>
              {/* Chùa Monivongsa */}
              <Link to="/di-tich/chua-monivongsa-bopharam" className="block relative rounded-xl overflow-hidden group h-full min-h-[200px]">
                <img
                  alt="Chùa Monivongsa Bopharam"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://dltm-cdn.vnptit3.vn/resources/portal/Images/CMU/adminportal/1/hinhanh_1124_x_562_px_11_955444714.png"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,16,5,0.9) 0%, rgba(8,16,5,0) 60%)' }}></div>
                <div className="absolute bottom-0 left-0 p-6">

                  <h3 className="text-white text-xl font-bold">Chùa Monivongsa Bopharam</h3>
                  <p className="text-green-500 text-sm mt-1">Ngôi chùa Khmer lớn nhất trung tâm TP. Cà Mau với kiến trúc Angkor rực rỡ.</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-yellow-300 text-sm font-bold group-hover:gap-2 transition-all">
                    Xem chi tiết <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </section>
      </main >
      <Footer />
    </>
  )
}
