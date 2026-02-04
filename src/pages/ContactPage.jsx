import { Link } from 'react-router-dom';
import logo from '../../asset/Logo-backeraser.png';
import footerLogo from '../../asset/Logo-Hitam.png';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans antialiased text-gray-900">
      {/* ========== HEAD (NAVBAR) ========== */}
      <nav className="bg-white py-6 border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 flex justify-between items-center">
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
        </div>
      </nav>

      {/* ========== BODY (MAIN CONTENT) ========== */}
      <main className="flex-grow">
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">
              
              {/* Sisi Kiri: Get In Touch With Us */}
              <div className="md:w-2/5 bg-deep-navy p-12 text-white">
                <h3 className="text-3xl font-bold mb-8">Get In Touch With Us</h3>
                <p className="text-blue-100/70 mb-12">Kami siap melayani kebutuhan informasi terkait operasional pembangkit dan kerjasama korporasi.</p>

                <div className="space-y-10">
                  <div className="flex items-start gap-5">
                    <div className="bg-white/10 p-3 rounded-xl text-xl">📞</div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-blue-300 font-bold mb-1">Office Phone Number</p>
                      <p className="text-lg font-semibold">+62 778 371000</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="bg-white/10 p-3 rounded-xl text-xl">✉️</div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-blue-300 font-bold mb-1">Mail for Information</p>
                      <p className="text-sm font-medium opacity-90">info@tanjungsauhpower.co.id</p>
                      <p className="text-sm font-medium opacity-90">info@panbil.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="bg-white/10 p-3 rounded-xl text-xl">📍</div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-blue-300 font-bold mb-1">Our Location</p>
                      <p className="text-sm leading-relaxed opacity-90">Pulau Tanjung Sauh, Batam, Kepulauan Riau, Indonesia.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sisi Kanan: Form */}
              <div className="md:w-3/5 p-12 bg-white">
                <h4 className="text-2xl font-bold text-deep-navy mb-8">Kirim Pesan</h4>
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase text-gray-400">Nama Lengkap</label>
                    <input type="text" className="border-b-2 border-gray-100 focus:border-electric-blue outline-none py-2 transition text-deep-navy font-medium" placeholder="Imam Mahatir..." />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase text-gray-400">Email Perusahaan</label>
                    <input type="email" className="border-b-2 border-gray-100 focus:border-electric-blue outline-none py-2 transition text-deep-navy font-medium" placeholder="email@perusahaan.com" />
                  </div>
                  <div className="flex flex-col gap-2 sm:col-span-2">
                    <label className="text-xs font-bold uppercase text-gray-400">Pesan</label>
                    <textarea rows="4" className="border-b-2 border-gray-100 focus:border-electric-blue outline-none py-2 transition text-deep-navy font-medium resize-none" placeholder="Tuliskan detail pertanyaan Anda..."></textarea>
                  </div>
                  <button className="sm:col-span-2 bg-electric-blue text-white font-bold py-4 rounded-2xl hover:bg-blue-700 transition shadow-xl shadow-blue-100 mt-4 tracking-wide">
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ========== MAP SECTION ========== */}
        <section className="w-full h-[500px] bg-slate-100 relative grayscale hover:grayscale-0 transition-all duration-700">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15956.126435343467!2d104.1627!3d1.0426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d986e08171756b%3A0xda82a940ea5cebb!2sTanjung%20Sauh!5e0!3m2!1sid!2sid!4v1707000000000!5m2!1sid!2sid" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
          <div className="absolute bottom-8 left-8 bg-white p-6 rounded-2xl shadow-2xl border-l-8 border-electric-blue max-w-sm hidden lg:block">
            <h5 className="font-bold text-deep-navy mb-2">PT Tanjung Sauh Power Site</h5>
            <p className="text-xs text-gray-500 leading-relaxed">Akses utama melalui jalur laut dari Pelabuhan Telaga Punggur, Batam.</p>
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
                <li><Link to="/about" className="hover:text-electric-blue transition">Profil Perusahaan</Link></li>
                <li><Link to="/operations" className="hover:text-electric-blue transition">Unit Bisnis & Operasional</Link></li>
                <li><Link to="/news" className="hover:text-electric-blue transition">Berita & Updates</Link></li>
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
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
