import { datos } from './datos.js';
// console.log(datos.spark['presion-ti'])

const d = document;

const boton = d.querySelector('.form-submit')
const form = d.querySelector('.form')
const $template = document.getElementById("template").content
const $fragment = document.createDocumentFragment()
const $pintar = d.querySelector('.pintar')
d.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = d.querySelector("#text").value;
  console.log(text)
  $template.querySelector("h1").textContent = datos[text].title
  $template.querySelector("img").setAttribute("src", datos[text].imagen);
  $template.querySelectorAll("h2")[0].textContent = `Presion DD = ${datos[text].presiondd} `
  $template.querySelectorAll("h2")[1].textContent = `Presion DI = ${datos[text].presiondi} `;
  $template.querySelectorAll("h2")[2].textContent = `Presion TD = ${datos[text].presiontd} `;
  $template.querySelectorAll("h2")[3].textContent = `Presion TI = ${datos[text].presionti} `;
  $template.querySelectorAll("h2")[4].textContent = `Carroseria = ${datos[text].carroseria} `;
  $template.querySelectorAll("h2")[5].textContent = `Servicio = ${datos[text].servicio} `;
  ;

  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
  form.reset();
  $pintar.appendChild($fragment);

})


