let carrito = [];

function agregarAlCarrito(nombreProducto) {
  const producto = productos.find(p => p.nombre === nombreProducto);
  const inputCantidad = document.getElementById(`cant-${producto.nombre}`);
  const cantidad = parseInt(inputCantidad.value);

  if (isNaN(cantidad) || cantidad < 1) return alert("Cantidad no válida");

  let precioUnitario = null;
  const cantidades = Object.keys(producto.precios).map(n => parseInt(n)).sort((a,b) => a - b);
  for (let i = 0; i < cantidades.length; i++) {
    if (cantidad >= cantidades[i]) {
      precioUnitario = producto.precios[cantidades[i]];
    }
  }

  const total = (precioUnitario * cantidad).toFixed(2);

  carrito.push({
    nombre: producto.nombre,
    cantidad: cantidad,
    precioUnitario: precioUnitario,
    total: total
  });

  alert("Producto añadido al carrito");
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

  const productosPagina = lista;

  productosPagina.forEach(p => {
    let tablaPrecios = "";

    if (p.precios) {
      tablaPrecios += `
        <table style="width:100%; font-size:14px; margin-top:10px; border-collapse: collapse; text-align: center;">
          <thead>
            <tr>
              <th style="padding: 6px;">Pedido mínimo</th>
              <th style="padding: 6px;">Precio unitario</th>
            </tr>
          </thead>
          <tbody>
      `;

      for (let cantidad in p.precios) {
        tablaPrecios += `
          <tr>
            <td style="padding: 6px;">${cantidad}</td>
            <td style="padding: 6px;">S/${p.precios[cantidad]}</td>
          </tr>
        `;
      }

      tablaPrecios += `
          </tbody>
        </table>
        <div style="margin-top:10px;">
          <label>Cantidad: </label>
          <input type="number" min="1" value="1" id="cant-${p.nombre}" style="width:60px;" />
          <button onclick="agregarAlCarrito('${p.nombre}')">Añadir</button>
        </div>
      `;
    }

    contenedor.innerHTML += `
      <div class="producto">
        <h3>${p.nombre}</h3>
        <img src="${p.imagen || 'imagenes/no-disponible.jpg'}" alt="${p.nombre}">
        <p>${p.descripcion || ''}</p>
        ${tablaPrecios}
      </div>
    `;
  });
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



