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