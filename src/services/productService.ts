import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios';
import { Product, ProductApiResponse, ServiceError } from '../types/product';

const API_BASE_URL = 'https://api.ejemplo.com';
const API_TIMEOUT = 10000;
const MAX_RETRIES = 3;

class ProductService {
  private readonly client: AxiosInstance;
  private readonly retryDelay: number = 1000;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      timeout: API_TIMEOUT,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    this.client.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: AxiosError) => {
        if (error.response) {
          console.error('Error de respuesta del servidor:', error.response.status);
        } else if (error.request) {
          console.error('No se recibió respuesta del servidor');
        } else {
          console.error('Error al configurar la solicitud:', error.message);
        }
        return Promise.reject(error);
      }
    );
  }

  private async delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private transformProduct(rawProduct: ProductApiResponse): Product {
    return {
      id: rawProduct.id,
      name: rawProduct.name,
      price: Number(rawProduct.price),
      stock: rawProduct.stock,
      category: rawProduct.category || 'general',
      description: rawProduct.description || '',
      available: rawProduct.stock > 0,
      lastUpdated: rawProduct.lastUpdated ? new Date(rawProduct.lastUpdated) : new Date()
    };
  }

  private buildErrorMessage(error: AxiosError): string {
    if (error.response) {
      const status = error.response.status;
      if (status === 404) return 'Recurso no encontrado';
      if (status === 401) return 'No autorizado';
      if (status === 403) return 'Acceso prohibido';
      if (status >= 500) return 'Error del servidor';
      return `Error ${status}`;
    }
    if (error.request) return 'Sin conexión al servidor';
    return error.message || 'Error desconocido';
  }

  async getProducts(): Promise<Product[]> {
    let lastError: Error | null = null;

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      try {
        const response = await this.client.get<ProductApiResponse[]>('/productos');
        
        if (!response.data || !Array.isArray(response.data)) {
          throw new Error('Formato de respuesta inválido');
        }

        return response.data.map(item => this.transformProduct(item));
      } catch (error) {
        lastError = error as Error;
        
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          
          if (axiosError.response?.status === 404) {
            throw {
              message: 'No se encontraron productos',
              code: 'NOT_FOUND',
              status: 404
            } as ServiceError;
          }

          if (axiosError.response?.status && axiosError.response.status >= 500) {
            console.warn(`Intento ${attempt} fallido, reintentando...`);
            if (attempt < MAX_RETRIES) {
              await this.delay(this.retryDelay * attempt);
              continue;
            }
          }
        }
        
        break;
      }
    }

    const serviceError: ServiceError = {
      message: this.buildErrorMessage(lastError as AxiosError),
      code: 'FETCH_ERROR',
      status: 0
    };
    
    throw serviceError;
  }

  async getProductById(id: string): Promise<Product> {
    if (!id || id.trim() === '') {
      throw {
        message: 'ID de producto inválido',
        code: 'INVALID_ID',
        status: 400
      } as ServiceError;
    }

    try {
      const response = await this.client.get<ProductApiResponse>(`/productos/${id}`);
      
      if (!response.data) {
        throw {
          message: 'Producto no encontrado',
          code: 'NOT_FOUND',
          status: 404
        } as ServiceError;
      }

      return this.transformProduct(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 404) {
          throw {
            message: `Producto con ID ${id} no encontrado`,
            code: 'NOT_FOUND',
            status: 404
          } as ServiceError;
        }
      }
      
      throw {
        message: 'Error al obtener el producto',
        code: 'FETCH_ERROR',
        status: 0
      } as ServiceError;
    }
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    if (!category || category.trim() === '') {
      throw {
        message: 'Categoría inválida',
        code: 'INVALID_CATEGORY',
        status: 400
      } as ServiceError;
    }

    try {
      const response = await this.client.get<ProductApiResponse[]>('/productos', {
        params: { category }
      });

      if (!response.data || !Array.isArray(response.data)) {
        return [];
      }

      return response.data.map(item => this.transformProduct(item));
    } catch (error) {
      throw {
        message: 'Error al obtener productos por categoría',
        code: 'FETCH_ERROR',
        status: 0
      } as ServiceError;
    }
  }
}

export const productService = new ProductService();
export default ProductService;