import { Link } from 'react-router-dom'

function LogoIcon() {
  return (
    <div style={{ width: 36, height: 36, flexShrink: 0 }}>
      <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="footerLogoBg" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>
          <linearGradient id="footerLogoWave" x1="0" y1="28" x2="44" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#86efac" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#4ade80" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Outer circle */}
        <circle cx="22" cy="22" r="22" fill="url(#footerLogoBg)" />

        {/* Inner glow ring */}
        <circle cx="22" cy="22" r="18" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

        {/* Main trunk */}
        <rect x="21" y="12" width="2" height="10" rx="1" fill="white" opacity="0.95" />
        {/* Left branch */}
        <line x1="22" y1="16" x2="16" y2="12" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
        {/* Right branch */}
        <line x1="22" y1="15" x2="28" y2="11" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
        {/* Left sub-branch */}
        <line x1="18.5" y1="13.5" x2="15" y2="11" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
        {/* Right sub-branch */}
        <line x1="25.5" y1="13" x2="29" y2="11.5" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.7" />

        {/* Canopy circles */}
        <circle cx="22" cy="11" r="3.5" fill="rgba(255,255,255,0.25)" />
        <circle cx="16" cy="11" r="2.8" fill="rgba(255,255,255,0.2)" />
        <circle cx="28.5" cy="10" r="2.8" fill="rgba(255,255,255,0.2)" />
        <circle cx="15" cy="10" r="1.8" fill="rgba(255,255,255,0.15)" />
        <circle cx="30" cy="10.5" r="1.8" fill="rgba(255,255,255,0.15)" />

        {/* Prop roots (aerial roots) */}
        <line x1="20" y1="21" x2="17" y2="26" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
        <line x1="22" y1="22" x2="22" y2="27" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
        <line x1="24" y1="21" x2="27" y2="26" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />

        {/* Water waves */}
        <path
          d="M8 29 Q12 26.5 16 29 Q20 31.5 24 29 Q28 26.5 32 29 Q35 30.5 36 29"
          stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.9"
        />
        <path
          d="M10 33 Q14 30.5 18 33 Q22 35.5 26 33 Q30 30.5 34 33"
          stroke="white" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.6"
        />

        {/* Compass South point (Mũi Cà Mau) */}
        <polygon points="22,37 20,33 24,33" fill="rgba(255,255,255,0.85)" />
        <polygon points="22,37 20.5,34 23.5,34" fill="white" opacity="0.5" />
      </svg>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-[#14532d] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 lg:px-40">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 text-white mb-6">
              <LogoIcon />
              <h2 className="text-xl font-bold">Khám phá Cà Mau</h2>
            </div>
            <p className="text-green-200 mb-6">
              Khám phá vẻ đẹp tận cùng đất nước, nơi thiên nhiên
              hòa quyện cùng bản sắc văn hóa độc đáo.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-green-200 hover:bg-primary hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-lg">public</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-green-200 hover:bg-primary hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-lg">share</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-green-200 hover:bg-primary hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-lg">mail</span>
              </a>
            </div>
          </div>

          {/* Khám phá */}
          <div>
            <h3 className="text-white font-bold mb-4">Khám phá</h3>
            <ul className="space-y-3 text-green-200">
              <li>
                <Link to="/dia-diem" className="hover:text-[#4ade80] transition-colors">
                  Điểm đến nổi bật
                </Link>
              </li>
              <li>
                <Link to="/am-thuc" className="hover:text-[#4ade80] transition-colors">
                  Ẩm thực đặc sản
                </Link>
              </li>
              <li>
                <Link to="/di-tich" className="hover:text-[#4ade80] transition-colors">
                  Di tích lịch sử
                </Link>
              </li>
              <li>
                <Link to="/lang-nghe" className="hover:text-[#4ade80] transition-colors">
                  Làng nghề truyền thống
                </Link>
              </li>
            </ul>
          </div>

          {/* Liên hệ */}
          <div>
            <h3 className="text-white font-bold mb-4">Liên hệ</h3>
            <ul className="space-y-3 text-green-200">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#4ade80] text-sm mt-1">school</span>
                <span>Trường Trung học cơ sở Phong Thạnh</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#4ade80] text-sm mt-1">location_on</span>
                <span>Khóm Phong Thạnh, phường Giá Rai, tỉnh Cà Mau</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#4ade80] text-sm">email</span>
                <span>pttgiang.thcsphongthanh@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bản quyền & Thống kê */}
        <div className="border-t border-white/10 pt-8 mt-4 flex flex-col md:flex-row items-center justify-between text-green-200 text-sm">
          <p>© {new Date().getFullYear()} Khám phá Cà Mau. Bản quyền thuộc về Trường THCS Phong Thạnh.</p>
          <div className="flex items-center gap-3 mt-4 md:mt-0 bg-white/5 py-1.5 px-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-lg text-[#4ade80]">monitoring</span>
            <span className="font-medium">Thống kê truy cập:</span>
            <img 
              src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fkhamphacamau.com&label=L%C6%B0%E1%BB%A3t%20xem&labelColor=%23064e3b&countColor=%2316a34a&style=flat-square" 
              alt="Visitor Count" 
              className="h-5 rounded-sm"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
