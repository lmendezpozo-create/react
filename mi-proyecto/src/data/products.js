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

// Carga las imágenes principales de la carpeta src/assets/images/
const primaryImages = import.meta.glob('../assets/images/*.{jpg,png,webp,jpeg,svg}', {
  eager: true,
  import: 'default',
})

// Carga las imágenes repetidas/duplicadas de la carpeta src/assets/images/repetidas/
const repeatedImages = import.meta.glob('../assets/images/repetidas/*.{jpg,png,webp,jpeg,svg}', {
  eager: true,
  import: 'default',
})

// Se ordenan las URLs por orden alfabético para un mapeo predecible.
const primaryUrls = Object.keys(primaryImages)
  .sort()
  .map((key) => primaryImages[key])

const repeatedUrls = Object.keys(repeatedImages)
  .sort()
  .map((key) => repeatedImages[key])

// Utilidades de seguridad para obtener la imagen por índice
const imgAt = (index) => primaryUrls[index] ?? ''
const repeatImgAt = (index) => repeatedUrls[index] ?? ''

// ============================================================
// Catálogo de productos
//   - name, spec, description, price: descripción del artículo
//   - badge: marcador dinámico ('nuevo' | 'oferta' | null)
//   - image: imagen principal del producto
//   - repeatImage: versión repetida/alternativa para vista previa
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
    image: imgAt(0),
    repeatImage: repeatImgAt(0),
  },
  {
    id: 2,
    name: 'Sofá Terciopelo',
    spec: 'Navy Velvet',
    price: '$1,299.00',
    description:
      'Sofá de dos plazas de perfil bajo y patas de acero cepillado. Tapizado en terciopelo azul marino que aporta una elegancia atemporal al salón.',
    badge: 'oferta',
    image: imgAt(1),
    repeatImage: repeatImgAt(1),
  },
  {
    id: 3,
    name: 'Mesa Roble',
    spec: 'Solid Oak',
    price: '$895.00',
    description:
      'Mesa de comedor de roble macizo con tablero grueso y patas tipo bloque de inspiración brutalista. Acabado mate que resalta la veta natural.',
    badge: null,
    image: imgAt(2),
    repeatImage: repeatImgAt(2),
  },
  {
    id: 4,
    name: 'Lámpara Cúpula',
    spec: 'Matte Black & Glass',
    price: '$180.00',
    description:
      'Lámpara de pie escultural con vástago de metal negro mate y base de hormigón. Difusor de vidrio esmerilado que emite una luz cálida y envolvente.',
    badge: 'nuevo',
    image: imgAt(3),
    repeatImage: repeatImgAt(3),
  },
  {
    id: 5,
    name: 'Sillón Cápsula',
    spec: 'Curved Bouclé',
    price: '$1,050.00',
    description:
      'Sillón de perfil envolvente tapizado en bouclé crema. Silueta orgánica y base de madera lacada en negro para un punto focal escultural.',
    badge: 'nuevo',
    image: imgAt(4),
    repeatImage: repeatImgAt(4),
  },
  {
    id: 6,
    name: 'Bufete Aliso',
    spec: 'Tinted Alder',
    price: '$1,480.00',
    description:
      'Bufete de aliso tintado con acabado mate y herrajes ocultos. Amplio almacenaje con puertas corredizas de línea limpia.',
    badge: null,
    image: imgAt(5),
    repeatImage: repeatImgAt(5),
  },
  {
    id: 7,
    name: 'Otomana Cuero',
    spec: 'Vegan Leather',
    price: '$560.00',
    description:
      'Otomana redondeada de cuero vegano en tono tabaco. Volumen generoso y costuras finas que añaden calidez al espacio.',
    badge: 'oferta',
    image: imgAt(6),
    repeatImage: repeatImgAt(6),
  },
  {
    id: 8,
    name: 'Librero Escultural',
    spec: 'Smoked Oak',
    price: '$1,790.00',
    description:
      'Librero de roble ahumado con estanterías asimétricas. Composición arquitectónica que funciona como divisor de ambientes.',
    badge: null,
    image: imgAt(7),
    repeatImage: repeatImgAt(7),
  },
]

