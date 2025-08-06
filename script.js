function filtrarCategoria(nombreCategoria) {
  if (nombreCategoria === 'todos') {
    mostrarProductos(productos);
  } else {
    const filtrados = productos.filter(p => p.categoria === nombreCategoria);
    mostrarProductos(filtrados);
  }
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
        <img src="${p.imagen || 'imagenes/no-disponible.jpg'}" alt="${p.nombre}">
        <p>${p.descripcion || ''}</p>
        ${tablaPrecios}
      </div>
    `;
  });
}

mostrarProductos(productos);
