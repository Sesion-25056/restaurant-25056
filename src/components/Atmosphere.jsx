export default function Atmosphere() {
  return (
    <section className="py-24 lg:py-32 bg-surface-container-low px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-primary text-xs uppercase tracking-[0.4em] font-bold mb-4">El Ambiente</h2>
          <h3 className="text-4xl lg:text-6xl font-headline font-bold">Sinfonía Visual</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[700px]">
          <div className="md:col-span-2 md:row-span-2 overflow-hidden rounded-sm h-[400px] md:h-full group">
            <img alt="Interior del Restaurante" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" />
          </div>
          <div className="overflow-hidden rounded-sm h-[300px] md:h-full group">
            <img alt="Vino" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" />
          </div>
          <div className="overflow-hidden rounded-sm h-[300px] md:h-full group">
            <img alt="Mesa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop" />
          </div>
          <div className="md:col-span-2 overflow-hidden rounded-sm h-[300px] md:h-full group">
            <img alt="Barman" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=1925&auto=format&fit=crop" />
          </div>
        </div>
      </div>
    </section>
  );
}