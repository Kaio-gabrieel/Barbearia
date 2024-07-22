const form = document.querySelector(".for")
const mascara = document.querySelector(".mascara-formulario")
let contFotos = document.querySelector(".container-fotos")
let fotos = contFotos.querySelectorAll(".fotos")
const prevButton = document.querySelector(".direita")
const nextButton = document.querySelector(".esquerda")

let active = 0;
let firsPosition = 0; 
let lastPosition = fotos.length-1;

function setSlider(){
  let itemOLd = contFotos.querySelector(".fotos.ativo")
  itemOLd.classList.remove("ativo");
}

prevButton.onclick = () => {
  active = active + 1 > lastPosition ? 0 : active + 1; 
  setSlider();
  fotos[active].classList.add("ativo")
 
}

nextButton.onclick = () => {
  active = active - 1 < firsPosition ? lastPosition : active -1;
  setSlider();
  fotos[active].classList.add("ativo")

}



const proxButton = document.querySelector(".direita01")
const returButton = document.querySelector(".esquerda02")
const contItem = document.querySelector(".container-item")
let itens = contItem.querySelectorAll(".item")

let ativo = 0;
let retunPosition = 0; 
let proxPosition = itens.length-1;

proxButton.onclick = () => {
 ativo = ativo + 1 > proxPosition ? 0 : ativo + 1; 
  Slider();
  itens[ativo].classList.add("active")
}

returButton.onclick = () => {
  ativo = ativo - 1 < retunPosition ? proxPosition : ativo - 1; 
  Slider();
  itens[ativo].classList.add("active")
}
function Slider(){
  let itemVelho = contItem.querySelector(".item.active")
  itemVelho.classList.remove("active");
}








function cliquei(){
form.style.top = "20%"
form.transform = "translatey(-50%)"
 mascara.style.visibility = "visible"
}

function CliqueiNaMascara(){
  mascara.style.visibility = " hidden"
  form.style.transform = "translatey(0)"
  form.style.top = "-120%"
}

