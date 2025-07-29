import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiBook, FiTarget, FiZap, FiHeart, FiCheck, FiArrowRight } from 'react-icons/fi'

const Modules = () => {
  const [activeModule, setActiveModule] = useState(0)

  const modules = [
    {
      id: 1,
      title: "Fundamentos de la Sonoterapia Craneosacral",
      subtitle: "Despertar la percepción sutil y la presencia terapéutica",
      icon: "🧘‍♀️",
      topics: [
        "Historia y principios de la Terapia Craneosacral, la Yogaterapia y su fusión con la Sonoterapia",
        "Anatomía energética y física del sistema craneosacral: cráneo, meninges, fascia, sistema nervioso",
        "Ritmos sutiles: respiración primaria, tide, still-point",
        "Desarrollo de la escucha con las manos y conciencia del campo",
        "Teoría Polivagal y regulación del sistema nervioso autónomo",
        "Técnicas básicas de contacto, presencia y anclaje con sonido y toque",
        "Prácticas Sonoras y modelos de Musicoterapia"
      ]
    },
    {
      id: 2,
      title: "Trauma, cuerpo y energía en movimiento",
      subtitle: "Sanación profunda desde el cuerpo y los vínculos",
      icon: "💫",
      topics: [
        "Autosanación de heridas infantiles y linajes familiares",
        "Chakras, flujos energéticos, mapa de septenios y cuerpo sutil",
        "Sanación energética: aliento de vida y manos que canalizan",
        "Técnicas de limpieza vibracional y armonización emocional con sonido",
        "Sesiones de STC autógenas"
      ]
    },
    {
      id: 3,
      title: "Integración terapéutica, sonido sagrado y facilitación",
      subtitle: "El arte de guiar a otros hacia el equilibrio con vibración y conciencia",
      icon: "🎯",
      topics: [
        "Diseño e implementación de sesiones terapéuticas individuales",
        "Técnicas avanzadas con cuencos, voz, mudras y frecuencias de intención",
        "Metodología de facilitación grupal: círculo de sonido, sanaciones colectivas",
        "Pedagogía terapéutica: cómo enseñar y acompañar desde la experiencia",
        "El dharma de servir: sanar desde la compasión",
        "Ética energética y profesional, límites y presencia terapéutica",
        "Proyecto personal de integración y sesiones supervisadas",
        "Cierre, evaluación y certificación como facilitador/a de Sonoterapia Craneosacral"
      ]
    }
  ]

  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Contenido del Curso
          </h2>
          <p className="text-xl text-medium-gray max-w-4xl mx-auto">
            Una formación integral dividida en 3 módulos progresivos que te llevarán 
            desde los fundamentos hasta la maestría en el Método STCS®.
          </p>
        </motion.div>

        {/* Navegación de módulos */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          {modules.map((module, index) => (
            <motion.button
              key={module.id}
              onClick={() => setActiveModule(index)}
              className={`flex-1 p-6 rounded-2xl transition-all ${
                activeModule === index
                  ? 'bg-gradient-to-r from-primary-dark to-primary-medium text-white shadow-lg'
                  : 'bg-white text-primary-dark border-2 border-gray-200 hover:border-primary-medium'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
            >
              <div className="text-center">
                <div className="text-3xl mb-3">{module.icon}</div>
                <h3 className="font-bold text-lg mb-2">Módulo {module.id}</h3>
                <p className="text-sm opacity-90">{module.title}</p>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Contenido del módulo activo */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeModule}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{modules[activeModule].icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-primary-dark">
                    Módulo {modules[activeModule].id}: {modules[activeModule].title}
                  </h3>
                  <p className="text-accent-orange font-semibold">
                    {modules[activeModule].subtitle}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-bold text-primary-dark mb-4 flex items-center">
                  <FiBook className="mr-2" />
                  Temas que aprenderás:
                </h4>
                <ul className="space-y-3">
                  {modules[activeModule].topics.slice(0, Math.ceil(modules[activeModule].topics.length / 2)).map((topic, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <FiCheck className="text-accent-orange mt-1 flex-shrink-0" />
                      <span className="text-medium-gray">{topic}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-primary-dark mb-4 flex items-center">
                  <FiTarget className="mr-2" />
                  Continuación:
                </h4>
                <ul className="space-y-3">
                  {modules[activeModule].topics.slice(Math.ceil(modules[activeModule].topics.length / 2)).map((topic, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (index + Math.ceil(modules[activeModule].topics.length / 2)) * 0.1 }}
                    >
                      <FiCheck className="text-accent-orange mt-1 flex-shrink-0" />
                      <span className="text-medium-gray">{topic}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Progresión del módulo */}
            <div className="mt-8 p-6 bg-gradient-to-r from-accent-light to-white rounded-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-primary-dark mb-2">
                    Progresión del Módulo {modules[activeModule].id}
                  </h4>
                  <p className="text-medium-gray">
                    {activeModule === 0 && "Fundamentos esenciales para comenzar tu viaje de sanación"}
                    {activeModule === 1 && "Profundización en técnicas de sanación y liberación"}
                    {activeModule === 2 && "Maestría y certificación como facilitador/a"}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-accent-orange">
                    {Math.round(((activeModule + 1) / modules.length) * 100)}%
                  </div>
                  <div className="text-sm text-medium-gray">Completado</div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-accent-orange to-accent-red rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para comenzar tu transformación?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Cada módulo te llevará más profundo en el arte de la sanación. 
              ¿Estás preparado para este viaje transformador?
            </p>
            <motion.button
              className="btn bg-white text-accent-red font-bold text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contacto')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              ¡Inscríbete Ahora!
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Modules 