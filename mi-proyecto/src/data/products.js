// products.js — Datos de catálogo para la página de inicio.
//
// ⚠️ SISTEMA AUTOMÁTICO DE IMÁGENES:
// Para añadir o reemplazar fotos de muebles SOLO tienes que colocar tus
// archivos en la carpeta `src/assets/images/`. Se cargan automáticamente,
// sin necesidad de editar imports ni nombres.
//
//   💡 Soporta .jpg, .png, .webp, .svg, etc.
//   💡 Las imágenes se asignan a los productos en orden alfabético
//      del nombre de archivo, para que puedas controlar qué foto va en
//      cada tarjeta renombrando el archivo (p. ej: 01-silla.jpg, 02-sofa.jpg).
//
// ➜ Consulta la guía completa en `src/docs/imagenes.md`.

// Carga TODAS las imágenes de la carpeta de forma dinámica con Vite.
// `import.meta.glob` devuelve { ruta: componenteFuturo } y con
// `eager: true` obtiene la URL directamente.
const images = import.meta.glob('../assets/images/**/*', {
  eager: true,
  import: 'default',
})

// Busca una imagen por su nombre exacto para no depender del orden del sistema.
const img = (fileName) => {
  const key = Object.keys(images).find((path) => path.endsWith(`/${fileName}`))
  return key ? images[key] : ''
}

// ============================================================
// Catálogo de productos
//   - name, spec, description, price: descripción del artículo
//   - badge: marcador dinámico ('nuevo' | 'oferta' | null)
//   - image: foto mostrada en la tarjeta
//   - previewImage: foto mostrada en la vista rápida
// ============================================================
export const products = [
  {
    id: 1,
    name: 'Silla Nórdica',
    spec: 'Ash Wood & Linen',
    price: '$249.00',
    description:
      'Silla de comedor con estructura de fresno claro y asiento tapizado en lino blanco. Líneas depuradas y respaldo curvado para un confort ergonómico.',
    badge: 'nuevo',
    image: img('07-sillaNordica.jpg.webp'),
    previewImage: img('08-sillaNordica.jpg.webp'),
  },
  {
    id: 2,
    name: 'Sofá Terciopelo',
    spec: 'Navy Velvet',
    price: '$1,299.00',
    description:
      'Sofá de dos plazas de perfil bajo y patas de acero cepillado. Tapizado en terciopelo azul marino que aporta una elegancia atemporal al salón.',
    badge: 'oferta',
    image: img('01-sofa.jpg.jpg'),
    previewImage: img('02-sofa.jpg.jpg'),
  },
  {
    id: 3,
    name: 'Mesa Roble',
    spec: 'Solid Oak',
    price: '$895.00',
    description:
      'Mesa de comedor de roble macizo con tablero grueso y patas tipo bloque de inspiración brutalista. Acabado mate que resalta la veta natural.',
    badge: null,
    image: img('04-mesaRoble.jpg.webp'),
    previewImage: img('05-mesaRoble.jpg.webp'),
  },
  {
    id: 4,
    name: 'Lámpara Cúpula',
    spec: 'Matte Black & Glass',
    price: '$180.00',
    description:
      'Lámpara de pie escultural con vástago de metal negro mate y base de hormigón. Difusor de vidrio esmerilado que emite una luz cálida y envolvente.',
    badge: 'nuevo',
    image: img('03-lampara.jpg.jpg'),
    previewImage: img('06-lampara.jpg.webp'),
  },
  {
    id: 5,
    name: 'Sillón Cápsula',
    spec: 'Curved Bouclé',
    price: '$1,050.00',
    description:
      'Sillón de perfil envolvente tapizado en bouclé crema. Silueta orgánica y base de madera lacada en negro para un punto focal escultural.',
    badge: 'nuevo',
    image: img('09-sillaCupula.jpg'),
    previewImage: img('10-sillaCapsula.jpg'),
  },
  {
    id: 6,
    name: 'Bufete Aliso',
    spec: 'Tinted Alder',
    price: '$1,480.00',
    description:
      'Bufete de aliso tintado con acabado mate y herrajes ocultos. Amplio almacenaje con puertas corredizas de línea limpia.',
    badge: null,
    image: img('11-buffetAliso.jpg'),
    previewImage: img('12-buffetAliso.jpg'),
  },
  {
    id: 7,
    name: 'Otomana Cuero',
    spec: 'Vegan Leather',
    price: '$560.00',
    description:
      'Otomana redondeada de cuero vegano en tono tabaco. Volumen generoso y costuras finas que añaden calidez al espacio.',
    badge: 'oferta',
    image: img('13-otomanaCuero.jpg'),
    previewImage: img('14-otomanoCuero.jpg'),
  },
  {
    id: 8,
    name: 'Librero Escultural',
    spec: 'Smoked Oak',
    price: '$1,790.00',
    description:
      'Librero de roble ahumado con estanterías asimétricas. Composición arquitectónica que funciona como divisor de ambientes.',
    badge: null,
    image: img('15-libreroEscultural.jpg'),
    previewImage: img('16-libreroEscultural.jpg'),
  },
]
