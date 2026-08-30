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

// La tarjeta es un componente stateful: usa useState para controlar
// el modal (abierto/cerrado).
export default function Card({
  name = 'Producto',
  spec = 'Material',
  description = '',
  price = '$0.00',
  image,
  previewImage = image,
  badge = null,
  onAddToCart,
}) {
  // Estado que indica si el modal de "Vista Rápida" está abierto.
  const [showModal, setShowModal] = useState(false)

  // Texto mostrado según el tipo de badge dinámico.
  const badgeLabel = badge === 'oferta' ? 'En Oferta' : 'Nuevo'

  return (
    <article className="card">
      {/* Imagen con zoom al hover + botón "Vista Rápida" + badge */}
      <div className="card__media">
        <img src={image} alt={name} loading="lazy" className="card__img" />

        {/* Badge dinámico en la esquina superior derecha (solo si existe) */}
        {badge && (
          <span className={`card__badge card__badge--${badge}`}>
            {badgeLabel}
          </span>
        )}

        {/* Botón "Vista Rápida": se muestra al pasar el cursor y abre el modal */}
        <div className="card__quickview">
          <button
            className="quickview-btn label-sm"
            type="button"
            onClick={() => setShowModal(true)}
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
            onClick={onAddToCart}
          >
            +
          </button>
        </div>
      </div>

      {/* ===== MODAL "VISTA RÁPIDA" =====
          Se renderiza cuando showModal es true. El clic en el fondo
          (overlay) o en la "X" cierra el modal. */}
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
              <img src={previewImage} alt={name} className="modal__img" />
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
                onClick={() => {
                  if (onAddToCart) onAddToCart()
                  setShowModal(false)
                }}
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
