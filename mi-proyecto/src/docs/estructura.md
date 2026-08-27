# 🛋️ Mini Proyecto: Tienda de Muebles (React + Vite)

## 📌 Requisitos Mínimos del Proyecto
* 2 componentes reutilizables (`Header.jsx`, `Card.jsx`)
* 2 páginas (`Inicio.jsx`, `Contacto.jsx`)
* 2 rutas navegables (`/` y `/contacto`)
* Archivo `App.jsx` comentado paso a paso

---

## 📁 Estructura de Directorios

src/
├── assets/             # Archivos estáticos (imágenes de muebles, logos)
├── components/         # Componentes reutilizables
│   ├── Header.jsx      # Barra de navegación superior
│   └── Card.jsx        # Tarjeta reutilizable para productos
│
├── pages/              # Páginas principales de la app
│   ├── Inicio.jsx      # Vista principal con catálogo de muebles
│   └── Contacto.jsx    # Formulario e información de contacto
│
├── styles/             # Hojas de estilo CSS para los componentes y páginas
│   └── index.css       # Estilos globales o específicos del diseño
│
├── App.jsx             # Configuración de las rutas (React Router)
└── main.jsx            # Punto de entrada de la aplicación