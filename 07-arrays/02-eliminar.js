const letras = ['a','b','c','d', 'e', 'f'];

// El metodo pop() nos permite eliminar el ultimo elemento de un array
// Si se asigana a una variable, el ultimo elemento del array, el que sera eliminado, se asigan a la nueva valiable 
const final = letras.pop();

// El resultado de un console.log de la variable final, sera el elemento eliminado del array letras
// El resultado de un console.log del array letras es el mismo array sin el ultimo elemento
console.log(letras, final);

// El metodo para eliminar el primer elemento de un array es shift()
// Al igual que el metodo pop() si se asigna a una variable, el valor eliminado sera asigando a la nueva variable
const comienzo = letras.shift();

console.log(comienzo, letras);

// El metodo para eliminar un elemento que se encuentra en la mitad o en un lugar especifico del array, es el metodo splice
// Este metodo recibe dos parametros:
// el primero hace referencia a la posicion del elemento, recordadno que un array comienza desde el cero
// el segundo hace referencia a la cantidad de elementos que se desean eliminar
letras.splice(1, 2);
console.log(letras);