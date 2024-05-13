const usuarios = [
  { id: 1, name: "Chanchito" },
  { id: 1, name: "Felipe" },
  { id: 2, name: "Feliz" },
];
// encontrar un usuario en un array de objetos
// Para usar el método find se debe tener un atributo único para realizar la búsqueda
const resultado = usuarios.find((usuario) => usuario.id === 1);

// encontrar un usuario en un array de objetos y nos devuelve el índice
const resultadoIndice = usuarios.findIndex((usuario) => usuario.id === 1);

console.log(resultado);
console.log(resultadoIndice);
