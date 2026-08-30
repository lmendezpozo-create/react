// Login.jsx — Página de inicio de sesión y registro de cuenta.

import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Login() {
  const [isRegister, setIsRegister] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { session, login, register, DEMO_USER } = useAuth()
  const navigate = useNavigate()

  // Si ya hay sesión iniciada, no se muestra el login.
  if (session) {
    return <Navigate to="/" replace />
  }

  function handleSubmit(event) {
    event.preventDefault()
    setError('')

    if (isRegister) {
      if (!name.trim()) {
        setError('Por favor ingresa tu nombre completo.')
        return
      }
      const res = register(name, email, password)
      if (!res.success) {
        setError(res.message)
        return
      }
      navigate('/')
    } else {
      const account = login(email, password)
      if (!account) {
        setError('Credenciales incorrectas. Si no tienes cuenta, crea una a continuación.')
        return
      }
      navigate(account.role === 'admin' ? '/admin' : '/')
    }
  }

  // Acceso directo como Cliente Demo
  function handleDemoLogin() {
    setError('')
    const account = login(DEMO_USER.email, DEMO_USER.password)
    if (account) {
      navigate('/')
    }
  }

  return (
    <section className="login container">
      <div className="login__card">
        {/* Toggle de pestañas: Iniciar Sesión vs Crear Cuenta */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', borderBottom: '1px solid var(--outline-variant)' }}>
          <button
            type="button"
            className="label-sm"
            onClick={() => { setIsRegister(false); setError(''); }}
            style={{
              paddingBottom: '12px',
              borderBottom: !isRegister ? '2px solid var(--primary)' : 'none',
              color: !isRegister ? 'var(--primary)' : 'var(--on-surface-variant)',
              fontWeight: !isRegister ? 'bold' : 'normal',
              cursor: 'pointer'
            }}
          >
            Iniciar Sesión
          </button>
          <button
            type="button"
            className="label-sm"
            onClick={() => { setIsRegister(true); setError(''); }}
            style={{
              paddingBottom: '12px',
              borderBottom: isRegister ? '2px solid var(--primary)' : 'none',
              color: isRegister ? 'var(--primary)' : 'var(--on-surface-variant)',
              fontWeight: isRegister ? 'bold' : 'normal',
              cursor: 'pointer'
            }}
          >
            Crear Cuenta
          </button>
        </div>

        <h1 className="display-lg login__title">
          {isRegister ? 'Crear una Cuenta' : 'Iniciar Sesión'}
        </h1>
        <p className="body-md login__subtitle">
          {isRegister
            ? 'Regístrate para guardar tu carrito y gestionar tus pedidos.'
            : 'Accede a tu cuenta para gestionar tu espacio.'}
        </p>

        <form className="login__form" onSubmit={handleSubmit}>
          {isRegister && (
            <div className="form__field">
              <label htmlFor="name">Nombre Completo</label>
              <input
                id="name"
                type="text"
                placeholder="Ej. Juan Pérez"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}

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
            {isRegister ? 'Crear Cuenta y Entrar' : 'Entrar'}
          </button>
        </form>

        {/* Botón de acceso directo como Cliente Demo */}
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <button
            type="button"
            className="btn btn-outline"
            style={{ width: '100%' }}
            onClick={handleDemoLogin}
          >
            👤 Acceder como Cliente Demo
          </button>
        </div>

        {/* Credenciales de demostración */}
        <div className="login__hint">
          <p className="label-sm">Cuentas de demostración predeterminadas</p>
          <p>Cliente Demo: usuario@muebles.com / usuario123</p>
          <p>Administrador: admin@muebles.com / admin123</p>
        </div>
      </div>
    </section>
  )
}

