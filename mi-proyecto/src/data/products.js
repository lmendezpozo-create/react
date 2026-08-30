// products.js — Datos de catálogo para la página de inicio.
//
// ⚠️ SISTEMA AUTOMÁTICO DE IMÁGENES:
// Para añadir o reemplazar fotos de muebles SOLO tienes que colocar tus
// archivos en la carpeta `src/assets/images/`. Se cargan automáticamente,
// sin necesidad de editar imports ni nombres.
//
//   💡 Soporta .jpg, .png, .webp, .svg, etc.
//   💡 Cada producto mantiene una imagen principal y otra para la vista rápida.
//
// ➜ Consulta la guía completa en `src/docs/imagenes.md`.

const primaryImages = import.meta.glob('../assets/images/*.{jpg,png,webp,jpeg,svg}', {
  eager: true,
  import: 'default',
})

const resolveImageByName = (fileName) => {
  const key = Object.keys(primaryImages).find((path) => path.endsWith(`/${fileName}`))
  return key ? primaryImages[key] : ''
}

// ============================================================
// Catálogo de productos
//   - name, spec, description, price: descripción del artículo
//   - badge: marcador dinámico ('nuevo' | 'oferta' | null)
//   - image: imagen principal de la tarjeta
//   - previewImage: imagen para la vista rápida
//   - repeatImage: alias para compatibilidad con versiones anteriores
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
    image: resolveImageByName('07-sillaNordica.jpg.webp'),
    previewImage: resolveImageByName('08-sillaNordica.jpg.webp'),
    repeatImage: resolveImageByName('08-sillaNordica.jpg.webp'),
  },
  {
    id: 2,
    name: 'Sofá Terciopelo',
    spec: 'Navy Velvet',
    price: '$1,299.00',
    description:
      'Sofá de dos plazas de perfil bajo y patas de acero cepillado. Tapizado en terciopelo azul marino que aporta una elegancia atemporal al salón.',
    badge: 'oferta',
    image: resolveImageByName('01-sofa.jpg.jpg'),
    previewImage: resolveImageByName('02-sofa.jpg.jpg'),
    repeatImage: resolveImageByName('02-sofa.jpg.jpg'),
  },
  {
    id: 3,
    name: 'Mesa Roble',
    spec: 'Solid Oak',
    price: '$895.00',
    description:
      'Mesa de comedor de roble macizo con tablero grueso y patas tipo bloque de inspiración brutalista. Acabado mate que resalta la veta natural.',
    badge: null,
    image: resolveImageByName('04-mesaRoble.jpg.webp'),
    previewImage: resolveImageByName('05-mesaRoble.jpg.webp'),
    repeatImage: resolveImageByName('05-mesaRoble.jpg.webp'),
  },
  {
    id: 4,
    name: 'Lámpara Cúpula',
    spec: 'Matte Black & Glass',
    price: '$180.00',
    description:
      'Lámpara de pie escultural con vástago de metal negro mate y base de hormigón. Difusor de vidrio esmerilado que emite una luz cálida y envolvente.',
    badge: 'nuevo',
    image: resolveImageByName('03-lampara.jpg.jpg'),
    previewImage: resolveImageByName('06-lampara.jpg.webp'),
    repeatImage: resolveImageByName('06-lampara.jpg.webp'),
  },
  {
    id: 5,
    name: 'Sillón Cápsula',
    spec: 'Curved Bouclé',
    price: '$1,050.00',
    description:
      'Sillón de perfil envolvente tapizado en bouclé crema. Silueta orgánica y base de madera lacada en negro para un punto focal escultural.',
    badge: 'nuevo',
    image: resolveImageByName('09-sillaCupula.jpg'),
    previewImage: resolveImageByName('10-sillaCapsula.jpg'),
    repeatImage: resolveImageByName('10-sillaCapsula.jpg'),
  },
  {
    id: 6,
    name: 'Bufete Aliso',
    spec: 'Tinted Alder',
    price: '$1,480.00',
    description:
      'Bufete de aliso tintado con acabado mate y herrajes ocultos. Amplio almacenaje con puertas corredizas de línea limpia.',
    badge: null,
    image: resolveImageByName('11-buffetAliso.jpg'),
    previewImage: resolveImageByName('12-buffetAliso.jpg'),
    repeatImage: resolveImageByName('12-buffetAliso.jpg'),
  },
  {
    id: 7,
    name: 'Otomana Cuero',
    spec: 'Vegan Leather',
    price: '$560.00',
    description:
      'Otomana redondeada de cuero vegano en tono tabaco. Volumen generoso y costuras finas que añaden calidez al espacio.',
    badge: 'oferta',
    image: resolveImageByName('13-otomanaCuero.jpg'),
    previewImage: resolveImageByName('14-otomanoCuero.jpg'),
    repeatImage: resolveImageByName('14-otomanoCuero.jpg'),
  },
  {
    id: 8,
    name: 'Librero Escultural',
    spec: 'Smoked Oak',
    price: '$1,790.00',
    description:
      'Librero de roble ahumado con estanterías asimétricas. Composición arquitectónica que funciona como divisor de ambientes.',
    badge: null,
    image: resolveImageByName('15-libreroEscultural.jpg'),
    previewImage: resolveImageByName('16-libreroEscultural.jpg'),
    repeatImage: resolveImageByName('16-libreroEscultural.jpg'),
  },
]

