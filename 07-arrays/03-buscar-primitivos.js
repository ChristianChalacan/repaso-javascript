const letras = ['a','b','c', 1,'d', 'e', 'f', 1];

// *****PARA METODOS indexOf y lastIndexOf*****
// Se puede pasar un segundo parametro que es el indice desde donde se empezara a buscar  

// El metodo indexOf nos permite buscar un dato primitivo dentro de un array y nos devuelve la posicion en la que se enceuntra el elemento
// Si no encuentra el elemento nos devuelve un numero negativo
console.log(letras.indexOf('h'));
// Si existen elementos duplicados el metodo indexOf nos devolvera el primer elemento que encuentre
console.log(letras.indexOf(1));
// Si se quiere leer el array al reves (empezando desde el ultimo elemento y terminando en el primero)
// podemos usar el metodo lastIndexOf()
console.log(letras.lastIndexOf(1));
// Si solo se quiere saber si existe el elemento, sin buscar la posicion podemos usar el metodo includes()
console.log(letras.includes(1));