// Contacto.jsx — Página de contacto.
// Incluye información de la tienda y un formulario con campos de
// "subrayado" (underline-only), según el sistema de diseño.
import { useState } from 'react'

export default function Contacto() {
  // Estado del formulario + confirmación de envío.
  const [sent, setSent] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    // Simula el envío (aquí solo mostramos un mensaje de confirmación).
    setSent(true)
  }

  return (
    <section className="contact container">
      {/* Encabezado de la página */}
      <div className="contact__header">
        <h1 className="display-lg">Contacto</h1>
        <p className="contact__subtitle body-md">
          Cuéntanos sobre tu proyecto. Nuestro equipo de diseño está listo para
          ayudarte a crear un espacio curado.
        </p>
      </div>

      <div className="contact__grid">
        {/* Información de la tienda */}
        <div className="contact__info">
          <h2 className="headline-md">Curated Space Studio</h2>
          <p className="body-md">
            Visítanos en nuestro showroom o escríbenos para una consulta
            personalizada. Diseñamos cada pieza bajo pedido.
          </p>

          <div className="contact__detail">
            <div>
              <h3>Dirección</h3>
              <p>Avenida de los Muebles 120, Ciudad</p>
            </div>
            <div>
              <h3>Email</h3>
              <p>hola@curated.space</p>
            </div>
            <div>
              <h3>Teléfono</h3>
              <p>+52 55 1234 5678</p>
            </div>
          </div>
        </div>

        {/* Formulario de contacto */}
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__field">
            <label htmlFor="nombre">Nombre</label>
            <input id="nombre" type="text" placeholder="Tu nombre" required />
          </div>

          <div className="form__field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="correo@ejemplo.com" required />
          </div>

          <div className="form__field">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              rows={5}
              placeholder="Cuéntanos sobre tu proyecto…"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Enviar Mensaje
          </button>

          {sent && <p className="body-md">¡Gracias! Te contactaremos pronto.</p>}
        </form>
      </div>
    </section>
  )
}
