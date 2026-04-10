import { ShoppingBag, UtensilsCrossed } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">Nuevas ofertas cada día</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Las mejores ofertas del día
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Descubre promociones irresistibles en tus platillos favoritos. Sabor premium a precios increíbles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105 shadow-lg hover:shadow-xl">
                <ShoppingBag className="w-5 h-5" />
                Pedir ahora
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-foreground rounded-full hover:bg-gray-50 transition-all border-2 border-border">
                <UtensilsCrossed className="w-5 h-5" />
                Ver menú
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Platillos</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">15k+</div>
                <div className="text-sm text-muted-foreground">Clientes</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">4.9★</div>
                <div className="text-sm text-muted-foreground">Calificación</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1632898657953-f41f81bfa892?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpY2lvdXMlMjBidXJnZXIlMjBmb29kJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NzU4NjExOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Deliciosa hamburguesa gourmet"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              {/* Floating discount badge */}
              <div className="absolute top-6 left-6 bg-destructive text-destructive-foreground px-4 py-2 rounded-full font-bold shadow-lg">
                -30% HOY
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
