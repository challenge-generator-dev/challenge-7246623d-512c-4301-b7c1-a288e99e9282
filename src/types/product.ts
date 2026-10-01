export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
  description: string;
  available: boolean;
  lastUpdated: Date;
}

export interface ProductApiResponse {
  id: string;
  name: string;
  price: string | number;
  stock: number;
  category?: string;
  description?: string;
  lastUpdated?: string;
}

export interface ServiceError {
  message: string;
  code: string;
  status: number;
}

export type ProductCategory = 
  | 'inversion'
  | 'ahorro'
  | 'credito'
  | 'seguro'
  | 'general';

export interface ProductFilters {
  category?: ProductCategory;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  searchTerm?: string;
}

export interface ProductsState {
  products: Product[];
  loading: boolean;
  error: ServiceError | null;
  filters: ProductFilters;
}

export interface ProductFormData {
  name: string;
  price: number;
  stock: number;
  category: ProductCategory;
  description: string;
}

export type ProductSortField = 'name' | 'price' | 'stock' | 'lastUpdated';

export type SortOrder = 'asc' | 'desc';

export interface ProductSortConfig {
  field: ProductSortField;
  order: SortOrder;
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  'inversion',
  'ahorro',
  'credito',
  'seguro',
  'general'
];

export const DEFAULT_PRODUCT_FILTERS: ProductFilters = {
  category: undefined,
  minPrice: undefined,
  maxPrice: undefined,
  inStock: undefined,
  searchTerm: ''
};

export function createEmptyProduct(): ProductFormData {
  return {
    name: '',
    price: 0,
    stock: 0,
    category: 'general',
    description: ''
  };
}

export function validateProduct(data: ProductFormData): string[] {
  const errors: string[] = [];

  if (!data.name || data.name.trim().length < 2) {
    errors.push('El nombre debe tener al menos 2 caracteres');
  }

  if (data.price <= 0) {
    errors.push('El precio debe ser mayor que 0');
  }

  if (data.stock < 0) {
    errors.push('El stock no puede ser negativo');
  }

  if (!data.category) {
    errors.push('Debe seleccionar una categoría');
  }

  return errors;
}

export function filterProducts(
  products: Product[],
  filters: ProductFilters
): Product[] {
  return products.filter(product => {
    if (filters.category && product.category !== filters.category) {
      return false;
    }

    if (filters.minPrice !== undefined && product.price < filters.minPrice) {
      return false;
    }

    if (filters.maxPrice !== undefined && product.price > filters.maxPrice) {
      return false;
    }

    if (filters.inStock !== undefined && product.available !== filters.inStock) {
      return false;
    }

    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      const matchesName = product.name.toLowerCase().includes(searchLower);
      const matchesDescription = product.description.toLowerCase().includes(searchLower);
      if (!matchesName && !matchesDescription) {
        return false;
      }
    }

    return true;
  });
}

export function sortProducts(
  products: Product[],
  config: ProductSortConfig
): Product[] {
  const sorted = [...products];
  const multiplier = config.order === 'asc' ? 1 : -1;

  sorted.sort((a, b) => {
    switch (config.field) {
      case 'name':
        return multiplier * a.name.localeCompare(b.name);
      case 'price':
        return multiplier * (a.price - b.price);
      case 'stock':
        return multiplier * (a.stock - b.stock);
      case 'lastUpdated':
        return multiplier * (a.lastUpdated.getTime() - b.lastUpdated.getTime());
      default:
        return 0;
    }
  });

  return sorted;
}