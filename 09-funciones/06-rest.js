// Usamos una varible para identificar los parametros extras que pueda tener una funcion

function suma(a, b, ...rest) {
  console.log(a, b, rest);
}
// Esa representacion de los parametros extras de una funcion tambien sirve con las fat arrow function
const sumaFatArrow = (a, b, ...args) => {
  console.log(args);
};

suma(1, 2, 3, 4, 5);

sumaFatArrow(1, 2, 3, 4, 5, 6, 7, 8, 9);

const logMsg = (desc, ...msgs) => {
  for (let msg of msgs) {
    console.log(desc, msg);
  }
};

logMsg("Servidor", "Error1", "Error2", "Error3", "Error4");

let mensajes = ["Error1", "Error2", "Error3", "Error4"];
// Para pasar un array como parametro y usar cada dato de forma individual
// usamos el spread operator y asi estaremos pasando los elementos del array de forma individual
// Tambien podemos adicionar mas parametros despues de pasarle el array
logMsg("Servidor", ...mensajes, "Otro Error");
