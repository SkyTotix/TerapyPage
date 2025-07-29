import React from 'react'
import { motion } from 'framer-motion'
import { FiCheckCircle, FiUsers, FiTarget, FiHeart, FiZap, FiShield } from 'react-icons/fi'

const Benefits = () => {
  const benefits = [
    {
      icon: <FiZap className="text-2xl" />,
      title: "Autorregulación del Sistema Nervioso",
      description: "Amplifica la capacidad de autorregulación del sistema nervioso autónomo para un mejor equilibrio emocional."
    },
    {
      icon: <FiHeart className="text-2xl" />,
      title: "Liberación de Memorias Celulares",
      description: "Libera memorias celulares a través de vibración, permitiendo la sanación de traumas profundos."
    },
    {
      icon: <FiTarget className="text-2xl" />,
      title: "Presencia y Conexión Interior",
      description: "Profundiza la experiencia de presencia y conexión interior para un mayor autoconocimiento."
    },
    {
      icon: <FiShield className="text-2xl" />,
      title: "Ideal para Trastornos Específicos",
      description: "Especialmente efectivo para trastornos del sueño, ansiedad, trauma somático y fibromialgia."
    }
  ]

  const targetConditions = [
    "Trastornos del sueño",
    "Ansiedad y estrés",
    "Trauma somático",
    "Fibromialgia",
    "Dolor crónico",
    "Desequilibrios energéticos",
    "Problemas emocionales",
    "Tensiones musculares"
  ]

  return (
    <section id="beneficios" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Beneficios del Método STCS®
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            Descubre cómo esta formación puede transformar tu vida y la de tus futuros pacientes, 
            proporcionando herramientas poderosas para la sanación integral.
          </p>
        </motion.div>

        {/* Beneficios principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-orange to-accent-red rounded-full flex items-center justify-center text-white flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary-dark mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-medium-gray">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sección de condiciones que trata */}
        <motion.div
          className="bg-gradient-to-r from-primary-dark to-primary-medium rounded-2xl p-8 text-white mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <FiUsers className="text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Condiciones que el Método STCS® Trata
            </h3>
            <p className="text-lg opacity-90">
              Aprende a ayudar a personas con estas condiciones específicas
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {targetConditions.map((condition, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FiCheckCircle className="text-accent-orange mx-auto mb-2" />
                <span className="text-sm font-medium">{condition}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sección de para quién es */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-primary-dark mb-8">
            ¿Para quién es esta formación?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "💫",
                title: "Terapeutas y Facilitadores",
                description: "Terapeutas, facilitadores, reikistas o psicoterapeutas que quieran integrar el sonido y el tacto sutil en sus sesiones."
              },
              {
                icon: "💫",
                title: "Personas Sensibles",
                description: "Personas sensibles, intuitivas, con vocación de sanación y deseo de ayudar a otros."
              },
              {
                icon: "💫",
                title: "Sanadores en Proceso",
                description: "Quienes han vivido procesos profundos y desean compartir herramientas de luz con otros."
              },
              {
                icon: "💫",
                title: "Llamado de Sanación",
                description: "Todo aquel que sienta el llamado de sanar a través del amor, el sonido y la conciencia."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="card text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-bold text-primary-dark mb-3">
                  {item.title}
                </h4>
                <p className="text-medium-gray text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
              ¿Te identificas con alguno de estos perfiles?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Si sientes el llamado de la sanación, esta formación es para ti. 
              Únete a nuestra comunidad de sanadores conscientes.
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
              ¡Quiero Inscribirme!
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits 