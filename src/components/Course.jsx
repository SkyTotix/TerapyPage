import React from 'react'
import { motion } from 'framer-motion'
import { FiCalendar, FiClock, FiGlobe, FiAward, FiCheck, FiUsers, FiBook, FiVideo } from 'react-icons/fi'

const Course = () => {
  const courseDetails = [
    {
      icon: <FiCalendar className="text-2xl" />,
      title: "Duración",
      value: "3 meses",
      description: "12 semanas de formación intensiva"
    },
    {
      icon: <FiClock className="text-2xl" />,
      title: "Horarios",
      value: "Martes 18:00-19:30",
      description: "Clases en vivo semanales"
    },
    {
      icon: <FiGlobe className="text-2xl" />,
      title: "Modalidad",
      value: "100% Online",
      description: "Desde cualquier parte del mundo"
    },
    {
      icon: <FiAward className="text-2xl" />,
      title: "Certificación",
      value: "Incluida",
      description: "Certificación oficial al finalizar"
    }
  ]

  const includes = [
    "Formación de 3 meses (12 semanas)",
    "1 sesión en vivo por semana (vía Zoom)",
    "Acceso a plataforma virtual con grabaciones",
    "Material descargable completo",
    "Manual completo del método",
    "Prácticas guiadas y visualizaciones",
    "Evaluaciones prácticas en CDMX y Cuernavaca",
    "Certificación al finalizar"
  ]

  return (
    <section id="formacion" className="section light-bg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Formación en Sonoterapia Craneosacral®
          </h2>
          <p className="text-xl text-medium-gray max-w-4xl mx-auto">
            Una formación integral de 3 meses que te capacitará para sanar con tus manos, 
            sonido y energía, liberando traumas y armonizando el flujo energético.
          </p>
        </motion.div>

        {/* Detalles del curso */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {courseDetails.map((detail, index) => (
            <motion.div
              key={index}
              className="card text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-dark to-primary-medium rounded-full flex items-center justify-center text-white mx-auto mb-4">
                {detail.icon}
              </div>
              <h4 className="text-lg font-bold text-primary-dark mb-2">
                {detail.title}
              </h4>
              <div className="text-2xl font-bold text-accent-orange mb-2">
                {detail.value}
              </div>
              <p className="text-medium-gray text-sm">
                {detail.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Enfoque de la formación */}
        <motion.div
          className="bg-gradient-to-r from-primary-dark to-primary-medium rounded-2xl p-8 text-white mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <FiTarget className="text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Enfoque de la Formación
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🧘‍♀️</div>
              <h4 className="text-lg font-bold mb-2">Sanar con tus manos</h4>
              <p className="opacity-90">Aprende técnicas de toque sutil y contacto terapéutico</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎵</div>
              <h4 className="text-lg font-bold mb-2">Sonido y energía</h4>
              <p className="opacity-90">Integra la vibración sonora en tus sesiones terapéuticas</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">✨</div>
              <h4 className="text-lg font-bold mb-2">Liberar traumas</h4>
              <p className="opacity-90">Técnicas para armonizar flujo energético y linajes familiares</p>
            </div>
          </div>
        </motion.div>

        {/* Lo que incluye */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-primary-dark mb-8">
            📚 ¿Qué Incluye la Formación?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-center mb-6">
                <FiCheck className="text-2xl text-accent-orange mr-3" />
                <h4 className="text-xl font-bold text-primary-dark">
                  Contenido Completo
                </h4>
              </div>
              <ul className="space-y-3">
                {includes.slice(0, 4).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FiCheck className="text-accent-orange mt-1 mr-3 flex-shrink-0" />
                    <span className="text-medium-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-6">
                <FiCheck className="text-2xl text-accent-orange mr-3" />
                <h4 className="text-xl font-bold text-primary-dark">
                  Recursos Adicionales
                </h4>
              </div>
              <ul className="space-y-3">
                {includes.slice(4).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FiCheck className="text-accent-orange mt-1 mr-3 flex-shrink-0" />
                    <span className="text-medium-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Inversión */}
        <motion.div
          className="bg-gradient-to-r from-accent-orange to-accent-red rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4">
            💰 Inversión
          </h3>
          <div className="text-6xl font-bold mb-4">
            $5,400 MXN
          </div>
          <p className="text-xl mb-6 opacity-90">
            Valor total de la formación
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">✨</div>
              <div className="font-bold">Cupos Limitados</div>
              <div className="text-sm opacity-90">Formación personalizada</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">💳</div>
              <div className="font-bold">Pago en Partes</div>
              <div className="text-sm opacity-90">Opción disponible</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">🎯</div>
              <div className="font-bold">Garantía</div>
              <div className="text-sm opacity-90">Satisfacción garantizada</div>
            </div>
          </div>
          
          <motion.button
            className="btn bg-white text-accent-red font-bold text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contacto')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            ¡Reserva mi Lugar!
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Course 