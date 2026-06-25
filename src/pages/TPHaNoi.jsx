import { useState, useMemo, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEOHead from '../components/SEOHead'
import { TINH_INFO, DON_VI, QUAN_HUYEN } from '../data/TPHaNoiData'

const fmt = n => n.toLocaleString('vi-VN')
const fmtDt = n => n.toFixed(2).replace('.', ',')

export default function TPHaNoi() {
  const [query, setQuery] = useState('')
  const [loaiFilter, setLoaiFilter] = useState('all')
  const [qhFilter, setQhFilter] = useState('all')
  const [page, setPage] = useState(1)
  const PER_PAGE = 30

  const filtered = useMemo(() => {
    return DON_VI.filter(p => {
      const q = query.toLowerCase()
      const matchQ = !query || p.ten.toLowerCase().includes(q) || String(p.stt).includes(q) || p.qhCu.toLowerCase().includes(q)
      const matchL = loaiFilter === 'all' || p.loai === loaiFilter
      const matchQH = qhFilter === 'all' || p.qhCu === qhFilter
      return matchQ && matchL && matchQH
    })
  }, [query, loaiFilter, qhFilter])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE))
  const paged = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)
  useEffect(() => { setPage(1) }, [query, loaiFilter, qhFilter])
  const clearFilters = () => { setQuery(''); setLoaiFilter('all'); setQhFilter('all'); setPage(1) }
  const T = TINH_INFO

  return (
    <div className="min-h-screen" style={{ background: '#f0f4ff' }}>
      <SEOHead
        title="Thủ Đô Hà Nội - Đơn Vị Hành Chính Chi Tiết"
        description="Thông tin chi tiết Thủ Đô Hà Nội: dân số, diện tích, đơn vị hành chính sau sáp nhập. Tra cứu xã, phường, quận huyện."
        path="/tinh-thanh/ha-noi"
      />
      <Navbar />
      <div className="pt-[72px]">

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600 text-white text-center py-10 px-4">
          <span className="material-symbols-outlined text-6xl mb-2 block">apartment</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Thủ Đô Hà Nội</h1>
          <p className="text-lg text-emerald-100">Sáp nhập từ: <strong className="text-white">{T.sapNhap}</strong></p>
        </div>

        {/* Image */}
        <div className="max-w-4xl mx-auto px-4 -mt-6">
          <img src="/images/h----g----m.jpg" alt="Thủ Đô Hà Nội" className="w-full rounded-2xl shadow-xl border-4 border-white object-cover" style={{ maxHeight: 500 }} />
        </div>

        {/* Info Cards */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {[
              { label: 'Mã tỉnh', value: T.ma, icon: 'tag', bg: 'bg-blue-50', bc: 'border-blue-200', ic: 'text-blue-500', vc: 'text-blue-700' },
              { label: 'Đơn vị Hành chính', value: `${T.phuong} Phường - ${T.xa} Xã`, icon: 'corporate_fare', bg: 'bg-emerald-50', bc: 'border-emerald-200', ic: 'text-emerald-500', vc: 'text-emerald-700' },
              { label: 'Diện tích', value: fmtDt(T.dt) + ' km²', icon: 'square_foot', bg: 'bg-cyan-50', bc: 'border-cyan-200', ic: 'text-cyan-500', vc: 'text-cyan-700' },
              { label: 'Dân số', value: fmt(T.ds), icon: 'group', bg: 'bg-amber-50', bc: 'border-amber-200', ic: 'text-amber-500', vc: 'text-amber-700' },
            ].map(s => (
              <div key={s.label} className={`${s.bg} rounded-xl p-4 shadow-sm border ${s.bc}`}>
                <div className="flex items-start justify-between">
                  <div><p className="text-gray-600 font-semibold text-xs mb-1">{s.label}</p><p className={`${s.vc} font-extrabold text-lg`}>{s.value}</p></div>
                  <span className={`material-symbols-outlined text-2xl ${s.ic}`}>{s.icon}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { label: 'Mã điện thoại', value: T.mvung, icon: 'phone' },
              { label: 'Trung tâm hành chính', value: T.trungTam, icon: 'account_balance' },
              { label: 'Vùng kinh tế', value: T.vung, icon: 'terrain' },
            ].map(s => (
              <div key={s.label} className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 flex items-center gap-3">
                <span className="material-symbols-outlined text-2xl text-emerald-500">{s.icon}</span>
                <div><p className="text-gray-500 text-xs font-semibold">{s.label}</p><p className="text-gray-800 font-bold text-sm">{s.value}</p></div>
              </div>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white px-4 py-5 shadow border-b border-gray-200">
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-2xl font-bold text-orange-500 mb-3">🔍 Tìm kiếm Xã/Phường sáp nhập</p>
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="text"
                placeholder="Nhập tên phường xã, quận huyện cũ..."
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
                <option value="all">Chọn Xã/Phường</option>
                <option value="phuong">Phường</option>
                <option value="xa">Xã</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="max-w-6xl mx-auto px-4 py-6">
          <p className="text-gray-500 mb-4 text-center">Hiển thị {paged.length} / {filtered.length} đơn vị hành chính (Trang {page}/{totalPages})</p>

          <div className="flex flex-col gap-4">
            {paged.map(p => {
              const isPhuong = p.loai === 'phuong'
              return (
                <div key={p.stt} className={`rounded-2xl overflow-hidden shadow-md border-2 hover:shadow-xl transition-all duration-300 bg-white ${isPhuong ? 'border-amber-300' : 'border-emerald-300'}`}>
                  <div className="flex flex-col md:flex-row">
                    {/* Left */}
                    <div className={`flex flex-col items-center justify-center px-5 py-4 min-w-[160px] ${isPhuong ? 'bg-gradient-to-br from-amber-400 via-orange-400 to-red-400' : 'bg-gradient-to-br from-emerald-400 via-green-500 to-teal-500'}`}>
                      <span className="material-symbols-outlined text-white text-4xl mb-1">{isPhuong ? 'location_city' : 'park'}</span>
                      <span className={`text-[10px] font-bold px-3 py-0.5 rounded-full mb-1 ${isPhuong ? 'bg-amber-200 text-amber-800' : 'bg-emerald-200 text-emerald-800'}`}>{isPhuong ? 'PHƯỜNG' : 'XÃ'}</span>
                      <h3 className="text-white font-extrabold text-base text-center leading-tight">{p.ten}</h3>
                      <span className="text-white/70 text-xs mt-1">#{p.stt}</span>
                    </div>
                    {/* Right */}
                    <div className="flex-1 p-4">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3">
                        {[
                          { label: 'Dân số', value: fmt(p.ds), icon: 'group' },
                          { label: 'Diện tích', value: fmtDt(p.dt) + ' km²', icon: 'square_foot' },
                          { label: 'Mật độ DS', value: fmt(p.matDo) + ' ng/km²', icon: 'density_medium' },
                        ].map(s => (
                          <div key={s.label} className="flex items-center gap-2">
                            <span className={`material-symbols-outlined text-lg ${isPhuong ? 'text-amber-500' : 'text-emerald-500'}`}>{s.icon}</span>
                            <div><p className="text-[10px] text-gray-400 font-semibold uppercase">{s.label}</p><p className="font-bold text-sm text-gray-800">{s.value}</p></div>
                          </div>
                        ))}
                      </div>
                      <div className={`grid grid-cols-1 md:grid-cols-3 gap-2 p-3 rounded-xl ${isPhuong ? 'bg-amber-50' : 'bg-emerald-50'}`}>
                        <div className="flex items-start gap-1.5 text-xs text-gray-700">
                          <span className={`material-symbols-outlined text-lg ${isPhuong ? 'text-amber-500' : 'text-emerald-500'}`}>map</span>
                          <span><strong>Quận/Huyện cũ:</strong><br />{p.qhCu}</span>
                        </div>
                        <div className="flex items-start gap-1.5 text-xs text-gray-700">
                          <span className={`material-symbols-outlined text-lg ${isPhuong ? 'text-amber-500' : 'text-emerald-500'}`}>merge</span>
                          <span><strong>Sáp nhập từ:</strong><br />{p.sapNhap}</span>
                        </div>
                        <div className="flex items-start gap-1.5 text-xs text-gray-700">
                          <span className={`material-symbols-outlined text-lg ${isPhuong ? 'text-amber-500' : 'text-emerald-500'}`}>account_balance</span>
                          <span><strong>TT hành chính:</strong><br />{p.ttHC}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <span className="material-symbols-outlined text-6xl text-gray-300">search_off</span>
              <p className="text-gray-500 mt-2">Không tìm thấy đơn vị hành chính phù hợp</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              <button onClick={() => { setPage(1); window.scrollTo({ top: 600, behavior: 'smooth' }) }} disabled={page === 1}
                className={`px-3 py-2 rounded-lg text-sm font-bold transition-colors ${page === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-emerald-500 text-white hover:bg-emerald-600'}`}>
                <span className="material-symbols-outlined text-sm">first_page</span>
              </button>
              <button onClick={() => { setPage(p => Math.max(1, p - 1)); window.scrollTo({ top: 600, behavior: 'smooth' }) }} disabled={page === 1}
                className={`px-3 py-2 rounded-lg text-sm font-bold transition-colors ${page === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-emerald-500 text-white hover:bg-emerald-600'}`}>
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                <button key={n} onClick={() => { setPage(n); window.scrollTo({ top: 600, behavior: 'smooth' }) }}
                  className={`w-10 h-10 rounded-lg text-sm font-bold transition-colors ${n === page ? 'bg-emerald-600 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-300 hover:bg-emerald-50'}`}>
                  {n}
                </button>
              ))}
              <button onClick={() => { setPage(p => Math.min(totalPages, p + 1)); window.scrollTo({ top: 600, behavior: 'smooth' }) }} disabled={page === totalPages}
                className={`px-3 py-2 rounded-lg text-sm font-bold transition-colors ${page === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-emerald-500 text-white hover:bg-emerald-600'}`}>
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
              <button onClick={() => { setPage(totalPages); window.scrollTo({ top: 600, behavior: 'smooth' }) }} disabled={page === totalPages}
                className={`px-3 py-2 rounded-lg text-sm font-bold transition-colors ${page === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-emerald-500 text-white hover:bg-emerald-600'}`}>
                <span className="material-symbols-outlined text-sm">last_page</span>
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}
