let el = document.createElement("p");
// Agrega el valor al parrafo pero tambien nos sirve para añadir elementos HTML
el.innerHTML = "Elemento creado";

let div = document.getElementById("cuerpo");

div.append(el);

console.log(div);
// Los elementos creados desde javascript solo pueden ser añadidos una vez
// y se añadiran al ultimo elemento al que se haya añadido
document.body.append(el);
// Para remover una etiqueta o texto se necesita una referencia de la misma
el.remove();
// Añadimos una etiqueta o texto al inicio del elemento seleccionado
document.body.prepend(el);
// Creamos un nuevo elemento para remplazar uno antiguo
let newDiv = document.createElement("div");
newDiv.innerText = "Texto dentro de un div";
// Remplazamos el(parrafo) con newDiv(div)
el.replaceWith(newDiv);

// Remplazamos el(parrafo) con newDiv(div)
document.body.replaceChild(el, newDiv);
// Removiendo un elemento con una referencia
document.body.removeChild(el);
// Añadiendo un elemento al final de body, este metodo solo sirve con nodos
document.body.appendChild(el);

// Insertamos un elemento antes de un especificado
document.body.insertBefore(newDiv, el);

// Tambien podemos insertar nuevos nodos con insertAdjacentElement
// recibe 2 parametros, el primero es la posicion en referencia del elemento
// y el segundo es el elemento que se insertara
div.insertAdjacentElement("beforebegin", el);
div.insertAdjacentElement("afterbegin", el);
div.insertAdjacentElement("beforeend", el);
div.insertAdjacentElement("afterend", el);
