// Las fat arrow function no tienen:
// ARGUMENTS
// El metodo SUPER
// contexto THIS
const sumaArgumentosArray = (a, b) => {
  // Transformamos un iterable en array para poder usar reduce
  return Array.from(arguments).reduce((acc, el) => acc + el);
};

console.log(sumaArgumentosArray(1, 2, 3, 4, 5, 6));
