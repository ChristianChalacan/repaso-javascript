// La principal diferencia es que el metodo getElementsByTagName devuelve los elementos actualizados
// sin importar donde se llame o inicialice una variable con este metodo
// mientras que querySelectorAll que retorna un NodeList nos da solo las etiquetas o registros sin actualizar
// no usar en el caso de generar elementos dinamicos

let collection = document.getElementsByTagName("p");

let list = document.querySelectorAll("p");
// Buscamos por el nombre en el HTMLCollection
let item1 = collection.namedItem("p4");
// Buscamos por el indice en elHTMLCollection y empieza desde el indice 0
let itemIndice1 = collection.item(1);
// Esta forma de buscar es equivalente a buscar con el metodo item
let itemIndiceS1 = collection[1];

console.log(item1);
console.log(itemIndice1);
console.log(itemIndiceS1);

console.log(collection);
console.log(list);

for (let el of collection) {
  console.log(el);
}

Array.from(collection).forEach((x) => console.log("Array", x));

[...collection].forEach((x) => console.log("ArraySpread", x));

// Formas de obtener informacion de un NodeList
// No se puede acceder por sus elementos nombrados
let itemList1 = list.item(3);
let itemList2 = list[3];

list.forEach((x) => console.log("NodeList", x));
[...list].forEach((x) => console.log("NodeList Array", x));
