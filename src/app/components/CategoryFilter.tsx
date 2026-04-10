import { Pizza, Drumstick, Sandwich, Coffee, Cake, Sparkles } from 'lucide-react';
import { useState } from 'react';

const categories = [
  { id: 'todos', name: 'Todos', icon: Sparkles },
  { id: 'combos', name: 'Combos', icon: Sandwich },
  { id: 'pollo', name: 'Pollo', icon: Drumstick },
  { id: 'hamburguesas', name: 'Hamburguesas', icon: Sandwich },
  { id: 'bebidas', name: 'Bebidas', icon: Coffee },
  { id: 'postres', name: 'Postres', icon: Cake },
  { id: 'pizzas', name: 'Pizzas', icon: Pizza },
];

export function CategoryFilter() {
  const [activeCategory, setActiveCategory] = useState('todos');

  return (
    <div className="w-full overflow-x-auto py-2 scrollbar-hide">
      <div className="flex gap-3 min-w-max px-4 sm:px-6 lg:px-8">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.id;

          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-full transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'bg-white text-foreground hover:bg-gray-50 border border-border'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="font-medium text-sm">{category.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
