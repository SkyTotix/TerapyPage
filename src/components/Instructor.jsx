import React from 'react'
import { motion } from 'framer-motion'
import { FiAward, FiGlobe, FiHeart, FiBook, FiStar } from 'react-icons/fi'

const Instructor = () => {
  const credentials = [
    "Musicoterapeuta Holístico",
    "YogaTerapeuta Craneosacral",
    "Guía de procesos vibracionales",
    "Formado en Alemania, India y México",
    "Experiencia internacional en educación consciente",
    "Especialista en sabiduría ancestral",
    "Experto en medicina energética",
    "Creador del método de Sonoterapia Craneosacral"
  ]

  const specializations = [
    {
      icon: "🇩🇪",
      title: "Alemania",
      description: "Formación en técnicas avanzadas de musicoterapia"
    },
    {
      icon: "🇮🇳",
      title: "India",
      description: "Estudios en yogaterapia y sabiduría ancestral"
    },
    {
      icon: "🇲🇽",
      title: "México",
      description: "Especialización en medicina energética y terapias alternativas"
    }
  ]

  return (
    <section id="instructor" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Conoce a tu Instructor
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            Jorge Andrés Ríos es el creador del Método STCS® y tu guía en este 
            viaje transformador hacia la sanación integral.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Información del instructor */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-primary-dark mb-4">
                Jorge Andrés Ríos
              </h3>
              <p className="text-xl text-accent-orange font-semibold mb-6">
                Creador del Método Sonoterapia Craneosacral®
              </p>
              <p className="text-lg text-medium-gray mb-6">
                Musicoterapeuta Holístico, YogaTerapeuta Craneosacral y guía de procesos vibracionales 
                con formación internacional en Alemania, India y México.
              </p>
              <p className="text-lg text-medium-gray">
                Con amplia experiencia en educación consciente, sabiduría ancestral y medicina energética, 
                Jorge ha dedicado su vida a desarrollar métodos integrativos que combinan las mejores 
                técnicas de sanación del mundo.
              </p>
            </div>

            {/* Credenciales */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <FiStar className="text-accent-orange flex-shrink-0" />
                  <span className="text-medium-gray">{credential}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Foto/Ilustración del instructor */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-dark to-primary-medium rounded-3xl p-8 text-white text-center">
              <div className="w-48 h-48 bg-accent-orange rounded-full mx-auto mb-6 flex items-center justify-center">
                <FiHeart className="text-6xl text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Experiencia Internacional</h4>
              <p className="text-lg mb-6">
                Formado en los mejores centros de sanación y terapias alternativas del mundo, 
                Jorge combina técnicas ancestrales con métodos modernos para crear una 
                experiencia de sanación única y transformadora.
              </p>
              
              {/* Especializaciones por país */}
              <div className="grid grid-cols-1 gap-4">
                {specializations.map((spec, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{spec.icon}</span>
                      <div>
                        <div className="font-bold">{spec.title}</div>
                        <div className="text-sm opacity-90">{spec.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Filosofía y enfoque */}
        <motion.div
          className="bg-gradient-to-r from-accent-orange to-accent-red rounded-2xl p-8 text-white mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <FiHeart className="text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Filosofía de Enseñanza
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🌟</div>
              <h4 className="text-lg font-bold mb-2">Presencia Consciente</h4>
              <p className="opacity-90">Cada sesión se imparte desde un lugar de presencia total y conexión profunda</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💝</div>
              <h4 className="text-lg font-bold mb-2">Corazón y Alma</h4>
              <p className="opacity-90">Jorge pone su alma y corazón en cada enseñanza, compartiendo lo mejor de sí</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="text-lg font-bold mb-2">Misión de Luz</h4>
              <p className="opacity-90">Dedicado a formar sanadores conscientes que lleven luz y sanación al mundo</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary-dark to-primary-medium rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para aprender del mejor?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Únete a esta formación única y aprende directamente del creador del Método STCS®. 
              Una oportunidad irrepetible para transformar tu vida y la de otros.
            </p>
            <motion.button
              className="btn btn-accent text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contacto')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              ¡Aprende con Jorge!
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Instructor 