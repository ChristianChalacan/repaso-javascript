function sumaTodo(arr) {
  // Realizamos una verificacion de si lo que recibimos para la funcion es un arreglo
  if (!Array.isArray(arr)) {
    // Creamos una excepcion para informar el usuario el error
    throw new Error("No es un array");
  }
  return arr.reduce((acc, el) => {
    // Realizamos una verificacion de cada uno de los datos del array
    if (typeof el !== "number" || Number.isNaN(el)) {
      // Creamos una excepcion para informar al usuario
      throw new Error(`El elemento ${el} no es un numero`);
    }
    return acc + el;
  });
}

console.log(sumaTodo([1, 2, 3, 4, 5]));
// pasando parametros erroneos y controlando la excepcion con try - catch
try {
  console.log(sumaTodo({ prop: 1 }));
} catch (e) {
  console.log(e.message);
}

console.log("Mensaje despues del error de tipo de objeto");

try {
  console.log(sumaTodo([1, 2, NaN, undefined, "Hola"]));
} catch (e) {
  console.log(e.message);
}

console.log("Mensaje despues del error de tipo de dato");
