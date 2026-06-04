import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Trang chủ' },
  { to: '/am-thuc', label: 'Ẩm thực' },
  { to: '/dia-diem', label: 'Điểm đến' },
  { to: '/di-tich', label: 'Di tích' },
  { to: '/lang-nghe', label: 'Làng nghề' },
  { to: '/tinh-thanh', label: 'Tỉnh thành mới' },
]

// Ca Mau themed logo icon: mangrove tree + water waves + compass point
function LogoIcon() {
  return (
    <div style={{ width: 44, height: 44, flexShrink: 0 }}>
      <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background circle with gradient */}
        <defs>
          <linearGradient id="logoBg" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#16a34a" />
            <stop offset="100%" stopColor="#14532d" />
          </linearGradient>
          <linearGradient id="logoWave" x1="0" y1="28" x2="44" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4ade80" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#16a34a" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Outer circle */}
        <circle cx="22" cy="22" r="22" fill="url(#logoBg)" />

        {/* Inner glow ring */}
        <circle cx="22" cy="22" r="18" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

        {/* === Mangrove tree trunk & roots === */}
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

        {/* === Prop roots (aerial roots) === */}
        <line x1="20" y1="21" x2="17" y2="26" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
        <line x1="22" y1="22" x2="22" y2="27" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
        <line x1="24" y1="21" x2="27" y2="26" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />

        {/* === Water waves === */}
        {/* Wave 1 */}
        <path
          d="M8 29 Q12 26.5 16 29 Q20 31.5 24 29 Q28 26.5 32 29 Q35 30.5 36 29"
          stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.9"
        />
        {/* Wave 2 */}
        <path
          d="M10 33 Q14 30.5 18 33 Q22 35.5 26 33 Q30 30.5 34 33"
          stroke="white" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.6"
        />

        {/* === Compass South point (Mũi Cà Mau) === */}
        <polygon points="22,37 20,33 24,33" fill="rgba(255,255,255,0.85)" />
        <polygon points="22,37 20.5,34 23.5,34" fill="white" opacity="0.5" />
      </svg>
    </div>
  )
}

export default function Navbar() {
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-green-100 bg-white/90 backdrop-blur-md px-4 py-3 md:px-10 shadow-sm shadow-green-100">
      {/* Logo + Nav */}
      <div className="flex items-center gap-4 md:gap-8">
        <Link to="/" className="flex items-center gap-4 text-[#1a2e1a]">
          <LogoIcon />
          <h2 className="text-[#1a2e1a] text-lg font-bold leading-tight tracking-[-0.015em]">
            Khám phá Cà Mau
          </h2>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium leading-normal transition-colors ${location.pathname === link.to
                ? 'text-primary font-bold'
                : 'text-[#4b6351] hover:text-primary'
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Actions */}
      <div className="flex flex-1 justify-end gap-4 lg:gap-8">
        <label className="hidden sm:flex flex-col min-w-40 !h-10 max-w-64">
          <div className="flex w-full flex-1 items-stretch rounded-full h-full bg-green-50 border border-green-200 focus-within:border-primary focus-within:bg-white transition-colors">
            <div className="text-[#4b6351] flex border-none items-center justify-center pl-4 rounded-l-full border-r-0">
              <span className="material-symbols-outlined text-xl">search</span>
            </div>
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-full text-[#1a2e1a] focus:outline-0 focus:ring-0 border-none bg-transparent focus:border-none h-full placeholder:text-[#4b6351]/60 px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal"
              placeholder="Tìm kiếm..."
              type="text"
            />
          </div>
        </label>

      </div>
    </header>
  )
}
