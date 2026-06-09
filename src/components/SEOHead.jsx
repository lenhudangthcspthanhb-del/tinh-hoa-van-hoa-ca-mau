import { useEffect } from 'react'

/**
 * SEOHead - Component quản lý SEO meta tags cho từng trang
 * Tự động cập nhật title, description, Open Graph, canonical URL
 * 
 * @param {string} title - Tiêu đề trang (sẽ thêm " | Khám Phá Cà Mau" vào sau)
 * @param {string} description - Mô tả ngắn cho trang (tối đa 160 ký tự)
 * @param {string} path - Đường dẫn URL (ví dụ: "/am-thuc/cua-ca-mau")
 * @param {string} image - URL hình ảnh đại diện cho Open Graph
 * @param {string} type - Loại trang (website, article, place)
 */
export default function SEOHead({ 
  title = 'Khám Phá Cà Mau', 
  description = 'Khám phá vẻ đẹp hoang sơ của Cà Mau - Đất Mũi tận cùng Tổ quốc với rừng ngập mặn, ẩm thực đặc sắc và làng nghề truyền thống.',
  path = '/',
  image = 'https://www.peacetour.com.vn/Upload/Article/8f89c83b-c860-4339-b0cc-0989c4adb593/1.jpg',
  type = 'website'
}) {
  const siteName = 'Khám Phá Cà Mau'
  const baseUrl = 'https://khamphacamau.com'
  const fullTitle = path === '/' ? siteName : `${title} | ${siteName}`
  const canonicalUrl = `${baseUrl}${path}`

  useEffect(() => {
    // Cập nhật title
    document.title = fullTitle

    // Helper function để set hoặc tạo meta tag
    const setMeta = (attr, attrValue, content) => {
      let meta = document.querySelector(`meta[${attr}="${attrValue}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute(attr, attrValue)
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }

    // Meta description
    setMeta('name', 'description', description)

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl)

    // Open Graph tags (Facebook, Zalo)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', canonicalUrl)
    setMeta('property', 'og:image', image)
    setMeta('property', 'og:type', type)
    setMeta('property', 'og:site_name', siteName)
    setMeta('property', 'og:locale', 'vi_VN')

    // Twitter Card tags
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', image)

    // Robots
    setMeta('name', 'robots', 'index, follow')

    // Cleanup khi unmount
    return () => {
      document.title = siteName
    }
  }, [fullTitle, description, canonicalUrl, image, type, siteName])

  return null // Component này không render gì cả, chỉ quản lý <head>
}
