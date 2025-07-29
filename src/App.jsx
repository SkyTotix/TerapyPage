import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Benefits from './components/Benefits'
import Course from './components/Course'
import Instructor from './components/Instructor'
import Testimonials from './components/Testimonials'
import Modules from './components/Modules'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      {/* Landing page completa - Método Sonoterapia Craneosacral® */}
      <Header />
      <Hero />
      <About />
      <Benefits />
      <Course />
      <Instructor />
      <Testimonials />
      <Modules />
      <Contact />
      <Footer />
    </div>
  )
}

export default App 