// Admin.jsx — Panel de administrador (ruta protegida /admin).
//
// Solo es accesible al iniciar sesión con rol "admin" (ver ProtectedRoute).
// Muestra una tabla simulada con las personas que han comprado productos:
// cliente, producto, fecha y estado.

import { useAuth } from '../context/AuthContext.jsx'
import { orders } from '../data/orders.js'

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
            Bienvenido, {session?.name}. Aquí puedes revisar las últimas compras
            registradas.
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
    </section>
  )
}
