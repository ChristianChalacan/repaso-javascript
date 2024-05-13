let arr1 = ["Nicolas", "Chanchito", "Felipe"];

// Une todo el contenido del array en una cadena y lo separa con el parametro de join
let mensaje = arr1.join(", ");

console.log(typeof mensaje);
console.log(mensaje);

let saludo = "Hola Mundo";
// El metodo split divide una cadena segun el parametro enviado y retorna un array
let dividido = saludo.split(" ");
let remplazo = saludo.replace(" ", "-");

console.log(typeof dividido);
console.log(dividido);

console.log(typeof remplazo);
console.log(remplazo);
