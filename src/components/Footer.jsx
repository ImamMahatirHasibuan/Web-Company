import logo from '../../asset/Logo-Hitam.png';

const Footer = () => {
  return (
    <footer className="bg-deep-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Kolom 1: Branding & Deskripsi */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              PT Tanjung Sauh Power adalah penyedia solusi energi terintegrasi yang berkomitmen pada inovasi teknologi dan keberlanjutan lingkungan di Indonesia.
            </p>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-electric-blue pl-3">Navigasi</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-electric-blue transition">Profil Perusahaan</a></li>
              <li><a href="#" className="hover:text-electric-blue transition">Unit Bisnis & Operasional</a></li>
              <li><a href="#" className="hover:text-electric-blue transition">Keberlanjutan (ESG)</a></li>
              <li><a href="#" className="hover:text-electric-blue transition">Karir</a></li>
            </ul>
          </div>

          {/* Kolom 3: Kontak & Alamat */}
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

          {/* Kolom 4: Newsletter/Sertifikasi */}
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

        {/* Garis Pembatas */}
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
  );
};

export default Footer;
