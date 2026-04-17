import { useState } from 'react';
import { Search, Tag, Plus, Edit2, Trash2, Percent } from 'lucide-react';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { AddProductModal } from './AddProductModal';

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

export function ProductGalleryView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [products, setProducts] = useState<Product[]>([
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
  ]);

  const handleAddProduct = (newProduct: Omit<Product, 'id'>) => {
    const product: Product = {
      ...newProduct,
      id: (products.length + 1).toString(),
    };
    setProducts([...products, product]);
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

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
          Menú Completo
        </h1>
        <p className="text-[#a1a1aa]">
          Galería de productos del restaurante
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

      {/* Products Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-gradient-to-br from-[#16161d] to-[#1f1f2e] rounded-xl border border-[#27273a] hover:border-[#06b6d4]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] overflow-hidden group"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={product.imagen}
                alt={product.nombre}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {product.enOferta && product.precioOferta && (
                <div className="absolute top-3 right-3">
                  <div className="bg-gradient-to-br from-[#10b981] to-[#22c55e] rounded-full px-3 py-1.5 shadow-[0_0_20px_rgba(16,185,129,0.6)]">
                    <div className="flex items-center gap-1">
                      <Percent className="w-4 h-4 text-white" />
                      <span className="text-sm font-bold text-white">
                        {calculateDiscount(product.precio, product.precioOferta)}% OFF
                      </span>
                    </div>
                  </div>
                </div>
              )}
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[#16161d]/80 backdrop-blur-sm text-[#a1a1aa] border border-[#27273a]">
                  {product.categoria}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#e4e4e7] mb-2">{product.nombre}</h3>
              
              <div className="flex items-end justify-between mb-3">
                <div>
                  {product.enOferta && product.precioOferta ? (
                    <div>
                      <p className="text-sm text-[#71717a] line-through">${product.precio.toFixed(2)}</p>
                      <p className="text-2xl font-bold text-[#10b981]">${product.precioOferta.toFixed(2)}</p>
                    </div>
                  ) : (
                    <p className="text-2xl font-bold text-[#e4e4e7]">${product.precio.toFixed(2)}</p>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-xs text-[#71717a]">Stock</p>
                  <p className={`text-sm font-medium ${product.stock < 30 ? 'text-amber-400' : 'text-[#a1a1aa]'}`}>
                    {product.stock}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 bg-transparent border-[#27273a] text-[#a1a1aa] hover:bg-[#1f1f2e] hover:text-[#06b6d4] hover:border-[#06b6d4]"
                >
                  <Edit2 className="w-4 h-4 mr-1" />
                  Editar
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDeleteProduct(product.id)}
                  className="bg-transparent border-[#27273a] text-[#a1a1aa] hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/30"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Add Button */}
      <button
        onClick={() => setIsAddModalOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-[#06b6d4] to-[#10b981] rounded-full shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:shadow-[0_0_40px_rgba(6,182,212,0.8)] transition-all duration-300 flex items-center justify-center group hover:scale-110 z-40"
        title="Añadir Producto"
      >
        <Plus className="w-8 h-8 text-white group-hover:rotate-90 transition-transform duration-300" />
      </button>

      {/* Add Product Modal */}
      <AddProductModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddProduct}
      />
    </div>
  );
}
