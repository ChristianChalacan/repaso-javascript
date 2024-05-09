console.log(
    Math.PI,
    Math.abs(-15),    
    Math.round(15.5),
    Math.floor(15.9), // El metodo floor de la clase math sirve para redondear el numero hacia el abajo
    Math.ceil(15.00001), // El metodo ceil de la clase Math sirve para redondear el numero hacia arriba
    Math.pow(2, 3), //El metodo pow nos ayuda a potenciar un numero, siendo el primer parametro el numero y el segundo la potencia
    Math.sqrt(9), // El metodo sqrt nos devuelve la raiz cuadrada de un numero
);

console.log(Math.random()); // El metodo random devuelve un numerop random, devuelve un numero entre 0 y 1

function getRandom( min, max ) {
    return Math.random() * (max - min) + 1;
}
console.log(getRandom(1,10));