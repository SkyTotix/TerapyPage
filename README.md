# Sonoterapia Craneosacral® - Landing Page

Una landing page moderna y profesional para la formación en Sonoterapia Craneosacral® (Método STCS®), diseñada para maximizar conversiones y proporcionar una experiencia de usuario excepcional.

## 🎨 Características del Diseño

### Paleta de Colores
- **Primario Oscuro**: `#0C5959` - Transmite confianza y estabilidad
- **Primario Medio**: `#5A8C87` - Representa calma y equilibrio
- **Acento Naranja**: `#F27F3D` - Estimula acción y entusiasmo
- **Acento Claro**: `#F2C9BB` - Crea calidez y acogimiento
- **Acento Rojo**: `#BF463B` - Añade urgencia y pasión

### Teoría del Color Aplicada
Basándome en la teoría del color para landing pages, he utilizado:
- **Verde/Azul** para transmitir confianza y profesionalismo
- **Naranja** para llamadas a la acción y urgencia
- **Contraste alto** para mejorar la legibilidad
- **Gradientes** para crear profundidad visual

## 🚀 Tecnologías Utilizadas

- **React 18** - Framework principal
- **Vite** - Build tool y servidor de desarrollo
- **Framer Motion** - Animaciones fluidas
- **React Icons** - Iconografía consistente
- **CSS Variables** - Sistema de diseño modular
- **Responsive Design** - Optimizado para todos los dispositivos

## 📁 Estructura del Proyecto

```
sonoterapia-landing/
├── public/
│   ├── images/          # Carpeta para imágenes (agregar manualmente)
│   └── index.html       # HTML principal
├── src/
│   ├── components/      # Componentes React
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Benefits.jsx
│   │   ├── Course.jsx
│   │   ├── Instructor.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Modules.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Punto de entrada
│   └── index.css        # Estilos globales
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Instalación y Desarrollo

### Prerrequisitos
- Node.js 16+ 
- npm o yarn

### Instalación

1. **Clonar el repositorio**
```bash
git clone <url-del-repositorio>
cd sonoterapia-landing
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:3000
```

### Comandos Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build para producción
npm run preview      # Preview del build
npm run lint         # Linting del código
```

## 🚀 Despliegue en Vercel

### Opción 1: Despliegue Automático (Recomendado)

1. **Conectar con GitHub**
   - Ve a [vercel.com](https://vercel.com)
   - Conecta tu cuenta de GitHub
   - Importa el repositorio

2. **Configuración Automática**
   - Vercel detectará automáticamente que es un proyecto React/Vite
   - El build se ejecutará automáticamente

3. **Variables de Entorno** (si es necesario)
   ```env
   VITE_API_URL=tu-api-url
   ```

### Opción 2: Despliegue Manual

1. **Build del proyecto**
```bash
npm run build
```

2. **Instalar Vercel CLI**
```bash
npm i -g vercel
```

3. **Desplegar**
```bash
vercel
```

## 📱 Características de la Landing Page

### Secciones Implementadas

1. **Header** - Navegación fija con scroll suave
2. **Hero** - Sección principal con llamadas a la acción
3. **About** - Explicación del Método STCS®
4. **Benefits** - Beneficios y para quién es la formación
5. **Course** - Detalles de la formación e inversión
6. **Instructor** - Presentación de Jorge Andrés Ríos
7. **Testimonials** - Testimonios de estudiantes
8. **Modules** - Contenido detallado de los 3 módulos
9. **Contact** - Formulario de contacto funcional
10. **Footer** - Información de contacto y enlaces

### Características Técnicas

- ✅ **Responsive Design** - Optimizado para móvil, tablet y desktop
- ✅ **Animaciones Suaves** - Con Framer Motion
- ✅ **SEO Optimizado** - Meta tags y estructura semántica
- ✅ **Accesibilidad** - Navegación por teclado y screen readers
- ✅ **Performance** - Lazy loading y optimizaciones
- ✅ **Formulario Funcional** - Con validación y feedback
- ✅ **Scroll Suave** - Navegación entre secciones

## 🎯 Optimización para Conversiones

### Elementos de Conversión Implementados

1. **Múltiples CTAs** - Botones de acción estratégicamente ubicados
2. **Urgencia** - "Cupos limitados" y "tiempo limitado"
3. **Social Proof** - Testimonios reales de estudiantes
4. **Credibilidad** - Información detallada del instructor
5. **Beneficios Claros** - Lista específica de beneficios
6. **Precio Transparente** - $5,400 MXN claramente visible
7. **Formulario Simple** - Mínima fricción para inscripción

### Psicología del Color Aplicada

- **Verde/Azul** (#0C5959, #5A8C87) - Confianza y estabilidad
- **Naranja** (#F27F3D) - Acción y entusiasmo
- **Rojo** (#BF463B) - Urgencia y pasión
- **Contraste Alto** - Mejor legibilidad y conversión

## 📸 Imágenes

### Agregar Imágenes

1. **Crear la carpeta de imágenes**
```bash
mkdir -p public/images
```

2. **Agregar las imágenes recomendadas** (ver `public/images/README.md`)

3. **Optimizar imágenes** para web (recomiendo usar herramientas como TinyPNG)

### Imágenes Principales Necesarias

- Foto del instructor (Jorge Andrés Ríos)
- Imágenes de sesiones de terapia
- Cuencos de sonido y elementos de musicoterapia
- Fotos de testimonios
- Imágenes representativas de cada módulo

## 🔧 Personalización

### Cambiar Información de Contacto

Editar en `src/components/Contact.jsx`:
```javascript
const contactInfo = [
  {
    icon: <FiMail className="text-2xl" />,
    title: "Email",
    value: "tu-email@ejemplo.com", // Cambiar aquí
    description: "Escríbenos para más información"
  },
  // ...
]
```

### Cambiar Precio

Editar en múltiples componentes:
- `src/components/Course.jsx`
- `src/components/Contact.jsx`
- `src/components/Hero.jsx`

### Cambiar Colores

Editar en `src/index.css`:
```css
:root {
  --primary-dark: #0C5959;    /* Cambiar aquí */
  --primary-medium: #5A8C87;  /* Cambiar aquí */
  --accent-orange: #F27F3D;   /* Cambiar aquí */
  /* ... */
}
```

## 📊 Métricas de Rendimiento

### Lighthouse Score Objetivo
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

### Optimizaciones Implementadas

- ✅ Lazy loading de imágenes
- ✅ CSS optimizado con variables
- ✅ JavaScript modular
- ✅ Meta tags SEO completos
- ✅ Responsive images
- ✅ Font optimization

## 🚀 Próximos Pasos

1. **Agregar imágenes** en la carpeta `public/images/`
2. **Personalizar información de contacto**
3. **Configurar formulario** para enviar a email real
4. **Agregar Google Analytics**
5. **Configurar dominio personalizado**
6. **Implementar A/B testing**

## 📞 Soporte

Para cualquier pregunta o soporte técnico, contactar al desarrollador.

---

**Desarrollado con ❤️ para la comunidad de sanadores**

*Método Sonoterapia Craneosacral® - Transformando vidas a través del sonido y la sanación* 