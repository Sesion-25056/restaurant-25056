import { Plus } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface OfferCardProps {
  image: string;
  name: string;
  description: string;
  originalPrice: number;
  offerPrice: number;
  discount: string;
}

export function OfferCard({
  image,
  name,
  description,
  originalPrice,
  offerPrice,
  discount,
}: OfferCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {/* Discount Badge */}
        <div className="absolute top-3 right-3 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-bold shadow-lg">
          {discount}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="font-bold text-lg text-foreground line-clamp-1">{name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground line-through">
            ${originalPrice.toFixed(2)}
          </span>
          <span className="text-2xl font-bold text-primary">
            ${offerPrice.toFixed(2)}
          </span>
        </div>

        {/* Action Button */}
        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all group-hover:scale-105">
          <Plus className="w-5 h-5" />
          <span className="font-medium">Agregar</span>
        </button>
      </div>
    </div>
  );
}
