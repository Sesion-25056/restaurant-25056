import { useState } from 'react';
import { ExpandableSidebar } from './components/ExpandableSidebar';
import { DashboardView } from './components/DashboardView';
import { ActiveOrdersView } from './components/ActiveOrdersView';
import { OrderHistoryView } from './components/OrderHistoryView';
import { ProductGalleryView } from './components/ProductGalleryView';
import { CategoriesView } from './components/CategoriesView';
import { UserTable } from './components/UserTable';
import { AddUserModal } from './components/AddUserModal';
import { EditUserModal } from './components/EditUserModal';
import { PermissionsModal } from './components/PermissionsModal';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Search, UserPlus, Filter } from 'lucide-react';

interface User {
  id: string;
  nombreCompleto: string;
  email: string;
  rol: string;
  estado: 'Activo' | 'Inactivo';
  ultimoInicioSesion: string;
}

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isPermissionsModalOpen, setIsPermissionsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRole, setFilterRole] = useState('all');

  const [users, setUsers] = useState<User[]>([
    {
      id: '1',
      nombreCompleto: 'María García López',
      email: 'maria.garcia@restaurant.com',
      rol: 'Administrador',
      estado: 'Activo',
      ultimoInicioSesion: '16 Abril 2026, 14:30',
    },
    {
      id: '2',
      nombreCompleto: 'Carlos Ramírez Soto',
      email: 'carlos.ramirez@restaurant.com',
      rol: 'Mesero',
      estado: 'Activo',
      ultimoInicioSesion: '16 Abril 2026, 13:15',
    },
    {
      id: '3',
      nombreCompleto: 'Ana Martínez Cruz',
      email: 'ana.martinez@restaurant.com',
      rol: 'Chef',
      estado: 'Activo',
      ultimoInicioSesion: '16 Abril 2026, 12:00',
    },
    {
      id: '4',
      nombreCompleto: 'Roberto Fernández Díaz',
      email: 'roberto.fernandez@restaurant.com',
      rol: 'Mesero',
      estado: 'Activo',
      ultimoInicioSesion: '15 Abril 2026, 22:45',
    },
    {
      id: '5',
      nombreCompleto: 'Laura Sánchez Ruiz',
      email: 'laura.sanchez@restaurant.com',
      rol: 'Chef',
      estado: 'Inactivo',
      ultimoInicioSesion: '10 Abril 2026, 18:20',
    },
    {
      id: '6',
      nombreCompleto: 'José Luis Torres Vega',
      email: 'jose.torres@restaurant.com',
      rol: 'Mesero',
      estado: 'Activo',
      ultimoInicioSesion: '16 Abril 2026, 10:30',
    },
    {
      id: '7',
      nombreCompleto: 'Patricia Gómez Morales',
      email: 'patricia.gomez@restaurant.com',
      rol: 'Administrador',
      estado: 'Activo',
      ultimoInicioSesion: '16 Abril 2026, 09:00',
    },
    {
      id: '8',
      nombreCompleto: 'Miguel Ángel Herrera',
      email: 'miguel.herrera@restaurant.com',
      rol: 'Chef',
      estado: 'Activo',
      ultimoInicioSesion: '16 Abril 2026, 11:45',
    },
  ]);

  const handleAddUser = (newUserData: {
    nombreCompleto: string;
    email: string;
    rol: string;
    password: string;
  }) => {
    const newUser: User = {
      id: (users.length + 1).toString(),
      nombreCompleto: newUserData.nombreCompleto,
      email: newUserData.email,
      rol: newUserData.rol,
      estado: 'Activo',
      ultimoInicioSesion: 'Nunca',
    };
    setUsers([...users, newUser]);
  };

  const handleEditUser = (updatedUser: User) => {
    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
  };

  const handleDeleteUser = (userId: string) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleManagePermissions = (user: User) => {
    setSelectedUser(user);
    setIsPermissionsModalOpen(true);
  };

  const handleSavePermissions = (userId: string, permissions: string[]) => {
    console.log(`Permissions saved for user ${userId}:`, permissions);
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.nombreCompleto.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = filterRole === 'all' || user.rol === filterRole;
    return matchesSearch && matchesRole;
  });

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardView />;
      
      case 'pedidos':
      case 'pedidos-activos':
        return <ActiveOrdersView />;
      
      case 'pedidos-historial':
        return <OrderHistoryView />;
      
      case 'productos':
      case 'productos-menu':
        return <ProductGalleryView />;
      
      case 'productos-categorias':
        return <CategoriesView />;
      
      case 'users':
        return (
          <div className="space-y-6">
            {/* Header */}
            <div>
              <h1 className="text-3xl font-semibold text-[#e4e4e7] mb-2">
                Gestión de Usuarios
              </h1>
              <p className="text-[#a1a1aa]">
                Administra usuarios, roles y permisos del sistema POS
              </p>
            </div>

            {/* Search and Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#a1a1aa]" />
                <Input
                  type="text"
                  placeholder="Buscar por nombre o correo..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-[#16161d] border-[#27273a] text-[#e4e4e7] placeholder:text-[#71717a] focus:border-[#06b6d4] focus:ring-[#06b6d4]/20"
                />
              </div>

              <div className="flex gap-3">
                <Select value={filterRole} onValueChange={setFilterRole}>
                  <SelectTrigger className="w-[180px] bg-[#16161d] border-[#27273a] text-[#e4e4e7] focus:border-[#06b6d4] focus:ring-[#06b6d4]/20">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Filtrar por rol" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#16161d] border-[#27273a]">
                    <SelectItem value="all" className="text-[#e4e4e7] focus:bg-[#1f1f2e] focus:text-[#06b6d4]">
                      Todos los Roles
                    </SelectItem>
                    <SelectItem value="Administrador" className="text-[#e4e4e7] focus:bg-[#1f1f2e] focus:text-[#06b6d4]">
                      Administrador
                    </SelectItem>
                    <SelectItem value="Mesero" className="text-[#e4e4e7] focus:bg-[#1f1f2e] focus:text-[#06b6d4]">
                      Mesero
                    </SelectItem>
                    <SelectItem value="Chef" className="text-[#e4e4e7] focus:bg-[#1f1f2e] focus:text-[#06b6d4]">
                      Chef
                    </SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  onClick={() => setIsAddModalOpen(true)}
                  className="bg-gradient-to-r from-[#06b6d4] to-[#10b981] text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-shadow"
                >
                  <UserPlus className="w-4 h-4 mr-2" />
                  Añadir Nuevo Usuario
                </Button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-[#16161d] to-[#1f1f2e] p-6 rounded-xl border border-[#27273a] hover:border-[#06b6d4]/30 transition-colors">
                <p className="text-sm text-[#a1a1aa] mb-2">Total Usuarios</p>
                <p className="text-3xl font-semibold text-[#e4e4e7]">{users.length}</p>
              </div>
              <div className="bg-gradient-to-br from-[#16161d] to-[#1f1f2e] p-6 rounded-xl border border-[#27273a] hover:border-[#06b6d4]/30 transition-colors">
                <p className="text-sm text-[#a1a1aa] mb-2">Administradores</p>
                <p className="text-3xl font-semibold text-[#06b6d4]">
                  {users.filter(u => u.rol === 'Administrador').length}
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#16161d] to-[#1f1f2e] p-6 rounded-xl border border-[#27273a] hover:border-[#8b5cf6]/30 transition-colors">
                <p className="text-sm text-[#a1a1aa] mb-2">Meseros</p>
                <p className="text-3xl font-semibold text-[#8b5cf6]">
                  {users.filter(u => u.rol === 'Mesero').length}
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#16161d] to-[#1f1f2e] p-6 rounded-xl border border-[#27273a] hover:border-[#ec4899]/30 transition-colors">
                <p className="text-sm text-[#a1a1aa] mb-2">Chefs</p>
                <p className="text-3xl font-semibold text-[#ec4899]">
                  {users.filter(u => u.rol === 'Chef').length}
                </p>
              </div>
            </div>

            {/* User Table */}
            <UserTable
              users={filteredUsers}
              onEdit={(user) => {
                setSelectedUser(user);
                setIsEditModalOpen(true);
              }}
              onManagePermissions={handleManagePermissions}
              onDelete={handleDeleteUser}
            />

            {/* Pagination Info */}
            <div className="mt-6 flex items-center justify-between text-sm text-[#a1a1aa]">
              <p>
                Mostrando <span className="text-[#e4e4e7] font-medium">{filteredUsers.length}</span> de{' '}
                <span className="text-[#e4e4e7] font-medium">{users.length}</span> usuarios
              </p>
            </div>
          </div>
        );
      
      case 'analytics':
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-semibold text-[#e4e4e7] mb-2">
                Analíticas
              </h1>
              <p className="text-[#a1a1aa]">
                Reportes y métricas del restaurante
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#16161d] to-[#1f1f2e] p-12 rounded-xl border border-[#27273a] text-center">
              <p className="text-[#a1a1aa]">Módulo de analíticas en desarrollo</p>
            </div>
          </div>
        );
      
      case 'settings':
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-semibold text-[#e4e4e7] mb-2">
                Configuración
              </h1>
              <p className="text-[#a1a1aa]">
                Ajustes del sistema POS
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#16161d] to-[#1f1f2e] p-12 rounded-xl border border-[#27273a] text-center">
              <p className="text-[#a1a1aa]">Módulo de configuración en desarrollo</p>
            </div>
          </div>
        );
      
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#0a0a0f] dark">
      <ExpandableSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 p-8">
        {renderContent()}
      </main>

      {/* Modals */}
      <AddUserModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddUser}
      />

      <EditUserModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSubmit={handleEditUser}
        user={selectedUser}
      />

      <PermissionsModal
        isOpen={isPermissionsModalOpen}
        onClose={() => setIsPermissionsModalOpen(false)}
        user={selectedUser}
        onSave={handleSavePermissions}
      />
    </div>
  );
}

export default App;