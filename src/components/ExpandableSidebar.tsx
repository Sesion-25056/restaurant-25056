import { Users, LayoutDashboard, ShoppingCart, BarChart3, Settings, Package, ChevronDown, ChevronRight, FileText, ClipboardList } from 'lucide-react';
import { useState } from 'react';

interface ExpandableSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function ExpandableSidebar({ activeTab, setActiveTab }: ExpandableSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(['pedidos', 'productos']);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const menuItems = [
    { id: 'dashboard', label: 'Panel Principal', icon: LayoutDashboard },
    {
      id: 'pedidos',
      label: 'Pedidos',
      icon: ShoppingCart,
      expandable: true,
      subItems: [
        { id: 'pedidos-activos', label: 'Pedidos Activos', icon: ClipboardList },
        { id: 'pedidos-historial', label: 'Historial', icon: FileText },
      ],
    },
    {
      id: 'productos',
      label: 'Productos',
      icon: Package,
      expandable: true,
      subItems: [
        { id: 'productos-menu', label: 'Menú Completo', icon: FileText },
        { id: 'productos-categorias', label: 'Categorías', icon: ClipboardList },
      ],
    },
    { id: 'users', label: 'Usuarios', icon: Users },
    { id: 'analytics', label: 'Analíticas', icon: BarChart3 },
    { id: 'settings', label: 'Configuración', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-[#12121a] border-r border-[#27273a] flex flex-col h-screen sticky top-0">
      {/* Logo/Brand */}
      <div className="p-6 border-b border-[#27273a]">
        <h1 className="text-xl font-semibold bg-gradient-to-r from-[#06b6d4] to-[#10b981] bg-clip-text text-transparent">
          POS Restaurant
        </h1>
        <p className="text-xs text-[#a1a1aa] mt-1">Sistema de Gestión</p>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          const isExpanded = expandedSections.includes(item.id);
          
          return (
            <div key={item.id}>
              <button
                onClick={() => {
                  if (item.expandable) {
                    toggleSection(item.id);
                  }
                  setActiveTab(item.id);
                }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-lg
                  transition-all duration-200 text-sm
                  ${isActive && !item.expandable
                    ? 'bg-gradient-to-r from-[#06b6d4]/20 to-[#10b981]/20 text-[#06b6d4] shadow-[0_0_20px_rgba(6,182,212,0.3)]' 
                    : 'text-[#a1a1aa] hover:text-[#e4e4e7] hover:bg-[#1f1f2e]'
                  }
                `}
              >
                <Icon className={`w-5 h-5 ${isActive && !item.expandable ? 'drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]' : ''}`} />
                <span className="flex-1 text-left">{item.label}</span>
                {item.expandable && (
                  isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />
                )}
              </button>

              {/* Sub-items */}
              {item.expandable && isExpanded && item.subItems && (
                <div className="mt-1 ml-4 space-y-1">
                  {item.subItems.map((subItem) => {
                    const SubIcon = subItem.icon;
                    const isSubActive = activeTab === subItem.id;
                    
                    return (
                      <button
                        key={subItem.id}
                        onClick={() => setActiveTab(subItem.id)}
                        className={`
                          w-full flex items-center gap-3 px-4 py-2 rounded-lg
                          transition-all duration-200 text-sm
                          ${isSubActive
                            ? 'bg-gradient-to-r from-[#06b6d4]/20 to-[#10b981]/20 text-[#06b6d4] shadow-[0_0_15px_rgba(6,182,212,0.2)]' 
                            : 'text-[#71717a] hover:text-[#e4e4e7] hover:bg-[#1f1f2e]/50'
                          }
                        `}
                      >
                        <SubIcon className={`w-4 h-4 ${isSubActive ? 'drop-shadow-[0_0_6px_rgba(6,182,212,0.6)]' : ''}`} />
                        <span>{subItem.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-[#27273a]">
        <div className="flex items-center gap-3 p-3 bg-[#1f1f2e] rounded-lg">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#06b6d4] to-[#10b981] flex items-center justify-center text-sm font-semibold">
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
