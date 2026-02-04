const About = () => {
  const management = [
    { name: "Nama Direktur Utama", role: "President Director", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" },
    { name: "Nama Direktur Operasional", role: "Operations Director", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" },
    { name: "Nama Direktur Keuangan", role: "Finance Director", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" },
  ];

  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-6">
        
        {/* Bagian Profil Perusahaan */}
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
             {/* Ganti dengan: <img src={officeImage} className="w-full h-full object-cover" /> */}
          </div>
        </div>

        {/* Bagian Visi & Misi */}
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

        {/* Bagian Petinggi / Management */}
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
    </section>
  );
};

export default About;
