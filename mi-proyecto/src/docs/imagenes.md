# 🖼️ Cómo añadir / reemplazar imágenes de productos

Todas las imágenes de los muebles viven en:

```
src/assets/images/
```

El catálogo carga automáticamente los archivos de esa carpeta (`.jpg`, `.png`,
`.webp`, `.svg`, etc.). Cada producto indica explícitamente qué nombres de
archivo usa para la imagen principal y la de vista rápida, sin depender del
orden alfabético.

---

## ✅ Añadir / reemplazar imágenes (flujo básico)

1. Abre la carpeta `src/assets/images/`.
2. Coloca o reemplaza tus fotos.
3. Guarda y recarga: la página mostrará las imágenes automáticamente.

---

## 🎯 Controlar las imágenes de cada producto

Cada producto tiene dos campos principales: `image` para la tarjeta de la
página principal y `previewImage` para la imagen que se muestra al abrir
"Vista Rápida".

| Producto | Tarjeta | Vista Rápida |
|----------|---------|--------------|
| Silla Nórdica | `07-sillaNordica.jpg.webp` | `08-sillaNordica.jpg.webp` |
| Sofá Terciopelo | `01-sofa.jpg.jpg` | `02-sofa.jpg.jpg` |
| Mesa Roble | `04-mesaRoble.jpg.webp` | `05-mesaRoble.jpg.webp` |
| Lámpara Cúpula | `03-lampara.jpg.jpg` | `06-lampara.jpg.webp` |
| Sillón Cápsula | `09-sillaCupula.jpg` | `10-sillaCapsula.jpg` |
| Bufete Aliso | `11-buffetAliso.jpg` | `12-buffetAliso.jpg` |
| Otomana Cuero | `13-otomanaCuero.jpg` | `14-otomanoCuero.jpg` |
| Librero Escultural | `15-libreroEscultural.jpg` | `16-libreroEscultural.jpg` |

Usa el nombre exacto del archivo para mantener la correspondencia aunque se
añadan nuevas imágenes.

---

## ✏️ Formato de producto en `products.js`

```js
{
  id: 1,
  name: 'Silla Nórdica',
  spec: 'Ash Wood & Linen',
  price: '$249.00',
  badge: 'nuevo',
  image: resolveImageByName('07-sillaNordica.jpg.webp'),
  previewImage: resolveImageByName('08-sillaNordica.jpg.webp'),
  repeatImage: resolveImageByName('08-sillaNordica.jpg.webp'),
  description: '...',
}
```

> El campo `previewImage` se usa en la vista rápida. `repeatImage` queda como
> alias para compatibilidad con otros puntos del código.

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
