import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asset/Logo-backeraser.png';
import footerLogo from '../../asset/Logo-Hitam.png';

const ContactPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col font-sans antialiased text-gray-900 bg-white">
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

      <main className="flex-grow">
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              
              {/* Card Utama: Form & Contact Info */}
              <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row mb-12 border border-gray-100">
                {/* Sisi Kiri: Info Kontak */}
                <div className="md:w-2/5 bg-deep-navy p-10 text-white flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-bold mb-6">Get In Touch With Us</h3>
                    <div className="space-y-8">
                      <div className="flex items-start gap-4">
                        <span className="text-2xl">📞</span>
                        <div>
                          <p className="text-xs uppercase tracking-widest text-blue-300 font-bold mb-1">Office Phone</p>
                          <p className="text-lg font-semibold">+62 778 371000</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <span className="text-2xl">✉️</span>
                        <div>
                          <p className="text-xs uppercase tracking-widest text-blue-300 font-bold mb-1">Mail Info</p>
                          <p className="text-sm opacity-90">info@tanjungsauhpower.co.id</p>
                          <p className="text-sm opacity-90">info@panbil.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-xs text-blue-200 italic leading-relaxed">
                      "Berkomitmen memberikan solusi energi berkelanjutan untuk masa depan Indonesia."
                    </p>
                  </div>
                </div>

                {/* Sisi Kanan: Form */}
                <div className="md:w-3/5 p-10 bg-white">
                  <h4 className="text-2xl font-bold text-deep-navy mb-8 text-center md:text-left">Kirim Pesan Resmi</h4>
                  <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-gray-400 uppercase">Nama Lengkap</label>
                      <input type="text" className="border-b border-gray-200 focus:border-electric-blue outline-none py-2 transition" placeholder="Imam Mahatir..." />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-gray-400 uppercase">Email</label>
                      <input type="email" className="border-b border-gray-200 focus:border-electric-blue outline-none py-2 transition" placeholder="email@perusahaan.com" />
                    </div>
                    <div className="flex flex-col gap-2 sm:col-span-2">
                      <label className="text-xs font-bold text-gray-400 uppercase">Pesan</label>
                      <textarea rows="3" className="border-b border-gray-200 focus:border-electric-blue outline-none py-2 transition resize-none" placeholder="Tuliskan pesan Anda..."></textarea>
                    </div>
                    <button className="sm:col-span-2 bg-electric-blue text-white font-bold py-4 rounded-xl hover:shadow-lg transition-all duration-300">
                      KIRIM SEKARANG
                    </button>
                  </form>
                </div>
              </div>

              {/* Lower Section: Maps & Double Address */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
                
                {/* Map 1: Corporate Office (Panbil Plaza) */}
                <div className="space-y-5">
                  <div className="h-[350px] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white relative group">
                    <iframe
                      title="Corporate Office - Panbil Plaza"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.1032532729!2d104.0484766108139!3d1.083321562283437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98be2a588a4a7%3A0xabf44d1b3ee995a1!2sPanbil%20Plaza!5e0!3m2!1sid!2sid!4v1708800000000!5m2!1sid!2sid"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div className="absolute top-4 right-4 bg-deep-navy text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
                      CORPORATE OFFICE
                    </div>
                  </div>
                  <div className="px-2">
                    <h5 className="text-electric-blue font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[10px]">01</span>
                      Batam Corporate Office
                    </h5>
                    <p className="text-gray-600 text-sm leading-relaxed font-medium">
                      Panbil Plaza, Jl. Ahmad Yani, Muka Kuning, <br />
                      Kec. Sei Beduk, Kota Batam, Kepulauan Riau 29433
                    </p>
                  </div>
                </div>

                {/* Map 2: Site Office (Pulau Tanjung Sauh) */}
                <div className="space-y-5">
                  <div className="h-[350px] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white relative group">
                    <iframe
                      title="Site Office - Pulau Tanjung Sauh"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15956.123456789!2d104.162000!3d1.118000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98fc07865715d%3A0x34d86920e85c7478!2sPulau%20Tanjungsa!5e0!3m2!1sid!2sid!4v1708800000001!5m2!1sid!2sid"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div className="absolute top-4 right-4 bg-electric-blue text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
                      SITE OFFICE
                    </div>
                  </div>
                  <div className="px-2">
                    <h5 className="text-electric-blue font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[10px]">02</span>
                      Tanjung Sauh Site Office
                    </h5>
                    <p className="text-gray-600 text-sm leading-relaxed font-medium">
                      Kawasan Ekonomi Khusus (KEK) Tanjung Sauh, <br />
                      Pulau Tanjung Sauh, Batam, Kepulauan Riau
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
              <img src={footerLogo} alt="Logo" className="h-10 w-auto" />
              <p className="text-gray-400 text-sm">PT Tanjung Sauh Power berkomitmen pada inovasi teknologi energi di Indonesia.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 border-l-4 border-electric-blue pl-3">Navigasi</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><Link to="/about" className="hover:text-electric-blue transition">Profil Perusahaan</Link></li>
                <li><Link to="/operations" className="hover:text-electric-blue transition">Unit Bisnis</Link></li>
                <li><Link to="/news" className="hover:text-electric-blue transition">Berita & Updates</Link></li>
                <li><a href="#" className="hover:text-electric-blue transition">Karir</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 border-l-4 border-electric-blue pl-3">Kontak</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><span className="block text-white font-medium">Head Office:</span>Jakarta</li>
                <li><span className="block text-white font-medium">Site Office:</span>Batam, Kepulauan Riau</li>
                <li><span className="block text-white font-medium">Email:</span>info@tanjungsauhpower.co.id</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 border-l-4 border-electric-blue pl-3">Sertifikasi</h3>
              <div className="flex flex-wrap gap-2">
                <div className="bg-white/10 px-2 py-1 rounded text-[9px] font-bold border border-white/20">ISO 9001:2015</div>
                <div className="bg-white/10 px-2 py-1 rounded text-[9px] font-bold border border-white/20">ISO 14001:2015</div>
                <div className="bg-white/10 px-2 py-1 rounded text-[9px] font-bold border border-white/20">ISO 45001:2018</div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-xs">
            <p>© 2026 PT Tanjung Sauh Power. Seluruh Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
