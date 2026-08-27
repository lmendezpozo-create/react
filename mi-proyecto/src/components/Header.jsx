// Header.jsx — Componente reutilizable: barra de navegación fija.
// Según el diseño "Modern Minimalist", el header es fijo, con fondo blanco
// semi-transparente y desenfoque (backdrop blur) para mantenerse legible
// al hacer scroll.
import { Link, NavLink } from 'react-router-dom'

// El componente recibe como prop: `brand` (nombre de la tienda).
export default function Header({ brand = 'CURATED' }) {
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

        {/* Íconos de utilidades (búsqueda / bolsa) */}
        <div className="header__utilities">
          <button aria-label="Buscar" className="icon">
            ⌕
          </button>
          <button aria-label="Bolsa de compra" className="icon">
            ◌
          </button>
        </div>
      </div>
    </header>
  )
}
