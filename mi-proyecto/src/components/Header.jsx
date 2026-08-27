// Header.jsx — Componente reutilizable: barra de navegación fija.
// Según el diseño "Modern Minimalist", el header es fijo, con fondo blanco
// semi-transparente y desenfoque (backdrop blur) para mantenerse legible
// al hacer scroll.
//
// Integra el estado de sesión (AuthContext): muestra "Iniciar Sesión",
// un enlace al panel de administrador (si es admin) y "Cerrar Sesión".
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

// El componente recibe como prop: `brand` (nombre de la tienda).
export default function Header({ brand = 'CURATED' }) {
  // Lee la sesión activa y la función de cierre de sesión.
  const { session, logout } = useAuth()

  return (
    <header className="header">
      <div className="container header__inner">
        {/* Navegación izquierda (solo en desktop) */}
        <nav className="header__nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `label-sm ${isActive ? 'active' : ''}`
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              `label-sm ${isActive ? 'active' : ''}`
            }
          >
            Contacto
          </NavLink>
        </nav>

        {/* Marca centrada */}
        <Link to="/" className="header__brand">
          {brand}
        </Link>

        {/* Menú de cuenta (login / admin) */}
        <div className="header__utilities">
          <button aria-label="Buscar" className="icon">
            ⌕
          </button>

          {/* Si hay sesión activa se muestra su estado; si no, el login */}
          {session ? (
            <div className="header__account">
              {session.role === 'admin' && (
                <NavLink
                  to="/admin"
                  className={({ isActive }) =>
                    `label-sm ${isActive ? 'active' : ''}`
                  }
                >
                  Panel
                </NavLink>
              )}
              <span className="header__user label-sm">{session.name}</span>
              <button
                className="header__logout label-sm"
                onClick={logout}
                type="button"
              >
                Salir
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `label-sm header__login ${isActive ? 'active' : ''}`
              }
            >
              Iniciar Sesión
            </NavLink>
          )}
        </div>
      </div>
    </header>
  )
}
