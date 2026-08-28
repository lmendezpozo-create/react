# 🖼️ Estructura y Vista Previa de Imágenes de Productos

Todas las imágenes de los muebles viven dentro de:

```
src/assets/images/
```

Las imágenes duplicadas / repetidas se organizan en la subcarpeta:

```
src/assets/images/repetidas/
```

---

## 🎯 Asignación de Nombres por Producto

Para garantizar que cada producto muestre la foto exacta en la página sin errores, se asigna un **prefijo numérico (`01-` a `08-`)** respetando el orden alfabético:

| Posición | Producto | Imagen Principal (`src/assets/images/`) | Imagen Repetida (`src/assets/images/repetidas/`) |
|---|---|---|---|
| **1** | **Silla Nórdica** | `01-sillaNordica.jpg` | `repetidas/repetida-01-silla.jpg` |
| **2** | **Sofá Terciopelo** | `02-sofaTerciopelo.jpg` | `repetidas/repetida-02-sofa.jpg` |
| **3** | **Mesa Roble** | `03-mesaRoble.jpg` | `repetidas/repetida-03-mesaNordica.jpg` |
| **4** | **Lámpara Cúpula** | `04-lamparaCupula.jpg` | `repetidas/repetida-04-lampara.jpg` |
| **5** | **Sillón Cápsula** | `05-sillonCapsula.jpg` | `repetidas/repetida-05-sillaCapsula.jpg` |
| **6** | **Bufete Aliso** | `06-bufeteAliso.jpg` | `repetidas/repetida-06-bufeteAlisson.jpg` |
| **7** | **Otomana Cuero** | `07-otomanaCuero.jpg` | `repetidas/repetida-07-otomanoCuero.jpg` |
| **8** | **Librero Escultural** | `08-libreroEscultural.jpg` | `repetidas/repetida-08-libreroEscultural.jpg` |

---

## 🖼️ Vista Previa de Imágenes Repetidas

A continuación se muestra la comparación en vista previa entre la **imagen principal asignada** y la **versión repetida/alternativa** de cada mueble:

### 1. Silla Nórdica
- **Imagen Principal (`01-sillaNordica.jpg`)**:  
  ![01-sillaNordica](../assets/images/01-sillaNordica.jpg)
- **Imagen Repetida (`repetida-01-silla.jpg`)**:  
  ![repetida-01-silla](../assets/images/repetidas/repetida-01-silla.jpg)

---

### 2. Sofá Terciopelo
- **Imagen Principal (`02-sofaTerciopelo.jpg`)**:  
  ![02-sofaTerciopelo](../assets/images/02-sofaTerciopelo.jpg)
- **Imagen Repetida (`repetida-02-sofa.jpg`)**:  
  ![repetida-02-sofa](../assets/images/repetidas/repetida-02-sofa.jpg)

---

### 3. Mesa Roble
- **Imagen Principal (`03-mesaRoble.jpg`)**:  
  ![03-mesaRoble](../assets/images/03-mesaRoble.jpg)
- **Imagen Repetida (`repetida-03-mesaNordica.jpg`)**:  
  ![repetida-03-mesaNordica](../assets/images/repetidas/repetida-03-mesaNordica.jpg)

---

### 4. Lámpara Cúpula
- **Imagen Principal (`04-lamparaCupula.jpg`)**:  
  ![04-lamparaCupula](../assets/images/04-lamparaCupula.jpg)
- **Imagen Repetida (`repetida-04-lampara.jpg`)**:  
  ![repetida-04-lampara](../assets/images/repetidas/repetida-04-lampara.jpg)

---

### 5. Sillón Cápsula
- **Imagen Principal (`05-sillonCapsula.jpg`)**:  
  ![05-sillonCapsula](../assets/images/05-sillonCapsula.jpg)
- **Imagen Repetida (`repetida-05-sillaCapsula.jpg`)**:  
  ![repetida-05-sillaCapsula](../assets/images/repetidas/repetida-05-sillaCapsula.jpg)

---

### 6. Bufete Aliso
- **Imagen Principal (`06-bufeteAliso.jpg`)**:  
  ![06-bufeteAliso](../assets/images/06-bufeteAliso.jpg)
- **Imagen Repetida (`repetida-06-bufeteAlisson.jpg`)**:  
  ![repetida-06-bufeteAlisson](../assets/images/repetidas/repetida-06-bufeteAlisson.jpg)

---

### 7. Otomana Cuero
- **Imagen Principal (`07-otomanaCuero.jpg`)**:  
  ![07-otomanaCuero](../assets/images/07-otomanaCuero.jpg)
- **Imagen Repetida (`repetida-07-otomanoCuero.jpg`)**:  
  ![repetida-07-otomanoCuero](../assets/images/repetidas/repetida-07-otomanoCuero.jpg)

---

### 8. Librero Escultural
- **Imagen Principal (`08-libreroEscultural.jpg`)**:  
  ![08-libreroEscultural](../assets/images/08-libreroEscultural.jpg)
- **Imagen Repetida (`repetida-08-libreroEscultural.jpg`)**:  
  ![repetida-08-libreroEscultural](../assets/images/repetidas/repetida-08-libreroEscultural.jpg)

---

## ✏️ Formato de producto en `products.js`

Cada producto en `src/data/products.js` contiene tanto la referencia a la imagen principal (`image`) como a la repetida (`repeatImage`):

```js
{
  id: 1,
  name: 'Silla Nórdica',
  spec: 'Ash Wood & Linen',
  price: '$249.00',
  badge: 'nuevo',
  image: imgAt(0),           // ← 01-sillaNordica.jpg
  repeatImage: repeatImgAt(0) // ← repetida-01-silla.jpg
}
```

