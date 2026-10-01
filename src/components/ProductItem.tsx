import { Product } from '../types/product';

interface ProductItemProps {
  product: Product;
}

export function ProductItem({ product }: ProductItemProps) {
  const isOutOfStock = product.stock === 0;
  const isLowStock = product.stock > 0 && product.stock <= 5;

  const stockClass = isOutOfStock ? 'stock-out' : isLowStock ? 'stock-low' : 'stock-available';
  const stockLabel = isOutOfStock ? 'Sin stock' : isLowStock ? `Stock bajo (${product.stock})` : `Stock: ${product.stock}`;

  return (
    <div className={`product-item ${isOutOfStock ? 'disabled' : ''}`}>
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <div className="product-details">
        <span className="product-price">${product.price.toFixed(2)}</span>
        <span className={`product-stock ${stockClass}`}>
          {stockLabel}
        </span>
      </div>
    </div>
  );
}