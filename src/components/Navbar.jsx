export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex justify-between items-center">
        <div className="text-xl lg:text-2xl font-headline italic text-primary tracking-tight">
          El Nocturno Culinario
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-xs uppercase tracking-widest font-bold text-primary border-b-2 border-primary pb-1" href="#">Inicio</a>
          <a className="text-xs uppercase tracking-widest font-bold text-on-surface/70 hover:text-primary transition-colors duration-300" href="#menu">Menú</a>
          <a className="text-xs uppercase tracking-widest font-bold text-on-surface/70 hover:text-primary transition-colors duration-300" href="#about">Nosotros</a>
          <a className="text-xs uppercase tracking-widest font-bold text-on-surface/70 hover:text-primary transition-colors duration-300" href="#location">Ubicación</a>
        </div>
        <button className="bg-primary text-on-primary px-6 py-2 rounded-sm text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-primary-fixed-dim transition-all duration-300 hover:shadow-[0_0_15px_rgba(242,202,80,0.3)]">
          Reservar
        </button>
      </div>
    </nav>
  );
}