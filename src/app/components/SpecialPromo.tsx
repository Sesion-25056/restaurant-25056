import { Clock, ShoppingBag } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function SpecialPromo() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl overflow-hidden shadow-2xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="p-8 md:p-12 space-y-6 text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">Solo por hoy</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Combo Familiar de Fin de Semana
            </h2>

            <p className="text-white/90 text-lg">
              2 Pizzas grandes + 12 alitas + 2 litros de refresco + papas fritas. Perfecto para compartir.
            </p>

            <div className="flex items-baseline gap-3">
              <span className="text-xl line-through opacity-75">$89.99</span>
              <span className="text-5xl font-bold">$59.99</span>
              <span className="text-xl opacity-90">USD</span>
            </div>

            <div className="inline-flex items-center gap-2 px-6 py-2 bg-destructive text-destructive-foreground rounded-full font-bold">
              ¡AHORRA 33%!
            </div>

            <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-full hover:bg-gray-50 transition-all hover:scale-105 shadow-lg font-bold">
              <ShoppingBag className="w-5 h-5" />
              Ordenar ahora
            </button>
          </div>

          {/* Image */}
          <div className="relative h-full min-h-[300px] md:min-h-[400px]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1604917877934-07d8d248d396?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxwaXp6YSUyMHBhc3RhJTIwaXRhbGlhbiUyMGZvb2R8ZW58MXx8fHwxNzc1ODYxMTk3fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Combo familiar"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
