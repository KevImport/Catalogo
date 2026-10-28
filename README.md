# Catálogo KEVIMPORT

Catálogo estático de productos con búsqueda, filtros por categoría, precios por cantidad y carrito para enviar pedidos por WhatsApp.

## Estructura

```text
Catalogo/
├── index.html                  # Página principal
├── CNAME                       # Dominio del sitio
├── data/
│   └── productos.js            # Productos, precios, stock y rutas de imágenes
└── assets/
    ├── css/
    │   └── styles.css          # Estilos y diseño adaptable
    ├── js/
    │   ├── preferencias.js    # Modo oscuro y tamaño de letra
    │   ├── catalogo.js         # Búsqueda, filtros y tarjetas de productos
    │   ├── carrito.js          # Cantidades, totales y pedidos por WhatsApp
    │   └── main.js             # Inicialización de la página
    └── img/
        ├── productos/          # Imágenes de la antigua carpeta Img
        └── adicionales/        # Imágenes que estaban en la raíz
```

## Uso

Abre `index.html` en el navegador o utiliza un servidor estático como Live Server. No requiere instalación de dependencias ni compilación.

## Mantenimiento

- Para actualizar productos, edita `data/productos.js`.
- Guarda las imágenes del catálogo en `assets/img/productos/`. Las rutas del campo `imagen` se escriben desde la raíz del sitio, por ejemplo: `assets/img/productos/Imagen233.png`.
- Para cambiar la apariencia, edita `assets/css/styles.css`.
- Los scripts son archivos clásicos que comparten funciones globales con los botones HTML. Conserva el orden de carga de `index.html`: datos, preferencias, catálogo, carrito e inicialización.
- Para publicar, conserva toda la estructura y el archivo `CNAME` en la raíz.
