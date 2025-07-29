import React from 'react'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #0C5959 0%, #5A8C87 100%)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <div>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Sonoterapia Craneosacral®
          </h1>
          <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
            Método STCS® - Formación Profesional
          </p>
          <button style={{
            padding: '1rem 2rem',
            background: '#F27F3D',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            ¡Inscríbete Ahora!
          </button>
        </div>
      </div>
    </div>
  )
}

export default App 