import { useState, useMemo } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const DS = [
  { stt: 1, ten: 'Hà Nội', loai: 'thanh-pho', sapNhap: 'Giữ nguyên', ds: 8807523, dt: 3359.80, ma: '01', mvung: '24', trungTam: 'Hoàn Kiếm - Hà Nội', vung: 'ĐB sông Hồng', donvihanhchinh: '', phuong: 51, xa: 75, },
  { stt: 2, ten: 'Cao Bằng', loai: 'tinh', sapNhap: 'Giữ nguyên', ds: 573119, dt: 6700.40, ma: '04', mvung: '206', trungTam: 'Cao Bằng', vung: 'Trung du và miền núi phía Bắc', donvihanhchinh: '', phuong: '03', xa: 53 },
  { stt: 3, ten: 'Tuyên Quang', loai: 'tinh', sapNhap: 'Tuyên Quang, Hà Giang', ds: 1865270, dt: 13795.60, ma: '08', mvung: '207', trungTam: 'Tuyên Quang', vung: 'Trung du và miền núi phía Bắc', donvihanhchinh: '', phuong: '07', xa: 117 },
  { stt: 4, ten: 'Điện Biên', loai: 'tinh', sapNhap: 'Giữ nguyên', ds: 673091, dt: 9539.90, ma: '11', mvung: '215', trungTam: 'Điện Biên', vung: 'Trung du và miền núi phía Bắc', donvihanhchinh: '', phuong: '03', xa: 42 },
  { stt: 5, ten: 'Lai Châu', loai: 'tinh', sapNhap: 'Giữ nguyên', ds: 512601, dt: 9068.70, ma: '12', mvung: '213', trungTam: 'Thành phố Lai Châu ', vung: 'Trung du và miền núi phía Bắc', donvihanhchinh: '', phuong: '02', xa: 36 },
  { stt: 6, ten: 'Sơn La', loai: 'tinh', sapNhap: 'Giữ nguyên', ds: 1404587, dt: 14109.80, ma: '14', mvung: '212', trungTam: 'Thành phố Sơn La', vung: 'Trung du và miền núi phía Bắc', donvihanhchinh: '', phuong: '08', xa: 67 },
  { stt: 7, ten: 'Lào Cai', loai: 'tinh', sapNhap: 'Lào Cai, Yên Bái', ds: 1778785, dt: 13257, ma: '15', mvung: '214', trungTam: 'Thành phố Yên Bái', vung: 'Trung du và miền núi phía Bắc', donvihanhchinh: '', phuong: '10', xa: 89 },
  { stt: 8, ten: 'Thái Nguyên', loai: 'tinh', sapNhap: 'Thái Nguyên, Bắc Cạn', ds: 1799489, dt: 8375.30, ma: '19', mvung: '208', trungTam: 'Thành phố Thái Nguyên', vung: 'Trung du và miền núi phía Bắc', donvihanhchinh: '', phuong: '15', xa: 77 },
  { stt: 9, ten: 'Lạng Sơn', loai: 'tinh', sapNhap: 'Giữ nguyên', ds: 881384, dt: 8310.20, ma: '20', mvung: '205', trungTam: 'Tỉnh Lạng Sơn', vung: 'Trung du và miền núi phía Bắc', donvihanhchinh: '', phuong: '04', xa: 61 },
  { stt: 10, ten: 'Quảng Ninh', loai: 'tinh', sapNhap: 'Giữ nguyên', ds: 1497447, dt: 6207.90, ma: '22', mvung: '203', trungTam: 'Tỉnh Quảng Ninh', vung: 'Đồng Bằng sông Hồng', donvihanhchinh: '', phuong: '30', xa: 22, dkhu: '02' },
  { stt: 11, ten: 'Bắc Ninh', loai: 'tinh', sapNhap: 'Bắc Ninh, Bắc Giang', ds: 3619433, dt: 4718.60, ma: '24', mvung: '204', trungTam: 'Thành phố Bắc Giang', vung: 'Đồng Bằng sông Hồng', donvihanhchinh: '', phuong: '33', xa: 66 },
  { stt: 12, ten: 'Phú Thọ', loai: 'tinh', sapNhap: 'Phú Thọ, Vĩnh Phúc, Hòa Bình', ds: 4022638, dt: 9361.40, ma: '25', mvung: '210', trungTam: 'Thành phố Việt Trì, tỉnh Phú Thọ', vung: 'Trung du và miền núi phía Bắc', donvihanhchinh: '', phuong: '15', xa: 133 },
  { stt: 13, ten: 'Hải Phòng', loai: 'thanh-pho', sapNhap: 'Hải Phòng, Hải Dương', ds: 4664124, dt: 3194.70, ma: '31', mvung: '225', trungTam: 'Thành phố Thủy Nguyên, Hải Phòng', vung: 'Đồng Bằng sông Hồng', donvihanhchinh: '', phuong: '45', xa: 67, dkhu: '02' },
  { stt: 14, ten: 'Hưng Yên', loai: 'tinh', sapNhap: 'Hưng Yên, Thái Bình', ds: 3567943, dt: 2514.80, ma: '33', mvung: '221', trungTam: 'Thành phố Hưng Yên', vung: 'Đồng Bằng sông Hồng', donvihanhchinh: '', phuong: '11', xa: 93 },
  { stt: 15, ten: 'Ninh Bình', loai: 'tinh', sapNhap: 'Ninh Bình, Nam Định, Hà Nam', ds: 4412264, dt: 4942.60, ma: '37', mvung: '229', trungTam: 'Hoa Lư, Ninh Bình', vung: 'Đồng Bằng sông Hồng', donvihanhchinh: '', phuong: '32', xa: 97 },
  { stt: 16, ten: 'Thanh Hóa', loai: 'tinh', sapNhap: 'Giữ nguyên', ds: 4324783, dt: 11114.70, ma: '38', mvung: '237', trungTam: 'Tỉnh Thanh Hóa', vung: 'Bắc Trung Bộ', donvihanhchinh: '', phuong: '19', xa: 147 },
  { stt: 17, ten: 'Nghệ An', loai: 'tinh', sapNhap: 'Giữ nguyên', ds: 3831694, dt: 16493.70, ma: '40', mvung: '238', trungTam: 'Tỉnh Nghệ An', vung: 'Bắc Trung Bộ', donvihanhchinh: '', phuong: '11', xa: 119 },
  { stt: 18, ten: 'Hà Tỉnh', loai: 'tinh', sapNhap: 'Giữ nguyên', ds: 1622901, dt: 5994.40, ma: '42', mvung: '239', trungTam: 'Tỉnh Hà Tĩnh', vung: 'Bắc Trung Bộ', donvihanhchinh: '', phuong: '09', xa: 60 },
  { stt: 19, ten: 'Quảng Trị', loai: 'tinh', sapNhap: 'Quảng Bình, Quảng Trị', ds: 1870845, dt: 12700.00, ma: '44', mvung: '232', trungTam: 'Đồng Hới, Quảng Bình', vung: 'Bắc Trung Bộ', donvihanhchinh: '', phuong: '08', xa: 69, dkhu: '01' },
  { stt: 20, ten: 'Huế', loai: 'thanh-pho', sapNhap: 'Giữ nguyên', ds: 1432986, dt: 4947.10, ma: '46', mvung: '234', trungTam: 'Thành Phố Huế cũ', vung: 'Bắc Trung Bộ', donvihanhchinh: '', phuong: '21', xa: 190 },
  { stt: 21, ten: 'Đà Nẵng', loai: 'thanh-pho', sapNhap: 'Đà Nẵng, Quảng Nam', ds: 3065628, dt: 11832.60, ma: '48', mvung: '236', trungTam: 'Hải Châu District', vung: 'Duyên hải Nam Trung Bộ', donvihanhchinh: '', phuong: '23', xa: 70, dkhu: '01' },
  { stt: 22, ten: 'Quảng Ngãi', loai: 'tinh', sapNhap: 'Quảng Ngãi, Kon Tum', ds: 2161755, dt: 14832.60, ma: '51', mvung: '255', trungTam: 'Thành phố Quảng Ngãi', vung: 'Duyên hải Nam Trung Bộ', donvihanhchinh: '', phuong: '09', xa: 86, dkhu: '01' },
  { stt: 23, ten: 'Gia Lai', loai: 'tinh', sapNhap: 'Gia Lai, Bình Định', ds: 3583693, dt: 21576.50, ma: '52', mvung: '256', trungTam: 'Quy Nhơn, Bình Định', vung: 'Duyên hải Nam Trung Bộ', donvihanhchinh: '', phuong: '25', xa: 110 },
  { stt: 24, ten: 'Khánh Hòa', loai: 'tinh', sapNhap: 'Khánh Hòa, Ninh Thuận', ds: 2243554, dt: 8555.90, ma: '56', mvung: '258', trungTam: 'Nha Trang, Khánh Hòa', vung: 'Duyên hải Nam Trung Bộ', donvihanhchinh: '', phuong: '16', xa: 48, dkhu: '01' },
  { stt: 25, ten: 'Đắk Lắk', loai: 'tinh', sapNhap: 'Đắk Lawsk, Phú Yên', ds: 3346853, dt: 18096.40, ma: '66', mvung: '262', trungTam: 'Buôn Ma Thuộc, Đắk Lắk', vung: 'Duyên hải Nam Trung Bộ', donvihanhchinh: '', phuong: '14', xa: 88 },
  { stt: 26, ten: 'Lâm Đồng', loai: 'tinh', sapNhap: 'Lâm Đồng, Đắk Nông, Bình Thuận', ds: 3872999, dt: 24233.10, ma: '68', mvung: '263', trungTam: 'Đà Lạt, Lâm Đồng', vung: 'Duyên hải Nam Trung Bộ', donvihanhchinh: '', phuong: '20', xa: 103, dkhu: '01' },
  { stt: 27, ten: 'Đồng Nai', loai: 'thanh-pho', sapNhap: 'Đồng Nai, Bình Phước', ds: 4491408, dt: 12737.20, ma: '75', mvung: '251', trungTam: 'Biên Hòa, Đồng Nai', vung: 'Đông Nam Bộ', donvihanhchinh: '', phuong: '33', xa: 62 },
  { stt: 28, ten: 'Thành Phố Hồ Chí Minh', loai: 'thanh-pho', sapNhap: 'TP. Hồ Chí Minh, Bình Dương, Bà Rịa-Vũng Tàu', ds: 14002598, dt: 6772.60, ma: '79', mvung: '28', trungTam: 'Quận 1, Thành phố Hồ Chí Minh', vung: 'Đông Nam Bộ', donvihanhchinh: '', phuong: '113', xa: 54, dkhu: '01' },
  { stt: 29, ten: 'Tây Ninh', loai: 'tinh', sapNhap: 'Tây Ninh, Long An', ds: 3254170, dt: 8536.50, ma: '80', mvung: '272', trungTam: 'Tân An, Long An', vung: 'Đông Nam Bộ', donvihanhchinh: '', phuong: '14', xa: 82 },
  { stt: 30, ten: 'Đồng Tháp', loai: 'tinh', sapNhap: 'Đồng Tháp, Tiền Giang', ds: 4370046, dt: 5938.70, ma: '82', mvung: '273', trungTam: 'Mỹ Tho, Tiền Giang', vung: 'Đồng bằng sông Cửu Long', donvihanhchinh: '', phuong: '20', xa: 143 },
  { stt: 31, ten: 'Vĩnh Long', loai: 'tinh', sapNhap: 'Bến Tre, Vĩnh Long, Trà Vinh', ds: 4257581, dt: 6296.20, ma: '86', mvung: '270', trungTam: 'Vĩnh Long', vung: 'Đồng bằng sông Cửu Long', donvihanhchinh: '', phuong: '19', xa: 105 },
  { stt: 32, ten: 'An Giang', loai: 'tinh', sapNhap: 'An Giang, Kiên Giang', ds: 4952238, dt: 9888.90, ma: '91', mvung: '297', trungTam: 'Rạch Giá, Kiên Giang', vung: 'Đồng bằng sông Cửu Long', donvihanhchinh: '', phuong: '14', xa: 85, dkhu: '03' },
  { stt: 33, ten: 'Cần Thơ', loai: 'thanh-pho', sapNhap: 'Cần Thơ, Sóc Trăng, Hậu Giang', ds: 4199824, dt: 6363.80, ma: '92', mvung: '292', trungTam: 'Ninh Kiều District, Cần Thơ', vung: 'Đồng bằng sông Cửu Long', donvihanhchinh: '', phuong: '31', xa: 72 },
  { stt: 34, ten: 'Cà Mau', loai: 'tinh', sapNhap: 'Cà Mau, Bạc Liêu', ds: 2606672, dt: 7942.40, ma: '96', mvung: '290', trungTam: 'Thành phố Cà Mau', vung: 'Đồng bằng sông Cửu Long', donvihanhchinh: '', phuong: '09', xa: 55 },
]

