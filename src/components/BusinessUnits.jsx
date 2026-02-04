const BusinessUnits = () => {
  const units = [
    { title: "Coal-Fired Power", cap: "600 MW", tech: "Supercritical Boiler" },
    { title: "Renewable Energy", cap: "200 MW", tech: "Solar PV Farm" },
    { title: "Smart Grid System", cap: "Automation", tech: "IoT Integration" }
  ];

  return (
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
  );
};

export default BusinessUnits;