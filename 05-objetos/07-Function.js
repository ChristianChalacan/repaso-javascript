// RESUMEN: En esta clase vemos como podemos expandir objetos con los metodos CALL y APPLY  
function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function() { console.log('Dibujando.....'); }
}
// Creacion de una funcion con el constructor de Function
const Point = new Function('x', 'y', `
this.x = x;
this.y = y;
this.dibujar = function() { console.log('Dibujando.....'); }
`); 
// Los argumentos que recibe el metodo call son: el contexto de this, el parametro x, y el parametro y
// si lo asignamos a una variable nos retornara undefined
Punto.call({}, 1, 2);
// Generamos un nuevo objeto que remplazara el contexto de this en el metodo call
let punto = { z: 7 };
let punto1 = { z: 10 };
// Pasamos el nuevo objeto como contexto de this
Punto.call(punto, 1 , 2);
Punto.apply(punto1, [3, 4]);
// Podemos comprobar que se adiciono el parametro X, Y y la funcion dibujar en el objeto punto 
console.log(punto);
console.log(punto1);