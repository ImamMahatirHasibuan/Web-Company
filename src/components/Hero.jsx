const Hero = () => {
  return (
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
          {/* Ilustrasi Area Proyek */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800" 
              alt="Power Plant Project" 
              className="w-full h-[500px] object-cover"
            />
          </div>
          {/* Info Card Floating */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-l-4 border-electric-blue">
            <p className="text-3xl font-bold text-deep-navy">2x150 MW</p>
            <p className="text-sm text-gray-500 font-medium">Target Kapasitas Total</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;