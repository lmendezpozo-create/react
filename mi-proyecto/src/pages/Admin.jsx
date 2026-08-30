// Admin.jsx — Panel de administrador (ruta protegida /admin).
//
// Solo es accesible al iniciar sesión con rol "admin" (ver ProtectedRoute).
// Muestra una tabla simulada con las personas que han comprado productos:
// cliente, producto, fecha y estado.

import { useAuth } from '../context/AuthContext.jsx'
import { orders } from '../data/orders.js'
import { products } from '../data/products.js'

export default function Admin() {
  // Lee la sesión para mostrar el nombre del administrador y el logout.
  const { session, logout } = useAuth()

  return (
    <section className="admin container">
      {/* Encabezado del panel */}
      <div className="admin__header">
        <div>
          <h1 className="headline-lg admin__title">Panel de Administración</h1>
          <p className="body-md admin__subtitle">
            Bienvenido, {session?.name}. Aquí puedes revisar las últimas compras y la gestión de imágenes.
          </p>
        </div>
        <button className="btn btn-outline" onClick={logout} type="button">
          Cerrar Sesión
        </button>
      </div>

      {/* Tabla de compras */}
      <div className="admin__tablewrap">
        <table className="admin__table">
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Producto</th>
              <th>Fecha</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.cliente}</td>
                <td>{order.producto}</td>
                <td>{order.fecha}</td>
                {/* El estado se muestra con una etiqueta de color */}
                <td>
                  <span className={`admin__status admin__status--${order.estado.toLowerCase()}`}>
                    {order.estado}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Sección de Vista Previa de Imágenes Repetidas */}
      <h2 className="admin__section-title">🖼️ Vista Previa de Imágenes y Duplicados</h2>
      <div className="admin__gallery">
        {products.map((product) => (
          <div key={product.id} className="admin__gallery-card">
            <h3 className="admin__gallery-title">{product.id}. {product.name}</h3>
            <div className="admin__preview-grid">
              <div className="admin__img-preview-wrap">
                <span>Principal</span>
                {product.image ? (
                  <img src={product.image} alt={`${product.name} principal`} className="admin__img-thumb" />
                ) : (
                  <div className="admin__img-thumb">Sin imagen</div>
                )}
              </div>
              <div className="admin__img-preview-wrap">
                <span>Repetida / Duplicada</span>
                {product.repeatImage ? (
                  <img src={product.repeatImage} alt={`${product.name} repetida`} className="admin__img-thumb" />
                ) : (
                  <div className="admin__img-thumb">Sin duplicado</div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

