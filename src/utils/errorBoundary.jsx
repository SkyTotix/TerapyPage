import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    console.error('Error caught by boundary:', error)
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-dark to-primary-medium text-white">
          <div className="text-center p-8">
            <h1 className="text-3xl font-bold mb-4">
              ¡Ups! Algo salió mal
            </h1>
            <p className="text-lg mb-6 opacity-90">
              Estamos trabajando para solucionarlo. Por favor, intenta recargar la página.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-accent-orange text-white rounded-lg font-bold hover:bg-accent-red transition-colors"
            >
              Recargar Página
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary 