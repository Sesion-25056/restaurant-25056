import { X, Upload, ImagePlus } from 'lucide-react';
import { useState, useRef } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (product: {
    nombre: string;
    categoria: string;
    precio: number;
    precioOferta?: number;
    imagen: string;
    stock: number;
    enOferta: boolean;
  }) => void;
}

export function AddProductModal({ isOpen, onClose, onSubmit }: AddProductModalProps) {
  const [formData, setFormData] = useState({
    nombre: '',
    categoria: '',
    precio: '',
    precioOferta: '',
    stock: '',
    enOferta: false,
  });
  const [imagePreview, setImagePreview] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    onSubmit({
      nombre: formData.nombre,
      categoria: formData.categoria,
      precio: parseFloat(formData.precio),
      precioOferta: formData.enOferta && formData.precioOferta ? parseFloat(formData.precioOferta) : undefined,
      imagen: imagePreview || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400',
      stock: parseInt(formData.stock),
      enOferta: formData.enOferta,
    });
    
    // Reset form
    setFormData({
      nombre: '',
      categoria: '',
      precio: '',
      precioOferta: '',
      stock: '',
      enOferta: false,
    });
    setImagePreview('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#16161d] border border-[#27273a] rounded-xl w-full max-w-2xl shadow-2xl shadow-[#06b6d4]/10 max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#27273a]">
          <h2 className="text-xl font-semibold text-[#e4e4e7]">Añadir Nuevo Producto</h2>
          <button
            onClick={onClose}
            className="text-[#a1a1aa] hover:text-[#e4e4e7] transition-colors p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-5">
            {/* Image Upload */}
            <div className="space-y-2">
              <Label className="text-[#e4e4e7]">Imagen del Producto</Label>
              <div className="flex gap-4">
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="w-32 h-32 rounded-lg border-2 border-dashed border-[#27273a] hover:border-[#06b6d4] bg-[#1f1f2e] flex items-center justify-center cursor-pointer transition-colors overflow-hidden"
                >
                  {imagePreview ? (
                    <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-center">
                      <ImagePlus className="w-8 h-8 text-[#a1a1aa] mx-auto mb-2" />
                      <p className="text-xs text-[#71717a]">Subir imagen</p>
                    </div>
                  )}
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    className="mb-2 bg-transparent border-[#27273a] text-[#e4e4e7] hover:bg-[#1f1f2e] hover:border-[#06b6d4]"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Seleccionar Imagen
                  </Button>
                  <p className="text-xs text-[#71717a]">
                    Formatos: JPG, PNG. Máx 5MB
                  </p>
                </div>
              </div>
            </div>

            {/* Product Name */}
            <div className="space-y-2">
              <Label htmlFor="nombre" className="text-[#e4e4e7]">
                Nombre del Producto
              </Label>
              <Input
                id="nombre"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                placeholder="Ej: Hamburguesa Especial"
                required
                className="bg-[#1f1f2e] border-[#27273a] text-[#e4e4e7] placeholder:text-[#71717a] focus:border-[#06b6d4] focus:ring-[#06b6d4]/20"
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <Label htmlFor="categoria" className="text-[#e4e4e7]">
                Categoría
              </Label>
              <Select value={formData.categoria} onValueChange={(value) => setFormData({ ...formData, categoria: value })}>
                <SelectTrigger className="bg-[#1f1f2e] border-[#27273a] text-[#e4e4e7] focus:border-[#06b6d4] focus:ring-[#06b6d4]/20">
                  <SelectValue placeholder="Selecciona una categoría" />
                </SelectTrigger>
                <SelectContent className="bg-[#16161d] border-[#27273a]">
                  <SelectItem value="Comida Principal" className="text-[#e4e4e7] focus:bg-[#1f1f2e] focus:text-[#06b6d4]">
                    Comida Principal
                  </SelectItem>
                  <SelectItem value="Bebidas" className="text-[#e4e4e7] focus:bg-[#1f1f2e] focus:text-[#06b6d4]">
                    Bebidas
                  </SelectItem>
                  <SelectItem value="Postres" className="text-[#e4e4e7] focus:bg-[#1f1f2e] focus:text-[#06b6d4]">
                    Postres
                  </SelectItem>
                  <SelectItem value="Entradas" className="text-[#e4e4e7] focus:bg-[#1f1f2e] focus:text-[#06b6d4]">
                    Entradas
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Price and Stock */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="precio" className="text-[#e4e4e7]">
                  Precio ($)
                </Label>
                <Input
                  id="precio"
                  type="number"
                  step="0.01"
                  value={formData.precio}
                  onChange={(e) => setFormData({ ...formData, precio: e.target.value })}
                  placeholder="15.00"
                  required
                  className="bg-[#1f1f2e] border-[#27273a] text-[#e4e4e7] placeholder:text-[#71717a] focus:border-[#06b6d4] focus:ring-[#06b6d4]/20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="stock" className="text-[#e4e4e7]">
                  Stock (unidades)
                </Label>
                <Input
                  id="stock"
                  type="number"
                  value={formData.stock}
                  onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                  placeholder="50"
                  required
                  className="bg-[#1f1f2e] border-[#27273a] text-[#e4e4e7] placeholder:text-[#71717a] focus:border-[#06b6d4] focus:ring-[#06b6d4]/20"
                />
              </div>
            </div>

            {/* Offer Section */}
            <div className="space-y-3 p-4 rounded-lg bg-[#1f1f2e] border border-[#27273a]">
              <div className="flex items-center gap-3">
                <Checkbox
                  id="enOferta"
                  checked={formData.enOferta}
                  onCheckedChange={(checked) => setFormData({ ...formData, enOferta: checked as boolean })}
                  className="border-[#27273a] data-[state=checked]:bg-[#10b981] data-[state=checked]:border-[#10b981]"
                />
                <Label htmlFor="enOferta" className="text-[#e4e4e7] cursor-pointer flex-1">
                  Este producto está en oferta
                </Label>
              </div>

              {formData.enOferta && (
                <div className="space-y-2 pt-2">
                  <Label htmlFor="precioOferta" className="text-[#10b981]">
                    Precio de Oferta ($)
                  </Label>
                  <Input
                    id="precioOferta"
                    type="number"
                    step="0.01"
                    value={formData.precioOferta}
                    onChange={(e) => setFormData({ ...formData, precioOferta: e.target.value })}
                    placeholder="12.00"
                    className="bg-[#27273a] border-[#10b981]/30 text-[#e4e4e7] placeholder:text-[#71717a] focus:border-[#10b981] focus:ring-[#10b981]/20"
                  />
                  {formData.precio && formData.precioOferta && (
                    <p className="text-xs text-[#10b981]">
                      Descuento: {Math.round(((parseFloat(formData.precio) - parseFloat(formData.precioOferta)) / parseFloat(formData.precio)) * 100)}%
                    </p>
                  )}
                </div>
              )}
            </div>
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
              className="flex-1 bg-gradient-to-r from-[#06b6d4] to-[#10b981] text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-shadow"
            >
              Añadir Producto
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
