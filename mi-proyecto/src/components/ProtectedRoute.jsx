// ProtectedRoute.jsx — Ruta protegida para el panel de administrador.
//
// Verifica que exista una sesión activa y que el rol sea "admin".
// Si no hay sesión, redirige al login. Si hay sesión pero no es admin,
// redirige a la página de inicio.

import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

// Recibe como prop `role` (rol requerido) y una prop `children`
// (el contenido / página que protege).
export default function ProtectedRoute({ role, children }) {
  const { session } = useAuth()

  // 1. Sin sesión iniciada → mandar al login.
  if (!session) {
    return <Navigate to="/login" replace />
  }

  // 2. Sesión activa pero con rol distinto al requerido → mandar al inicio.
  if (role && session.role !== role) {
    return <Navigate to="/" replace />
  }

  // 3. Autorizado: se muestra la página protegida.
  return children
}
