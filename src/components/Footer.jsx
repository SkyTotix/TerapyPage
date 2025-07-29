import React from 'react'
import { motion } from 'framer-motion'
import { FiHeart, FiMail, FiPhone, FiMapPin, FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-primary-dark to-primary-medium text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <motion.div
              className="flex items-center space-x-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 bg-accent-orange rounded-full flex items-center justify-center">
                <FiHeart className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Sonoterapia Craneosacral®</h3>
                <p className="text-sm opacity-90">Método STCS®</p>
              </div>
            </motion.div>
            <p className="text-lg mb-6 opacity-90">
              Formación profesional en Sonoterapia Craneosacral®. 
              Aprende a sanar con tus manos, sonido y energía.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiInstagram />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiFacebook />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiYoutube />
              </motion.a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {[
                { name: 'Inicio', href: '#inicio' },
                { name: 'Método', href: '#metodo' },
                { name: 'Beneficios', href: '#beneficios' },
                { name: 'Formación', href: '#formacion' },
                { name: 'Instructor', href: '#instructor' },
                { name: 'Testimonios', href: '#testimonios' }
              ].map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-accent-orange transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      const element = document.querySelector(link.href)
                      if (element) element.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contacto</h4>
            <ul className="space-y-3">
              {[
                {
                  icon: <FiMail className="text-accent-orange" />,
                  text: "info@sonoterapiacraneosacral.com"
                },
                {
                  icon: <FiPhone className="text-accent-orange" />,
                  text: "+52 55 1234 5678"
                },
                {
                  icon: <FiMapPin className="text-accent-orange" />,
                  text: "CDMX y Cuernavaca"
                }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {item.icon}
                  <span className="text-white/80 text-sm">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Información adicional */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h5 className="font-bold mb-2">Formación Certificada</h5>
            <p className="text-sm opacity-80">Método STCS® oficial</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h5 className="font-bold mb-2">100% Online</h5>
            <p className="text-sm opacity-80">Desde cualquier parte del mundo</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h5 className="font-bold mb-2">Instructor Experto</h5>
            <p className="text-sm opacity-80">Jorge Andrés Ríos</p>
          </motion.div>
        </div>

        {/* Separador */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Copyright */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-white/60 text-sm">
            © {currentYear} Sonoterapia Craneosacral® - Método STCS®. 
            Todos los derechos reservados. Creado por Jorge Andrés Ríos.
          </p>
          <p className="text-white/60 text-xs mt-2">
            Desarrollado con ❤️ para la comunidad de sanadores
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 