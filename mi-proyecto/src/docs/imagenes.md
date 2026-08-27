# 🖼️ Cómo añadir / reemplazar imágenes de productos

Todas las imágenes de los muebles viven en:

```
src/assets/images/
```

**No necesitas editar código:** el catálogo carga automáticamente cualquier
archivo que coloques en esa carpeta (`.jpg`, `.png`, `.webp`, `.svg`, etc.).

---

## ✅ Añadir / reemplazar imágenes (flujo básico)

1. Abre la carpeta `src/assets/images/`.
2. Coloca o reemplaza tus fotos.
3. Guarda y recarga: la página mostrará las imágenes automáticamente.

No hay que tocar `products.js` para que aparezcan.

---

## 🎯 Controlar qué imagen va en cada tarjeta

Las imágenes se asignan a los productos en **orden alfabético del nombre**
de archivo. Para que cada foto quede en la tarjeta que quieres, usa un
**prefijo numérico** según la posición del producto:

| Posición | Producto        | Renombra la imagen así  |
|----------|-----------------|--------------------------|
| 1        | Silla Nórdica   | `01-silla.jpg`           |
| 2        | Sofá Terciopelo | `02-sofa.jpg`            |
| 3        | Mesa Roble      | `03-mesa.jpg`            |
| 4        | Lámpara Cúpula  | `04-lampara.jpg`         |
| 5        | Sillón Cápsula  | `05-sillon.jpg`          |
| 6        | Bufete Aliso    | `06-bufete.jpg`          |
| 7        | Otomana Cuero   | `07-otomana.jpg`         |
| 8        | Librero         | `08-librero.jpg`         |

Al poner `01-`, `02-`, ... el orden alfabético respeta tu intención.

---

## ✏️ Formato de producto en `products.js`

Si además quieres cambiar nombre, precio o descripción, edita el objeto del
producto en `src/data/products.js`. Cada producto tiene esta forma:

```js
{
  id: 1,
  name: 'Silla Nórdica',
  spec: 'Ash Wood & Linen',
  price: '$249.00',
  badge: 'nuevo',          // 'nuevo' | 'oferta' | null
  image: imgAt(0),         // ← posición de la imagen (0 = primera)
  description: '...',
},
```

> El campo `image: imgAt(0)` indica la **posición** de la imagen dentro de la
> carpeta (ordenada alfabéticamente). `0` = primera, `1` = segunda, etc.

---

## 🗂️ Formatos admitidos

Vite procesa automáticamente: `png`, `jpg`, `jpeg`, `webp`, `avif`, `gif`,
`svg` y otros.

---

## ❓ Preguntas frecuentes

- **¿Se ven borrosas?** Sube imágenes de al menos ~800×1000 px (proporción
  4:5 recomendada para las tarjetas).
- **¿Puedo usar un enlace de internet en lugar de un archivo?** Sí, escribe
  la URL directamente en la propiedad `image` del producto en `products.js`.
- **Subí una imagen y no sale.** Revisa que esté dentro de
  `src/assets/images/` y que la extensión sea válida. Si el dev server estaba
  corriendo, reinícialo (Ctrl+C y `npm run dev`).
