// products.js — Datos de catálogo para la página de inicio.
// Cada producto incluye una imagen generada como data-URI SVG
// (render geométrico de estilo minimalista), para que la página
// funcione sin depender de recursos externos.

// Genera una imagen SVG de relleno con un degradado neutro.
function placeholderSvg(seed) {
  const hues = ['#e2e2e2', '#dadada', '#cfc4bd', '#d7e2ff']
  const top = hues[seed % hues.length]
  const bottom = hues[(seed + 1) % hues.length]
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='750' viewBox='0 0 600 750'>
  <defs>
    <linearGradient id='g' x1='0' y1='0' x2='0' y2='1'>
      <stop offset='0' stop-color='${top}'/>
      <stop offset='1' stop-color='${bottom}'/>
    </linearGradient>
  </defs>
  <rect width='600' height='750' fill='url(#g)'/>
</svg>`
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

export const products = [
  { id: 1, name: 'Silla Nórdica', spec: 'Ash Wood & Linen', price: '$249.00', image: placeholderSvg(1) },
  { id: 2, name: 'Sofá Terciopelo', spec: 'Navy Velvet', price: '$1,299.00', image: placeholderSvg(2) },
  { id: 3, name: 'Mesa Roble', spec: 'Solid Oak', price: '$895.00', image: placeholderSvg(3) },
  { id: 4, name: 'Lámpara Cúpula', spec: 'Matte Black & Glass', price: '$180.00', image: placeholderSvg(4) },
]
