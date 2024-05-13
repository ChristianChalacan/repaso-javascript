let arr1 = [1, 2];
let arr2 = [3, 4];

let combinados = arr1.concat(arr2);

console.log(arr1, arr2, combinados);

// el primer parámetro es incluido en el nuevo array y el segundo no
let divididos = combinados.slice(1, 3);
// si omitimos el segundo parametro tomara todos los indices despues del primer parametro
let divididos2 = combinados.slice(1);
// Tambien se puede realizar una copia por referencia con el metodo slice
let copia = combinados.slice();
// Copia sin referencia
let copiaSinReferencia = [...combinados];

console.log(divididos, divididos2, copia, copiaSinReferencia);
