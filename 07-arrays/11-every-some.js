let usuarios = [
  { id: 1, activo: false },
  { id: 2, activo: false },
  { id: 3, activo: false },
];

// El método every determina si todos los atributos de un objeto son iguales
// en este caso determinaremos si todos los usuarios estan activos
let estanActivos = usuarios.every((u) => {
  console.log("EVALUANDO USUARIO: ", u.id);
  return u.activo;
});

console.log(estanActivos);

// El metodo some evalua si al menos un atributo de un objeto cumple una condicion

let algunActivo = usuarios.some((u) => u.activo === true);
console.log("Hay algun usuario activo: ", algunActivo);
