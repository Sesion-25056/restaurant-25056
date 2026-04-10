export default function Footer() {
  return (
    <footer className="bg-black border-t border-outline-variant/10 py-20 px-6 text-center">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-2xl font-headline italic text-primary">El Nocturno Culinario</div>
        <nav className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          <a className="text-[10px] uppercase font-bold tracking-[0.2em] text-on-surface/40 hover:text-primary transition-colors duration-300" href="#">Boletín</a>
          <a className="text-[10px] uppercase font-bold tracking-[0.2em] text-on-surface/40 hover:text-primary transition-colors duration-300" href="#">Privacidad</a>
          <a className="text-[10px] uppercase font-bold tracking-[0.2em] text-on-surface/40 hover:text-primary transition-colors duration-300" href="#">Contacto</a>
        </nav>
        <div className="flex justify-center gap-10">
          <a className="text-on-surface/30 hover:text-primary transition-colors duration-300 transform hover:scale-110" href="#"><span className="material-symbols-outlined">share</span></a>
          <a className="text-on-surface/30 hover:text-primary transition-colors duration-300 transform hover:scale-110" href="#"><span className="material-symbols-outlined">restaurant_menu</span></a>
          <a className="text-on-surface/30 hover:text-primary transition-colors duration-300 transform hover:scale-110" href="#"><span className="material-symbols-outlined">wine_bar</span></a>
        </div>
        <p className="text-[9px] uppercase tracking-[0.3em] text-on-surface/20">© 2026 El Nocturno Culinario. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}