// products.js — Datos de catálogo para la página de inicio.
//
// Las imágenes se importan desde la carpeta `src/assets/` usando Vite.
// Para cambiar a fotos reales, coloca tus archivos en `src/assets/`
// conservando el mismo nombre (p. ej. `silla.svg`) o actualiza el import.

import sillaImg from '../assets/silla.svg'
import sofaImg from '../assets/sofa.svg'
import mesaImg from '../assets/mesa.svg'
import lamparaImg from '../assets/lampara.svg'
import sillonImg from '../assets/sillon.svg'
import bufeteImg from '../assets/bufete.svg'
import otomanaImg from '../assets/otomana.svg'
import libreroImg from '../assets/librero.svg'

// ============================================================
// Catálogo de productos
//   - name, spec, description, price: descripción del artículo
//   - badge: marcador dinámico ('nuevo' | 'oferta' | null)
//   - image: archivo importado desde src/assets/
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
    image: sillaImg,
  },
  {
    id: 2,
    name: 'Sofá Terciopelo',
    spec: 'Navy Velvet',
    price: '$1,299.00',
    description:
      'Sofá de dos plazas de perfil bajo y patas de acero cepillado. Tapizado en terciopelo azul marino que aporta una elegancia atemporal al salón.',
    badge: 'oferta',
    image: sofaImg,
  },
  {
    id: 3,
    name: 'Mesa Roble',
    spec: 'Solid Oak',
    price: '$895.00',
    description:
      'Mesa de comedor de roble macizo con tablero grueso y patas tipo bloque de inspiración brutalista. Acabado mate que resalta la veta natural.',
    badge: null,
    image: mesaImg,
  },
  {
    id: 4,
    name: 'Lámpara Cúpula',
    spec: 'Matte Black & Glass',
    price: '$180.00',
    description:
      'Lámpara de pie escultural con vástago de metal negro mate y base de hormigón. Difusor de vidrio esmerilado que emite una luz cálida y envolvente.',
    badge: 'nuevo',
    image: lamparaImg,
  },
  {
    id: 5,
    name: 'Sillón Cápsula',
    spec: 'Curved Bouclé',
    price: '$1,050.00',
    description:
      'Sillón de perfil envolvente tapizado en bouclé crema. Silueta orgánica y base de madera lacada en negro para un punto focal escultural.',
    badge: 'nuevo',
    image: sillonImg,
  },
  {
    id: 6,
    name: 'Bufete Aliso',
    spec: 'Tinted Alder',
    price: '$1,480.00',
    description:
      'Bufete de aliso tintado con acabado mate y herrajes ocultos. Amplio almacenaje con puertas corredizas de línea limpia.',
    badge: null,
    image: bufeteImg,
  },
  {
    id: 7,
    name: 'Otomana Cuero',
    spec: 'Vegan Leather',
    price: '$560.00',
    description:
      'Otomana redondeada de cuero vegano en tono tabaco. Volumen generoso y costuras finas que añaden calidez al espacio.',
    badge: 'oferta',
    image: otomanaImg,
  },
  {
    id: 8,
    name: 'Librero Escultural',
    spec: 'Smoked Oak',
    price: '$1,790.00',
    description:
      'Librero de roble ahumado con estanterías asimétricas. Composición arquitectónica que funciona como divisor de ambientes.',
    badge: null,
    image: libreroImg,
  },
]
