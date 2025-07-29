// Utilidad para manejar el envío del formulario de contacto
// Puedes integrar con servicios como Formspree, Netlify Forms, o tu propio backend

export const submitContactForm = async (formData) => {
  try {
    // Opción 1: Formspree (gratis hasta 50 envíos/mes)
    const response = await fetch('https://formspree.io/f/TU_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre: formData.nombre,
        email: formData.email,
        telefono: formData.telefono,
        mensaje: formData.mensaje,
        subject: 'Nueva inscripción - Sonoterapia Craneosacral®',
      }),
    });

    if (response.ok) {
      return { success: true, message: 'Mensaje enviado correctamente' };
    } else {
      throw new Error('Error al enviar el mensaje');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    return { success: false, message: 'Error al enviar el mensaje. Intenta de nuevo.' };
  }
};

// Opción 2: Netlify Forms (si usas Netlify)
export const submitNetlifyForm = async (formData) => {
  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'form-name': 'contact',
        nombre: formData.nombre,
        email: formData.email,
        telefono: formData.telefono,
        mensaje: formData.mensaje,
      }),
    });

    if (response.ok) {
      return { success: true, message: 'Mensaje enviado correctamente' };
    } else {
      throw new Error('Error al enviar el mensaje');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    return { success: false, message: 'Error al enviar el mensaje. Intenta de nuevo.' };
  }
};

// Opción 3: EmailJS (para envío directo por email)
export const submitEmailJS = async (formData) => {
  try {
    // Requiere configurar EmailJS
    const templateParams = {
      from_name: formData.nombre,
      from_email: formData.email,
      from_phone: formData.telefono,
      message: formData.mensaje,
      to_name: 'Jorge Andrés Ríos',
    };

    // Ejemplo con EmailJS
    // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
    
    return { success: true, message: 'Mensaje enviado correctamente' };
  } catch (error) {
    console.error('Error submitting form:', error);
    return { success: false, message: 'Error al enviar el mensaje. Intenta de nuevo.' };
  }
};

// Función principal que puedes personalizar según tu servicio preferido
export const handleFormSubmission = async (formData) => {
  // Cambia esta función según el servicio que prefieras usar
  return await submitContactForm(formData);
  
  // Otras opciones:
  // return await submitNetlifyForm(formData);
  // return await submitEmailJS(formData);
}; 