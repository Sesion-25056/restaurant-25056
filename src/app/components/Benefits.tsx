import { Truck, Tag, Shield, Clock } from 'lucide-react';

const benefits = [
  {
    icon: Truck,
    title: 'Delivery Rápido',
    description: 'Entrega en 30 minutos o gratis',
  },
  {
    icon: Tag,
    title: 'Promociones Diarias',
    description: 'Nuevas ofertas cada día',
  },
  {
    icon: Shield,
    title: 'Pago Seguro',
    description: 'Protección garantizada',
  },
  {
    icon: Clock,
    title: 'Atención 24/7',
    description: 'Siempre disponibles para ti',
  },
];

export function Benefits() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;

          return (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-border hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
