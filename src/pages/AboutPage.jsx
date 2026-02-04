import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asset/Logo-backeraser.png';
import footerLogo from '../../asset/Logo-Hitam.png';
import panbilLogo from '../assets/panbil.webp';
import dongfangLogo from '../assets/dongfang.png';
import kekLogo from '../assets/kek-tanjung-sauh.jpg';

const AboutPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const management = [
    { name: "Nama Direktur Utama", role: "President Director", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" },
    { name: "Nama Direktur Operasional", role: "Operations Director", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" },
    { name: "Nama Direktur Keuangan", role: "Finance Director", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" },
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
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="space-y-6">
                <h2 className="text-electric-blue font-bold uppercase tracking-widest text-sm text-blue-600">Tentang Perusahaan</h2>
                <h3 className="text-4xl font-extrabold text-deep-navy leading-tight text-blue-900">
                  Pilar Energi untuk <br/> Kemajuan Bangsa
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg text-justify">
                  PT Tanjung Sauh Power adalah perusahaan pembangkit listrik strategis yang berfokus pada penyediaan daya yang handal, aman, dan berkelanjutan. Berlokasi di wilayah pertumbuhan ekonomi Kepulauan Riau, kami berkomitmen mendukung program pemerintah dalam memperkuat infrastruktur kelistrikan nasional melalui inovasi teknologi dan manajemen operasional yang unggul.
                </p>
              </div>
              <div className="bg-slate-100 h-64 lg:h-96 rounded-3xl overflow-hidden shadow-inner relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium italic p-8 text-center">
                  [Visual: Foto Kantor Pusat atau Ilustrasi Infrastruktur Power Plant]
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-24">
              <div className="bg-blue-600 p-10 rounded-3xl text-white shadow-xl shadow-blue-200">
                <h4 className="text-2xl font-bold mb-4 italic">Visi</h4>
                <p className="text-blue-50 leading-relaxed text-lg">
                  "Menjadi perusahaan penyedia energi terdepan di Indonesia yang mengedepankan efisiensi teknologi dan kelestarian lingkungan demi kesejahteraan masyarakat."
                </p>
              </div>
              <div className="bg-white p-10 rounded-3xl border-2 border-slate-100 shadow-sm">
                <h4 className="text-2xl font-bold text-deep-navy mb-4 italic text-blue-900">Misi</h4>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex gap-3">
                    <span className="text-electric-blue font-bold text-blue-600">01.</span>
                    Membangun dan mengoperasikan pembangkit listrik dengan standar keamanan internasional (HSE).
                  </li>
                  <li className="flex gap-3">
                    <span className="text-electric-blue font-bold text-blue-600">02.</span>
                    Menerapkan teknologi ramah lingkungan untuk meminimalisir jejak karbon operasional.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-electric-blue font-bold text-blue-600">03.</span>
                    Mendorong pertumbuhan ekonomi lokal melalui pemberdayaan tenaga kerja dan sinergi industri.
                  </li>
                </ul>
              </div>
            </div>

            {/* ========== SECTION: STATUS KEK ========== */}
            <div className="mb-24 px-6 py-12 bg-blue-50 rounded-[2.5rem] border border-blue-100 relative overflow-hidden">
              {/* Aksen Dekoratif */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-electric-blue/5 rounded-full -mr-20 -mt-20"></div>
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
                {/* Kolom Gambar KEK */}
                <div className="lg:w-1/3 flex justify-center">
                  <img 
                    src={kekLogo} 
                    alt="Kawasan Ekonomi Khusus Tanjung Sauh" 
                    className="w-full h-auto max-h-100 object-contain"
                  />
                </div>
                
                {/* Kolom Deskripsi */}
                <div className="lg:w-2/3 space-y-4 text-center lg:text-left">
                  <div className="inline-block px-4 py-1 rounded-full bg-white text-electric-blue font-bold text-xs uppercase tracking-widest border border-blue-200 mb-2">
                    Official Status
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    PT Tanjung Sauh Power beroperasi di dalam **Kawasan Ekonomi Khusus (KEK) Tanjung Sauh**. Penetapan ini menjadikan area operasional kami sebagai pusat pertumbuhan ekonomi baru di Batam yang didukung oleh berbagai kemudahan perizinan, fasilitas fiskal, dan infrastruktur penunjang yang modern guna mempercepat pembangunan industri energi nasional.
                  </p>
                  
                  {/* Badge Fasilitas */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
                    <span className="bg-white px-4 py-2 rounded-xl text-[11px] font-bold text-deep-navy border border-blue-100 shadow-sm flex items-center gap-2">
                      <span className="text-electric-blue">✔</span> Fasilitas Fiskal
                    </span>
                    <span className="bg-white px-4 py-2 rounded-xl text-[11px] font-bold text-deep-navy border border-blue-100 shadow-sm flex items-center gap-2">
                      <span className="text-electric-blue">✔</span> Kemudahan Perizinan
                    </span>
                    <span className="bg-white px-4 py-2 rounded-xl text-[11px] font-bold text-deep-navy border border-blue-100 shadow-sm flex items-center gap-2">
                      <span className="text-electric-blue">✔</span> Proyek Strategis Nasional
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-24 mb-24">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-deep-navy mb-12 text-blue-900">Jajaran Manajemen</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
                  {management.map((person, index) => (
                    <div key={index} className="group">
                      <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg mb-6 group-hover:border-electric-blue transition-all duration-300">
                        <img src={person.image} alt={person.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0" />
                      </div>
                      <h4 className="text-xl font-bold text-deep-navy text-blue-900">{person.name}</h4>
                      <p className="text-electric-blue font-medium text-sm text-blue-600">{person.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ========== SECTION: STRATEGIC PARTNERS ========== */}
            <div className="mt-24 mb-24">
              <div className="text-center mb-16">
                <h2 className="text-electric-blue font-bold uppercase tracking-widest text-sm mb-2">Kolaborasi Strategis</h2>
                <h3 className="text-3xl font-bold text-deep-navy">Mitra Terpercaya Kami</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Partner 1: Panbil */}
                <div className="flex flex-col items-center p-8 bg-white rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all duration-500 group">
                  <div className="h-24 w-full mb-6 flex items-center justify-center p-4">
                    <img src={panbilLogo} alt="Panbil Group" className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition duration-500" />
                  </div>
                  <h5 className="text-lg font-bold text-deep-navy mb-3">Panbil Group</h5>
                  <p className="text-gray-500 text-center text-xs leading-relaxed">
                    Mitra pengembangan kawasan industri strategis di Batam.
                  </p>
                </div>

                {/* Partner 2: Dongfang Electric */}
                <div className="flex flex-col items-center p-8 bg-white rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all duration-500 group">
                  <div className="h-24 w-full mb-6 flex items-center justify-center p-4">
                    <img src={dongfangLogo} alt="Dongfang Electric" className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition duration-500" />
                  </div>
                  <h5 className="text-lg font-bold text-deep-navy mb-3 text-center">Dongfang Electric Corp.</h5>
                  <p className="text-gray-500 text-center text-xs leading-relaxed">
                    Penyedia teknologi turbin dan boiler supercritical kelas dunia.
                  </p>
                </div>

                {/* Partner 3: PT. Helios */}
                <div className="flex flex-col items-center p-8 bg-white rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all duration-500 group">
                  <div className="h-24 w-full mb-6 flex items-center justify-center p-4">
                    {/* Jika belum ada gambarnya, bisa pakai placeholder text dulu */}
                    <div className="text-2xl font-black text-slate-300 group-hover:text-orange-500 transition-colors tracking-tighter">
                      HELIOS<span className="text-orange-500 group-hover:text-slate-800">.</span>
                    </div>
                  </div>
                  <h5 className="text-lg font-bold text-deep-navy mb-3">PT. Helios</h5>
                  <p className="text-gray-500 text-center text-xs leading-relaxed">
                    Mitra strategis dalam implementasi solusi energi terbarukan dan inovasi kelistrikan.
                  </p>
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

export default AboutPage;
