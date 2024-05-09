const letras = ['a', 'b'];
// SE PUEDEN AGREGAR LA CANTIDAD DE VALORES QUE SEAN NECESARIOS
// Agrega un elemento al final del array
letras.push('c');
// Agrega un elemento al incio el array
letras.unshift('x', 'y', 'z'); 
// Agrega un elemento en un lugar especifico
// se pasa como parametro el lugar donde se desea el nuevo elemento
// el orden de los parametros son: 
// primero, se coloca el indice anterior a donde se quiere el nuevo valor
// segundo, se coloca la cantidad de elementos que se quieren eliminar
// tercero, los datos despues del segundo valor seran agregados al array 
letras.splice(3,0, 1, 2);

console.log(letras);