export default function Cta() {
  return (
    <section className="py-32 lg:py-48 bg-background px-6 relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_60%)] from-primary/10"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-7xl font-headline font-bold mb-10 leading-tight">Reserva tu Mesa Hoy</h2>
        <p className="text-on-surface-variant text-lg lg:text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
          Espacios limitados disponibles. Asegura tu lugar en la mesa donde la magia culinaria se despliega bajo el manto de la noche.
        </p>
        <button className="bg-secondary-container text-white px-14 py-6 rounded-sm text-sm font-bold tracking-[0.3em] uppercase hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(172,1,44,0.4)] transition-all duration-300">
          Reservar Experiencia
        </button>
      </div>
    </section>
  );
}