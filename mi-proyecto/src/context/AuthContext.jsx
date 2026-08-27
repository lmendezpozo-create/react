// AuthContext.jsx — Contexto y estado de la sesión (login simulado).
//
// Centraliza el estado de autenticación con useState para que cualquier
// componente (Header, Login, Admin) pueda leer la sesión y reaccionar.
//
// Credenciales simuladas:
//   - Usuario normal :  usuario@muebles.com / usuario123
//   - Administrador  :  admin@muebles.com    / admin123
//
// El objeto de sesión guarda: { user, name, role }.

import { createContext, useContext, useState } from 'react'

// Credenciales válidas (solo con fines de demostración).
const DEMO_USER = { email: 'usuario@muebles.com', password: 'usuario123', name: 'Cliente Demo', role: 'user' }
const DEMO_ADMIN = { email: 'admin@muebles.com', password: 'admin123', name: 'Administrador', role: 'admin' }

// Se crea el contexto con un valor inicial vacío.
const AuthContext = createContext(null)

// Hook personalizado para consumir el contexto fácilmente.
export function useAuth() {
  return useContext(AuthContext)
}

// Provider que envuelve la aplicación y provee la sesión + acciones.
export function AuthProvider({ children }) {
  // Estado de la sesión: null = sin iniciar sesión.
  // Uso useState para manejar el login/logout dinámicamente.
  const [session, setSession] = useState(null)

  // login: valida las credenciales y, si son correctas, guarda la sesión.
  function login(email, password) {
    const account =
      email === DEMO_USER.email && password === DEMO_USER.password
        ? DEMO_USER
        : email === DEMO_ADMIN.email && password === DEMO_ADMIN.password
          ? DEMO_ADMIN
          : null

    if (account) {
      setSession({ user: account.email, name: account.name, role: account.role })
      return account
    }
    return null
  }

  // logout: cierra la sesión (vuelve a null).
  function logout() {
    setSession(null)
  }

  return (
    <AuthContext.Provider value={{ session, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
