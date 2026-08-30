// Card.jsx — Componente reutilizable: tarjeta de producto interactiva.
//
// Funcionalidades:
//   1. Zoom suave de la imagen al pasar el cursor (escala 1.1x + transición).
//   2. Botón "Vista Rápida" superpuesto que aparece al hacer hover y abre
//      un modal con los detalles del producto al hacer clic.
//   3. Badge dinámico ("Nuevo" / "En Oferta") en la esquina superior derecha.
//
// Props:
//   name, spec, description, price, image, previewImage, badge ('nuevo' | 'oferta' | null)

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Card({
  name = 'Producto',
  spec = 'Material',
  description = '',
  price = '$0.00',
  image,
  previewImage = image,
  repeatImage = previewImage,
  badge = null,
  onAddToCart,
}) {
  const [showModal, setShowModal] = useState(false)
  const [activeModalImg, setActiveModalImg] = useState(null)

  const { session } = useAuth()
  const navigate = useNavigate()

  const badgeLabel = badge === 'oferta' ? 'En Oferta' : 'Nuevo'

  const handleOpenModal = () => {
    setActiveModalImg(previewImage || repeatImage || image)
    setShowModal(true)
  }

  const modalImageToDisplay = activeModalImg || previewImage || repeatImage || image

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
      <div className="card__media">
        <img src={image} alt={name} loading="lazy" className="card__img" />

        {badge && (
          <span className={`card__badge card__badge--${badge}`}>
            {badgeLabel}
          </span>
        )}

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

      <div className="card__body">
        <h3 className="card__name">{name}</h3>
        <p className="card__spec">{spec}</p>
        <p className="card__desc">{description}</p>

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

            <div className="modal__media">
              <img src={modalImageToDisplay} alt={`${name} vista previa`} className="modal__img" />
            </div>

            <div className="modal__info">
              {badge && (
                <span className={`card__badge card__badge--${badge}`}>
                  {badgeLabel}
                </span>
              )}
              <h2 className="modal__name">{name}</h2>
              <p className="modal__spec">{spec}</p>
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


