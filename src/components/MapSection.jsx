// Import gambar dari folder assets
import PetaTanjungSauh from '../assets/Peta.webp';

const MapSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Sisi Kiri: Penjelasan */}
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

            {/* List Detail Operasional */}
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

          {/* Sisi Kanan: Visual Map */}
          <div className="lg:w-1/2 relative">
            {/* Dekorasi Bingkai */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-electric-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-deep-navy/5 rounded-full blur-3xl"></div>
            
            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(46,91,255,0.1)] border-8 border-white group">
              {/* Gunakan gambar yang sudah diimport */}
              <img 
                src={PetaTanjungSauh} 
                alt="Peta Lokasi Pulau Tanjung Sauh" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Keterangan di Atas Gambar */}
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
  );
};

export default MapSection;
