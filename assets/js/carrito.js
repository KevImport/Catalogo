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

function abrirCarrito() {
  actualizarVistaCarrito();
  establecerEstadoCarrito(true);
  document.getElementById('carrito').focus({ preventScroll: true });
}

function cerrarCarrito(devolverFoco = true) {
  establecerEstadoCarrito(false);
  if (devolverFoco) {
    document.querySelector('.btn-ver-carrito').focus({ preventScroll: true });
  }
}

function alternarCarrito() {
  if (document.getElementById('carrito').hidden) {
    abrirCarrito();
  } else {
    cerrarCarrito();
  }
}

function establecerEstadoCarrito(abierto) {
  const boton = document.querySelector('.btn-ver-carrito');
  document.getElementById('carrito').hidden = !abierto;
  document.body.classList.toggle('carrito-abierto', abierto);
  boton.setAttribute('aria-expanded', String(abierto));
  boton.setAttribute('aria-label', abierto ? 'Cerrar mi carrito' : 'Abrir mi carrito');
}

// Captura el clic antes de que eliminar o actualizar un producto reemplace su nodo.
// No se cancela el evento: los demás botones mantienen su comportamiento.
document.addEventListener('click', evento => {
  const panel = document.getElementById('carrito');
  const boton = document.querySelector('.btn-ver-carrito');
  if (!panel.hidden && !panel.contains(evento.target) && !boton.contains(evento.target)) {
    cerrarCarrito(false);
  }
}, true);

document.addEventListener('keydown', evento => {
  if (evento.key === 'Escape' && !document.getElementById('carrito').hidden) {
    cerrarCarrito();
  }
});

function actualizarVistaCarrito() {
  const contenedor = document.getElementById("contenido-carrito");
  const totalTexto = document.getElementById("total-carrito");
  contenedor.innerHTML = carrito.length === 0
    ? '<p class="carrito-vacio">Tu carrito está esperando tus favoritos.</p>'
    : '';
  document.getElementById('cantidad-carrito').textContent = carrito.reduce((sum, item) => sum + item.cantidad, 0);

  let total = 0;

  carrito.forEach((item, index) => {
    total += parseFloat(item.total);

    contenedor.innerHTML += `
      <div class="item-carrito">
        <strong>${item.nombre}</strong><br>
        Cantidad: 
        <input 
          type="number" 
          min="1" 
          max="${item.stock}" 
          value="${item.cantidad}" 
          onchange="cambiarCantidad(${index}, this.value)" 
          aria-label="Cantidad de ${item.nombre}"
        /><br>
        Precio unitario: S/${item.precioUnitario}<br>
        Total: S/${item.total}<br>
        <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
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

  const numero = "51912876164";

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}

function obtenerPrecioPorCantidad(precios, cantidad) {
  const escalas = Object.keys(precios).map(Number).sort((a, b) => a - b);
  let precioUnitario = null;

  for (let i = 0; i < escalas.length; i++) {
    if (cantidad >= escalas[i]) {
      precioUnitario = precios[escalas[i]];
    }
  }
  return precioUnitario;
}

function cambiarCantidad(index, nuevaCantidad) {
  nuevaCantidad = parseInt(nuevaCantidad);

  if (isNaN(nuevaCantidad) || nuevaCantidad < 1) {
    nuevaCantidad = 1;
  } else if (nuevaCantidad > carrito[index].stock) {
    nuevaCantidad = carrito[index].stock;
  }

  const precioUnitario = obtenerPrecioPorCantidad(carrito[index].precios, nuevaCantidad);

  carrito[index].cantidad = nuevaCantidad;
  carrito[index].precioUnitario = precioUnitario;
  carrito[index].total = (precioUnitario * nuevaCantidad).toFixed(2);

  actualizarVistaCarrito();
}
