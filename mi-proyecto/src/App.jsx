// App.jsx — Configuración de rutas de la aplicación.
//
// Este archivo es el componente raíz. Aquí se definen las rutas
// navegables del proyecto usando React Router:
//   - "/"         → página de Inicio
//   - "/contacto" → página de Contacto
//   - "/login"    → inicio de sesión (simulado)
//   - "/admin"    → panel de administrador (ruta protegida)
//
// El <Header /> y el <Footer /> se ven en todas las páginas porque se
// colocan por fuera del <Routes /> (layout compartido).
//
// Nota: soy un componente sin estado propio; en su lugar se delega el
// manejo de la sesión al AuthContext (ver context/AuthContext.jsx).

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { AuthProvider } from './context/AuthContext.jsx'
import Header from './components/Header.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Inicio from './pages/Inicio.jsx'
import Contacto from './pages/Contacto.jsx'
import Login from './pages/Login.jsx'
import Admin from './pages/Admin.jsx'

// Función principal App:
// 1. <AuthProvider> provee el estado de sesión (login/logout) a toda la app.
// 2. Se envuelve TODO en <BrowserRouter> para habilitar el enrutamiento.
// 3. Se renderiza el <Header /> una sola vez, compartido por todas las rutas.
// 4. <Routes> busca la ruta que coincida con la URL actual.
// 5. <Route> asocia una URL con el componente/página que debe mostrarse.
// 6. Se renderiza el <Footer /> al final, compartido por todas las rutas.
export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        {/* Barra de navegación superior, común a todas las páginas */}
        <Header brand="CURATED" />

        {/* Contenido principal que cambia según la ruta */}
        <main>
          <Routes>
            {/* Ruta raíz: muestra la página de inicio */}
            <Route path="/" element={<Inicio />} />

            {/* Ruta /contacto: muestra el formulario de contacto */}
            <Route path="/contacto" element={<Contacto />} />

            {/* Ruta /login: página de inicio de sesión */}
            <Route path="/login" element={<Login />} />

            {/* Ruta /admin: PROTEGIDA.
                Solo accede quien tiene sesión con rol "admin".
                ProtectedRoute redirige a /login si no hay sesión o a "/" si
                no es administrador. */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute role="admin">
                  <Admin />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>

        {/* Pie de página, común a todas las páginas */}
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  )
}

// ======== FOOTER (layout compartido) ========
// Al ser un único elemento reutilizado en todas las rutas, se define aquí
// para mantener el marcado de cierre de la tienda en un solo lugar.
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Cuadrícula del pie: marca, enlaces y boletín */}
        <div className="footer__grid">
          <div className="footer__brand">
            <h2 className="brand">CURATED</h2>
            <p>
              Elevando la vida cotidiana mediante diseño consciente y
              artesanía excepcional.
            </p>
          </div>

          <div className="footer__col">
            <h3>Legal</h3>
            <ul>
              <li>
                <a href="#">Política de Privacidad</a>
              </li>
              <li>
                <a href="#">Términos de Servicio</a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h3>Soporte</h3>
            <ul>
              <li>
                <a href="#">Envíos y Devoluciones</a>
              </li>
              <li>
                <a href="/contacto">Contacto</a>
              </li>
            </ul>
          </div>

          <div className="footer__col footer__newsletter">
            <h3>Boletín</h3>
            <p>Suscríbete para recibir novedades de nuevas colecciones.</p>
            <form
              className="newsletter-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input type="email" placeholder="Correo electrónico" />
              <button type="submit" aria-label="Suscribirse">
                →
              </button>
            </form>
          </div>
        </div>

        {/* Fila inferior del pie */}
        <div className="footer__bottom">
          <p>© 2026 CURATED SPACE. TODOS LOS DERECHOS RESERVADOS.</p>
          <div className="footer__social">
            <a href="#">Ig.</a>
            <a href="#">Pt.</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
