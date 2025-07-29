// Configuración de Google Analytics
// Reemplaza GA_MEASUREMENT_ID con tu ID de Google Analytics

export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX' // Reemplaza con tu ID

// Inicializar Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: 'Sonoterapia Craneosacral® - Formación',
      page_location: window.location.href,
    })
  }
}

// Evento personalizado
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Eventos específicos para la landing page
export const trackFormSubmission = () => {
  trackEvent('form_submit', 'engagement', 'contact_form', 1)
}

export const trackCTAClick = (buttonText) => {
  trackEvent('click', 'engagement', `cta_${buttonText.toLowerCase().replace(/\s+/g, '_')}`, 1)
}

export const trackScroll = (section) => {
  trackEvent('scroll', 'engagement', `section_${section}`, 1)
}

// Función para agregar el script de Google Analytics al HTML
export const addGoogleAnalyticsScript = () => {
  if (typeof window !== 'undefined' && !window.gtag) {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    window.gtag = function() {
      window.dataLayer.push(arguments)
    }
    window.gtag('js', new Date())
    window.gtag('config', GA_MEASUREMENT_ID)
  }
} 