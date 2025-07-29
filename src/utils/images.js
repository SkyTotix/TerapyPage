// Utilidad para manejar imágenes de manera optimizada
// Esta función ayuda a cargar imágenes de manera lazy y con fallbacks

export const getImageUrl = (imageName, fallback = null) => {
  try {
    // Intentar cargar la imagen desde la carpeta public/images
    return `/images/${imageName}`
  } catch (error) {
    console.warn(`Image not found: ${imageName}`, error)
    return fallback || '/images/placeholder.jpg'
  }
}

// Función para precargar imágenes importantes
export const preloadImages = (imageList) => {
  imageList.forEach(imageName => {
    const img = new Image()
    img.src = getImageUrl(imageName)
  })
}

// Lista de imágenes importantes para precargar
export const importantImages = [
  'hero-bg.jpg',
  'instructor.jpg',
  'therapy-session.jpg',
  'sound-healing.jpg',
  'testimonial-1.jpg',
  'testimonial-2.jpg',
  'testimonial-3.jpg',
  'testimonial-4.jpg',
  'module-1.jpg',
  'module-2.jpg',
  'module-3.jpg',
  'benefit-1.jpg',
  'benefit-2.jpg',
  'benefit-3.jpg',
  'benefit-4.jpg',
  'logo.png',
  'certificate.png'
]

// Función para verificar si una imagen existe
export const imageExists = (imageName) => {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = getImageUrl(imageName)
  })
}

// Función para obtener dimensiones de imagen
export const getImageDimensions = (imageName) => {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => {
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight
      })
    }
    img.onerror = () => {
      resolve({ width: 0, height: 0 })
    }
    img.src = getImageUrl(imageName)
  })
}

// Función para optimizar imágenes según el dispositivo
export const getOptimizedImageUrl = (imageName, width = 800) => {
  const baseUrl = getImageUrl(imageName)
  
  // Si tienes un servicio de optimización de imágenes como Cloudinary o similar
  // puedes agregar parámetros de optimización aquí
  // Ejemplo: return `${baseUrl}?w=${width}&q=80&f=auto`
  
  return baseUrl
}

// Función para generar srcset para imágenes responsive
export const generateSrcSet = (imageName, sizes = [400, 800, 1200]) => {
  return sizes
    .map(size => `${getOptimizedImageUrl(imageName, size)} ${size}w`)
    .join(', ')
} 