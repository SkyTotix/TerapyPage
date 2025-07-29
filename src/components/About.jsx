import React from 'react'
import { motion } from 'framer-motion'
import { FiHeart, FiMusic, FiZap, FiTarget } from 'react-icons/fi'

const About = () => {
  const features = [
    {
      icon: <FiHeart className="text-2xl" />,
      title: "Terapia Craneosacral",
      description: "Técnica sutil que facilita la autorregulación del sistema nervioso y la liberación de tensiones profundas."
    },
    {
      icon: <FiMusic className="text-2xl" />,
      title: "Sonoterapia Holística",
      description: "La vibración sonora actúa como puente entre la consciencia corporal y los ritmos internos más sutiles."
    },
    {
      icon: <FiZap className="text-2xl" />,
      title: "Sanación Energética",
      description: "Reequilibrio del campo energético a través de la resonancia armónica y el toque sutil."
    },
    {
      icon: <FiTarget className="text-2xl" />,
      title: "Yogaterapia Integrativa",
      description: "Conexión espiritual que profundiza la experiencia de presencia y conexión interior."
    }
  ]

  return (
    <section id="metodo" className="section light-bg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            El Método Sonoterapia Craneosacral®
          </h2>
          <p className="text-xl text-medium-gray max-w-4xl mx-auto">
            Una práctica integrativa que fusiona la delicadeza de la terapia craneosacral y la conexión espiritual de la Yogaterapia, 
            con la vibración profunda de la sonoterapia y la Musicoterapia Holística®.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Contenido principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-primary-dark mb-6">
              ¿Qué es el Método STCS®?
            </h3>
            <div className="space-y-4 text-lg">
              <p>
                A través del <strong>toque sutil</strong>, la <strong>escucha profunda</strong> y la <strong>resonancia armónica</strong>, 
                esta técnica facilita la autorregulación del sistema nervioso, la liberación de tensiones físicas y emocionales, 
                y el reequilibrio del campo energético.
              </p>
              <p>
                Cada sesión invita al cuerpo a entrar en un estado de <strong>quietud profunda</strong>, donde el sonido actúa como 
                puente entre la consciencia corporal, el sistema límbico y los ritmos internos más sutiles del ser.
              </p>
              <p>
                Es una experiencia <strong>restaurativa y transformadora</strong>, ideal para quienes buscan sanar desde un lugar 
                profundo, suave y respetuoso.
              </p>
            </div>
          </motion.div>

          {/* Imagen/Ilustración */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-dark to-primary-medium rounded-3xl p-8 text-white text-center">
              <div className="w-32 h-32 bg-accent-orange rounded-full mx-auto mb-6 flex items-center justify-center">
                <FiHeart className="text-4xl text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Objetivo del Método</h4>
              <p className="text-lg">
                Facilitar la autorregulación del sistema nervioso, liberar tensiones físicas y emocionales profundas, 
                y restaurar el flujo energético a través de la vibración sonora y la pulsación del ritmo craneosacral.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Características del método */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-primary-dark mb-12">
            Los 4 Pilares del Método STCS®
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="card text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent-orange to-accent-red rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-primary-dark mb-3">
                  {feature.title}
                </h4>
                <p className="text-medium-gray">
                  {feature.description}
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
          <div className="bg-gradient-to-r from-primary-dark to-primary-medium rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para transformar tu vida y la de otros?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Únete a nuestra formación y descubre el poder de sanar con tus manos, sonido y energía.
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
              ¡Inscríbete Ahora!
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 