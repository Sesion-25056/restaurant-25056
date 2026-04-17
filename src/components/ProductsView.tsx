import { useState } from 'react';
import { Search, Plus, Edit2, Trash2, Percent, Tag } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface Product {
  id: string;
  nombre: string;
  categoria: string;
  precio: number;
  precioOferta?: number;
  imagen: string;
  stock: number;
  enOferta: boolean;
}

export function ProductsView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const products: Product[] = [
    {
      id: '1',
      nombre: 'Hamburguesa Gourmet',
      categoria: 'Comida Principal',
      precio: 15.00,
      precioOferta: 12.00,
      imagen: 'https://images.unsplash.com/photo-1627378378955-a3f4e406c5de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwYnVyZ2VyJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NzYzMTM2MTh8MA&ixlib=rb-4.1.0&q=80&w=400',
      stock: 45,
      enOferta: true,
    },
    {
      id: '2',
      nombre: 'Pizza Margherita',
      categoria: 'Comida Principal',
      precio: 16.00,
      imagen: 'https://images.unsplash.com/photo-1680405620826-83b0f0f61b28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMG1hcmdoZXJpdGElMjBpdGFsaWFufGVufDF8fHx8MTc3NjMwMDIzOXww&ixlib=rb-4.1.0&q=80&w=400',
      stock: 32,
      enOferta: false,
    },
    {
      id: '3',
      nombre: 'Tacos al Pastor',
      categoria: 'Comida Principal',
      precio: 10.00,
      precioOferta: 7.50,
      imagen: 'https://images.unsplash.com/photo-1707604341704-74abdc25e52a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWNvcyUyMG1leGljYW4lMjBmb29kfGVufDF8fHx8MTc3NjM4MjYyNHww&ixlib=rb-4.1.0&q=80&w=400',
      stock: 58,
      enOferta: true,
    },
    {
      id: '4',
      nombre: 'Sushi Roll Especial',
      categoria: 'Comida Principal',
      precio: 14.00,
      imagen: 'https://images.unsplash.com/photo-1712183718471-dab51f0748ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHJvbGxzJTIwamFwYW5lc2V8ZW58MXx8fHwxNzc2MzU1MTE1fDA&ixlib=rb-4.1.0&q=80&w=400',
      stock: 28,
      enOferta: false,
    },
    {
      id: '5',
      nombre: 'Mojito Clásico',
      categoria: 'Bebidas',
      precio: 8.00,
      precioOferta: 6.00,
      imagen: 'https://images.unsplash.com/photo-1724155331840-263a0454d8bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2ppdG8lMjBjb2NrdGFpbCUyMGRyaW5rfGVufDF8fHx8MTc3NjM2NTc3Mnww&ixlib=rb-4.1.0&q=80&w=400',
      stock: 120,
      enOferta: true,
    },
    {
      id: '6',
      nombre: 'Cerveza Artesanal',
      categoria: 'Bebidas',
      precio: 5.00,
      imagen: 'https://images.unsplash.com/photo-1643307282439-08cb542c6edf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmFmdCUyMGJlZXIlMjBnbGFzc3xlbnwxfHx8fDE3NzYzOTUwNTR8MA&ixlib=rb-4.1.0&q=80&w=400',
      stock: 86,
      enOferta: false,
    },
    {
      id: '7',
      nombre: 'Pastel de Chocolate',
      categoria: 'Postres',
      precio: 7.00,
      precioOferta: 5.50,
      imagen: 'https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwZGVzc2VydHxlbnwxfHx8fDE3NzYzODY0MjB8MA&ixlib=rb-4.1.0&q=80&w=400',
      stock: 24,
      enOferta: true,
    },
    {
      id: '8',
      nombre: 'Ensalada César',
      categoria: 'Entradas',
      precio: 9.00,
      imagen: 'https://images.unsplash.com/photo-1739436776460-35f309e3f887?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWVzYXIlMjBzYWxhZCUyMGZyZXNofGVufDF8fHx8MTc3NjMxMjE0Nnww&ixlib=rb-4.1.0&q=80&w=400',
      stock: 34,
      enOferta: false,
    },
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.nombre.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'all' || product.categoria === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const calculateDiscount = (precio: number, precioOferta: number) => {
    return Math.round(((precio - precioOferta) / precio) * 100);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-[#e4e4e7] mb-2">
          Gestión de Productos
        </h1>
        <p className="text-[#a1a1aa]">
          Administra el menú completo del restaurante
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#a1a1aa]" />
          <Input
            type="text"
            placeholder="Buscar productos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-[#16161d] border-[#27273a] text-[#e4e4e7] placeholder:text-[#71717a] focus:border-[#06b6d4] focus:ring-[#06b6d4]/20"
          />
        </div>

        <div className="flex gap-3">
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger className="w-[200px] bg-[#16161d] border-[#27273a] text-[#e4e4e7] focus:border-[#06b6d4] focus:ring-[#06b6d4]/20">
              <Tag className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Categoría" />
            </SelectTrigger>
            <SelectContent className="bg-[#16161d] border-[#27273a]">
              <SelectItem value="all" className="text-[#e4e4e7] focus:bg-[#1f1f2e] focus:text-[#06b6d4]">
                Todas las Categorías
              </SelectItem>
              <SelectItem value="Comida Principal" className="text-[#e4e4e7] focus:bg-[#1f1f2e] focus:text-[#06b6d4]">
                Comida Principal
              </SelectItem>
              <SelectItem value="Bebidas" className="text-[#e4e4e7] focus:bg-[#1f1f2e] focus:text-[#06b6d4]">
                Bebidas
              </SelectItem>
              <SelectItem value="Postres" className="text-[#e4e4e7] focus:bg-[#1f1f2e] focus:text-[#06b6d4]">
                Postres
              </SelectItem>
              <SelectItem value="Entradas" className="text-[#e4e4e7] focus:bg-[#1f1f2e] focus:text-[#06b6d4]">
                Entradas
              </SelectItem>
            </SelectContent>
          </Select>

          <Button
            className="bg-gradient-to-r from-[#06b6d4] to-[#10b981] text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-shadow"
          >
            <Plus className="w-4 h-4 mr-2" />
            Añadir Producto
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-[#16161d] to-[#1f1f2e] p-5 rounded-xl border border-[#27273a]">
          <p className="text-sm text-[#a1a1aa] mb-1">Total Productos</p>
          <p className="text-2xl font-semibold text-[#e4e4e7]">{products.length}</p>
        </div>
        <div className="bg-gradient-to-br from-[#16161d] to-[#1f1f2e] p-5 rounded-xl border border-[#27273a]">
          <p className="text-sm text-[#a1a1aa] mb-1">Productos en Oferta</p>
          <p className="text-2xl font-semibold text-[#10b981]">{products.filter(p => p.enOferta).length}</p>
        </div>
        <div className="bg-gradient-to-br from-[#16161d] to-[#1f1f2e] p-5 rounded-xl border border-[#27273a]">
          <p className="text-sm text-[#a1a1aa] mb-1">Valor Inventario</p>
          <p className="text-2xl font-semibold text-[#06b6d4]">
            ${products.reduce((acc, p) => acc + (p.precio * p.stock), 0).toFixed(2)}
          </p>
        </div>
      </div>

      {/* Products Table */}
      <div className="overflow-x-auto rounded-lg border border-[#27273a]">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#27273a] bg-[#12121a]">
              <th className="text-left p-4 text-sm font-semibold text-[#a1a1aa] uppercase tracking-wide">
                Producto
              </th>
              <th className="text-left p-4 text-sm font-semibold text-[#a1a1aa] uppercase tracking-wide">
                Categoría
              </th>
              <th className="text-left p-4 text-sm font-semibold text-[#a1a1aa] uppercase tracking-wide">
                Precio
              </th>
              <th className="text-left p-4 text-sm font-semibold text-[#a1a1aa] uppercase tracking-wide">
                Stock
              </th>
              <th className="text-right p-4 text-sm font-semibold text-[#a1a1aa] uppercase tracking-wide">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product, index) => (
              <tr
                key={product.id}
                className={`
                  border-b border-[#27273a] hover:bg-[#1f1f2e]/50 transition-colors
                  ${index % 2 === 0 ? 'bg-[#16161d]' : 'bg-[#12121a]'}
                `}
              >
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={product.imagen}
                        alt={product.nombre}
                        className="w-16 h-16 rounded-lg object-cover border border-[#27273a]"
                      />
                      {product.enOferta && (
                        <div className="absolute -top-2 -right-2 w-7 h-7 bg-gradient-to-br from-[#10b981] to-[#22c55e] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.6)]">
                          <Percent className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-[#e4e4e7] mb-1">{product.nombre}</p>
                      {product.enOferta && product.precioOferta && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r from-[#10b981]/20 to-[#22c55e]/20 text-[#10b981] border border-[#10b981]/30 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                          <Percent className="w-3 h-3" />
                          OFERTA {calculateDiscount(product.precio, product.precioOferta)}% DESC
                        </span>
                      )}
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#27273a] text-[#a1a1aa] border border-[#27273a]">
                    {product.categoria}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex flex-col gap-1">
                    {product.enOferta && product.precioOferta ? (
                      <>
                        <span className="text-sm text-[#71717a] line-through">${product.precio.toFixed(2)}</span>
                        <span className="text-lg font-semibold text-[#10b981]">${product.precioOferta.toFixed(2)}</span>
                      </>
                    ) : (
                      <span className="text-lg font-semibold text-[#e4e4e7]">${product.precio.toFixed(2)}</span>
                    )}
                  </div>
                </td>
                <td className="p-4">
                  <span className={`text-sm ${product.stock < 30 ? 'text-amber-400' : 'text-[#a1a1aa]'}`}>
                    {product.stock} unidades
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[#a1a1aa] hover:text-[#06b6d4] hover:bg-[#06b6d4]/10 transition-colors"
                      title="Editar"
                    >
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[#a1a1aa] hover:text-red-400 hover:bg-red-400/10 transition-colors"
                      title="Eliminar"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
