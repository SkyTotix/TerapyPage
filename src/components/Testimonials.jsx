import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiQuote, FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Psic. Yazmin Zamudio",
      text: "Muy recomendado.....el maestro Jorge es muy bueno yo acabo de tomar el curso y nos ah dotado de herramientas....a parte de que es muy especial y único....súper enfocado y muy bien explicado.... gracias profe!!!",
      rating: 5
    },
    {
      name: "Paola Demuner",
      text: "Soy tu fan Jorge, tienes una misión hermosa en esta vida",
      rating: 5
    },
    {
      name: "Verónica Ramos",
      text: "Gracias maestro por todas tus enseñanzas!! Por cada sesión porque en ella pones el alma y corazón y siempre das lo mejor de tí!",
      rating: 5
    },
    {
      name: "Laura Jaramillo",
      text: "Me va muy bien, estoy empezando a dar terapias y ayudándome con sonidos, fuiste un ángel en la formación y quiero seguir estudiando y qué mejor que con el mejor maestro",
      rating: 5
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section id="testimonios" className="section light-bg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Lo que dicen nuestros estudiantes
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            Descubre las experiencias transformadoras de quienes ya han completado 
            la formación en Sonoterapia Craneosacral®.
          </p>
        </motion.div>

        {/* Testimonial principal */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl relative">
            {/* Quote icon */}
            <div className="absolute top-6 left-6 text-accent-orange opacity-20">
              <FiQuote size={48} />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <FiStar key={i} className="text-accent-orange text-xl fill-current" />
                  ))}
                </div>

                {/* Testimonial text */}
                <blockquote className="text-xl md:text-2xl text-medium-gray mb-8 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Author */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-dark to-primary-medium rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-primary-dark">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-medium-gray">Estudiante certificada</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            >
              <FiChevronLeft className="text-primary-dark" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            >
              <FiChevronRight className="text-primary-dark" />
            </button>
          </div>
        </motion.div>

        {/* Testimonial indicators */}
        <motion.div
          className="flex justify-center space-x-2 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-accent-orange scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </motion.div>

        {/* Grid de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
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
                  <FiQuote />
                </div>
                <div className="flex-1">
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar key={i} className="text-accent-orange text-sm fill-current" />
                    ))}
                  </div>
                  <p className="text-medium-gray mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="text-sm">
                    <span className="font-bold text-primary-dark">{testimonial.name}</span>
                    <span className="text-medium-gray"> - Estudiante certificada</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary-dark to-primary-medium rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Quieres ser el próximo testimonio de éxito?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Únete a nuestra comunidad de sanadores y transforma tu vida mientras ayudas a otros.
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
              ¡Únete Ahora!
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 