const fmt = n => n.toLocaleString('vi-VN')
const fmtDt = n => n.toFixed(2).replace('.', ',')

export default function TinhThanh() {
  const [query, setQuery] = useState('')
  const [loaiFilter, setLoaiFilter] = useState('all')

  const filtered = useMemo(() => {
    return DS.filter(p => {
      const matchQ = p.ten.toLowerCase().includes(query.toLowerCase()) ||
        p.sapNhap.toLowerCase().includes(query.toLowerCase())
      const matchL = loaiFilter === 'all' || p.loai === loaiFilter
      return matchQ && matchL
    })
  }, [query, loaiFilter])

  const totalDS = DS.reduce((s, p) => s + p.ds, 0)
  const totalDT = DS.reduce((s, p) => s + p.dt, 0)
  const soTP = DS.filter(p => p.loai === 'thanh-pho').length

  return (
    <div className="min-h-screen" style={{ background: '#f0f4ff' }}>
      <Navbar />
      <div className="pt-[72px]">

        {/* Search Bar */}
        <div className="bg-white px-4 py-3 shadow border-b border-gray-200">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-3">
            <input
              type="text"
              placeholder="Nhập tên tỉnh thành hoặc phường xã, quận huyện cũ..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-400"
            />
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold text-sm transition-colors">
              <span className="material-symbols-outlined text-base">search</span> Tìm Kiếm
            </button>
            <select
              value={loaiFilter}
              onChange={e => setLoaiFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-400 bg-white text-gray-600 min-w-[180px]"
            >
              <option value="all">Chọn tỉnh thành</option>
              <option value="tinh">Tỉnh</option>
              <option value="thanh-pho">Thành phố trực thuộc TW</option>
            </select>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-6">
          {/* Section header */}
          <div className="text-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Danh Sách Tỉnh Thành</h2>
            <p className="text-gray-500 text-sm mt-1">Hiển thị {filtered.length} / {DS.length} tỉnh thành</p>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {[
              { label: 'Tổng số tỉnh thành', value: '34', icon: 'location_on', color: 'text-blue-500' },
              { label: 'Tổng dân số', value: fmt(totalDS), icon: 'group', color: 'text-green-500' },
              { label: 'Tổng diện tích', value: fmtDt(totalDT) + ' km²', icon: 'bar_chart', color: 'text-teal-500' },
              { label: 'Thành phố trực thuộc', value: String(soTP), icon: 'apartment', color: 'text-orange-500' },
            ].map(s => (
              <div key={s.label} className="bg-green-200 rounded-xl p-4 shadow-sm border border-gray-50">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-primary font-black text-xs mb-1">{s.label}</p>
                    <p className="text-red-500 font-black text-lg leading-tight">{s.value}</p>
                  </div>
                  <span className={`material-symbols-outlined text-2xl ${s.color}`}>{s.icon}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Province cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.map(p => {
              const isTP = p.loai === 'thanh-pho'
              const headerBg = isTP ? 'from-orange-400 to-orange-400' : 'from-green-500 to-green-500'
              const badgeBg = isTP ? 'bg-blue-400 text-white' : 'bg-blue-400 text-white'
              const tenPrefix = isTP ? 'Thành phố' : 'Tỉnh'
              return (
                <div key={p.stt} className="bg-green-200 rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  {/* Card Header */}
                  <div className={`bg-gradient-to-r ${headerBg} px-4 py-3`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-bold text-2xl flex items-center gap-1">
                          <span className="material-symbols-outlined text-2xl">{isTP ? 'apartment' : 'location_on'}</span>
                          {tenPrefix} {p.ten}
                        </h3>
                        <p className="text-primary-500 text-sx mt-0.5">Sáp Nhập từ: {p.sapNhap}</p>
                      </div>
                      <span className={`${badgeBg} rounded-full px-2 py-0.5 text-xs font-black`}>#{p.stt}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-3">
                      <div className="flex items-center gap-1 text-xs">
                        <span className="material-symbols-outlined text-blue-400 text-xl">group</span>
                        <div>
                          <span className="text-primary-500 text-xs block">Dân số</span>
                          <span className="font-bold text-green-500">{fmt(p.ds)}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs">
                        <span className="material-symbols-outlined text-green-400 text-xl">square_foot</span>
                        <div>
                          <span className="text-primary-500 text-xs block">Diện tích</span>
                          <span className="font-bold text-green-500">{fmtDt(p.dt)}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <span className="material-symbols-outlined text-orange-400 text-xl">tag</span>
                        <div>
                          <span className="text-primary-500 text-xs block">Mã tỉnh</span>
                          <span className="font-bold text-green-500">{p.ma}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs">
                        <span className="material-symbols-outlined text-purple-400 text-xl">phone</span>
                        <div>
                          <span className="text-primary-500 text-xs block">Mã vùng</span>
                          <span className="font-bold text-green-500">{p.mvung}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5 mb-3 border-t border-gray-100 pt-2">
                      <div className="flex items-start gap-1.5 text-xs text-gray-600">
                        <span className="material-symbols-outlined text-green-500 text-xl mt-0.5">merge</span>
                        <span><span className="font-semibold">Đơn vị sáp nhập:</span> {p.sapNhap}</span>
                      </div>
                      <div className="flex items-start gap-1.5 text-xs text-gray-600">
                        <span className="material-symbols-outlined text-green-500 text-xl mt-0.5">account_balance</span>
                        <span><span className="font-semibold">Trung tâm hành chính:</span> {p.trungTam}</span>
                      </div>
                      <div className="flex items-start gap-1.5 text-xs text-gray-600">
                        <span className="material-symbols-outlined text-green-500 text-xl mt-0.5">terrain</span>
                        <span><span className="font-semibold">Vùng kinh tế:</span> {p.vung}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-gray-100 pt-2">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="material-symbols-outlined text-gray-400 text-sm">corporate_fare</span>
                        <span className="bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{p.phuong} Phường</span>
                        <span className="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{p.xa} Xã</span>
                        {p.dkhu > 0 && <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{p.dkhu} đặc khu</span>}
                      </div>
                      <button className={`flex items-center gap-1 text-white text-xs font-bold px-3 py-1.5 rounded-full transition-colors ${isTP ? 'bg-orange-500 hover:bg-orange-600' : 'bg-blue-600 hover:bg-blue-700'}`}>
                        Xem Chi Tiết <span className="material-symbols-outlined text-xs">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <span className="material-symbols-outlined text-6xl text-gray-300">search_off</span>
              <p className="text-gray-500 mt-2">Không tìm thấy tỉnh thành phù hợp</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}