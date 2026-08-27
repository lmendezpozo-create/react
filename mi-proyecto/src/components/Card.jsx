// Card.jsx — Componente reutilizable: tarjeta de producto.
// Imita la tarjeta del diseño "stitch_minimalist": imagen a sangre
// completa, nombre, especificación, precio y botón "Quick View"
// que aparece al hacer hover (efecto "Ghost Elevation").
// Cada tarjeta recibe los datos del producto mediante props:
//   name, spec, price, image (data-URI con render del producto)
export default function Card({
  name = 'Producto',
  spec = 'Material',
  price = '$0.00',
  image,
  onAddToCart,
}) {
  return (
    <article className="card">
      {/* Imagen + Quick View al hover */}
      <div className="card__media">
        <img src={image} alt={name} loading="lazy" />

        {/* Etiqueta "Quick View" que aparece al pasar el cursor */}
        <div className="card__quickview">
          <button className="quickview-btn label-sm" type="button">
            Quick View
          </button>
        </div>
      </div>

      {/* Información del producto */}
      <div className="card__body">
        <h3 className="card__name">{name}</h3>
        <p className="card__spec">{spec}</p>

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
    </article>
  )
}
