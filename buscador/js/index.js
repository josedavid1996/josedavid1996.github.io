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
  const text = d.querySelector(".form-text").value;
  $template.querySelector("h3").textContent = datos[text].title
  $template.querySelector("img").setAttribute("src", datos[text].imagen);
  $template.querySelectorAll("h5")[0].textContent = `Presion Delantera = ${datos[text].presiond} `
  $template.querySelectorAll("h5")[1].textContent = `Presion Trasera = ${datos[text].presiont} `;
  $template.querySelectorAll("h5")[2].textContent = `Presion Repuesto = ${datos[text].repuesto} `;
  $template.querySelectorAll("h5")[3].textContent = `Carroseria = ${datos[text].carroseria} `;
  $template.querySelectorAll("h5")[4].textContent = `Cilindraje = ${datos[text].cilindraje} `;
  ;

  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
  form.reset();
  $pintar.appendChild($fragment);
})
// d.addEventListener('click', (e) => {
//   console.log(e.target)
// })
