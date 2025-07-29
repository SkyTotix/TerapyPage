import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from 'react-icons/fi'
import { handleFormSubmission } from '../utils/contactForm'

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const result = await handleFormSubmission(formData)
      
      if (result.success) {
        setIsSubmitted(true)
        setFormData({ nombre: '', email: '', telefono: '', mensaje: '' })
        
        // Resetear el estado después de 3 segundos
        setTimeout(() => {
          setIsSubmitted(false)
        }, 3000)
      } else {
        alert(result.message)
      }
    } catch (error) {
      alert('Error al enviar el formulario. Intenta de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <FiMail className="text-2xl" />,
      title: "Email",
      value: "info@sonoterapiacraneosacral.com",
      description: "Escríbenos para más información"
    },
    {
      icon: <FiPhone className="text-2xl" />,
      title: "WhatsApp",
      value: "+52 55 1234 5678",
      description: "Contacto directo con Jorge"
    },
    {
      icon: <FiMapPin className="text-2xl" />,
      title: "Ubicación",
      value: "CDMX y Cuernavaca",
      description: "Evaluaciones presenciales"
    }
  ]

  return (
    <section id="contacto" className="section light-bg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            ¡Inscríbete Ahora!
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            No pierdas esta oportunidad única de transformar tu vida y la de otros. 
            Cupos limitados para una formación personalizada.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-primary-dark mb-8">
              Información de Contacto
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-dark to-primary-medium rounded-full flex items-center justify-center text-white flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-dark mb-1">
                      {info.title}
                    </h4>
                    <p className="text-lg text-medium-gray mb-1">
                      {info.value}
                    </p>
                    <p className="text-sm text-medium-gray">
                      {info.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Información adicional */}
            <div className="bg-gradient-to-r from-primary-dark to-primary-medium rounded-2xl p-6 text-white">
              <h4 className="text-xl font-bold mb-4">
                ¿Por qué inscribirte ahora?
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <FiCheck className="text-accent-orange" />
                  <span>Cupos limitados para atención personalizada</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FiCheck className="text-accent-orange" />
                  <span>Acceso inmediato a la plataforma virtual</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FiCheck className="text-accent-orange" />
                  <span>Precio especial por tiempo limitado</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FiCheck className="text-accent-orange" />
                  <span>Certificación oficial incluida</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-primary-dark mb-6">
                Solicita tu Información
              </h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-orange to-accent-red rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <FiCheck className="text-2xl" />
                  </div>
                  <h4 className="text-xl font-bold text-primary-dark mb-2">
                    ¡Mensaje Enviado!
                  </h4>
                  <p className="text-medium-gray">
                    Te contactaremos pronto con toda la información que necesitas.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-primary-dark mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-dark focus:border-transparent transition-all"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-dark mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-dark focus:border-transparent transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-primary-dark mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-dark focus:border-transparent transition-all"
                      placeholder="+52 55 1234 5678"
                    />
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-primary-dark mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-dark focus:border-transparent transition-all resize-none"
                      placeholder="Cuéntanos por qué te interesa esta formación..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn btn-accent text-lg flex items-center justify-center space-x-2 ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <FiSend />
                        <span>¡Quiero Inscribirme!</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* CTA final */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-accent-orange to-accent-red rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              💰 Inversión: $5,400 MXN
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Formación completa de 3 meses con certificación incluida
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="btn bg-white text-accent-red font-bold text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#contacto')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                ¡Reserva mi Lugar!
              </motion.button>
              <motion.button
                className="btn btn-outline text-lg border-white text-white hover:bg-white hover:text-accent-red"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Pago en Partes
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 