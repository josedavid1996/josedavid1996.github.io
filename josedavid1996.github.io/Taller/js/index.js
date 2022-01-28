const d = document;
const inicio = d.getElementById("form-inicio")
const registro = d.getElementById("form-registro")

d.addEventListener("click",(e)=>{
  if(e.target === registrar){
    inicio.style.display= "none"
    registro.style.display = "block"
  }
  if(e.target === sesion){
    inicio.style.display= "block"
    registro.style.display = "none"
  }
})