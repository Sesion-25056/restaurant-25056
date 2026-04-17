import { useState } from 'react';
import { Search, Calendar, CreditCard, DollarSign, Download } from 'lucide-react';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';

interface HistoricalOrder {
  id: string;
  fecha: string;
  hora: string;
  mesa: string;
  items: number;
  total: number;
  metodoPago: 'Efectivo' | 'Tarjeta' | 'Transferencia';
  mesero: string;
}

export function OrderHistoryView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterPayment, setFilterPayment] = useState('all');
  const [filterDate, setFilterDate] = useState('all');

  const historicalOrders: HistoricalOrder[] = [
    { id: '#1244', fecha: '16 Abr 2026', hora: '14:15', mesa: 'Mesa 3', items: 3, total: 28.00, metodoPago: 'Tarjeta', mesero: 'Roberto Fernández' },
    { id: '#1241', fecha: '16 Abr 2026', hora: '13:30', mesa: 'Mesa 8', items: 4, total: 23.00, metodoPago: 'Efectivo', mesero: 'Roberto Fernández' },
    { id: '#1239', fecha: '16 Abr 2026', hora: '13:00', mesa: 'Mesa 4', items: 2, total: 18.50, metodoPago: 'Transferencia', mesero: 'Carlos Ramírez' },
    { id: '#1236', fecha: '16 Abr 2026', hora: '12:45', mesa: 'Mesa 11', items: 5, total: 67.00, metodoPago: 'Tarjeta', mesero: 'José Luis Torres' },
    { id: '#1235', fecha: '16 Abr 2026', hora: '12:30', mesa: 'Mesa 2', items: 3, total: 34.50, metodoPago: 'Efectivo', mesero: 'Carlos Ramírez' },
    { id: '#1234', fecha: '15 Abr 2026', hora: '22:15', mesa: 'Mesa 6', items: 4, total: 45.00, metodoPago: 'Tarjeta', mesero: 'Roberto Fernández' },
    { id: '#1233', fecha: '15 Abr 2026', hora: '21:45', mesa: 'Mesa 13', items: 2, total: 19.00, metodoPago: 'Efectivo', mesero: 'José Luis Torres' },
    { id: '#1232', fecha: '15 Abr 2026', hora: '21:20', mesa: 'Mesa 7', items: 6, total: 78.50, metodoPago: 'Transferencia', mesero: 'Carlos Ramírez' },
    { id: '#1231', fecha: '15 Abr 2026', hora: '20:50', mesa: 'Mesa 1', items: 3, total: 32.00, metodoPago: 'Tarjeta', mesero: 'Roberto Fernández' },
    { id: '#1230', fecha: '15 Abr 2026', hora: '20:30', mesa: 'Mesa 9', items: 2, total: 24.50, metodoPago: 'Efectivo', mesero: 'José Luis Torres' },
    { id: '#1229', fecha: '14 Abr 2026', hora: '19:45', mesa: 'Mesa 5', items: 4, total: 51.00, metodoPago: 'Tarjeta', mesero: 'Carlos Ramírez' },
    { id: '#1228', fecha: '14 Abr 2026', hora: '19:15', mesa: 'Mesa 10', items: 3, total: 38.50, metodoPago: 'Transferencia', mesero: 'Roberto Fernández' },
  ];

  const filteredOrders = historicalOrders.filter(order => {
    const matchesSearch = order.mesa.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.mesero.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPayment = filterPayment === 'all' || order.metodoPago === filterPayment;
    const matchesDate = filterDate === 'all' || 
                       (filterDate === 'today' && order.fecha === '16 Abr 2026') ||
                       (filterDate === 'yesterday' && order.fecha === '15 Abr 2026') ||
                       (filterDate === 'week' && ['16 Abr 2026', '15 Abr 2026', '14 Abr 2026'].includes(order.fecha));
    return matchesSearch && matchesPayment && matchesDate;
  });

  const getPaymentIcon = (metodo: string) => {
    switch (metodo) {
      case 'Tarjeta':
        return <CreditCard className="w-4 h-4" />;
      case 'Efectivo':
        return <DollarSign className="w-4 h-4" />;
      default:
        return <CreditCard className="w-4 h-4" />;
    }
  };

  const getPaymentColor = (metodo: string) => {
    switch (metodo) {
      case 'Tarjeta':
        return 'bg-[#06b6d4]/20 text-[#06b6d4] border-[#06b6d4]/30';
      case 'Efectivo':
        return 'bg-[#10b981]/20 text-[#10b981] border-[#10b981]/30';
      default:
        return 'bg-[#8b5cf6]/20 text-[#8b5cf6] border-[#8b5cf6]/30';
    }
  };

  const totalRevenue = filteredOrders.reduce((acc, order) => acc + order.total, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-[#e4e4e7] mb-2">
          Historial de Pedidos
        </h1>
        <p className="text-[#a1a1aa]">
          Consulta y analiza pedidos completados
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#a1a1aa]" />
          <Input
            type="text"
            placeholder="Buscar por mesa, pedido o mesero..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-[#16161d] border-[#27273a] text-[#e4e4e7] placeholder:text-[#71717a] focus:border-[#06b6d4] focus:ring-[#06b6d4]/20"
          />
        </div>

        <Select value={filterDate} onValueChange={setFilterDate}>
          <SelectTrigger className="w-[180px] bg-[#16161d] border-[#27273a] text-[#e4e4e7] focus:border-[#06b6d4] focus:ring-[#06b6d4]/20">
            <Calendar className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Fecha" />
          </SelectTrigger>
          <SelectContent className="bg-[#16161d] border-[#27273a]">
            <SelectItem value="all" className="text-[#e4e4e7] focus:bg-[#1f1f2e] focus:text-[#06b6d4]">
              Todas las Fechas
            </SelectItem>
            <SelectItem value="today" className="text-[#e4e4e7] focus:bg-[#1f1f2e] focus:text-[#06b6d4]">
              Hoy
            </SelectItem>
            <SelectItem value="yesterday" className="text-[#e4e4e7] focus:bg-[#1f1f2e] focus:text-[#06b6d4]">
              Ayer
            </SelectItem>
            <SelectItem value="week" className="text-[#e4e4e7] focus:bg-[#1f1f2e] focus:text-[#06b6d4]">
              Esta Semana
            </SelectItem>
          </SelectContent>
        </Select>

        <Select value={filterPayment} onValueChange={setFilterPayment}>
          <SelectTrigger className="w-[180px] bg-[#16161d] border-[#27273a] text-[#e4e4e7] focus:border-[#06b6d4] focus:ring-[#06b6d4]/20">
            <CreditCard className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Pago" />
          </SelectTrigger>
          <SelectContent className="bg-[#16161d] border-[#27273a]">
            <SelectItem value="all" className="text-[#e4e4e7] focus:bg-[#1f1f2e] focus:text-[#06b6d4]">
              Todos los Métodos
            </SelectItem>
            <SelectItem value="Efectivo" className="text-[#e4e4e7] focus:bg-[#1f1f2e] focus:text-[#06b6d4]">
              Efectivo
            </SelectItem>
            <SelectItem value="Tarjeta" className="text-[#e4e4e7] focus:bg-[#1f1f2e] focus:text-[#06b6d4]">
              Tarjeta
            </SelectItem>
            <SelectItem value="Transferencia" className="text-[#e4e4e7] focus:bg-[#1f1f2e] focus:text-[#06b6d4]">
              Transferencia
            </SelectItem>
          </SelectContent>
        </Select>

        <Button className="bg-gradient-to-r from-[#06b6d4] to-[#10b981] text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]">
          <Download className="w-4 h-4 mr-2" />
          Exportar
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-[#16161d] to-[#1f1f2e] p-5 rounded-xl border border-[#27273a]">
          <p className="text-sm text-[#a1a1aa] mb-1">Total Pedidos</p>
          <p className="text-2xl font-semibold text-[#e4e4e7]">{filteredOrders.length}</p>
        </div>
        <div className="bg-gradient-to-br from-[#16161d] to-[#1f1f2e] p-5 rounded-xl border border-[#27273a]">
          <p className="text-sm text-[#a1a1aa] mb-1">Total Recaudado</p>
          <p className="text-2xl font-semibold text-[#06b6d4]">${totalRevenue.toFixed(2)}</p>
        </div>
        <div className="bg-gradient-to-br from-[#16161d] to-[#1f1f2e] p-5 rounded-xl border border-[#27273a]">
          <p className="text-sm text-[#a1a1aa] mb-1">Ticket Promedio</p>
          <p className="text-2xl font-semibold text-[#10b981]">
            ${filteredOrders.length > 0 ? (totalRevenue / filteredOrders.length).toFixed(2) : '0.00'}
          </p>
        </div>
        <div className="bg-gradient-to-br from-[#16161d] to-[#1f1f2e] p-5 rounded-xl border border-[#27273a]">
          <p className="text-sm text-[#a1a1aa] mb-1">Items Vendidos</p>
          <p className="text-2xl font-semibold text-[#8b5cf6]">
            {filteredOrders.reduce((acc, order) => acc + order.items, 0)}
          </p>
        </div>
      </div>

      {/* History Table */}
      <div className="overflow-x-auto rounded-lg border border-[#27273a]">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#27273a] bg-[#12121a]">
              <th className="text-left p-4 text-sm font-semibold text-[#a1a1aa] uppercase tracking-wide">
                Pedido
              </th>
              <th className="text-left p-4 text-sm font-semibold text-[#a1a1aa] uppercase tracking-wide">
                Fecha y Hora
              </th>
              <th className="text-left p-4 text-sm font-semibold text-[#a1a1aa] uppercase tracking-wide">
                Mesa
              </th>
              <th className="text-left p-4 text-sm font-semibold text-[#a1a1aa] uppercase tracking-wide">
                Items
              </th>
              <th className="text-left p-4 text-sm font-semibold text-[#a1a1aa] uppercase tracking-wide">
                Método de Pago
              </th>
              <th className="text-left p-4 text-sm font-semibold text-[#a1a1aa] uppercase tracking-wide">
                Mesero
              </th>
              <th className="text-right p-4 text-sm font-semibold text-[#a1a1aa] uppercase tracking-wide">
                Total
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
                  <span className="font-semibold text-[#06b6d4]">{order.id}</span>
                </td>
                <td className="p-4">
                  <div className="flex flex-col">
                    <span className="text-sm text-[#e4e4e7]">{order.fecha}</span>
                    <span className="text-xs text-[#71717a]">{order.hora}</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#27273a] text-[#e4e4e7] border border-[#27273a]">
                    {order.mesa}
                  </span>
                </td>
                <td className="p-4">
                  <span className="text-sm text-[#a1a1aa]">{order.items} items</span>
                </td>
                <td className="p-4">
                  <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${getPaymentColor(order.metodoPago)}`}>
                    {getPaymentIcon(order.metodoPago)}
                    {order.metodoPago}
                  </span>
                </td>
                <td className="p-4">
                  <span className="text-sm text-[#a1a1aa]">{order.mesero}</span>
                </td>
                <td className="p-4 text-right">
                  <span className="text-lg font-semibold text-[#e4e4e7]">${order.total.toFixed(2)}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
