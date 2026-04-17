import { Users, LayoutDashboard, ShoppingCart, BarChart3, Settings, Package } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Panel Principal', icon: LayoutDashboard },
    { id: 'users', label: 'Usuarios', icon: Users },
    { id: 'orders', label: 'Pedidos', icon: ShoppingCart },
    { id: 'products', label: 'Productos', icon: Package },
    { id: 'analytics', label: 'Analíticas', icon: BarChart3 },
    { id: 'settings', label: 'Configuración', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-[#12121a] border-r border-[#27273a] flex flex-col h-screen sticky top-0">
      {/* Logo/Brand */}
      <div className="p-6 border-b border-[#27273a]">
        <h1 className="text-xl font-semibold bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] bg-clip-text text-transparent">
          POS Restaurant
        </h1>
        <p className="text-xs text-[#a1a1aa] mt-1">Sistema de Gestión</p>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-lg
                transition-all duration-200 text-sm
                ${isActive 
                  ? 'bg-gradient-to-r from-[#06b6d4]/20 to-[#8b5cf6]/20 text-[#06b6d4] shadow-[0_0_20px_rgba(6,182,212,0.3)]' 
                  : 'text-[#a1a1aa] hover:text-[#e4e4e7] hover:bg-[#1f1f2e]'
                }
              `}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]' : ''}`} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-[#27273a]">
        <div className="flex items-center gap-3 p-3 bg-[#1f1f2e] rounded-lg">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#06b6d4] to-[#8b5cf6] flex items-center justify-center text-sm font-semibold">
            AD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-[#e4e4e7] truncate">Administrador</p>
            <p className="text-xs text-[#a1a1aa] truncate">admin@restaurant.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
