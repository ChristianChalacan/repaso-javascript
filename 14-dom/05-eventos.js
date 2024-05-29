let form = document.createElement("form");
form.id = "mi formulario";
let input = document.createElement("input");
input.setAttribute("type", "text");
let btn = document.createElement("button");
btn.innerText = "Enviar";
form.append(input);
form.append(btn);

document.body.append(form);
// Accion que se despliega cuando el mouse esta en el perimetro de un elemento
form.onmouseenter = (e) => {
  console.log("Entra el mouse");
};
// Accion que se despliega cuando el mouse sale del perimetro del elemento
form.onmouseleave = () => {
  console.log("sale el mouse");
};
// Accion que se despliega cuando se da click sobre un elemento
input.onfocus = (e) => {
  console.log("input con focus");
};
// Accion que se da cuando se pierde el foco() de un elemento
input.onblur = (e) => {
  console.log("input perdio el foco");
};
input.onchange = (e) => {
  console.log("input cambio a ", e.target.value);
};

/* btn.onclick = (e) => {
  // Si un formulario tiene al final un boton, el navegador realizara la accion de enviar el formulario y recargar
  // la pagina, pero si en el evento de onclick usamos el metodo preventDefault este comportamiento se anula
  e.preventDefault();
  console.log("boton clickeado");
}; */

btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("boton clickeado");
});
