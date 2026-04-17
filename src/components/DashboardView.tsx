import { TrendingUp, TrendingDown, DollarSign, ShoppingBag, Users as UsersIcon, Package } from 'lucide-react';

export function DashboardView() {
  const stats = [
    {
      label: 'Ventas Hoy',
      value: '$2,847.50',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'from-[#06b6d4] to-[#10b981]',
    },
    {
      label: 'Pedidos Activos',
      value: '24',
      change: '+8',
      trend: 'up',
      icon: ShoppingBag,
      color: 'from-[#10b981] to-[#22c55e]',
    },
    {
      label: 'Productos en Oferta',
      value: '12',
      change: '-2',
      trend: 'down',
      icon: Package,
      color: 'from-[#8b5cf6] to-[#ec4899]',
    },
    {
      label: 'Usuarios Activos',
      value: '8',
      change: '+2',
      trend: 'up',
      icon: UsersIcon,
      color: 'from-[#ec4899] to-[#f43f5e]',
    },
  ];

  const recentOrders = [
    { id: '#1245', mesa: 'Mesa 7', items: 'Hamburguesa Clásica x2, Cerveza Artesanal x1', total: '$45.50', estado: 'Preparando' },
    { id: '#1244', mesa: 'Mesa 3', items: 'Pizza Margherita, Mojito x2', total: '$62.00', estado: 'Entregado' },
    { id: '#1243', mesa: 'Mesa 12', items: 'Tacos al Pastor x3, Cerveza x2', total: '$38.75', estado: 'Preparando' },
    { id: '#1242', mesa: 'Mesa 5', items: 'Sushi Roll Especial, Ensalada César', total: '$54.20', estado: 'Pendiente' },
  ];

  const topProducts = [
    { nombre: 'Hamburguesa Gourmet', ventas: 45, revenue: '$675.00', trend: 'up' },
    { nombre: 'Pizza Margherita', ventas: 38, revenue: '$608.00', trend: 'up' },
    { nombre: 'Tacos al Pastor', ventas: 52, revenue: '$520.00', trend: 'up' },
    { nombre: 'Cerveza Artesanal', ventas: 67, revenue: '$335.00', trend: 'down' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-[#e4e4e7] mb-2">
          Panel Principal
        </h1>
        <p className="text-[#a1a1aa]">
          Resumen de operaciones del día - {new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-gradient-to-br from-[#16161d] to-[#1f1f2e] p-6 rounded-xl border border-[#27273a] hover:border-[#06b6d4]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className={`flex items-center gap-1 text-sm ${stat.trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
                  {stat.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  <span>{stat.change}</span>
                </div>
              </div>
              <p className="text-sm text-[#a1a1aa] mb-1">{stat.label}</p>
              <p className="text-3xl font-semibold text-[#e4e4e7]">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-gradient-to-br from-[#16161d] to-[#1f1f2e] rounded-xl border border-[#27273a] overflow-hidden">
          <div className="p-6 border-b border-[#27273a]">
            <h2 className="text-xl font-semibold text-[#e4e4e7]">Pedidos Recientes</h2>
          </div>
          <div className="p-6 space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-start gap-4 p-4 rounded-lg bg-[#1f1f2e] border border-[#27273a] hover:border-[#06b6d4]/20 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-semibold text-[#06b6d4]">{order.id}</span>
                    <span className="text-sm text-[#a1a1aa]">•</span>
                    <span className="text-sm text-[#e4e4e7]">{order.mesa}</span>
                  </div>
                  <p className="text-sm text-[#a1a1aa] mb-2">{order.items}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-[#e4e4e7]">{order.total}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.estado === 'Entregado' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                      order.estado === 'Preparando' ? 'bg-[#06b6d4]/20 text-[#06b6d4] border border-[#06b6d4]/30' :
                      'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    }`}>
                      {order.estado}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-gradient-to-br from-[#16161d] to-[#1f1f2e] rounded-xl border border-[#27273a] overflow-hidden">
          <div className="p-6 border-b border-[#27273a]">
            <h2 className="text-xl font-semibold text-[#e4e4e7]">Productos Más Vendidos</h2>
          </div>
          <div className="p-6 space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-[#1f1f2e] border border-[#27273a]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#06b6d4] to-[#10b981] flex items-center justify-center text-lg font-bold text-white">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-[#e4e4e7] mb-1">{product.nombre}</p>
                  <p className="text-sm text-[#a1a1aa]">{product.ventas} unidades vendidas</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-[#06b6d4]">{product.revenue}</p>
                  <div className={`flex items-center gap-1 text-xs ${product.trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
                    {product.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
