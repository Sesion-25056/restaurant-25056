export default function About() {
  return (
    <section className="py-24 lg:py-32 bg-surface-container-low px-6" id="about">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="aspect-[4/5] bg-surface-container-high overflow-hidden rounded-sm shadow-2xl">
            <img alt="Chef Ejecutivo" className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1968&auto=format&fit=crop" />
          </div>
          <div className="absolute -bottom-6 -right-6 lg:bottom-10 lg:-right-10 bg-primary p-6 lg:p-8 rounded-sm shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500">
            <p className="font-headline text-on-primary text-4xl lg:text-5xl italic font-bold">15+</p>
            <p className="text-[10px] uppercase tracking-widest font-black text-on-primary/80">Años de Maestría</p>
          </div>
        </div>
        <div className="lg:pl-12">
          <h2 className="text-primary text-xs uppercase tracking-[0.4em] font-bold mb-6">Nuestro Legado</h2>
          <h3 className="text-4xl lg:text-6xl font-headline font-bold mb-8 leading-tight">Forjado en las Sombras de la Perfección</h3>
          <div className="space-y-6 text-on-surface-variant text-base lg:text-lg leading-relaxed max-w-xl">
            <p>El Nocturno Culinario nació de la visión de redefinir la gastronomía nocturna. Nuestra cocina opera bajo la filosofía de que los sabores evolucionan cuando el mundo se silencia.</p>
            <p>Nuestro Chef Ejecutivo cura cada plato como un viaje sensorial, combinando técnicas ancestrales con presentaciones vanguardistas para honrar la intimidad de la medianoche.</p>
          </div>
          <a className="inline-block mt-10 border-b-2 border-primary text-primary text-[10px] uppercase font-bold tracking-[0.3em] pb-2 hover:tracking-[0.5em] transition-all duration-300" href="#">Nuestra Historia Completa</a>
        </div>
      </div>
    </section>
  );
}