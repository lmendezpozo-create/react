// Card.jsx — Componente reutilizable: tarjeta de producto interactiva.
//
// Funcionalidades:
//   1. Zoom suave de la imagen al pasar el cursor (escala 1.1x + transición).
//   2. Botón "Vista Rápida" superpuesto que aparece al hacer hover y abre
//      un modal con los detalles del producto al hacer clic.
//   3. Badge dinámico ("Nuevo" / "En Oferta") en la esquina superior derecha.
//
// Props:
//   name, spec, description, price, image, badge ('nuevo' | 'oferta' | null)

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Card({
  name = 'Producto',
  spec = 'Material',
  description = '',
  price = '$0.00',
  image,
  repeatImage,
  badge = null,
  onAddToCart,
}) {
  const [showModal, setShowModal] = useState(false)
  const [activeModalImg, setActiveModalImg] = useState(null)

  const { session } = useAuth()
  const navigate = useNavigate()

  const badgeLabel = badge === 'oferta' ? 'En Oferta' : 'Nuevo'

  const handleOpenModal = () => {
    setActiveModalImg(repeatImage || image)
    setShowModal(true)
  }

  const modalImageToDisplay = activeModalImg || repeatImage || image

  // Manejo de la adición al carrito con verificación de sesión
  const handleCartClick = () => {
    if (!session) {
      alert('⚠️ Necesitas crear una cuenta o iniciar sesión para agregar productos al carrito.')
      navigate('/login')
      return
    }

    alert(`🛒 ¡"${name}" se ha añadido con éxito al carrito de ${session.name}!`)
    if (onAddToCart) {
      onAddToCart(name)
    }
    if (showModal) {
      setShowModal(false)
    }
  }

  return (
    <article className="card">
      {/* Imagen principal en la tarjeta de la página de inicio */}
      <div className="card__media">
        <img src={image} alt={name} loading="lazy" className="card__img" />

        {/* Badge dinámico en la esquina superior derecha (solo si existe) */}
        {badge && (
          <span className={`card__badge card__badge--${badge}`}>
            {badgeLabel}
          </span>
        )}

        {/* Botón "Vista Rápida": abre el modal con la imagen repetida en vista previa */}
        <div className="card__quickview">
          <button
            className="quickview-btn label-sm"
            type="button"
            onClick={handleOpenModal}
          >
            <span aria-hidden="true" className="quickview-icon">
              ◉
            </span>
            Vista Rápida
          </button>
        </div>
      </div>

      {/* Información del producto */}
      <div className="card__body">
        <h3 className="card__name">{name}</h3>
        <p className="card__spec">{spec}</p>
        <p className="card__desc">{description}</p>

        {/* Precio + botón para añadir al carrito */}
        <div className="card__footer">
          <span className="card__price">{price}</span>
          <button
            className="card__add"
            aria-label={`Añadir ${name} al carrito`}
            onClick={handleCartClick}
          >
            +
          </button>
        </div>
      </div>

      {/* ===== MODAL "VISTA RÁPIDA" =====
          Se renderiza al hacer clic en el botón de Vista Rápida.
          Muestra la imagen repetida/alternativa del producto. */}
      {showModal && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <div
            className="modal__content"
            role="dialog"
            aria-modal="true"
            aria-label={`Vista rápida de ${name}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal__close"
              aria-label="Cerrar vista rápida"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>

            <div className="modal__media" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <img src={modalImageToDisplay} alt={`${name} vista previa`} className="modal__img" />
              {repeatImage && image && (
                <div style={{ display: 'flex', gap: '8px', padding: '0 16px 16px', justifyContent: 'center' }}>
                  <button
                    type="button"
                    onClick={() => setActiveModalImg(repeatImage)}
                    style={{
                      border: modalImageToDisplay === repeatImage ? '2px solid var(--primary)' : '1px solid #ccc',
                      padding: '4px 8px',
                      fontSize: '11px',
                      cursor: 'pointer',
                      background: modalImageToDisplay === repeatImage ? 'var(--primary)' : '#fff',
                      color: modalImageToDisplay === repeatImage ? '#fff' : '#000',
                    }}
                  >
                    Imagen Repetida
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveModalImg(image)}
                    style={{
                      border: modalImageToDisplay === image ? '2px solid var(--primary)' : '1px solid #ccc',
                      padding: '4px 8px',
                      fontSize: '11px',
                      cursor: 'pointer',
                      background: modalImageToDisplay === image ? 'var(--primary)' : '#fff',
                      color: modalImageToDisplay === image ? '#fff' : '#000',
                    }}
                  >
                    Imagen Principal
                  </button>
                </div>
              )}
            </div>

            <div className="modal__info">
              {badge && (
                <span className={`card__badge card__badge--${badge}`}>
                  {badgeLabel}
                </span>
              )}
              <h2 className="modal__name">{name}</h2>
              <p className="modal__spec">{spec}</p>
              <span className="label-sm" style={{ color: 'var(--secondary)', margin: '4px 0' }}>
                🔍 Vista previa de imagen secundaria / repetida
              </span>
              <p className="modal__desc">{description}</p>
              <p className="modal__price">{price}</p>
              <button
                className="btn btn-primary modal__cta"
                type="button"
                onClick={handleCartClick}
              >
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      )}
    </article>
  )
}


