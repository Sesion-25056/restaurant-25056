export default function Menu() {
  const plates = [
    {
      name: "Trufa de Medianoche",
      price: "$42",
      description: "Tagliatelle artesanal en tinta de calamar, láminas de trufa negra del Périgord y espuma de parmesano añejado 24 meses.",
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1964&auto=format&fit=crop",
      badge: "Recomendación del Chef"
    },
    {
      name: "Wagyu Obsidiana",
      price: "$110",
      description: "Corte A5 Miyazaki Wagyu, ahumado con nogal, servido con reducción de moras silvestres y sal volcánica.",
      img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Esfera de Eclipse",
      price: "$28",
      description: "Cúpula de chocolate oscuro, detalles en pan de oro, centro de caramelo salado y humo de vainilla de Madagascar.",
      img: "https://images.unsplash.com/photo-1511381939415-e440c061aa01?q=80&w=1934&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-surface px-6" id="menu">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 lg:mb-24 gap-6">
          <div>
            <h2 className="text-primary text-xs uppercase tracking-[0.4em] font-bold mb-4">La Colección</h2>
            <h3 className="text-4xl lg:text-6xl font-headline font-bold">Platos de Autor</h3>
          </div>
          <button className="hidden md:flex text-on-surface/50 hover:text-primary transition-colors duration-300 items-center gap-4 group">
            <span className="text-sm tracking-widest uppercase">Ver Menú Completo</span>
            <span className="material-symbols-outlined text-3xl group-hover:translate-x-3 transition-transform duration-300">arrow_right_alt</span>
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {plates.map((plate, index) => (
            <div key={index} className="bg-surface-container-high rounded-sm overflow-hidden group shadow-lg hover:shadow-primary/5 transition-all duration-500">
              <div className="aspect-square overflow-hidden relative">
                <img alt={plate.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src={plate.img} />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="p-8 lg:p-10 border-t-2 border-transparent group-hover:border-primary transition-colors duration-500">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl lg:text-2xl font-headline font-bold">{plate.name}</h4>
                  <span className="text-primary font-bold text-lg">{plate.price}</span>
                </div>
                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed min-h-[80px]">{plate.description}</p>
                {plate.badge && (
                  <span className="inline-block text-[9px] uppercase tracking-widest font-black text-secondary-container border border-secondary-container/30 px-3 py-1.5 rounded-full">
                    {plate.badge}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}