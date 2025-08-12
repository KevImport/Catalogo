let carrito = [];

function agregarAlCarrito(nombreProducto) {
  const producto = productos.find(p => p.nombre === nombreProducto);
  if (!producto) return;

  const input = document.getElementById(`cantidad-${nombreProducto.replace(/\s+/g, '')}`);
  let cantidadSeleccionada = parseInt(input.value);

  if (isNaN(cantidadSeleccionada) || cantidadSeleccionada < 1) {
    cantidadSeleccionada = 1;
  }
  
  if (cantidadSeleccionada > producto.stock) {
    cantidadSeleccionada = producto.stock;
    alert(`Solo hay ${producto.stock} unidades disponibles de "${producto.nombre}".`);
  }

  let precioUnitario = null;
  const escalas = Object.keys(producto.precios).map(Number).sort((a, b) => a - b);
  for (let i = 0; i < escalas.length; i++) {
    if (cantidadSeleccionada >= escalas[i]) {
      precioUnitario = producto.precios[escalas[i]];
    }
  }

  const total = (precioUnitario * cantidadSeleccionada).toFixed(2);
  const itemCarrito = carrito.find(p => p.nombre === nombreProducto);

  if (itemCarrito) {
    if (itemCarrito.cantidad + cantidadSeleccionada > producto.stock) {
      alert(`No puedes añadir más de ${producto.stock} unidades de "${producto.nombre}".`);
      return;
    }
    itemCarrito.cantidad += cantidadSeleccionada;
    itemCarrito.precioUnitario = precioUnitario;
    itemCarrito.total = (precioUnitario * itemCarrito.cantidad).toFixed(2);
  } else {
    carrito.push({
      ...producto,
      cantidad: cantidadSeleccionada,
      precioUnitario: precioUnitario,
      total: total
    });
  }

  actualizarVistaCarrito();
}

function enviarPorWhatsApp() {
  if (carrito.length === 0) {
    alert("El carrito está vacío");
    return;
  }

  let mensaje = "🛒 *Pedido KEVIMPORT:*%0A";
  carrito.forEach(item => {
    mensaje += `• ${item.nombre} x${item.cantidad} = S/${item.total}%0A`;
  });

  const total = carrito.reduce((sum, p) => sum + parseFloat(p.total), 0);
  mensaje += `%0ATotal: S/ ${total.toFixed(2)}`;

  const numero = "51912876164";
  const url = `https://wa.me/${numero}?text=${mensaje}`;

  window.open(url, '_blank');
}

function filtrarCategoria(nombreCategoria) {
  window.categoriaSeleccionada = nombreCategoria;
  aplicarFiltrosYOrden();
}

function buscarProducto() {
  aplicarFiltrosYOrden();
}

