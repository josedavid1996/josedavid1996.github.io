
//menu
const d = document,
  menu = d.querySelector('.menu'),
  lista = d.querySelector('.lista')
menu.addEventListener("click", () => {
  lista.classList.toggle('borrar')
})


///////////////formulario
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
const $form = document.getElementById('form');

$form.addEventListener('submit', hanlessubmit);

async function hanlessubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      'Accept': 'Aplication/json'
    }
  })
  if (response.ok) {
    this.reset()
    Swal.fire({
      icon: 'success',
      title: 'Gracias por tu interes te contactare lo antes posible',
      text: 'Enviado!',
    })
  }
}