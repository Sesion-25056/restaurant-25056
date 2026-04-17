import { X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';

interface User {
  id: string;
  nombreCompleto: string;
  rol: string;
}

interface PermissionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
  onSave: (userId: string, permissions: string[]) => void;
}

const permissionsByModule = {
  'Gestión de Pedidos': [
    { id: 'crear_pedidos', label: 'Crear Pedidos' },
    { id: 'editar_pedidos', label: 'Editar Pedidos' },
    { id: 'eliminar_pedidos', label: 'Eliminar Pedidos' },
    { id: 'ver_historial', label: 'Ver Historial' },
  ],
  'Gestión de Productos': [
    { id: 'crear_productos', label: 'Crear Productos' },
    { id: 'editar_productos', label: 'Editar Productos' },
    { id: 'eliminar_productos', label: 'Eliminar Productos' },
    { id: 'gestionar_inventario', label: 'Gestionar Inventario' },
  ],
  'Gestión de Usuarios': [
    { id: 'crear_usuarios', label: 'Crear Usuarios' },
    { id: 'editar_usuarios', label: 'Editar Usuarios' },
    { id: 'eliminar_usuarios', label: 'Eliminar Usuarios' },
    { id: 'gestionar_permisos', label: 'Gestionar Permisos' },
  ],
  'Reportes y Analíticas': [
    { id: 'ver_reportes', label: 'Ver Reportes' },
    { id: 'exportar_datos', label: 'Exportar Datos' },
    { id: 'ver_estadisticas', label: 'Ver Estadísticas' },
  ],
};

export function PermissionsModal({ isOpen, onClose, user, onSave }: PermissionsModalProps) {
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);

  useEffect(() => {
    if (user) {
      // Initialize with default permissions based on role
      if (user.rol === 'Administrador') {
        const allPermissions = Object.values(permissionsByModule).flat().map(p => p.id);
        setSelectedPermissions(allPermissions);
      } else if (user.rol === 'Mesero') {
        setSelectedPermissions(['crear_pedidos', 'ver_historial', 'ver_estadisticas']);
      } else if (user.rol === 'Chef') {
        setSelectedPermissions(['ver_historial', 'gestionar_inventario', 'ver_estadisticas']);
      }
    }
  }, [user]);

  if (!isOpen || !user) return null;

  const handlePermissionToggle = (permissionId: string) => {
    setSelectedPermissions(prev => 
      prev.includes(permissionId)
        ? prev.filter(id => id !== permissionId)
        : [...prev, permissionId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(user.id, selectedPermissions);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#16161d] border border-[#27273a] rounded-xl w-full max-w-2xl shadow-2xl shadow-[#ec4899]/10 max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#27273a]">
          <div>
            <h2 className="text-xl font-semibold text-[#e4e4e7]">Gestionar Permisos</h2>
            <p className="text-sm text-[#a1a1aa] mt-1">
              {user.nombreCompleto} - <span className="text-[#ec4899]">{user.rol}</span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-[#a1a1aa] hover:text-[#e4e4e7] transition-colors p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {Object.entries(permissionsByModule).map(([module, permissions]) => (
              <div key={module} className="space-y-3">
                <h3 className="text-sm font-semibold text-[#e4e4e7] flex items-center gap-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-[#ec4899]/50 to-transparent" />
                  {module}
                  <div className="h-px flex-1 bg-gradient-to-l from-[#ec4899]/50 to-transparent" />
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {permissions.map(permission => (
                    <div
                      key={permission.id}
                      className="flex items-center gap-3 p-3 rounded-lg bg-[#1f1f2e] border border-[#27273a] hover:border-[#ec4899]/30 transition-colors"
                    >
                      <Checkbox
                        id={permission.id}
                        checked={selectedPermissions.includes(permission.id)}
                        onCheckedChange={() => handlePermissionToggle(permission.id)}
                        className="border-[#27273a] data-[state=checked]:bg-[#ec4899] data-[state=checked]:border-[#ec4899]"
                      />
                      <Label
                        htmlFor={permission.id}
                        className="text-sm text-[#e4e4e7] cursor-pointer flex-1"
                      >
                        {permission.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3 p-6 border-t border-[#27273a]">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 bg-transparent border-[#27273a] text-[#a1a1aa] hover:bg-[#1f1f2e] hover:text-[#e4e4e7]"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-[#ec4899] to-[#f43f5e] text-white hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-shadow"
            >
              Guardar Permisos
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