function mostrarProductos(lista) {
  const contenedor = document.getElementById('catalogo');
  contenedor.innerHTML = "";

  lista.forEach(p => {
    const card = document.createElement('div');
    card.classList.add('producto');

    let tablaPrecios = "<table class='tabla-precios'><tr><th>Cantidad</th><th>Precio</th></tr>";
    for (let cantidad in p.precios) {
      tablaPrecios += `<tr><td>${cantidad}+</td><td>S/ ${p.precios[cantidad].toFixed(2)}</td></tr>`;
    }
    tablaPrecios += "</table>";

    let stockHTML = `<p class="stock">Stock: ${p.stock}</p>`;
    let inputCantidad = '';
    let botonAgregar = '';

    if (p.stock > 0) {
      inputCantidad = `
        <div class="cantidad-control">
          <button type="button" onclick="cambiarInputCantidad('${p.nombre}', -1)">−</button>
          <input type="number" min="1" max="${p.stock}" value="1" id="cantidad-${p.nombre.replace(/\s+/g, '')}">
          <button type="button" onclick="cambiarInputCantidad('${p.nombre}', 1)">+</button>
        </div>
      `;
      botonAgregar = `<button class="btn-agregar" onclick="agregarAlCarrito('${p.nombre}')">Añadir</button>`;
    } else {
      stockHTML = `<p class="stock agotado">AGOTADO</p>`;
    }
    card.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}">
      <h3>${p.nombre}</h3>
      <p>${p.descripcion}</p>
      ${tablaPrecios}
      ${stockHTML}
      ${inputCantidad}
      ${botonAgregar}
    `;

    contenedor.appendChild(card);
  });
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
  const orden = document.getElementById("ordenSelect").value;

  let productosOrdenados = [...lista];

  productosOrdenados.sort((a, b) => {
    if (orden === "az") {
      return a.nombre.localeCompare(b.nombre);
    } else if (orden === "za") {
      return b.nombre.localeCompare(a.nombre);
    }
    return 0;
  });

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

window.categoriaSeleccionada = 'todos';
aplicarFiltrosYOrden();

function abrirCarrito() {
  actualizarVistaCarrito();
  document.getElementById("carrito").style.display = "block";
}

function cerrarCarrito() {
  document.getElementById("carrito").style.display = "none";
}

function actualizarVistaCarrito() {
  const contenedor = document.getElementById("contenido-carrito");
  const totalTexto = document.getElementById("total-carrito");
  contenedor.innerHTML = "";

  let total = 0;

  carrito.forEach((item, index) => {
    total += parseFloat(item.total);

    contenedor.innerHTML += `
      <div style="margin-bottom: 10px; border-bottom: 1px solid #ccc; padding-bottom: 6px;">
        <strong>${item.nombre}</strong><br>
        Cantidad: 
        <input 
          type="number" 
          min="1" 
          value="${item.cantidad}" 
          onchange="cambiarCantidad(${index}, this.value)" 
          style="width: 50px;" 
        /><br>
        Precio unitario: S/${item.precioUnitario}<br>
        Total: S/${item.total}<br>
        <button onclick="eliminarDelCarrito(${index})" style="background:#ff4444;">Eliminar</button>
      </div>
    `;
  });

  totalTexto.textContent = `Total del pedido: S/${total.toFixed(2)}`;
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarVistaCarrito();
}

function enviarPedidoPorWhatsApp() {
  if (carrito.length === 0) return alert("Tu carrito está vacío.");

  let mensaje = "¡Hola! Quiero hacer el siguiente pedido:\n\n";

  carrito.forEach(item => {
    mensaje += `• ${item.nombre} x${item.cantidad} - S/${item.total}\n`;
  });

  const total = carrito.reduce((sum, item) => sum + parseFloat(item.total), 0);
  mensaje += `\nTotal: S/${total.toFixed(2)}\n`;

  const numero = "51912876164";function actualizarVistaCarrito() {
  const contenedor = document.getElementById("contenido-carrito");
  const totalTexto = document.getElementById("total-carrito");
  contenedor.innerHTML = "";

  let total = 0;

  carrito.forEach((item, index) => {
    total += parseFloat(item.total);

    contenedor.innerHTML += `
      <div style="margin-bottom: 10px; border-bottom: 1px solid #ccc; padding-bottom: 6px;">
        <strong>${item.nombre}</strong><br>
        Cantidad: 
        <input 
          type="number" 
          min="1" 
          value="${item.cantidad}" 
          onchange="cambiarCantidad(${index}, this.value)" 
          style="width: 50px;" 
        /><br>
        Precio unitario: S/${item.precioUnitario}<br>
        Total: S/${item.total}<br>
        <button onclick="eliminarDelCarrito(${index})" style="background:#ff4444;">Eliminar</button>
      </div>
    `;
  });
  totalTexto.textContent = `Total del pedido: S/${total.toFixed(2)}`;
}

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}

function cambiarCantidad(index, nuevaCantidad) {
  nuevaCantidad = parseInt(nuevaCantidad);

  if (isNaN(nuevaCantidad) || nuevaCantidad < 1) {
    alert("Cantidad no válida");
    return;
  }

  const producto = productos.find(p => p.nombre === carrito[index].nombre);

  let nuevoPrecio = null;
  const escalas = Object.keys(producto.precios).map(Number).sort((a, b) => a - b);

  for (let i = 0; i < escalas.length; i++) {
    if (nuevaCantidad >= escalas[i]) {
      nuevoPrecio = producto.precios[escalas[i]];
    }
  }

  const nuevoTotal = (nuevoPrecio * nuevaCantidad).toFixed(2);

  carrito[index].cantidad = nuevaCantidad;
  carrito[index].precioUnitario = nuevoPrecio;
  carrito[index].total = nuevoTotal;

  actualizarVistaCarrito();
}





