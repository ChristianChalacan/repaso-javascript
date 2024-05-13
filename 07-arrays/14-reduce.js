const numeros = [1, 2, 3, 4];
// El metodo reduce acumula un valor de cada elemento de un objeto
// El metodo reduce recibe dos parametros:
//      1. Una funcion que se encarga de la logica y acumulacion
//      2. El valor inicial del acumulador
const suma = numeros.reduce((acc, elemento) => acc + elemento, 0);

console.log(suma);

const anidado = [[1, 2], 3, [4, 5]];
// Usamos reduce para unir elementos de que esten dentro de arrays mas internos
const plano = anidado.reduce((acc, el) => acc.concat(el), []);

console.log(plano);

let usuarios = [
  { edad: 17, nombre: "Nico" },
  { edad: 13, nombre: "Chanchito" },
  { edad: 25, nombre: "Felipe" },
  { edad: 32, nombre: "Fernanda" },
];
// Usamos reduce para colocar un nombre a cada objeto y asi que sea mas fácil buscarlo
// USAR ESTE METODO CON GRANDES VOLÚMENES DE DATOS
const indexado = usuarios.reduce(
  (acc, el) => ({ ...acc, [el.nombre]: el }),
  {}
);

const buscando = "Nico";
console.log(indexado);

console.log(indexado[buscando]);
