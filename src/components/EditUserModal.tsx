import { X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface User {
  id: string;
  nombreCompleto: string;
  email: string;
  rol: string;
  estado: 'Activo' | 'Inactivo';
  ultimoInicioSesion: string;
}

interface EditUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (user: User) => void;
  user: User | null;
}

export function EditUserModal({ isOpen, onClose, onSubmit, user }: EditUserModalProps) {
  const [formData, setFormData] = useState<User | null>(null);

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  if (!isOpen || !formData) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#16161d] border border-[#27273a] rounded-xl w-full max-w-md shadow-2xl shadow-[#8b5cf6]/10">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#27273a]">
          <h2 className="text-xl font-semibold text-[#e4e4e7]">Editar Usuario</h2>
          <button
            onClick={onClose}
            className="text-[#a1a1aa] hover:text-[#e4e4e7] transition-colors p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="space-y-2">
            <Label htmlFor="edit-nombreCompleto" className="text-[#e4e4e7]">
              Nombre Completo
            </Label>
            <Input
              id="edit-nombreCompleto"
              value={formData.nombreCompleto}
              onChange={(e) => setFormData({ ...formData, nombreCompleto: e.target.value })}
              placeholder="Juan Pérez González"
              required
              className="bg-[#1f1f2e] border-[#27273a] text-[#e4e4e7] placeholder:text-[#71717a] focus:border-[#8b5cf6] focus:ring-[#8b5cf6]/20"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-email" className="text-[#e4e4e7]">
              Correo Electrónico
            </Label>
            <Input
              id="edit-email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="juan@restaurant.com"
              required
              className="bg-[#1f1f2e] border-[#27273a] text-[#e4e4e7] placeholder:text-[#71717a] focus:border-[#8b5cf6] focus:ring-[#8b5cf6]/20"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-rol" className="text-[#e4e4e7]">
              Rol
            </Label>
            <Select value={formData.rol} onValueChange={(value) => setFormData({ ...formData, rol: value })}>
              <SelectTrigger className="bg-[#1f1f2e] border-[#27273a] text-[#e4e4e7] focus:border-[#8b5cf6] focus:ring-[#8b5cf6]/20">
                <SelectValue placeholder="Selecciona un rol" />
              </SelectTrigger>
              <SelectContent className="bg-[#16161d] border-[#27273a]">
                <SelectItem value="Administrador" className="text-[#e4e4e7] focus:bg-[#1f1f2e] focus:text-[#8b5cf6]">
                  Administrador
                </SelectItem>
                <SelectItem value="Mesero" className="text-[#e4e4e7] focus:bg-[#1f1f2e] focus:text-[#8b5cf6]">
                  Mesero
                </SelectItem>
                <SelectItem value="Chef" className="text-[#e4e4e7] focus:bg-[#1f1f2e] focus:text-[#8b5cf6]">
                  Chef
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-estado" className="text-[#e4e4e7]">
              Estado
            </Label>
            <Select value={formData.estado} onValueChange={(value: 'Activo' | 'Inactivo') => setFormData({ ...formData, estado: value })}>
              <SelectTrigger className="bg-[#1f1f2e] border-[#27273a] text-[#e4e4e7] focus:border-[#8b5cf6] focus:ring-[#8b5cf6]/20">
                <SelectValue placeholder="Selecciona un estado" />
              </SelectTrigger>
              <SelectContent className="bg-[#16161d] border-[#27273a]">
                <SelectItem value="Activo" className="text-[#e4e4e7] focus:bg-[#1f1f2e] focus:text-[#8b5cf6]">
                  Activo
                </SelectItem>
                <SelectItem value="Inactivo" className="text-[#e4e4e7] focus:bg-[#1f1f2e] focus:text-[#8b5cf6]">
                  Inactivo
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
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
              className="flex-1 bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-shadow"
            >
              Guardar Cambios
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
