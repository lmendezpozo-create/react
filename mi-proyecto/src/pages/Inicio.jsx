// Inicio.jsx — Página principal.
// Muestra el hero (banner a pantalla completa), el encabezado de la
// sección y la cuadrícula de productos reutilizando el componente <Card />.
import Card from '../components/Card.jsx'
import { products } from '../data/products.js'

// Imagen de fondo del hero como data-URI SVG (offline-friendly).
const heroImage = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='1600' height='900' viewBox='0 0 1600 900'>
  <defs>
    <linearGradient id='h' x1='0' y1='0' x2='0' y2='1'>
      <stop offset='0' stop-color='#dadada'/>
      <stop offset='0.6' stop-color='#e2e2e2'/>
      <stop offset='1' stop-color='#f3f3f3'/>
    </linearGradient>
  </defs>
  <rect width='1600' height='900' fill='url(#h)'/>
</svg>`
)}`

export default function Inicio() {
  // Estado local del carrito (solo para demostrar el click en las tarjetas).
  // Nota: aquí solo mostramos la cantidad añadida de forma simple.

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero__media">
          <img src={heroImage} alt="Sala de estar minimalista moderna" />
        </div>
        <div className="hero__content">
          <h1 className="hero__title display-lg">
            Atemporal. Minimalista. Tu Espacio.
          </h1>
          <p className="hero__subtitle body-md">
            Colecciones curadas para el hogar moderno. Un diseño que habla a
            través del silencio.
          </p>
          <a href="#collection" className="btn btn-primary">
            Explorar Colección
          </a>
        </div>
      </section>

      {/* ===== COLECCIÓN DESTACADA ===== */}
      <section id="collection" className="section container">
        <div className="section__heading">
          <h2 className="headline-lg">Piezas Destacadas</h2>
          <a href="#collection" className="section__link label-sm">
            Ver Todo
          </a>
        </div>

        <div className="grid">
          {products.map((product) => (
            <Card
              key={product.id}
              name={product.name}
              spec={product.spec}
              description={product.description}
              price={product.price}
              image={product.image}
              repeatImage={product.repeatImage}
              badge={product.badge}
            />
          ))}
        </div>
      </section>
    </>
  )
}
