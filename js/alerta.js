export { mostrar }

function mostrar() {
  const $boton = document.getElementById('boton')
  document.addEventListener('click', (e) => {
    if (e.target === $boton) {
      const alert = Swal.fire({
        icon: 'success',
        title: 'Gracias por tu interes te contactare lo antes posible',
        text: 'Enviado!',
      })
    }
  })
}