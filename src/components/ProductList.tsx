import { useProducts } from '../hooks/useProducts';
import { ProductItem } from './ProductItem';

export function ProductList() {
  const { products, loading, error, refetch } = useProducts();

  if (loading) {
    return (
      <div className="product-list-loading">
        <div className="spinner"></div>
        <p>Cargando productos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-list-error">
        <p className="error-message">Error: {error}</p>
        <button onClick={refetch} className="retry-button">
          Reintentar
        </button>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="product-list-empty">
        <p>No hay productos disponibles</p>
      </div>
    );
  }

  return (
    <div className="product-list-container">
      <h2 className="product-list-title">Lista de Productos</h2>
      <div className="product-list">
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}