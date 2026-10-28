window.categoriaSeleccionada = 'todos';
cargarTamanoLetraGuardado();
cargarModoColorGuardado();
aplicarFiltrosYOrden();

// El encabezado cambia de altura según el ancho, el zoom y el tamaño de letra.
const cabecera = document.querySelector('.cabecera');
function actualizarAlturaCabecera() {
  const rectangulo = cabecera.getBoundingClientRect();
  // Un encabezado muy alto no debe ocupar permanentemente la pantalla al ampliar.
  document.body.classList.toggle('cabecera-extensa', rectangulo.height > window.innerHeight * 0.45);
  document.documentElement.style.setProperty('--alto-cabecera', `${rectangulo.height}px`);
  document.documentElement.style.setProperty('--base-carrito', `${Math.max(0, rectangulo.bottom)}px`);
}
actualizarAlturaCabecera();
if ('ResizeObserver' in window) {
  new ResizeObserver(actualizarAlturaCabecera).observe(cabecera);
}
window.addEventListener('resize', actualizarAlturaCabecera);
window.addEventListener('scroll', actualizarAlturaCabecera, { passive: true });
