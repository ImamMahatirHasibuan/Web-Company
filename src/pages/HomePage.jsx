import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asset/Logo-backeraser.png';
import footerLogo from '../../asset/Logo-Hitam.png';
import gambar1 from '../assets/Gambar1.jpg';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <span className="text-electric-blue font-bold tracking-widest uppercase text-sm">Energi Masa Depan</span>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-deep-navy mt-4 leading-tight">
                PT Tanjung Sauh <span className="text-electric-blue">Power</span>
              </h1>
              <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-lg">
                Menyediakan solusi energi berkelanjutan dengan kapasitas daya tinggi dan teknologi pembangkit listrik mutakhir untuk Indonesia.
              </p>
              <div className="mt-10 flex gap-4">
                <button className="bg-electric-blue text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
                  Jelajahi Operasional
                </button>
                <button className="border-2 border-electric-blue text-electric-blue px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition">
                  Tentang Kami
                </button>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src={gambar1}
                  alt="Power Plant Project"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-l-4 border-electric-blue">
                <p className="text-3xl font-bold text-deep-navy">2x150 MW</p>
                <p className="text-sm text-gray-500 font-medium">Target Kapasitas Total</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== SECTION: SEKILAS TENTANG TSP ========== */}
        <section id="about-overview" className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Kolom Kiri: Teks Deskripsi */}
              <div className="space-y-6">
                <div className="inline-block px-4 py-1 rounded-full bg-blue-50 border border-blue-100">
                  <span className="text-electric-blue font-bold uppercase tracking-widest text-xs">Profil Perusahaan</span>
                </div>
                <h2 className="text-4xl font-extrabold text-deep-navy leading-tight">
                  Membangun Infrastruktur <br /> 
                  <span className="text-electric-blue">Energi Berkelanjutan</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed text-justify">
                  PT Tanjung Sauh Power (TSP) merupakan entitas strategis yang berfokus pada pengembangan pembangkit listrik di wilayah Kepulauan Riau. Kami berdedikasi untuk menyediakan pasokan energi yang stabil guna mendukung pertumbuhan industri dan ekonomi nasional melalui pemanfaatan teknologi mutakhir yang ramah lingkungan.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed text-justify">
                  Sebagai bagian dari komitmen kami terhadap **ESG (Environmental, Social, and Governance)**, setiap aspek operasional kami dirancang untuk memprioritaskan keselamatan kerja dan pelestarian ekosistem di sekitar wilayah operasional Pulau Tanjung Sauh.
                </p>
              </div>

              {/* Kolom Kanan: Dua Gambar Representatif */}
              <div className="flex flex-col gap-6">
                {/* Gambar 1: Teknologi/Operasional */}
                <div className="relative group rounded-3xl overflow-hidden shadow-lg h-64">
                  <img 
                    src={gambar1}
                    alt="Teknologi Pembangkit" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-transparent to-transparent flex flex-col justify-end p-6">
                    <h4 className="text-white font-bold text-xl">Inovasi & Teknologi</h4>
                    <p className="text-blue-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Penerapan teknologi supercritical untuk efisiensi energi maksimal.
                    </p>
                  </div>
                </div>

                {/* Gambar 2: Keberlanjutan/Komunitas */}
                <div className="relative group rounded-3xl overflow-hidden shadow-lg h-64">
                  <img 
                    src={gambar1}
                    alt="Sinergi Masyarakat" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-transparent to-transparent flex flex-col justify-end p-6">
                    <h4 className="text-white font-bold text-xl">Keberlanjutan & Komunitas</h4>
                    <p className="text-blue-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Berkomitmen tumbuh bersama masyarakat lokal dan menjaga ekosistem.
                    </p>
                  </div>
                </div>
              </div>

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

export default HomePage;
