const miArray = ["Hola", 12, "Mundo", {}, { id: 15 }, ["lala"]];

function dividePorTipo(arr) {
  return {
    numeros: arr.filter((el) => typeof el === "number"),
    strings: arr.filter((el) => typeof el === "string"),
    objetos: arr.filter((el) => typeof el === "object"),
  };
}

const nuevoArray = dividePorTipo(miArray);
console.log(nuevoArray);
