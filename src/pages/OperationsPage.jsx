import { Link } from 'react-router-dom';
import logo from '../../asset/Logo-backeraser.png';
import footerLogo from '../../asset/Logo-Hitam.png';
import PetaTanjungSauh from '../assets/Peta.webp';

const OperationsPage = () => {
  const units = [
    { title: "Coal-Fired Power", cap: "600 MW", tech: "Supercritical Boiler" },
    { title: "Renewable Energy", cap: "200 MW", tech: "Solar PV Farm" },
    { title: "Smart Grid System", cap: "Automation", tech: "IoT Integration" }
  ];

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
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-deep-navy">Unit Bisnis & Teknologi</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {units.map((unit, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border-t-4 border-electric-blue">
                  <h3 className="text-xl font-bold mb-2">{unit.title}</h3>
                  <p className="text-electric-blue font-semibold text-2xl mb-4">{unit.cap}</p>
                  <p className="text-gray-500 text-sm">Teknologi: {unit.tech}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 space-y-8">
                <div>
                  <h2 className="text-electric-blue font-bold tracking-[0.2em] uppercase text-sm mb-3">
                    Geographic Location
                  </h2>
                  <h3 className="text-4xl lg:text-5xl font-extrabold text-deep-navy leading-tight">
                    Lokasi Proyek <br/> Strategis Batam
                  </h3>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed">
                  Pulau Tanjung Sauh terletak di antara Pulau Batam dan Pulau Bintan. Posisi ini menjadikannya **Hub Energi Terintegrasi** yang krusial untuk interkoneksi listrik di wilayah Kepulauan Riau.
                </p>

                <div className="grid gap-4">
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-blue-50/50 border border-blue-100 shadow-sm transition-all hover:shadow-md">
                    <div className="text-2xl">🌍</div>
                    <div>
                      <h4 className="font-bold text-deep-navy">Koordinat Geografis</h4>
                      <p className="text-gray-500 text-sm">Terletak di 1.0426° LU dan 104.1727° BT.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-blue-50/50 border border-blue-100 shadow-sm transition-all hover:shadow-md">
                    <div className="text-2xl">🚢</div>
                    <div>
                      <h4 className="font-bold text-deep-navy">Logistik Maritim</h4>
                      <p className="text-gray-500 text-sm">Aksesibilitas kapal tongkang dan logistik berat melalui jalur laut internasional.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-electric-blue/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-deep-navy/5 rounded-full blur-3xl"></div>

                <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(46,91,255,0.1)] border-8 border-white group">
                  <img
                    src={PetaTanjungSauh}
                    alt="Peta Lokasi Pulau Tanjung Sauh"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <p className="text-white text-sm font-medium">
                      Visualisasi Satelit: Pulau Tanjung Sauh, Batam, Kepulauan Riau.
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

export default OperationsPage;
