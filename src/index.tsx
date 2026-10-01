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