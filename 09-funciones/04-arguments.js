function suma(a, b) {
  return a + b;
}

function sumaArgumentosFor(a, b) {
  let total = 0;
  for (let valor of arguments) {
    total += valor;
  }
  return total;
}

function sumaArgumentosArray(a, b) {
  // Transformamos un iterable en array para poder usar reduce
  return Array.from(arguments).reduce((acc, el) => acc + el);
}

console.log("Suma tradicional con numero correcto de argumentos", suma(1, 2));

console.log("Suma tradicional sin un argumento, devuelve un NaN", suma(1));

console.log("suma tradicional con argumentos extra", suma(1, 2, 3, 4));

console.log(
  "Suma usando un for en el iterable arguments",
  sumaArgumentosFor(1, 2, 3, 4)
);

console.log(
  "Suma transformando el iterable en array",
  sumaArgumentosArray(1, 2, 3, 4)
);
