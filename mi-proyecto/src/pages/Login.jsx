// Login.jsx — Página de inicio de sesión (login simulado).
//
// Valida las credenciales con el AuthContext:
//   - Usuario normal : usuario@muebles.com / usuario123  → redirige a "/"
//   - Administrador  : admin@muebles.com   / admin123    → redirige a "/admin"
//
// Usa useState para controlar los campos del formulario, el estado de
// error y la redirección.

import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Login() {
  // Estado de los campos del formulario.
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // Contexto de sesión + navegación.
  const { session, login } = useAuth()
  const navigate = useNavigate()

  // Si ya hay sesión iniciada, no se muestra el login.
  if (session) {
    return <Navigate to="/" replace />
  }

  // Al enviar el formulario se intenta autenticar y se redirige por rol.
  function handleSubmit(event) {
    event.preventDefault()
    setError('')

    // login devuelve la cuenta (con su rol) o null si las credenciales fallan.
    const account = login(email, password)
    if (!account) {
      setError('Credenciales incorrectas. Inténtalo de nuevo.')
      return
    }

    // Redirige según el rol: admin → /admin, usuario normal → /
    navigate(account.role === 'admin' ? '/admin' : '/')
  }

  return (
    <section className="login container">
      <div className="login__card">
        <h1 className="display-lg login__title">Iniciar Sesión</h1>
        <p className="body-md login__subtitle">
          Accede a tu cuenta para gestionar tu espacio.
        </p>

        <form className="login__form" onSubmit={handleSubmit}>
          <div className="form__field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="correo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form__field">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="login__error">{error}</p>}

          <button type="submit" className="btn btn-primary">
            Entrar
          </button>
        </form>

        {/* Credenciales de demostración */}
        <div className="login__hint">
          <p className="label-sm">Cuentas de demostración</p>
          <p>Usuario: usuario@muebles.com / usuario123</p>
          <p>Administrador: admin@muebles.com / admin123</p>
        </div>
      </div>
    </section>
  )
}
