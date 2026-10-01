# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener un ZIP con el proyecto completo y arrancable.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Como saber que terminaste

```bash
npm install && npm run build
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Contexto técnico original
Crear una aplicación React con TypeScript, componentes funcionales y hooks

### Reto
- Tema: TypeScript React
- Seniority: junior-l1
- Tipo: practical
- Título: Desarrollo de una aplicación React con TypeScript
- Tiempo estimado: 8 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Configuración del entorno y obtención de datos — objetivo: Configurar el entorno de desarrollo y obtener datos del servicio externo — entregable (NO resolver): Entorno de desarrollo configurado con React y TypeScript, y servicio que obtiene y maneja datos del endpoint.
- Fase 2: Creación de componentes funcionales — objetivo: Crear componentes funcionales para mostrar la lista de productos — entregable (NO resolver): Componentes funcionales creados y renderizados en la aplicación.
- Fase 3: Integración y visualización de la lista de productos — objetivo: Integrar y visualizar la lista de productos en la aplicación — entregable (NO resolver): Aplicación completa que muestra la lista de productos con estilos básicos.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (ZIP).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: vite.config.ts ===
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});

// === ARCHIVO: src/main.tsx ===
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.css';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <p>{this.state.error?.message}</p>
          <button onClick={() => window.location.reload()}>Reload</button>
        </div>
      );
    }

    return this.props.children;
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// === ARCHIVO: package.json ===
{
  "name": "react-typescript-product-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "vitest",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "format": "prettier --write src/**/*.{ts,tsx}"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "axios": "^1.6.2"
  },
  "devDependencies": {
    "@types/react": "^18.2.45",
    "@types/react-dom": "^18.2.18",
    "@vitejs/plugin-react": "^4.2.1",
    "typescript": "^5.3.3",
    "vite": "^5.0.10",
    "@testing-library/react": "^14.1.2",
    "@testing-library/jest-dom": "^6.1.5",
    "@testing-library/user-event": "^14.5.1",
    "eslint": "^8.56.0",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "prettier": "^3.1.1",
    "vitest": "^1.1.0"
  },
  "eslintConfig": {
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended"
    ],
    "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "rules": {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off"
    },
    "settings": {
      "react": {
        "version": "detect"
      }
    }
  },
  "prettier": {
    "semi": false,
    "singleQuote": true,
    "trailingComma": "all",
    "printWidth": 80
  }
}

// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },
    "types": ["vite/client"]
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}

// === ARCHIVO: src/index.tsx ===
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { ErrorBoundary } from './utils/errorHandler'

interface AppProviderProps {
  children: React.ReactNode
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return <>{children}</>
}

const container = document.getElementById('root')
if (!container) {
  throw new Error('Failed to find the root element')
}

const root = createRoot(container)

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <AppProvider>
        <App />
      </AppProvider>
    </ErrorBoundary>
  </React.StrictMode>
)

// === ARCHIVO: src/App.tsx ===
import React, { useEffect, useState } from 'react'
import ProductList from './components/ProductList'
import { Product } from './types/product'
import { fetchProducts } from './services/productService'
import './styles/main.css'

interface AppState {
  products: Product[]
  loading: boolean
  error: string | null
}

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    products: [],
    loading: true,
    error: null,
  })

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await fetchProducts()
        setState({ products, loading: false, error: null })
      } catch (err) {
        setState({
          products: [],
          loading: false,
          error: err instanceof Error ? err.message : 'Failed to fetch products',
        })
      }
    }

    loadProducts()
  }, [])

  if (state.loading) {
    return <div className="loading">Loading products...</div>
  }

  if (state.error) {
    return <div className="error">Error: {state.error}</div>
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Financial Products</h1>
      </header>
      <main>
        <ProductList products={state.products} />
      </main>
    </div>
  )
}

export default App


// === ARCHIVO: index.html ===
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Aplicación de productos financieros" />
    <meta name="author" content="Equipo de Desarrollo" />
    <meta name="theme-color" content="#2563eb" />
    <title>Productos Financieros</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
        line-height: 1.5;
        color: #1f2937;
        background-color: #f9fafb;
      }
      #root {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }
      @media (prefers-color-scheme: dark) {
        body {
          background-color: #111827;
          color: #f9fafb;
        }
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

// === ARCHIVO: src/services/productService.ts ===
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

// === ARCHIVO: src/types/product.ts ===
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


// === ARCHIVO: src/hooks/useProducts.ts ===
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

// === ARCHIVO: src/components/ProductList.tsx ===
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

// === ARCHIVO: src/components/ProductItem.tsx ===
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


// === ARCHIVO: src/styles/main.css ===
/* =====================================
   Estilos principales de la aplicación
   Aplicación React con TypeScript
   ===================================== */

/* Reset y estilos base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --color-primary: #2563eb;
  --color-primary-hover: #1d4ed8;
  --color-secondary: #64748b;
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  --color-error-light: #fee2e2;
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text-primary: #1e293b;
  --color-text-secondary: #64748b;
  --color-border: #e2e8f0;
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --transition-fast: 150ms ease-in-out;
  --transition-normal: 250ms ease-in-out;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--color-background);
  color: var(--color-text-primary);
  line-height: 1.6;
}

/* Contenedor principal */
.app-container {
  min-height: 100vh;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Encabezado de la aplicación */
.app-header {
  text-align: center;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}

.app-header h1 {
  font-size: 1.875rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
}

.app-header p {
  color: var(--color-text-secondary);
  font-size: 1rem;
}

/* Estado de carga */
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  gap: 1rem;
}

.loading-spinner {
  width: 48px;
  height: 48px;
  border: 4px solid var(--color-border);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loading-text {
  color: var(--color-text-secondary);
  font-size: 1rem;
}

/* Estado de error */
.error-container {
  background-color: var(--color-error-light);
  border: 1px solid var(--color-error);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  margin: 1rem 0;
  text-align: center;
}

.error-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.error-title {
  color: var(--color-error);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.error-message {
  color: var(--color-text-primary);
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.error-retry-button {
  background-color: var(--color-error);
  color: white;
  border: none;
  padding: 0.625rem 1.25rem;
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color var(--transition-fast);
}

.error-retry-button:hover {
  background-color: #dc2626;
}

/* Lista de productos */
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 1rem 0;
}

.product-list-empty {
  text-align: center;
  padding: 3rem;
  color: var(--color-text-secondary);
  font-size: 1.125rem;
}

/* Elemento individual de producto */
.product-item {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.product-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.product-item-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
}

.product-name {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0;
  flex: 1;
}

.product-price {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-primary);
  background: #eff6ff;
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-sm);
}

.product-description {
  color: var(--color-text-secondary);
  font-size: 0.875rem;
  line-height: 1.5;
}

.product-stock {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.product-stock-available {
  color: var(--color-success);
}

.product-stock-low {
  color: var(--color-warning);
}

.product-stock-out {
  color: var(--color-error);
}

.product-stock-badge {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.product-stock-badge.available {
  background-color: var(--color-success);
}

.product-stock-badge.low {
  background-color: var(--color-warning);
}

.product-stock-badge.out {
  background-color: var(--color-error);
}

/* Botón de acción */
.product-action-button {
  margin-top: auto;
  padding: 0.75rem 1rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color var(--transition-fast);
  width: 100%;
}

.product-action-button:hover {
  background-color: var(--color-primary-hover);
}

.product-action-button:disabled {
  background-color: var(--color-secondary);
  cursor: not-allowed;
  opacity: 0.6;
}

/* Footer */
.app-footer {
  text-align: center;
  padding: 2rem;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
  border-top: 1px solid var(--color-border);
  margin-top: 3rem;
}

/* Utilidades de diseño */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Media queries para responsividad */
@media (max-width: 640px) {
  .app-container {
    padding: 1rem;
  }

  .app-header h1 {
    font-size: 1.5rem;
  }

  .product-list {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .product-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Animaciones de entrada */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.product-item {
  animation: fadeIn 0.3s ease-out forwards;
}

.product-item:nth-child(1) { animation-delay: 0ms; }
.product-item:nth-child(2) { animation-delay: 50ms; }
.product-item:nth-child(3) { animation-delay: 100ms; }
.product-item:nth-child(4) { animation-delay: 150ms; }
.product-item:nth-child(5) { animation-delay: 200ms; }
.product-item:nth-child(6) { animation-delay: 250ms; }

/* Estilos para el Error Boundary global */
.error-boundary {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: var(--color-background);
}

.error-boundary-content {
  text-align: center;
  max-width: 500px;
}

// === ARCHIVO: src/utils/errorHandler.ts ===
/**
 * Utilidad para manejar y formatear mensajes de error
 * Proporciona funciones consistentes para el manejo de errores en la aplicación
 */

/**
 * Tipos de errores conocidos en la aplicación
 */
export type ErrorType = 
  | 'NETWORK_ERROR'
  | 'SERVER_ERROR'
  | 'VALIDATION_ERROR'
  | 'NOT_FOUND'
  | 'TIMEOUT'
  | 'UNKNOWN';

/**
 * Interfaz para errores estructurados de la aplicación
 */
export interface AppError {
  type: ErrorType;
  message: string;
  originalError?: Error;
  timestamp: Date;
  code?: string;
}

/**
 * Interfaz para opciones de formateo de errores
 */
interface FormatErrorOptions {
  includeTimestamp?: boolean;
  includeCode?: boolean;
  userFriendly?: boolean;
}

/**
 * Mapeo de tipos de error a mensajes amigables para el usuario
 */
const errorMessages: Record<ErrorType, string> = {
  NETWORK_ERROR: 'No se pudo conectar al servidor. Verifica tu conexión a internet.',
  SERVER_ERROR: 'El servidor tuvo un problema. Por favor, intenta más tarde.',
  VALIDATION_ERROR: 'Los datos proporcionados no son válidos.',
  NOT_FOUND: 'El recurso solicitado no fue encontrado.',
  TIMEOUT: 'La solicitud tardó demasiado. Por favor, intenta de nuevo.',
  UNKNOWN: 'Ocurrió un error inesperado. Por favor, contacta al soporte.',
};

/**
 * Mapeo de códigos HTTP a tipos de error
 */
const httpStatusToErrorType = (status: number): ErrorType => {
  if (status >= 500) return 'SERVER_ERROR';
  if (status === 404) return 'NOT_FOUND';
  if (status === 400 || status === 422) return 'VALIDATION_ERROR';
  if (status === 0 || status >= 502) return 'NETWORK_ERROR';
  return 'UNKNOWN';
};

/**
 * Crea un error estructurado de la aplicación
 * @param type - Tipo de error
 * @param message - Mensaje descriptivo
 * @param originalError - Error original de JavaScript (opcional)
 * @param code - Código de error adicional (opcional)
 */
export const createAppError = (
  type: ErrorType,
  message: string,
  originalError?: Error,
  code?: string
): AppError => ({
  type,
  message,
  originalError,
  timestamp: new Date(),
  code,
});

/**
 * Crea un error a partir de una respuesta de Axios
 * @param status - Código de estado HTTP
 * @param statusText - Texto del estado HTTP
 * @param originalError - Error original de Axios (opcional)
 */
export const createErrorFromResponse = (
  status: number,
  statusText: string,
  originalError?: Error
): AppError => {
  const type = httpStatusToErrorType(status);
  const message = statusText || errorMessages[type];
  return createAppError(type, message, originalError, `HTTP_${status}`);
};

/**
 * Crea un error de red (conexión fallida)
 * @param originalError - Error original de la red
 */
export const createNetworkError = (originalError?: Error): AppError =>
  createAppError('NETWORK_ERROR', errorMessages.NETWORK_ERROR, originalError, 'NETWORK');

/**
 * Crea un error de timeout
 * @param originalError - Error original
 */
export const createTimeoutError = (originalError?: Error): AppError =>
  createAppError('TIMEOUT', errorMessages.TIMEOUT, originalError, 'TIMEOUT');

/**
 * Formatea un error para mostrar al usuario
 * @param error - Error de la aplicación
 * @param options - Opciones de formateo
 */
export const formatError = (
  error: AppError | Error,
  options: FormatErrorOptions = {}
): string => {
  const { includeTimestamp = false, includeCode = false, userFriendly = true } = options;

  let message: string;
  let type: ErrorType = 'UNKNOWN';
  let code: string | undefined;
  let timestamp: Date;

  if ('type' in error && 'message' in error) {
    const appError = error as AppError;
    message = userFriendly ? errorMessages[appError.type] || appError.message : appError.message;
    type = appError.type;
    code = appError.code;
    timestamp = appError.timestamp;
  } else {
    const rawError = error as Error;
    message = rawError.message || errorMessages.UNKNOWN;
    timestamp = new Date();
  }

  const parts: string[] = [message];

  if (includeTimestamp) {
    parts.push(`(${timestamp.toLocaleString()})`);
  }

  if (includeCode && code) {
    parts.push(`[${code}]`);
  }

  return parts.join(' ');
};

/**
 * Obtiene el título del error según su tipo
 * @param error - Error de la aplicación
 */
export const getErrorTitle = (error: AppError | Error): string => {
  if ('type' in error) {
    const appError = error as AppError;
    switch (appError.type) {
      case 'NETWORK_ERROR':
        return 'Error de Conexión';
      case 'SERVER_ERROR':
        return 'Error del Servidor';
      case 'VALIDATION_ERROR':
        return 'Datos Inválidos';
      case 'NOT_FOUND':
        return 'No Encontrado';
      case 'TIMEOUT':
        return 'Tiempo de Espera Agotado';
      default:
        return 'Error Inesperado';
    }
  }
  return 'Error';
};

/**
 * Determina si un error es de red
 * @param error - Error a verificar
 */
export const isNetworkError = (error: AppError | Error): boolean => {
  if ('type' in error) {
    return (error as AppError).type === 'NETWORK_ERROR';
  }
  const rawError = error as Error;
  return (
    rawError.message.includes('network') ||
    rawError.message.includes('fetch') ||
    rawError.message.includes('ECONNREFUSED')
  );
};

/**
 * Determina si un error es recuperable (puede intentarse de nuevo)
 * @param error - Error a verificar
 */
export const isRecoverableError = (error: AppError | Error): boolean => {
  if ('type' in error) {
    const appError = error as AppError;
    return (
      appError.type === 'NETWORK_ERROR' ||
      appError.type === 'TIMEOUT' ||
      appError.type === 'SERVER_ERROR'
    );
  }
  return true;
};

/**
 * Maneja errores de promesas rejections
 * @param reason - Razón del rejection
 */
export const handleUnhandledRejection = (reason: unknown): AppError => {
  if (reason instanceof Error) {
    if (reason.message.includes('network') || reason.message.includes('fetch')) {
      return createNetworkError(reason);
    }
    return createAppError('UNKNOWN', reason.message, reason);
  }
  return createAppError(
    'UNKNOWN',
    typeof reason === 'string' ? reason : 'Error desconocido',
    undefined
  );
};

/**
 * Envuelve una función async con manejo de errores
 * @param fn - Función a ejecutar
 * @returns Tupla con resultado o error
 */
export const tryCatch = async <T>(
  fn: () => Promise<T>
): Promise<[T | null, AppError | null]> => {
  try {
    const result = await fn();
    return [result, null];
  } catch (error) {
    if (error instanceof Error) {
      const appError = createAppError('UNKNOWN', error.message, error);
      return [null, appError];
    }
    return [null, createAppError('UNKNOWN', String(error))];
  }
};

/**
 * Clase de error personalizada para la aplicación
 */
export class AppErrorException extends Error {
  public readonly type: ErrorType;
  public readonly code?: string;
  public readonly timestamp: Date;

  constructor(type: ErrorType, message: string, code?: string) {
    super(message);
    this.name = 'AppErrorException';
    this.type = type;
    this.code = code;
    this.timestamp = new Date();
    Object.setPrototypeOf(this, AppErrorException.prototype);
  }

  toJSON(): AppError {
    return {
      type: this.type,
      message: this.message,
      timestamp: this.timestamp,
      code: this.code,
    };
  }
}

/**
 * Registra errores en la consola en modo desarrollo
 * @param error - Error a registrar
 */
export const logError = (error: AppError | Error): void => {
  if (import.meta.env?.DEV || process.env.NODE_ENV === 'development') {
    console.error('[Error Handler]', {
      error,
      timestamp: new Date().toISOString(),
      stack: error instanceof Error ? error.stack : undefined,
    });
  }
};

```
