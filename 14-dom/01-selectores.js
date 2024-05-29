// Nos desvuelve un HTML Element
const htmlElement = document.getElementById("cuerpo");
// Nos devuelve un HTML Collection que parece un array pero no lo es
let elementosRed = document.getElementsByClassName("red");
// Nos devuelve un Node List que parece un HTML Collection pero no lo es
let elementoPorNombre = document.getElementsByName("p4");
// Nos devuelve un HTML Collection que parece un array pero no lo es
let parrafos = document.getElementsByTagName("p");
// Nos devuelve un HTML Element
// se puede seleccionar por los criterios de:
// id = #
// class = .
// tag = sin ningun caracter extra
// en el caso de haber mas de un elemento con el criterio de busqueda nos devolvera el primero
let el1 = document.querySelector("#cuerpo");
let el2 = document.querySelector(".red");
let el3 = document.querySelector("p");
// Devuelve un NodeList con todos los elementos que cumplan con el criterio de busqueda
let els = document.querySelectorAll("p");
// Generando una nueva etiqueta html
let par = document.createElement("p");
// Dandole contenido al nuevo parrafo
par.innerHTML = "parrafo nuevo";
// insertamos el nuevo parrafo en el div con nombre body
document.body.appendChild(par);

console.log(htmlElement);

console.log(elementosRed);

console.log(elementoPorNombre);

console.log(parrafos);

console.log(el1);
console.log(el2);
console.log(el3);

console.log(els);
