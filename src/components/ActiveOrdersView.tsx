import { useState, useEffect } from 'react';
import { Clock, CheckCircle2, ChefHat, Percent } from 'lucide-react';
import { Button } from './ui/button';

interface OrderItem {
  nombre: string;
  cantidad: number;
  enOferta: boolean;
}

interface ActiveOrder {
  id: string;
  mesa: string;
  items: OrderItem[];
  total: number;
  estado: 'Preparando' | 'Listo';
  mesero: string;
  startTime: Date;
}

export function ActiveOrdersView() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second for timers
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const activeOrders: ActiveOrder[] = [
    {
      id: '#1245',
      mesa: 'Mesa 7',
      items: [
        { nombre: 'Hamburguesa Gourmet', cantidad: 2, enOferta: true },
        { nombre: 'Cerveza Artesanal', cantidad: 1, enOferta: false },
      ],
      total: 29.00,
      estado: 'Preparando',
      mesero: 'Carlos Ramírez',
      startTime: new Date(Date.now() - 12 * 60 * 1000), // 12 minutes ago
    },
    {
      id: '#1243',
      mesa: 'Mesa 12',
      items: [
        { nombre: 'Tacos al Pastor', cantidad: 3, enOferta: true },
        { nombre: 'Cerveza Artesanal', cantidad: 2, enOferta: false },
      ],
      total: 32.50,
      estado: 'Preparando',
      mesero: 'José Luis Torres',
      startTime: new Date(Date.now() - 8 * 60 * 1000), // 8 minutes ago
    },
    {
      id: '#1242',
      mesa: 'Mesa 5',
      items: [
        { nombre: 'Sushi Roll Especial', cantidad: 1, enOferta: false },
        { nombre: 'Ensalada César', cantidad: 1, enOferta: false },
      ],
      total: 23.00,
      estado: 'Listo',
      mesero: 'Carlos Ramírez',
      startTime: new Date(Date.now() - 18 * 60 * 1000), // 18 minutes ago
    },
    {
      id: '#1240',
      mesa: 'Mesa 15',
      items: [
        { nombre: 'Pizza Margherita', cantidad: 2, enOferta: false },
        { nombre: 'Cerveza Artesanal', cantidad: 4, enOferta: false },
      ],
      total: 52.00,
      estado: 'Preparando',
      mesero: 'José Luis Torres',
      startTime: new Date(Date.now() - 5 * 60 * 1000), // 5 minutes ago
    },
    {
      id: '#1238',
      mesa: 'Mesa 3',
      items: [
        { nombre: 'Mojito Clásico', cantidad: 3, enOferta: true },
        { nombre: 'Pastel de Chocolate', cantidad: 2, enOferta: true },
      ],
      total: 29.00,
      estado: 'Listo',
      mesero: 'Roberto Fernández',
      startTime: new Date(Date.now() - 22 * 60 * 1000), // 22 minutes ago
    },
    {
      id: '#1237',
      mesa: 'Mesa 9',
      items: [
        { nombre: 'Hamburguesa Gourmet', cantidad: 1, enOferta: true },
        { nombre: 'Ensalada César', cantidad: 1, enOferta: false },
        { nombre: 'Mojito Clásico', cantidad: 1, enOferta: true },
      ],
      total: 27.00,
      estado: 'Preparando',
      mesero: 'Carlos Ramírez',
      startTime: new Date(Date.now() - 15 * 60 * 1000), // 15 minutes ago
    },
  ];

  const formatElapsedTime = (startTime: Date) => {
    const elapsed = Math.floor((currentTime.getTime() - startTime.getTime()) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const getTimeColor = (startTime: Date) => {
    const elapsed = Math.floor((currentTime.getTime() - startTime.getTime()) / 1000 / 60);
    if (elapsed > 20) return 'text-red-400';
    if (elapsed > 10) return 'text-amber-400';
    return 'text-[#06b6d4]';
  };

  const preparingOrders = activeOrders.filter(o => o.estado === 'Preparando');
  const readyOrders = activeOrders.filter(o => o.estado === 'Listo');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-[#e4e4e7] mb-2">
          Pedidos Activos
        </h1>
        <p className="text-[#a1a1aa]">
          Monitorea pedidos en tiempo real
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-[#16161d] to-[#1f1f2e] p-5 rounded-xl border border-[#27273a]">
          <p className="text-sm text-[#a1a1aa] mb-1">Total Activos</p>
          <p className="text-2xl font-semibold text-[#e4e4e7]">{activeOrders.length}</p>
        </div>
        <div className="bg-gradient-to-br from-[#16161d] to-[#1f1f2e] p-5 rounded-xl border border-[#27273a]">
          <p className="text-sm text-[#a1a1aa] mb-1">En Preparación</p>
          <p className="text-2xl font-semibold text-[#06b6d4]">{preparingOrders.length}</p>
        </div>
        <div className="bg-gradient-to-br from-[#16161d] to-[#1f1f2e] p-5 rounded-xl border border-[#27273a]">
          <p className="text-sm text-[#a1a1aa] mb-1">Listos para Servir</p>
          <p className="text-2xl font-semibold text-[#10b981]">{readyOrders.length}</p>
        </div>
      </div>

      {/* Preparing Orders */}
      <div>
        <h2 className="text-xl font-semibold text-[#e4e4e7] mb-4 flex items-center gap-2">
          <ChefHat className="w-5 h-5 text-[#06b6d4]" />
          En Preparación
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {preparingOrders.map((order) => (
            <div
              key={order.id}
              className="bg-gradient-to-br from-[#16161d] to-[#1f1f2e] rounded-xl border border-[#27273a] hover:border-[#06b6d4]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] overflow-hidden"
            >
              {/* Header */}
              <div className="bg-[#06b6d4]/10 border-b border-[#27273a] p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-semibold text-[#06b6d4]">{order.mesa}</span>
                  <span className="text-sm text-[#71717a]">{order.id}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className={`w-4 h-4 ${getTimeColor(order.startTime)}`} />
                  <span className={`text-xl font-bold font-mono ${getTimeColor(order.startTime)}`}>
                    {formatElapsedTime(order.startTime)}
                  </span>
                </div>
              </div>

              {/* Items */}
              <div className="p-4 space-y-2">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex items-start justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-[#a1a1aa]">{item.cantidad}x</span>
                      <span className="text-[#e4e4e7]">{item.nombre}</span>
                    </div>
                    {item.enOferta && (
                      <Percent className="w-4 h-4 text-[#10b981] flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-[#27273a] flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#71717a] mb-1">Mesero</p>
                  <p className="text-sm text-[#e4e4e7]">{order.mesero}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-[#71717a] mb-1">Total</p>
                  <p className="text-lg font-semibold text-[#06b6d4]">${order.total.toFixed(2)}</p>
                </div>
              </div>

              {/* Action */}
              <div className="p-4 pt-0">
                <Button
                  className="w-full bg-gradient-to-r from-[#06b6d4] to-[#10b981] text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                >
                  Marcar como Listo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ready Orders */}
      {readyOrders.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-[#e4e4e7] mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
            Listos para Servir
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {readyOrders.map((order) => (
              <div
                key={order.id}
                className="bg-gradient-to-br from-[#16161d] to-[#1f1f2e] rounded-xl border border-[#10b981]/30 hover:border-[#10b981]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] overflow-hidden"
              >
                {/* Header */}
                <div className="bg-[#10b981]/10 border-b border-[#27273a] p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-semibold text-[#10b981]">{order.mesa}</span>
                    <span className="text-sm text-[#71717a]">{order.id}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
                    <span className="text-sm font-medium text-[#10b981]">LISTO</span>
                  </div>
                </div>

                {/* Items */}
                <div className="p-4 space-y-2">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex items-start justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-[#a1a1aa]">{item.cantidad}x</span>
                        <span className="text-[#e4e4e7]">{item.nombre}</span>
                      </div>
                      {item.enOferta && (
                        <Percent className="w-4 h-4 text-[#10b981] flex-shrink-0" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-[#27273a] flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[#71717a] mb-1">Mesero</p>
                    <p className="text-sm text-[#e4e4e7]">{order.mesero}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-[#71717a] mb-1">Total</p>
                    <p className="text-lg font-semibold text-[#10b981]">${order.total.toFixed(2)}</p>
                  </div>
                </div>

                {/* Action */}
                <div className="p-4 pt-0">
                  <Button
                    className="w-full bg-gradient-to-r from-[#10b981] to-[#22c55e] text-white hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                  >
                    Marcar como Entregado
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
