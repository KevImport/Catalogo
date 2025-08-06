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
      tablaPrecios += `</tbody></table>`;
    }

    contenedor.innerHTML += `
      <div class="producto">
        <h3>${p.nombre}</h3>
        <p style="margin-top: -10px; font-size: 14px; color: #555;">Código: ${p.codigo || 'N/A'}</p>
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
  }, 300); // Espera 300ms después de que el usuario deje de escribir
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



