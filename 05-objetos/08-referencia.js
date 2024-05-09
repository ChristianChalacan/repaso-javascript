// Para los datos primitivos se genera una copia donde no se afecta al valor original de la variable
// por eso el valor de n no cambia despues de pasar por la funcion sumaPrimitivo
let n = 1;

function sumaPrimitivo(n) {
    n++;
}

sumaPrimitivo(n);
console.log(n);

// Para los datos de referencia (objetos, arrays, funciones), se genera una referencia del objeto y se cambia el valor del mismo
// si se pasa por una funcion, por eso cambia el valor de prop
let a = { prop: 1 };

function suma(n) {
    n.prop++;
}

suma(a);
console.log(a);