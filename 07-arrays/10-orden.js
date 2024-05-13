let numeros = [1, 15, 10, -3];
console.log(numeros);
// Metodo sort ordena los numeros de menor a mayor
numeros.sort();
console.log(numeros);

//Metodo reverse nos permite ordenar los numeros de mayor a menor
numeros.reverse();
console.log(numeros);

let letras = ["z", "a", "d"];
console.log(letras);
letras.sort();
console.log(letras);

let conMayusculas = ["Z", "d", "a"];
console.log(conMayusculas);
conMayusculas.sort((a, b) => {
  // si a es menor que b: retorna -1
  // si a es mayor que b: retorna 1
  // si son iguales:      retorna 0
  let aLower = a.toLowerCase();
  let bLower = b.toLowerCase();
  if (aLower < bLower) return -1;
  if (aLower > bLower) return 1;
  return 0;
});
console.log(conMayusculas);

let usuarios = [
  { edad: 15, nombre: "Felipe" },
  { edad: 25, nombre: "Nicolas" },
  { edad: 13, nombre: "Poli" },
];

usuarios.sort((a, b) => {
  if (a.edad < b.edad) return -1;
  if (a.edad > b.edad) return 1;
  return 0;
});

console.log(usuarios);
