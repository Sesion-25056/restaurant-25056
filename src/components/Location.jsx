export default function Location() {
  return (
    <section className="py-24 lg:py-32 bg-surface-container-low px-6" id="location">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-16">
          <div>
            <h2 className="text-primary text-xs uppercase tracking-[0.4em] font-bold mb-6">Visítanos</h2>
            <h3 className="text-4xl lg:text-6xl font-headline font-bold mb-8">Donde Comienza la Noche</h3>
          </div>
          <div className="space-y-10">
            <div className="flex gap-8 group">
              <div className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Dirección</h4>
                <p className="text-on-surface-variant leading-relaxed">128 Avenida Medianoche, Distrito Exclusivo<br />Lima, Perú</p>
              </div>
            </div>
            <div className="flex gap-8 group">
              <div className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                <span className="material-symbols-outlined text-primary text-2xl">call</span>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Reservas</h4>
                <p className="text-on-surface-variant leading-relaxed">+51 987 654 321 (WhatsApp Disponible)</p>
              </div>
            </div>
            <div className="flex gap-8 group">
              <div className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                <span className="material-symbols-outlined text-primary text-2xl">schedule</span>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Horario de Atención</h4>
                <p className="text-on-surface-variant leading-relaxed">Mar – Dom: 7:00 PM – 2:00 AM<br />Lunes: Cerrado</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative rounded-sm overflow-hidden aspect-[4/3] group shadow-2xl">
          <img alt="Mapa de Ubicación" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-1000" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" />
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-primary rounded-full animate-ping opacity-20"></div>
            <div className="absolute w-4 h-4 bg-primary rounded-full shadow-[0_0_30px_rgba(242,202,80,1)]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}