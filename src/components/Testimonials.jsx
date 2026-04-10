export default function Testimonials() {
  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
    ));
  };

  return (
    <section className="py-24 lg:py-32 bg-surface px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div className="bg-surface-container-high p-10 lg:p-14 rounded-sm border-l-2 border-primary/20 hover:border-primary transition-colors duration-300 shadow-xl">
            <div className="flex text-primary mb-8 gap-1">{renderStars()}</div>
            <p className="text-on-surface italic text-lg leading-relaxed mb-10">"La experiencia gastronómica más inmersiva que he tenido en años. La iluminación y el wagyu fueron absolutamente divinos."</p>
            <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-primary">— Elena Moretti</div>
          </div>
          
          <div className="bg-surface-container-high p-10 lg:p-14 rounded-sm border-t-2 border-primary shadow-xl transform md:-translate-y-4">
            <div className="flex text-primary mb-8 gap-1">{renderStars()}</div>
            <p className="text-on-surface italic text-lg leading-relaxed mb-10">"La atención al detalle es inigualable. Se siente como degustar arte. Verdaderamente un nocturno para el alma."</p>
            <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-primary">— Diego Villanueva</div>
          </div>
          
          <div className="bg-surface-container-high p-10 lg:p-14 rounded-sm border-r-2 border-primary/20 hover:border-primary transition-colors duration-300 shadow-xl">
            <div className="flex text-primary mb-8 gap-1">{renderStars()}</div>
            <p className="text-on-surface italic text-lg leading-relaxed mb-10">"El maridaje de vinos es quirúrgico en su precisión. Una joya oculta que necesita ser experimentada para creerse."</p>
            <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-primary">— Camila Salazar</div>
          </div>
        </div>
      </div>
    </section>
  );
}