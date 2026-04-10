export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img alt="Alta Cocina" className="w-full h-full object-cover scale-105" src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop" />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      <div className="relative z-10 text-center px-6 max-w-5xl mt-16">
        <span className="block font-headline italic text-primary/80 text-3xl lg:text-5xl mb-4 opacity-50 select-none">Exclusividad</span>
        <h1 className="font-headline text-5xl md:text-8xl font-bold text-white tracking-tight mb-8 leading-[1.1] gold-glow">
          El Nocturno Culinario
        </h1>
        <p className="font-headline italic text-xl md:text-3xl text-primary/90 mb-12 max-w-2xl mx-auto">
          Experimenta el arte de la alta cocina a medianoche
        </p>
        <div className="flex flex-col md:flex-row gap-5 justify-center">
          <button className="bg-secondary-container text-white px-10 py-4 rounded-sm text-xs font-bold tracking-[0.2em] uppercase hover:brightness-125 transition-all duration-300 shadow-xl shadow-secondary-container/20">
            Reserva Ahora
          </button>
          <button className="border border-outline-variant/50 backdrop-blur-md text-on-surface px-10 py-4 rounded-sm text-xs font-bold tracking-[0.2em] uppercase hover:bg-white/10 hover:border-primary/50 transition-all duration-300">
            Explorar Menú
          </button>
        </div>
      </div>
    </header>
  );
}