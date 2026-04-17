import { Edit2, Shield, Trash2 } from 'lucide-react';
import { Button } from './ui/button';

interface User {
  id: string;
  nombreCompleto: string;
  email: string;
  rol: string;
  estado: 'Activo' | 'Inactivo';
  ultimoInicioSesion: string;
}

interface UserTableProps {
  users: User[];
  onEdit: (user: User) => void;
  onManagePermissions: (user: User) => void;
  onDelete: (userId: string) => void;
}

export function UserTable({ users, onEdit, onManagePermissions, onDelete }: UserTableProps) {
  const getRoleBadgeColor = (rol: string) => {
    switch (rol) {
      case 'Administrador':
        return 'bg-gradient-to-r from-[#06b6d4]/20 to-[#8b5cf6]/20 text-[#06b6d4] border-[#06b6d4]/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]';
      case 'Mesero':
        return 'bg-gradient-to-r from-[#8b5cf6]/20 to-[#ec4899]/20 text-[#8b5cf6] border-[#8b5cf6]/30 shadow-[0_0_10px_rgba(139,92,246,0.2)]';
      case 'Chef':
        return 'bg-gradient-to-r from-[#ec4899]/20 to-[#f43f5e]/20 text-[#ec4899] border-[#ec4899]/30 shadow-[0_0_10px_rgba(236,72,153,0.2)]';
      default:
        return 'bg-[#27273a] text-[#a1a1aa] border-[#27273a]';
    }
  };

  const getStatusBadgeColor = (estado: string) => {
    return estado === 'Activo'
      ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
      : 'bg-red-500/20 text-red-400 border-red-500/30';
  };

  return (
    <div className="overflow-x-auto rounded-lg border border-[#27273a]">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#27273a] bg-[#12121a]">
            <th className="text-left p-4 text-sm font-semibold text-[#a1a1aa] uppercase tracking-wide">
              Nombre Completo
            </th>
            <th className="text-left p-4 text-sm font-semibold text-[#a1a1aa] uppercase tracking-wide">
              Rol
            </th>
            <th className="text-left p-4 text-sm font-semibold text-[#a1a1aa] uppercase tracking-wide">
              Estado
            </th>
            <th className="text-left p-4 text-sm font-semibold text-[#a1a1aa] uppercase tracking-wide">
              Último Inicio de Sesión
            </th>
            <th className="text-right p-4 text-sm font-semibold text-[#a1a1aa] uppercase tracking-wide">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user.id}
              className={`
                border-b border-[#27273a] hover:bg-[#1f1f2e]/50 transition-colors
                ${index % 2 === 0 ? 'bg-[#16161d]' : 'bg-[#12121a]'}
              `}
            >
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#06b6d4] to-[#8b5cf6] flex items-center justify-center text-sm font-semibold">
                    {user.nombreCompleto.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-medium text-[#e4e4e7]">{user.nombreCompleto}</p>
                    <p className="text-sm text-[#a1a1aa]">{user.email}</p>
                  </div>
                </div>
              </td>
              <td className="p-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getRoleBadgeColor(user.rol)}`}>
                  {user.rol}
                </span>
              </td>
              <td className="p-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusBadgeColor(user.estado)}`}>
                  <span className={`w-1.5 h-1.5 rounded-full mr-2 ${user.estado === 'Activo' ? 'bg-emerald-400' : 'bg-red-400'}`} />
                  {user.estado}
                </span>
              </td>
              <td className="p-4 text-sm text-[#a1a1aa]">
                {user.ultimoInicioSesion}
              </td>
              <td className="p-4">
                <div className="flex items-center justify-end gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onEdit(user)}
                    className="text-[#a1a1aa] hover:text-[#8b5cf6] hover:bg-[#8b5cf6]/10 transition-colors"
                    title="Editar"
                  >
                    <Edit2 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onManagePermissions(user)}
                    className="text-[#a1a1aa] hover:text-[#ec4899] hover:bg-[#ec4899]/10 transition-colors"
                    title="Gestionar Permisos"
                  >
                    <Shield className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onDelete(user.id)}
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
  );
}
