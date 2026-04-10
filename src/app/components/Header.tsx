import { Flame, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Flame className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl text-foreground">SaborExpress</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
              Inicio
            </a>
            <a href="#menu" className="text-foreground hover:text-primary transition-colors">
              Menú
            </a>
            <a href="#ofertas" className="text-foreground hover:text-primary transition-colors">
              Ofertas
            </a>
            <a href="#nosotros" className="text-foreground hover:text-primary transition-colors">
              Nosotros
            </a>
            <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>

          {/* CTA Button Desktop */}
          <button className="hidden md:block px-6 py-2.5 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105">
            Ver promociones
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
                Inicio
              </a>
              <a href="#menu" className="text-foreground hover:text-primary transition-colors">
                Menú
              </a>
              <a href="#ofertas" className="text-foreground hover:text-primary transition-colors">
                Ofertas
              </a>
              <a href="#nosotros" className="text-foreground hover:text-primary transition-colors">
                Nosotros
              </a>
              <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
                Contacto
              </a>
              <button className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors">
                Ver promociones
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
