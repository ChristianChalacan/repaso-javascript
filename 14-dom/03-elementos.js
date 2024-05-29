let el = document.createElement("p");
// Agrega el valor al parrafo pero tambien nos sirve para añadir elementos HTML
el.innerHTML = "Elemento creado";
// Agrega el valor al parrafo pero no nos permite agregar etiquetas nuevas, solo texto plano
el.innerText = "<ul><li>Hola mundo</li></ul>";
document.body.append(el);
// Asignando propiedades a la etiqueta creada
el.style = "background-color: red; font-weight: bold";
el.className = "parrafo";
el.id = "mi-parrafo";

// Asignando un nuevo atributo para almacenar informacion
el.setAttribute("mipropiedad", "mi propiedad");
// Consultamos la informacion de un atributo
console.log(el.getAttribute("mipropiedad"));
// Consultamos si existe un atributo
console.log(el.hasAttribute("mipropiedad"));

// EJEMPLO CON INNERHTML
let elementDiv = document.createElement("div");

elementDiv.innerHTML = "<ul><li>Hola mundo</li></ul>";

document.body.append(elementDiv);
