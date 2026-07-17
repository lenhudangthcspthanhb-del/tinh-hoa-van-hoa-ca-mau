import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TrangChu from './pages/TrangChu'
import AmThuc from './pages/AmThuc'
import DiaDiem from './pages/DiaDiem'
import DiTich from './pages/DiTich'
import LangNghe from './pages/LangNghe'
import TinhThanh from './pages/TinhThanh'
import CuaCaMau from './pages/CuaCaMau'
import BanhXeoBacLieu from './pages/BanhXeoBacLieu'
import BanhTamNganDua from './pages/BanhTamNganDua'
import BaKhiaRachGoc from './pages/BaKhiaRachGoc'
import MuiCaMau from './pages/MuiCaMau'
import HonDaBac from './pages/HonDaBac'
import VuonQuocGiaUMinhHa from './pages/VuonQuocGiaUMinhHa'
import LauMamUMinh from './pages/LauMamUMinh'
import ChoNoiCaMau from './pages/ChoNoiCaMau'
import ChuaMonivongsa from './pages/ChuaMonivongsa'
import TinhCaMau from './pages/TinhCaMau'
import ThanhPhoHaNoi from './pages/TPHaNoi'
import KhutuongniemBH from './pages/KhutuongniemBH_CM'
import Nhadaythep from './pages/Nhadaythep'
import Nghedetchieu from './pages/Nghedetchieu'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TrangChu />} />
        <Route path="/am-thuc" element={<AmThuc />} />
        <Route path="/dia-diem" element={<DiaDiem />} />
        <Route path="/di-tich" element={<DiTich />} />
        <Route path="/lang-nghe" element={<LangNghe />} />
        <Route path="/tinh-thanh" element={<TinhThanh />} />
        <Route path="/am-thuc/cua-ca-mau" element={<CuaCaMau />} />
        <Route path="/am-thuc/banh-xeo-bac-lieu" element={<BanhXeoBacLieu />} />
        <Route path="/am-thuc/banh-tam-ngan-dua" element={<BanhTamNganDua />} />
        <Route path="/am-thuc/ba-khia-rach-goc" element={<BaKhiaRachGoc />} />
        <Route path="/dia-diem/mui-ca-mau" element={<MuiCaMau />} />
        <Route path="/dia-diem/hon-da-bac" element={<HonDaBac />} />
        <Route path="/dia-diem/vuon-quoc-gia-u-minh-ha" element={<VuonQuocGiaUMinhHa />} />
        <Route path="/am-thuc/lau-mam-u-minh" element={<LauMamUMinh />} />
        <Route path="/dia-diem/cho-noi-ca-mau" element={<ChoNoiCaMau />} />
        <Route path="/di-tich/chua-monivongsa-bopharam" element={<ChuaMonivongsa />} />
        <Route path="/tinh-thanh/ca-mau" element={<TinhCaMau />} />
        <Route path="/tinh-thanh/ha-noi" element={<ThanhPhoHaNoi />} />
        <Route path="/di-tich/khu-tuong-niem-BH-CM" element={<KhutuongniemBH />} />
        <Route path="/di-tich/Nha-day-thep" element={<Nhadaythep />} />
        <Route path="/lang-nghe/Nghe-det-chieu" element={<Nghedetchieu />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
