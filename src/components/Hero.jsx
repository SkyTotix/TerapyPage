import React from 'react'
import { motion } from 'framer-motion'
import { FiPlay, FiArrowDown, FiStar } from 'react-icons/fi'

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-medium to-accent-orange opacity-90"></div>
      
      {/* Elementos decorativos */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent-light rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent-orange rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-accent-red rounded-full opacity-25 animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent-light rounded-full opacity-20 animate-pulse delay-1500"></div>
      </div>

      <div className="container relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge de certificación */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <FiStar className="text-accent-orange" />
            <span className="font-medium">Método STCS® Certificado</span>
          </motion.div>

          {/* Título principal */}
          <motion.h1
            className="mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Formación en
            <span className="block text-accent-orange">Sonoterapia</span>
            <span className="block">Craneosacral®</span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Aprende a sanar con tus manos, sonido y energía. 
            <span className="block font-semibold text-accent-light">
              Libera traumas, armoniza el flujo energético y conecta con tu misión de sanación.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              className="btn btn-accent text-lg px-8 py-4"
              onClick={() => scrollToSection('#contacto')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ¡Inscríbete Ahora!
            </motion.button>
            
            <motion.button
              className="btn btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-dark"
              onClick={() => scrollToSection('#metodo')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiPlay className="inline mr-2" />
              Conoce el Método
            </motion.button>
          </motion.div>

          {/* Información rápida */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-accent-orange mb-2">3</div>
              <div className="text-sm">Meses de Formación</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-accent-orange mb-2">100%</div>
              <div className="text-sm">Online</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-accent-orange mb-2">✓</div>
              <div className="text-sm">Certificación</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.button
          onClick={() => scrollToSection('#metodo')}
          className="text-white hover:text-accent-orange transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FiArrowDown size={24} />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero 