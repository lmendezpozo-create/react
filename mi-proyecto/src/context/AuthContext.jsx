// AuthContext.jsx — Contexto y estado de la sesión (login y registro).

import { createContext, useContext, useState, useEffect } from 'react'

const DEMO_USER = { email: 'usuario@muebles.com', password: 'usuario123', name: 'Cliente Demo', role: 'user' }
const DEMO_ADMIN = { email: 'admin@muebles.com', password: 'admin123', name: 'Administrador', role: 'admin' }

const AuthContext = createContext(null)

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  // Cargar usuarios registrados desde localStorage o inicializar con los demos
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem('curated_users')
    return saved ? JSON.parse(saved) : [DEMO_USER, DEMO_ADMIN]
  })

  // Cargar la sesión activa si existe
  const [session, setSession] = useState(() => {
    const savedSession = localStorage.getItem('curated_session')
    return savedSession ? JSON.parse(savedSession) : null
  })

  useEffect(() => {
    localStorage.setItem('curated_users', JSON.stringify(users))
  }, [users])

  useEffect(() => {
    if (session) {
      localStorage.setItem('curated_session', JSON.stringify(session))
    } else {
      localStorage.removeItem('curated_session')
    }
  }, [session])

  // Iniciar sesión y disparar alerta de bienvenida
  function login(email, password) {
    const account = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    )

    if (account) {
      const userSession = { user: account.email, name: account.name, role: account.role }
      setSession(userSession)
      alert(`¡Bienvenido/a, ${account.name}! 👋`)
      return account
    }
    return null
  }

  // Registrar nueva cuenta de usuario
  function register(name, email, password) {
    const existing = users.find((u) => u.email.toLowerCase() === email.toLowerCase())
    if (existing) {
      return { success: false, message: 'El correo electrónico ya está registrado. Por favor inicia sesión.' }
    }

    const newUser = { email, password, name, role: 'user' }
    const updatedUsers = [...users, newUser]
    setUsers(updatedUsers)

    const userSession = { user: newUser.email, name: newUser.name, role: newUser.role }
    setSession(userSession)
    alert(`🎉 ¡Cuenta creada con éxito! Bienvenido/a, ${newUser.name}.`)

    return { success: true, user: newUser }
  }

  // Cerrar sesión
  function logout() {
    setSession(null)
  }

  return (
    <AuthContext.Provider value={{ session, login, register, logout, DEMO_USER }}>
      {children}
    </AuthContext.Provider>
  )
}

