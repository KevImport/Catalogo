let listaActual = [];
let cantidadProductosMostrados = 0;

function obtenerCantidadPorCarga() {
  if (window.innerWidth <= 767) return 6;
  if (window.innerWidth <= 1023) return 8;
  return 12;
}

function filtrarCategoria(nombreCategoria) {
  window.categoriaSeleccionada = nombreCategoria;
  document.querySelectorAll('[data-categoria]').forEach(boton => {
    boton.setAttribute('aria-pressed', String(boton.dataset.categoria === nombreCategoria));
  });
  document.getElementById('titulo-catalogo').textContent = nombreCategoria === 'todos'
    ? 'Todos los productos'
    : nombreCategoria;
  aplicarFiltrosYOrden();
}

function mostrarProductos(lista) {
  listaActual = lista;
  cantidadProductosMostrados = 0;
  renderizarProductos();
}

function renderizarProductos() {
  const contenedor = document.getElementById('catalogo');
  const botonVerMas = document.getElementById('ver-mas');
  const cantidadPorCarga = obtenerCantidadPorCarga();
  const mostrarTodos = window.categoriaSeleccionada === 'todos';
  const productosVisibles = mostrarTodos
    ? listaActual.slice(0, cantidadProductosMostrados + cantidadPorCarga)
    : listaActual;

  contenedor.innerHTML = "";

  productosVisibles.forEach(p => {
    const card = document.createElement('div');
    card.classList.add('producto');

    let tablaPrecios = "<table class='tabla-precios'><tr><th>Cantidad</th><th>Precio</th></tr>";
    for (let cantidad in p.precios) {
      tablaPrecios += `<tr><td>${cantidad}+</td><td>S/ ${p.precios[cantidad].toFixed(2)}</td></tr>`;
    }
    tablaPrecios += "</table>";
    
    let stockHTML = `<p class="stock"><strong><em>📦 STOCK DISPONIBLE: ${p.stock}</em></strong></p>`;
    let inputCantidad = '';
    let botonAgregar = '';

    if (p.stock > 0) {
      inputCantidad = `
        <div class="cantidad-control">
          <button type="button" aria-label="Reducir cantidad" onclick="cambiarInputCantidad('${p.nombre}', -1)">−</button>
          <input type="number" min="1" max="${p.stock}" value="1" aria-label="Cantidad de ${p.nombre}" id="cantidad-${p.nombre.replace(/\s+/g, '')}">
          <button type="button" aria-label="Aumentar cantidad" onclick="cambiarInputCantidad('${p.nombre}', 1)">+</button>
        </div>
      `;
      botonAgregar = `<button class="btn-agregar" onclick="agregarAlCarrito('${p.nombre}')">Añadir</button>`;
    } else {
      stockHTML = `<p class="stock agotado">AGOTADO</p>`;
    }
    card.innerHTML = `
      <div class="producto-imagen"><img src="${p.imagen}" alt="${p.nombre}" loading="lazy"></div>
      <div class="producto-contenido">
        <span class="producto-categoria">${p.categoria}</span>
        <h3>${p.nombre}</h3>
        <p class="descripcion">${p.descripcion}</p>
        <div class="precio-destacado"><span>Desde</span><strong>S/ ${Math.min(...Object.values(p.precios)).toFixed(2)}</strong></div>
        ${tablaPrecios}
        ${stockHTML}
        <div class="producto-acciones">${inputCantidad}${botonAgregar}</div>
      </div>
    `;

    contenedor.appendChild(card);
  });

  cantidadProductosMostrados = productosVisibles.length;
  botonVerMas.hidden = !mostrarTodos || cantidadProductosMostrados >= listaActual.length;
  document.getElementById('resumen-productos').textContent = `${cantidadProductosMostrados} de ${listaActual.length} productos`;
  document.getElementById('sin-resultados').hidden = listaActual.length > 0;
}

function cargarMasProductos() {
  renderizarProductos();
}

function cambiarInputCantidad(nombreProducto, cambio) {
  const input = document.getElementById(`cantidad-${nombreProducto.replace(/\s+/g, '')}`);
  let valor = parseInt(input.value) || 1;
  valor += cambio;

  if (valor < 1) valor = 1;
  const producto = productos.find(p => p.nombre === nombreProducto);
  if (valor > producto.stock) valor = producto.stock;

  input.value = valor;
}

let timeoutId;

function buscarProducto() {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    aplicarFiltrosYOrden();
  }, 300);
}

function ordenarProductos(lista) {
  let productosOrdenados = [...lista];

  productosOrdenados.sort((a, b) =>
    b.nombre.localeCompare(a.nombre)
  );

  return productosOrdenados;
}

function aplicarFiltrosYOrden() {
  const texto = document.getElementById('buscador').value.toLowerCase();
  const categoriaSeleccionada = window.categoriaSeleccionada || 'todos';

  let listaFiltrada = productos;

  if (categoriaSeleccionada !== 'todos') {
    listaFiltrada = listaFiltrada.filter(p => p.categoria === categoriaSeleccionada);
  }

  if (texto) {
    listaFiltrada = listaFiltrada.filter(p => p.nombre.toLowerCase().includes(texto));
  }

  const listaOrdenada = ordenarProductos(listaFiltrada);
  mostrarProductos(listaOrdenada);
}
