import { useState } from 'react';
import { Search, Clock, CheckCircle, XCircle, Percent } from 'lucide-react';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface OrderItem {
  nombre: string;
  cantidad: number;
  precio: number;
  precioOferta?: number;
  enOferta: boolean;
}

interface Order {
  id: string;
  mesa: string;
  items: OrderItem[];
  total: number;
  estado: 'Pendiente' | 'Preparando' | 'Entregado' | 'Cancelado';
  hora: string;
  mesero: string;
}

export function OrdersView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const orders: Order[] = [
    {
      id: '#1245',
      mesa: 'Mesa 7',
      items: [
        { nombre: 'Hamburguesa Gourmet', cantidad: 2, precio: 15.00, precioOferta: 12.00, enOferta: true },
        { nombre: 'Cerveza Artesanal', cantidad: 1, precio: 5.00, enOferta: false },
      ],
      total: 29.00,
      estado: 'Preparando',
      hora: '14:32',
      mesero: 'Carlos Ramírez',
    },
    {
      id: '#1244',
      mesa: 'Mesa 3',
      items: [
        { nombre: 'Pizza Margherita', cantidad: 1, precio: 16.00, enOferta: false },
        { nombre: 'Mojito Clásico', cantidad: 2, precio: 8.00, precioOferta: 6.00, enOferta: true },
      ],
      total: 28.00,
      estado: 'Entregado',
      hora: '14:15',
      mesero: 'Roberto Fernández',
    },
    {
      id: '#1243',
      mesa: 'Mesa 12',
      items: [
        { nombre: 'Tacos al Pastor', cantidad: 3, precio: 10.00, precioOferta: 7.50, enOferta: true },
        { nombre: 'Cerveza Artesanal', cantidad: 2, precio: 5.00, enOferta: false },
      ],
      total: 32.50,
      estado: 'Preparando',
      hora: '14:00',
      mesero: 'José Luis Torres',
    },
    {
      id: '#1242',
      mesa: 'Mesa 5',
      items: [
        { nombre: 'Sushi Roll Especial', cantidad: 1, precio: 14.00, enOferta: false },
        { nombre: 'Ensalada César', cantidad: 1, precio: 9.00, enOferta: false },
      ],
      total: 23.00,
      estado: 'Pendiente',
      hora: '13:45',
      mesero: 'Carlos Ramírez',
    },
    {
      id: '#1241',
      mesa: 'Mesa 8',
      items: [
        { nombre: 'Pastel de Chocolate', cantidad: 2, precio: 7.00, precioOferta: 5.50, enOferta: true },
        { nombre: 'Mojito Clásico', cantidad: 2, precio: 8.00, precioOferta: 6.00, enOferta: true },
      ],
      total: 23.00,
      estado: 'Entregado',
      hora: '13:30',
      mesero: 'Roberto Fernández',
    },
    {
      id: '#1240',
      mesa: 'Mesa 15',
      items: [
        { nombre: 'Pizza Margherita', cantidad: 2, precio: 16.00, enOferta: false },
        { nombre: 'Cerveza Artesanal', cantidad: 4, precio: 5.00, enOferta: false },
      ],
      total: 52.00,
      estado: 'Preparando',
      hora: '13:20',
      mesero: 'José Luis Torres',
    },
  ];

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.mesa.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || order.estado === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusIcon = (estado: string) => {
    switch (estado) {
      case 'Entregado':
        return <CheckCircle className="w-4 h-4" />;
      case 'Preparando':
        return <Clock className="w-4 h-4" />;
      case 'Cancelado':
        return <XCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getStatusColor = (estado: string) => {
    switch (estado) {
      case 'Entregado':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'Preparando':
        return 'bg-[#06b6d4]/20 text-[#06b6d4] border-[#06b6d4]/30';
      case 'Cancelado':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
    }
  };

  const calculateDiscount = (precio: number, precioOferta: number) => {
    return Math.round(((precio - precioOferta) / precio) * 100);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-[#e4e4e7] mb-2">
          Gestión de Pedidos
        </h1>
        <p className="text-[#a1a1aa]">
          Monitorea y administra todos los pedidos activos
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#a1a1aa]" />
          <Input
            type="text"
            placeholder="Buscar por mesa o número de pedido..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-[#16161d] border-[#27273a] text-[#e4e4e7] placeholder:text-[#71717a] focus:border-[#06b6d4] focus:ring-[#06b6d4]/20"
          />
        </div>

        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-[200px] bg-[#16161d] border-[#27273a] text-[#e4e4e7] focus:border-[#06b6d4] focus:ring-[#06b6d4]/20">
            <SelectValue placeholder="Estado" />
          </SelectTrigger>
          <SelectContent className="bg-[#16161d] border-[#27273a]">
            <SelectItem value="all" className="text-[#e4e4e7] focus:bg-[#1f1f2e] focus:text-[#06b6d4]">
              Todos los Estados
            </SelectItem>
            <SelectItem value="Pendiente" className="text-[#e4e4e7] focus:bg-[#1f1f2e] focus:text-[#06b6d4]">
              Pendiente
            </SelectItem>
            <SelectItem value="Preparando" className="text-[#e4e4e7] focus:bg-[#1f1f2e] focus:text-[#06b6d4]">
              Preparando
            </SelectItem>
            <SelectItem value="Entregado" className="text-[#e4e4e7] focus:bg-[#1f1f2e] focus:text-[#06b6d4]">
              Entregado
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-[#16161d] to-[#1f1f2e] p-5 rounded-xl border border-[#27273a]">
          <p className="text-sm text-[#a1a1aa] mb-1">Total Pedidos</p>
          <p className="text-2xl font-semibold text-[#e4e4e7]">{orders.length}</p>
        </div>
        <div className="bg-gradient-to-br from-[#16161d] to-[#1f1f2e] p-5 rounded-xl border border-[#27273a]">
          <p className="text-sm text-[#a1a1aa] mb-1">En Preparación</p>
          <p className="text-2xl font-semibold text-[#06b6d4]">{orders.filter(o => o.estado === 'Preparando').length}</p>
        </div>
        <div className="bg-gradient-to-br from-[#16161d] to-[#1f1f2e] p-5 rounded-xl border border-[#27273a]">
          <p className="text-sm text-[#a1a1aa] mb-1">Entregados</p>
          <p className="text-2xl font-semibold text-[#10b981]">{orders.filter(o => o.estado === 'Entregado').length}</p>
        </div>
        <div className="bg-gradient-to-br from-[#16161d] to-[#1f1f2e] p-5 rounded-xl border border-[#27273a]">
          <p className="text-sm text-[#a1a1aa] mb-1">Venta Total</p>
          <p className="text-2xl font-semibold text-[#06b6d4]">
            ${orders.reduce((acc, o) => acc + o.total, 0).toFixed(2)}
          </p>
        </div>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto rounded-lg border border-[#27273a]">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#27273a] bg-[#12121a]">
              <th className="text-left p-4 text-sm font-semibold text-[#a1a1aa] uppercase tracking-wide">
                Pedido
              </th>
              <th className="text-left p-4 text-sm font-semibold text-[#a1a1aa] uppercase tracking-wide">
                Mesa
              </th>
              <th className="text-left p-4 text-sm font-semibold text-[#a1a1aa] uppercase tracking-wide">
                Items
              </th>
              <th className="text-left p-4 text-sm font-semibold text-[#a1a1aa] uppercase tracking-wide">
                Total
              </th>
              <th className="text-left p-4 text-sm font-semibold text-[#a1a1aa] uppercase tracking-wide">
                Estado
              </th>
              <th className="text-left p-4 text-sm font-semibold text-[#a1a1aa] uppercase tracking-wide">
                Mesero
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order, index) => (
              <tr
                key={order.id}
                className={`
                  border-b border-[#27273a] hover:bg-[#1f1f2e]/50 transition-colors
                  ${index % 2 === 0 ? 'bg-[#16161d]' : 'bg-[#12121a]'}
                `}
              >
                <td className="p-4">
                  <div>
                    <p className="font-semibold text-[#06b6d4] mb-1">{order.id}</p>
                    <p className="text-xs text-[#71717a]">{order.hora}</p>
                  </div>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#27273a] text-[#e4e4e7] border border-[#27273a]">
                    {order.mesa}
                  </span>
                </td>
                <td className="p-4">
                  <div className="space-y-2">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-sm text-[#a1a1aa]">
                          {item.cantidad}x {item.nombre}
                        </span>
                        {item.enOferta && item.precioOferta && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r from-[#10b981]/20 to-[#22c55e]/20 text-[#10b981] border border-[#10b981]/30 shadow-[0_0_10px_rgba(16,185,129,0.15)]">
                            <Percent className="w-3 h-3" />
                            {calculateDiscount(item.precio, item.precioOferta)}% OFF
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-lg font-semibold text-[#e4e4e7]">${order.total.toFixed(2)}</span>
                    {order.items.some(item => item.enOferta) && (
                      <span className="text-xs text-[#10b981]">
                        ¡Con descuento!
                      </span>
                    )}
                  </div>
                </td>
                <td className="p-4">
                  <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(order.estado)}`}>
                    {getStatusIcon(order.estado)}
                    {order.estado}
                  </span>
                </td>
                <td className="p-4">
                  <span className="text-sm text-[#a1a1aa]">{order.mesero}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
