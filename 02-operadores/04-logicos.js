let mayor = true;
let suscrito = true;

//AND -> &&
console.log(true && true);
console.log(false && true);

console.log('Operador AND', mayor && suscrito)

// OR -> ||

console.log('Operador OR (true, false)', true || false);
console.log('Operador OR (false, true)', false || true);
console.log('Operador OR (false, false)', false || false);

console.log('Operador OR Streaming', mayor || suscrito);

// NOT -> !
console.log('Operador NOT', !mayor)

let catalogoInfantil = !mayor;
console.log('Tiene acceso al catalogo infantil', !mayor)