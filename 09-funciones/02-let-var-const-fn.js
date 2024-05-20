/* console.log(saludo);
console.log(vieja);
console.log(fu);
console.log(hola);
console.log(chao); */

// Cuando se crea una funcion nombrada (la mas tradicional) se iza al inicio del documento(hoisting)
function saludo() {
  console.log("saludo");
}
// CUando creamos una variable con let o const tambien hay hoisting pero se despliega un error
// si se trata de acceder a ellas antes de q seam inicializadas
let hola = "hola";
const chao = "Chao";
// Cuando se crea una variable con var se inicializa al inicio del documento
// pero nos asigna el valor hasta llegar al lugar donde se encuentra esta variable
var vieja = "ya no debes de usar esto";
const fu = function () {};

console.log(window);
