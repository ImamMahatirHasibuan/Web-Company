import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asset/Logo-backeraser.png';
import footerLogo from '../../asset/Logo-Hitam.png';
import gambar2 from '../assets/Gambar2.jpg';

const NewsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const newsArticles = [
    {
      id: 1,
      title: "PT Tanjung Sauh Power Raih Sertifikasi ISO 45001:2018",
      excerpt: "Pencapaian significant dalam komitmen kami terhadap keselamatan kerja dan pengelolaan risiko occupational health & safety.",
      date: "15 Januari 2026",
      category: "Sertifikasi",
      icon: "🏆"
    },
    {
      id: 2,
      title: "Operasional Unit Pembangkit Coal-Fired Capai Target Efisiensi 46%",
      excerpt: "Melalui optimalisasi teknologi supercritical, kami mencapai milestone penting dalam efisiensi energi dan penghematan operasional.",
      date: "10 Januari 2026",
      category: "Operasional",
      icon: "⚡"
    },
    {
      id: 3,
      title: "Program CSR: Pelatihan Keterampilan untuk 200 Pemuda Batam",
      excerpt: "TSP berkomitmen mendukung pengembangan SDM lokal melalui program pelatihan teknis dan entrepreneur yang komprehensif.",
      date: "5 Januari 2026",
      category: "CSR",
      icon: "🤝"
    },
    {
      id: 4,
      title: "Ekspansi Unit Renewable Energy: Panel Surya 5 MW Operasional",
      excerpt: "Langkah konkret PT Tanjung Sauh Power dalam diversifikasi sumber energi terbarukan di Kepulauan Riau.",
      date: "28 Desember 2025",
      category: "Renewable Energy",
      icon: "☀️"
    },
    {
      id: 5,
      title: "Partnership Strategis dengan Universitas Terkemuka untuk R&D Energi",
      excerpt: "Kolaborasi mendalam dalam penelitian dan pengembangan teknologi pembangkit listrik masa depan yang lebih sustainable.",
      date: "20 Desember 2025",
      category: "Partnership",
      icon: "🔬"
    },
    {
      id: 6,
      title: "Audit Lingkungan Eksternal: Compliance 100% ISO 14001:2015",
      excerpt: "Hasil audit positif membuktikan dedikasi TSP dalam menjaga kelestarian ekosistem dan compliance terhadap regulasi lingkungan.",
      date: "10 Desember 2025",
      category: "ESG",
      icon: "🌍"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased text-gray-900">
      {/* ========== HEAD (NAVBAR) ========== */}
      <nav className="bg-white py-6 border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-black text-deep-navy tracking-tighter">
              <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
            </Link>
            <div className="hidden md:flex space-x-8 font-medium text-gray-600">
              <Link to="/" className="hover:text-electric-blue transition">Home</Link>
              <Link to="/about" className="hover:text-electric-blue transition">About</Link>
              <Link to="/operations" className="hover:text-electric-blue transition">Operations</Link>
              <Link to="/news" className="hover:text-electric-blue transition">News</Link>
              <Link to="/contact" className="hover:text-electric-blue transition">Contact</Link>
            </div>
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-deep-navy hover:text-electric-blue hover:bg-blue-50 transition"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden mt-4 border-t border-gray-100 pt-4 space-y-3 font-medium text-gray-600">
              <Link to="/" className="block hover:text-electric-blue transition" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className="block hover:text-electric-blue transition" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/operations" className="block hover:text-electric-blue transition" onClick={() => setIsMenuOpen(false)}>Operations</Link>
              <Link to="/news" className="block hover:text-electric-blue transition" onClick={() => setIsMenuOpen(false)}>News</Link>
              <Link to="/contact" className="block hover:text-electric-blue transition" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </div>
          )}
        </div>
      </nav>

      {/* ========== BODY (MAIN CONTENT) ========== */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="relative text-white h-96 bg-cover bg-center overflow-hidden flex items-center justify-center"
          style={{
            backgroundImage: `url(${gambar2})`,
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-deep-navy/60"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-5xl font-extrabold mb-4">Berita & Updates</h1>
              <p className="text-xl text-blue-100">
                Informasi terkini tentang perkembangan operasional, pencapaian, dan inisiatif PT Tanjung Sauh Power.
              </p>
            </div>
          </div>
        </section>

        {/* News Grid Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article) => (
                <div 
                  key={article.id} 
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
                >
                  {/* Article Header with Icon */}
                  <div className="bg-gradient-to-r from-electric-blue to-blue-600 p-8 flex items-center justify-center h-32">
                    <span className="text-6xl">{article.icon}</span>
                  </div>

                  {/* Article Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block px-3 py-1 bg-blue-50 text-electric-blue text-xs font-bold uppercase rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500">{article.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-deep-navy mb-3 leading-tight flex-grow">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                      {article.excerpt}
                    </p>

                    <button className="text-electric-blue font-bold text-sm hover:text-blue-700 transition flex items-center gap-2">
                      Baca Selengkapnya →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        
      </main>

      {/* ========== FOOTER ========== */}
      <footer className="bg-deep-navy text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center">
                <img src={footerLogo} alt="Logo" className="h-10 w-auto" />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                PT Tanjung Sauh Power adalah penyedia solusi energi terintegrasi yang berkomitmen pada inovasi teknologi dan keberlanjutan lingkungan di Indonesia.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 border-l-4 border-electric-blue pl-3">Navigasi</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-electric-blue transition">Profil Perusahaan</a></li>
                <li><a href="#" className="hover:text-electric-blue transition">Unit Bisnis & Operasional</a></li>
                <li><a href="#" className="hover:text-electric-blue transition">Keberlanjutan (ESG)</a></li>
                <li><a href="#" className="hover:text-electric-blue transition">Karir</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 border-l-4 border-electric-blue pl-3">Kontak Kami</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>
                  <span className="block text-white font-medium">Head Office:</span>
                  Sudirman Central Business District, Jakarta.
                </li>
                <li>
                  <span className="block text-white font-medium">Site Office:</span>
                  Pulau Tanjung Sauh, Batam, Kepulauan Riau.
                </li>
                <li>
                  <span className="block text-white font-medium">Email:</span>
                  info@tanjungsauhpower.co.id
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 border-l-4 border-electric-blue pl-3">Sertifikasi</h3>
              <div className="flex flex-wrap gap-3">
                <div className="bg-white/10 px-3 py-2 rounded text-[10px] font-bold border border-white/20">ISO 9001:2015</div>
                <div className="bg-white/10 px-3 py-2 rounded text-[10px] font-bold border border-white/20">ISO 14001:2015</div>
                <div className="bg-white/10 px-3 py-2 rounded text-[10px] font-bold border border-white/20">ISO 45001:2018</div>
              </div>
              <p className="mt-4 text-[11px] text-gray-500 italic">
                Berkomitmen penuh pada standar K3 (HSE) Internasional.
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs gap-4">
            <p>© 2026 PT Tanjung Sauh Power. Seluruh Hak Cipta Dilindungi.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};


export default NewsPage;
