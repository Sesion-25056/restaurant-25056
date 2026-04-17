import { Utensils, Coffee, IceCream, Salad, Plus } from 'lucide-react';
import { Button } from './ui/button';

interface Category {
  id: string;
  nombre: string;
  icon: React.ElementType;
  color: string;
  productCount: number;
  descripcion: string;
}

export function CategoriesView() {
  const categories: Category[] = [
    {
      id: '1',
      nombre: 'Comida Principal',
      icon: Utensils,
      color: 'from-[#06b6d4] to-[#10b981]',
      productCount: 4,
      descripcion: 'Platos principales y especialidades',
    },
    {
      id: '2',
      nombre: 'Bebidas',
      icon: Coffee,
      color: 'from-[#8b5cf6] to-[#ec4899]',
      productCount: 2,
      descripcion: 'Bebidas alcohólicas y sin alcohol',
    },
    {
      id: '3',
      nombre: 'Postres',
      icon: IceCream,
      color: 'from-[#ec4899] to-[#f43f5e]',
      productCount: 1,
      descripcion: 'Dulces y postres deliciosos',
    },
    {
      id: '4',
      nombre: 'Entradas',
      icon: Salad,
      color: 'from-[#10b981] to-[#22c55e]',
      productCount: 1,
      descripcion: 'Aperitivos y entradas ligeras',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-[#e4e4e7] mb-2">
            Categorías de Productos
          </h1>
          <p className="text-[#a1a1aa]">
            Gestiona las categorías del menú
          </p>
        </div>
        <Button className="bg-gradient-to-r from-[#06b6d4] to-[#10b981] text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]">
          <Plus className="w-4 h-4 mr-2" />
          Nueva Categoría
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-[#16161d] to-[#1f1f2e] p-5 rounded-xl border border-[#27273a]">
          <p className="text-sm text-[#a1a1aa] mb-1">Total Categorías</p>
          <p className="text-2xl font-semibold text-[#e4e4e7]">{categories.length}</p>
        </div>
        <div className="bg-gradient-to-br from-[#16161d] to-[#1f1f2e] p-5 rounded-xl border border-[#27273a]">
          <p className="text-sm text-[#a1a1aa] mb-1">Total Productos</p>
          <p className="text-2xl font-semibold text-[#06b6d4]">
            {categories.reduce((acc, cat) => acc + cat.productCount, 0)}
          </p>
        </div>
        <div className="bg-gradient-to-br from-[#16161d] to-[#1f1f2e] p-5 rounded-xl border border-[#27273a]">
          <p className="text-sm text-[#a1a1aa] mb-1">Categoría Más Popular</p>
          <p className="text-2xl font-semibold text-[#10b981]">Comida Principal</p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.id}
              className="bg-gradient-to-br from-[#16161d] to-[#1f1f2e] rounded-xl border border-[#27273a] hover:border-[#06b6d4]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] overflow-hidden group cursor-pointer"
            >
              {/* Icon Section */}
              <div className={`h-32 bg-gradient-to-br ${category.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <Icon className="w-16 h-16 text-white relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover:scale-110 transition-transform" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-[#e4e4e7]">{category.nombre}</h3>
                  <div className={`bg-gradient-to-br ${category.color} rounded-full w-12 h-12 flex items-center justify-center shadow-lg`}>
                    <span className="text-xl font-bold text-white">{category.productCount}</span>
                  </div>
                </div>
                
                <p className="text-sm text-[#a1a1aa] mb-4">{category.descripcion}</p>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-transparent border-[#27273a] text-[#a1a1aa] hover:bg-[#1f1f2e] hover:text-[#06b6d4] hover:border-[#06b6d4]"
                  >
                    Ver Productos
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-transparent border-[#27273a] text-[#a1a1aa] hover:bg-[#1f1f2e] hover:text-[#8b5cf6] hover:border-[#8b5cf6]"
                  >
                    Editar
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detailed Stats Table */}
      <div className="bg-gradient-to-br from-[#16161d] to-[#1f1f2e] rounded-xl border border-[#27273a] overflow-hidden">
        <div className="p-6 border-b border-[#27273a]">
          <h2 className="text-xl font-semibold text-[#e4e4e7]">Detalles por Categoría</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#27273a] bg-[#12121a]">
                <th className="text-left p-4 text-sm font-semibold text-[#a1a1aa] uppercase tracking-wide">
                  Categoría
                </th>
                <th className="text-left p-4 text-sm font-semibold text-[#a1a1aa] uppercase tracking-wide">
                  Productos
                </th>
                <th className="text-left p-4 text-sm font-semibold text-[#a1a1aa] uppercase tracking-wide">
                  Ventas del Mes
                </th>
                <th className="text-left p-4 text-sm font-semibold text-[#a1a1aa] uppercase tracking-wide">
                  Ingresos
                </th>
                <th className="text-right p-4 text-sm font-semibold text-[#a1a1aa] uppercase tracking-wide">
                  Estado
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#27273a] hover:bg-[#1f1f2e]/50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br from-[#06b6d4] to-[#10b981] flex items-center justify-center`}>
                      <Utensils className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium text-[#e4e4e7]">Comida Principal</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className="text-[#a1a1aa]">4 productos</span>
                </td>
                <td className="p-4">
                  <span className="text-[#e4e4e7]">245 unidades</span>
                </td>
                <td className="p-4">
                  <span className="text-[#06b6d4] font-semibold">$3,675.00</span>
                </td>
                <td className="p-4 text-right">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Activa
                  </span>
                </td>
              </tr>
              <tr className="border-b border-[#27273a] hover:bg-[#1f1f2e]/50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br from-[#8b5cf6] to-[#ec4899] flex items-center justify-center`}>
                      <Coffee className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium text-[#e4e4e7]">Bebidas</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className="text-[#a1a1aa]">2 productos</span>
                </td>
                <td className="p-4">
                  <span className="text-[#e4e4e7]">432 unidades</span>
                </td>
                <td className="p-4">
                  <span className="text-[#06b6d4] font-semibold">$2,808.00</span>
                </td>
                <td className="p-4 text-right">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Activa
                  </span>
                </td>
              </tr>
              <tr className="border-b border-[#27273a] hover:bg-[#1f1f2e]/50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br from-[#ec4899] to-[#f43f5e] flex items-center justify-center`}>
                      <IceCream className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium text-[#e4e4e7]">Postres</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className="text-[#a1a1aa]">1 producto</span>
                </td>
                <td className="p-4">
                  <span className="text-[#e4e4e7]">87 unidades</span>
                </td>
                <td className="p-4">
                  <span className="text-[#06b6d4] font-semibold">$478.50</span>
                </td>
                <td className="p-4 text-right">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Activa
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-[#1f1f2e]/50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br from-[#10b981] to-[#22c55e] flex items-center justify-center`}>
                      <Salad className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium text-[#e4e4e7]">Entradas</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className="text-[#a1a1aa]">1 producto</span>
                </td>
                <td className="p-4">
                  <span className="text-[#e4e4e7]">156 unidades</span>
                </td>
                <td className="p-4">
                  <span className="text-[#06b6d4] font-semibold">$1,404.00</span>
                </td>
                <td className="p-4 text-right">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Activa
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
