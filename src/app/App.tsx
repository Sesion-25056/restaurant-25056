import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryFilter } from './components/CategoryFilter';
import { OfferCard } from './components/OfferCard';
import { SpecialPromo } from './components/SpecialPromo';
import { Benefits } from './components/Benefits';
import { Footer } from './components/Footer';

const offers = [
  {
    image: 'https://images.unsplash.com/photo-1632898657999-ae6920976661?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxkZWxpY2lvdXMlMjBidXJnZXIlMjBmb29kJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NzU4NjExOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    name: 'Hamburguesa Doble Especial',
    description: 'Doble carne, queso cheddar, bacon, lechuga y salsa especial',
    originalPrice: 15.99,
    offerPrice: 9.99,
    discount: '-37%',
  },
  {
    image: 'https://images.unsplash.com/photo-1766589221324-656419e4c844?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmcmllZCUyMGNoaWNrZW4lMjB3aW5ncyUyMHJlc3RhdXJhbnQlMjBtZWFsfGVufDF8fHx8MTc3NTg2MTE5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    name: 'Alitas BBQ Premium',
    description: '12 alitas crujientes con salsa BBQ casera y dip ranch',
    originalPrice: 18.99,
    offerPrice: 12.99,
    discount: '-32%',
  },
  {
    image: 'https://images.unsplash.com/photo-1536964549204-cce9eab227bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMHBhc3RhJTIwaXRhbGlhbiUyMGZvb2R8ZW58MXx8fHwxNzc1ODYxMTk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    name: 'Pizza Margarita Grande',
    description: 'Masa artesanal, mozzarella fresca, albahaca y tomate',
    originalPrice: 22.99,
    offerPrice: 16.99,
    discount: '-26%',
  },
  {
    image: 'https://images.unsplash.com/photo-1597131628347-c769fc631754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxwaXp6YSUyMHBhc3RhJTIwaXRhbGlhbiUyMGZvb2R8ZW58MXx8fHwxNzc1ODYxMTk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    name: 'Pasta Carbonara Clásica',
    description: 'Fettuccine, panceta, huevo, parmesano y pimienta negra',
    originalPrice: 14.99,
    offerPrice: 10.99,
    discount: '-27%',
  },
  {
    image: 'https://images.unsplash.com/photo-1773620496679-170116547ce5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxmcmllZCUyMGNoaWNrZW4lMjB3aW5ncyUyMHJlc3RhdXJhbnQlMjBtZWFsfGVufDF8fHx8MTc3NTg2MTE5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    name: 'Combo Pollo Frito',
    description: '4 piezas de pollo + papas fritas + refresco grande',
    originalPrice: 19.99,
    offerPrice: 13.99,
    discount: '-30%',
  },
  {
    image: 'https://images.unsplash.com/photo-1759426016293-1b8be5849a72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwY2FrZSUyMHN3ZWV0JTIwZm9vZHxlbnwxfHx8fDE3NzU4NjExOTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    name: 'Pastel de Fresa Premium',
    description: 'Bizcocho suave, crema fresca y fresas naturales',
    originalPrice: 12.99,
    offerPrice: 7.99,
    discount: '-38%',
  },
  {
    image: 'https://images.unsplash.com/photo-1632898658030-ead731d252d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxkZWxpY2lvdXMlMjBidXJnZXIlMjBmb29kJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NzU4NjExOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    name: 'Mega Combo Deluxe',
    description: 'Hamburguesa + alitas + papas + bebida + postre',
    originalPrice: 29.99,
    offerPrice: 19.99,
    discount: '-33%',
  },
  {
    image: 'https://images.unsplash.com/photo-1600555379765-f82335a7b1b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllZCUyMGNoaWNrZW4lMjB3aW5ncyUyMHJlc3RhdXJhbnQlMjBtZWFsfGVufDF8fHx8MTc3NTg2MTE5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    name: 'Pechuga a la Parrilla',
    description: 'Pechuga marinada con ensalada fresca y arroz',
    originalPrice: 16.99,
    offerPrice: 11.99,
    discount: '-29%',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />

      {/* Offers Section */}
      <section id="ofertas" className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Ofertas Destacadas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Aprovecha nuestras promociones exclusivas. ¡Ahorra hasta un 40% en tus platillos favoritos!
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <CategoryFilter />
          </div>

          {/* Offers Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {offers.map((offer, index) => (
              <OfferCard key={index} {...offer} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-10">
            <button className="px-8 py-3 bg-white text-foreground border-2 border-border rounded-full hover:bg-gray-50 transition-all hover:scale-105 font-medium">
              Ver más ofertas
            </button>
          </div>
        </div>
      </section>

      <SpecialPromo />
      <Benefits />
      <Footer />
    </div>
  );
}