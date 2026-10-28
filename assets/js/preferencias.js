function cambiarModoColor() {
  const activar = !document.body.classList.contains('modo-oscuro');
  const boton = document.getElementById('cambiar-modo-color');

  document.body.classList.toggle('modo-oscuro', activar);
  boton.textContent = activar ? 'Modo claro' : 'Modo oscuro';
  boton.setAttribute('aria-pressed', String(activar));
  localStorage.setItem('modoOscuro', String(activar));
}

function cargarModoColorGuardado() {
  if (localStorage.getItem('modoOscuro') === 'true') {
    cambiarModoColor();
  }
}

function cambiarTamanoLetra() {
  const activar = !document.body.classList.contains('texto-grande');
  const boton = document.getElementById('cambiar-tamano-letra');

  document.body.classList.toggle('texto-grande', activar);
  boton.textContent = activar ? 'Letra normal' : 'Letra grande';
  boton.setAttribute('aria-pressed', String(activar));
  localStorage.setItem('tamanoLetraGrande', String(activar));
}

function cargarTamanoLetraGuardado() {
  if (localStorage.getItem('tamanoLetraGrande') === 'true') {
    cambiarTamanoLetra();
  }
}
