import { datos } from './datos.js';
console.log(datos.spark['presion-ti'])

const d = document;

const boton = d.querySelector('.form-submit')
const form = d.querySelector('.form')
const $template = document.getElementById("template").content
const $fragment = document.createDocumentFragment()
const $pintar = d.querySelector('.pintar')
d.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = d.querySelector("#text").value;
  if (text === 'spark') {

    $template.querySelector("img").setAttribute("src", datos.spark.imagen);
    $template.querySelectorAll("h2")[0].textContent = `Presion DD = ${datos.spark.presiondd} `
    $template.querySelectorAll("h2")[1].textContent = `Presion DI = ${datos.spark.presiondi} `;
    $template.querySelectorAll("h2")[2].textContent = `Presion TD = ${datos.spark.presiontd} `;
    $template.querySelectorAll("h2")[3].textContent = `Presion TI = ${datos.spark.presionti} `;
    $template.querySelectorAll("h2")[4].textContent = `Presion DD = ${datos.spark.carroseria} `;
    $template.querySelectorAll("h2")[5].textContent = `Presion DD = ${datos.spark.servicio} `;
    ;

    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);

  } else if (text === 'hilux') {

    $template.querySelector("img").setAttribute("src", datos.hilux.imagen);
    $template.querySelectorAll("h2")[0].textContent = `Presion DD = ${datos.hilux.presiondd} `
    $template.querySelectorAll("h2")[1].textContent = `Presion DI = ${datos.hilux.presiondi} `;
    $template.querySelectorAll("h2")[2].textContent = `Presion TD = ${datos.hilux.presiontd} `;
    $template.querySelectorAll("h2")[3].textContent = `Presion TI = ${datos.hilux.presionti} `;
    $template.querySelectorAll("h2")[4].textContent = `Presion DD = ${datos.hilux.carroseria} `;
    $template.querySelectorAll("h2")[5].textContent = `Presion DD = ${datos.hilux.servicio} `;
    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
  }
  form.reset();
  $pintar.appendChild($fragment);

})


