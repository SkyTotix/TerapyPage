import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    // Actualizar el estado para que el siguiente render muestre la UI de fallback
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // Puedes registrar el error en un servicio de logging aquí
    console.error('Error caught by boundary:', error, errorInfo)
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    if (this.state.hasError) {
      // Puedes renderizar cualquier UI de fallback
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
              className="btn btn-accent"
            >
              Recargar Página
            </button>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-8 text-left">
                <summary className="cursor-pointer font-bold">
                  Detalles del Error (Solo Desarrollo)
                </summary>
                <pre className="mt-4 p-4 bg-black/20 rounded text-sm overflow-auto">
                  {this.state.error && this.state.error.toString()}
                  <br />
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary 