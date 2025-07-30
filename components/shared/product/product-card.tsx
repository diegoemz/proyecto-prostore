import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ProductPrice from './product-price';
import { Product } from '@/types';
import Rating from './rating';

interface ProductCardProps {
  product: Product;
  className?: string;
  priority?: boolean;
}

const ProductCard = ({ 
  product, 
  className = '',
  priority = false 
}: ProductCardProps) => {
  const isOutOfStock = product.stock <= 0;
  const isLowStock = product.stock > 0 && product.stock <= 5;

  return (
    <Card className={`group w-full max-w-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${className}`}>
      {/* Image Section */}
      <CardHeader className="relative p-0 overflow-hidden rounded-t-lg">
        <Link 
          href={`/product/${product.slug}`}
          className="block relative"
          aria-label={`Ver detalles de ${product.name}`}
        >
          <div className="relative aspect-square bg-gray-50">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={priority}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            
            {/* Stock Status Badge */}
            {isOutOfStock && (
              <Badge 
                variant="destructive" 
                className="absolute top-2 left-2 z-10"
              >
                Sin Stock
              </Badge>
            )}
            {isLowStock && (
              <Badge 
                variant="secondary" 
                className="absolute top-2 left-2 z-10 bg-orange-100 text-orange-800"
              >
                Últimas {product.stock} unidades
              </Badge>
            )}
          </div>
        </Link>
      </CardHeader>

      {/* Content Section */}
      <CardContent className="p-4 space-y-3">
        {/* Brand */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            {product.brand}
          </span>
          <Rating value={Number(product.rating)} />
        </div>

        {/* Product Name */}
        <Link 
          href={`/product/${product.slug}`}
          className="block group-hover:text-primary transition-colors"
        >
          <h2 className="text-sm font-semibold leading-tight line-clamp-2 min-h-[2.5rem]">
            {product.name}
          </h2>
        </Link>

        {/* Price and Stock Info */}
        <div className="flex items-end justify-between pt-2">
          <div className="flex flex-col">
            {isOutOfStock ? (
              <p className="text-destructive font-medium text-sm">
                Agotado
              </p>
            ) : (
              <ProductPrice value={Number(product.price)} />
            )}
          </div>
          
          {/* Stock Indicator */}
          {!isOutOfStock && (
            <div className="flex items-center gap-1">
              <div 
                className={`w-2 h-2 rounded-full ${
                  isLowStock ? 'bg-orange-400' : 'bg-green-400'
                }`} 
              />
              <span className="text-xs text-muted-foreground">
                {product.stock} disponibles
              </span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;