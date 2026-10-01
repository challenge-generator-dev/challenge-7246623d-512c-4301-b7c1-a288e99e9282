import { useState, useEffect } from 'react';
import { Product } from '../types/product';
import { productService } from '../services/productService';

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export function useProducts() {
  const [state, setState] = useState<ProductsState>({
    products: [],
    loading: true,
    error: null
  });

  useEffect(() => {
    let cancelled = false;

    async function fetchProducts() {
      try {
        const data = await productService.getProducts();
        if (!cancelled) {
          setState({
            products: data,
            loading: false,
            error: null
          });
        }
      } catch (err) {
        if (!cancelled) {
          const errorMessage = err instanceof Error ? err.message : 'Error al cargar productos';
          setState({
            products: [],
            loading: false,
            error: errorMessage
          });
        }
      }
    }

    fetchProducts();

    return () => {
      cancelled = true;
    };
  }, []);

  const refetch = async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const data = await productService.getProducts();
      setState({
        products: data,
        loading: false,
        error: null
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error al recargar productos';
      setState(prev => ({
        ...prev,
        loading: false,
        error: errorMessage
      }));
    }
  };

  return {
    products: state.products,
    loading: state.loading,
    error: state.error,
    refetch
  };
}