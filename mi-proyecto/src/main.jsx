// main.jsx — Punto de entrada de la aplicación.
// 1. Importa React y el renderizador del DOM.
// 2. Importa los estilos globales (sistema de diseño).
// 3. Importa el componente raíz <App />.
// 4. Busca el elemento #root en el HTML y monta la aplicación dentro
//    de <StrictMode> (modo estricto, ayuda a detectar errores).
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
