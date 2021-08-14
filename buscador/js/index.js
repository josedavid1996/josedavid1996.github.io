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

  // $pintar = null
  const text = d.querySelector(".form-text").value.toLocaleUpperCase();
  console.log(text.Marca)
  $template.querySelector("h3").textContent = datos[text].title
  $template.querySelector("img").setAttribute("src", datos[text].imagen);
  $template.querySelectorAll("h5")[0].textContent = `Marca = ${datos[text].marca} `
  $template.querySelectorAll("h5")[1].textContent = `Clase = ${datos[text].clase} `;
  $template.querySelectorAll("h5")[2].textContent = `Linea= ${datos[text].linea} `;
  $template.querySelectorAll("h5")[3].textContent = `Carroceria = ${datos[text].carroceria} `;
  $template.querySelectorAll("h5")[4].textContent = `LLantas Delanteras = ${datos[text].llantad} `;
  $template.querySelectorAll("h5")[5].textContent = `LLantas Traseras = ${datos[text].llantat} `;
  $template.querySelectorAll("h5")[6].textContent = `Referencia del fabricante = ${datos[text].referencia} `;
  

  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
  form.reset();
  $pintar.appendChild($fragment);
})
// d.addEventListener('click', (e) => {
//   console.log(e.target)
// })


if("serviceWorker" in navigator){
  navigator.serviceWorker.register("./sw.js")
  .then(registrado => console.log("se intalo correctamente"), )
  .catch(error => console.log("fallo todo"))
}else{
    console.log("desconectado")

}